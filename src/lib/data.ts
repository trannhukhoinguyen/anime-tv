import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Electronic Party",
    color: colors.teal,
    cover: "/images/pham_nhan_tu_tien.jpg",
    artists: ["Vong Ngữ"],
  },
  {
    id: "2",
    title: "Trance",
    color: colors.green,
    cover: "/images/pham_nhan_tu_tien.jpg",
    artists: ["Vong Ngữ"],
  },
  {
    id: "3",
    title: "Trap Vibes",
    color: colors.rose,
    cover: "/images/pham_nhan_tu_tien.jpg",
    artists: ["Vong Ngữ"],
  },
  {
    id: "4",
    title: "Beatles Classics",
    color: colors.red,
    cover: "/images/pham_nhan_tu_tien.jpg",
    artists: ["Vong Ngữ"],
  },
  {
    id: "5",
    title: "Electronic Dance",
    color: colors.pink,
    cover: "/images/pham_nhan_tu_tien.jpg",
    artists: ["Vong Ngữ"],
  },
  {
    id: "6",
    title: "Cow songs",
    color: colors.gray,
    cover: "/images/pham_nhan_tu_tien.jpg",
    artists: ["Vong Ngữ"],
  },
];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

interface Song {
  id: string;
  title: string;
  image: string;
  artists: string[];
  channel: string;
  duration: string;
  link: string;
  videoId: string;
}
const songScale = "w_40,h_40,c_scale";
export const songs: Song[] = [
  {
    id: "1",
    title: "The Nights",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["Avicii"],
    channel: "The Days / Nights",
    duration: "2:56",
    link: "/",
    videoId: "1",
  },
  {
    id: "2",
    title: "Saint-Tropez",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["Post Malone"],
    channel: "Hollywood's Bleeding",
    duration: "2:23",
    link: "/",
    videoId: "1",
  },
  {
    id: "3",
    title: "SICKO MODE",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["Travis Scott", "Drake"],
    channel: "ASTROWORLD",
    duration: "5:13",
    link: "/",
    videoId: "1",
  },
  {
    id: "4",
    title: "Blinding Lights",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["The Weeknd"],
    channel: "After Hours",
    duration: "3:22",
    link: "/",
    videoId: "1",
  },
  {
    id: "5",
    title: "Shape of You",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["Ed Sheeran"],
    channel: "÷ (Divide)",
    duration: "3:53",
    link: "/",
    videoId: "1",
  },
  {
    id: "6",
    title: "Uptown Funk",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["Mark Ronson", "Bruno Mars"],
    channel: "Uptown Special",
    duration: "4:30",
    link: "/",
    videoId: "1",
  },
  {
    id: "7",
    title: "Bad Guy",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["Billie Eilish"],
    channel: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
    link: "/",
    videoId: "1",
  },
  {
    id: "8",
    title: "Yesterday",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["The Beatles"],
    channel: "Today & Tomorrow",
    duration: "4:38",
    link: "/",
    videoId: "1",
  },
  {
    id: "9",
    title: "Havana",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["Camila Cabello", "Young Thug"],
    channel: "Camila",
    duration: "3:37",
    link: "/",
    videoId: "1",
  },
  {
    id: "10",
    title: "Radioactive",
    image: `/images/pham_nhan_tu_tien.jpg`,
    artists: ["Imagine Dragons"],
    channel: "Night Visions",
    duration: "3:07",
    link: "/",
    videoId: "1",
  },
];
