export interface EventItem {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "Next.js Conf 2026",
    image: "/images/event1.png",
    slug: "nextjs-conf-2026",
    location: "San Francisco, CA, USA",
    date: "October 22, 2026",
    time: "09:00 AM - 05:00 PM PDT",
  },
  {
    title: "React Summit 2026",
    image: "/images/event2.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "November 14, 2026",
    time: "10:00 AM - 06:30 PM CEST",
  },
  {
    title: "Global AI Hackathon 2026",
    image: "/images/event3.png",
    slug: "global-ai-hackathon-2026",
    location: "Online / Virtual",
    date: "September 18 - 20, 2026",
    time: "09:00 AM UTC",
  },
  {
    title: "Google I/O Connect 2026",
    image: "/images/event4.png",
    slug: "google-io-connect-2026",
    location: "Berlin, Germany",
    date: "September 29, 2026",
    time: "09:30 AM - 05:30 PM CEST",
  },
  {
    title: "AWS Community Day Bay Area 2026",
    image: "/images/event5.png",
    slug: "aws-community-day-bay-area-2026",
    location: "Santa Clara, CA, USA",
    date: "October 16, 2026",
    time: "08:00 AM - 04:30 PM PDT",
  },
  {
    title: "ETHGlobal San Francisco Hackathon 2026",
    image: "/images/event6.png",
    slug: "ethglobal-sf-2026",
    location: "San Francisco, CA, USA",
    date: "November 13 - 15, 2026",
    time: "11:00 AM PST",
  },
];
