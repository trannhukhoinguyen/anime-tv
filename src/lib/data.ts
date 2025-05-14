import { colors } from "./colors";
import PNTT from "./pntt_full.ts";

interface Episode {
  id: number;
  title: string;
  image?: `/images/pham_nhan_tu_tien_avatar.jpg`,
  author?: "Vong Ngữ";
  channel?: "https://yanhh3d.vip/pham-nhan-tu-tien";
  duration?: "20:00";
  path: string;
  link: string;
  other_link?: string;
  videoId?: string;
  color?: (typeof colors)[keyof typeof colors];
}
export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
  episodes?: Episode[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Phàm Nhân Tu Tiên",
    color: colors.teal,
    cover: "/images/pham_nhan_tu_tien_duyen_khoi.jpg",
    artists: ["Vong Ngữ"],
  },
 /* {
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
  },*/
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


// const songScale = "w_40,h_40,c_scale";
export const Episodes: Episode[] = PNTT;
