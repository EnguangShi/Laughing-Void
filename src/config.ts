import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://laughing-void.vercel.app/", // replace this with your deployed domain
  author: "Eng",
  profile: "https://google.com/",
  desc: "A place where I write",
  title: "LaughingVoid 嘻虚",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
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
    href: "https://github.com",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "https://gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://twitch.com",
    linkTitle: `${SITE.title} on Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: true,
  },
  {
    name: "Snapchat",
    href: "https://snapchat.com",
    linkTitle: `${SITE.title} on Snapchat`,
    active: true,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    linkTitle: `${SITE.title} on Pinterest`,
    active: true,
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
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com",
    linkTitle: `${SITE.title} on GitLab`,
    active: true,
  },
  {
    name: "Reddit",
    href: "https://reddit.com",
    linkTitle: `${SITE.title} on Reddit`,
    active: true,
  },
  {
    name: "Skype",
    href: "https://skype.com",
    linkTitle: `${SITE.title} on Skype`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://steam.com",
    linkTitle: `${SITE.title} on Steam`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://telegram.com",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.com",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
