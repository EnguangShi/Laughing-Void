import type { Site, SocialObjects } from "./types";
import type { GiscusProps } from "@giscus/react";

export const SITE: Site = {
  website: "https://laughing-void.vercel.app/", // replace this with your deployed domain
  author: "Eng",
  profile: "https://google.com/",
  desc: "A place where I write",
  title: "LaughingVoid 嘻虚",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/EnguangShi/astro-paper/tree/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-US"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/EnguangShi",
    linkTitle: ` ${SITE.author} on Github`,
    active: false,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://www.youtube.com/watch?v=wKyMIrBClYw",
    linkTitle: `Instagram on Youtube`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.youtube.com/watch?app=desktop&v=mQZFUIO3lII",
    linkTitle: `LinkedIn Park`,
    active: true,
  },
  {
    name: "Mail",
    href: "https://www.google.com/search?q=mailing+service+near+me",
    linkTitle: `Send a mail to me`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://twitch.com",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/watch?v=v2d65gzDi2Q",
    linkTitle: `A Video on Youtube`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://www.youtube.com/watch?v=CU5TdtDcWSM",
    linkTitle: `WhatsAAAAAAAAAAAAAAAAAp`,
    active: true,
  },
  {
    name: "Snapchat",
    href: "https://snapchat.com",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://codepen.com",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.com",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://reddit.com",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://skype.com",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://steam.com",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://telegram.com",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.com",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

export const GISCUS: GiscusProps = {
  repo: "EnguangShi/Laughing-Void",
  repoId: "R_kgDONCFOBQ",
  category: "Announcements",
  categoryId: "DIC_kwDONCFOBc4Cjiha",
  mapping: "pathname",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "en",
  loading: "lazy",
};
