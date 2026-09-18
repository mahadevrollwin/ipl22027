import { article } from "./article";
import { award } from "./award";
import { blockContent } from "./blockContent";
import { faq } from "./faq";
import { match } from "./match";
import { page } from "./page";
import { siteSettings } from "./siteSettings";
import { stat } from "./stat";
import { team } from "./team";
import { video } from "./video";
import { winner } from "./winner";

export const schemaTypes = [
  blockContent,
  siteSettings,
  page,
  article,
  video,
  team,
  match,
  faq,
  stat,
  award,
  winner,
];
