type Link = {
  text: string;
  url: string;
};

type Project = {
  name: string;
  url: string;
};

export const userLinks: Link[] = [
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
    url: "https://instagram.com/byandrev",
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