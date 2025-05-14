import { colors } from "./colors";
import {
    PNTT,
    PNTTCombo3,
    PNTTCombo5,
    PNTTSII,
} from "./pntt_full.ts";

// const songScale = "w_40,h_40,c_scale";
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

export const PNTTEpisodesC1: Episode[] = PNTT;
export const PNTTEpisodesC3: Episode[] = PNTTCombo3;
export const PNTTEpisodesC5: Episode[] = PNTTCombo5;
export const PNTTEpisodesSII: Episode[] = PNTTSII;

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover?: string;
  author?: "Vong Ngữ";
  episodes?: Episode[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Phàm Nhân Tu Tiên",
    color: colors.teal,
    cover: "/images/pham_nhan_tu_tien_duyen_khoi.jpg",
    episodes: PNTTEpisodesC1,
  },
 {
    id: "2",
    title: "Phàm Nhân Tu Tiên (combo 3)",
    color: colors.green,
    cover: "/images/pham_nhan_tu_tien_cover.jpg",
    episodes: PNTTEpisodesC3,
  },
{
    id: "3",
    title: "Phàm Nhân Tu Tiên (combo 5)",
    color: colors.rose,
    cover: "/images/mortals-journey-to-immortality-season-3.png",
    episodes: PNTTEpisodesC5,
  },
  {
   id: "4",
   title: "Phàm Nhân Tu Tiên II",
   color: colors.red,
   cover: "/images/pham_nhan_tu_tien.jpg",
   episodes: PNTTEpisodesSII,
 },
    /* {
      id: "5",
      title: "Electronic Dance",
      color: colors.pink,
      cover: "/images/pham_nhan_tu_tien_duyen_khoi.jpg",
      episodes: PNTTEpisodes,
    },
    {
      id: "6",
      title: "Cow songs",
      color: colors.gray,
      cover: "/images/pham_nhan_tu_tien_duyen_khoi.jpg",
      episodes: PNTTEpisodes,
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


