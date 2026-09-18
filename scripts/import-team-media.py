"""Download IPL team assets from ipl2026.live and emit enriched team JSON for the app."""
from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path

ROOT = Path(r"c:\Users\User\Downloads\ipl2027-main\ipl2027-main")
REF = Path(r"C:\Users\User\AppData\Local\Temp\ipl2026-ref")
OUT_LOGOS = ROOT / "public" / "teams" / "logos"
OUT_BANNERS = ROOT / "public" / "teams" / "banners"
OUT_PLAYERS = ROOT / "public" / "teams" / "players"
OUT_JSON = ROOT / "src" / "lib" / "teamMedia.json"

SLUG_TO_ID = {
    "chennai-super-kings": "csk",
    "delhi-capitals": "dc",
    "gujrat-titans": "gt",
    "kolkata-knight-riders": "kkr",
    "lucknow-super-giants": "lsg",
    "mumbai-indians": "mi",
    "punjab-kings": "pbks",
    "rajasthan-royals": "rr",
    "royal-challengers-bengaluru": "rcb",
    "sunrisers-hyderabad": "srh",
}

ID_TO_SHORT = {
    "csk": "CSK",
    "dc": "DC",
    "gt": "GT",
    "kkr": "KKR",
    "lsg": "LSG",
    "mi": "MI",
    "pbks": "PBKS",
    "rr": "RR",
    "rcb": "RCB",
    "srh": "SRH",
}


def slugify(name: str) -> str:
    s = name.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-") or "player"


def download(url: str, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 0:
        return True
    clean = url.replace("https://ipl2026.live//", "https://ipl2026.live/")
    try:
        req = urllib.request.Request(clean, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            dest.write_bytes(resp.read())
        print("OK", dest.relative_to(ROOT), dest.stat().st_size)
        return True
    except Exception as exc:  # noqa: BLE001
        print("FAIL", clean, exc)
        return False


def main() -> None:
    teams = json.loads((REF / "teams.json").read_text(encoding="utf-8"))
    details = json.loads((REF / "teams-details.json").read_text(encoding="utf-8"))
    details_by_slug = {d["slug"]: d for d in details}

    enriched: dict[str, dict] = {}

    for team in teams:
        slug = team["slug"]
        tid = SLUG_TO_ID[slug]
        short = ID_TO_SHORT[tid]
        detail = details_by_slug[slug]

        logo_remote = f"https://ipl2026.live/images/{short}.png"
        banner_remote = team["logo_url"].replace("https://ipl2026.live//", "https://ipl2026.live/")
        logo_path = OUT_LOGOS / f"{tid}.png"
        banner_path = OUT_BANNERS / f"{tid}.jpg"
        download(logo_remote, logo_path)
        # banners may be .jpg with spaces
        ext = ".jpg"
        if banner_remote.lower().endswith(".png"):
            banner_path = OUT_BANNERS / f"{tid}.png"
            ext = ".png"
        download(banner_remote, banner_path)

        players_out = []
        for player in detail.get("players", []):
            name = player.get("name") or "Player"
            ptype = player.get("type") or "Player"
            image_url = (player.get("image") or "").replace("https://ipl2026.live//", "https://ipl2026.live/")
            fname = slugify(name)
            # preserve extension
            suffix = Path(image_url.split("?")[0]).suffix or ".avif"
            local = OUT_PLAYERS / tid / f"{fname}{suffix}"
            ok = download(image_url, local) if image_url else False
            players_out.append(
                {
                    "name": name,
                    "role": ptype,
                    "image": f"/teams/players/{tid}/{fname}{suffix}" if ok else "",
                }
            )

        trophy = team.get("trophy_years")
        if trophy in (None, "None", ""):
            trophy_years: list[str] = []
        else:
            trophy_years = [y.strip() for y in str(trophy).split("|") if y.strip()]

        # Align RCB with this site's 2026 champion narrative
        if tid == "rcb" and "2026" not in trophy_years:
            trophy_years = [*trophy_years, "2026"]

        descriptions = detail.get("description") or []
        if isinstance(descriptions, str):
            descriptions = [descriptions]

        enriched[tid] = {
            "logo": f"/teams/logos/{tid}.png",
            "banner": f"/teams/banners/{tid}{ext}",
            "trophyYears": trophy_years,
            "about": descriptions,
            "summary": team.get("description1") or (descriptions[0] if descriptions else ""),
            "players": players_out,
        }

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(enriched, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print("Wrote", OUT_JSON, "teams", len(enriched))


if __name__ == "__main__":
    main()
