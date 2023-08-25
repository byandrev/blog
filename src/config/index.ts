type Link = {
  text: string;
  url: string;
};

type Project = {
  name: string;
  url: string;
};

export const USER_LINKS: Link[] = [
  {
    text: "Github",
    url: "https://github.com/byandrev",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/byandrev",
  },
  {
    text: "Instagram",
    url: "https://instagram.com/andresparra_gar",
  },
  {
    text: "Linkedin",
    url: "https://www.linkedin.com/in/byandrev/",
  },
  {
    text: "Ko-fi",
    url: "https://ko-fi.com/byandrev",
  },
  {
    text: "last.fm",
    url: "https://www.last.fm/user/byandrev",
  },
];

export const USER_PROJECTS: Project[] = [
  {
    name: "RPCIDE",
    url: "https://rpcide.cloud",
  },
  {
    name: "TomatoZen",
    url: "https://tomatozen.vercel.app/",
  },
  {
    name: "MemesGenerator",
    url: "https://memesgeneratorapp.vercel.app/",
  },
];