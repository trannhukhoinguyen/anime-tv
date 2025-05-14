import { colors } from "./colors";

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
  color?: { accent: "#ffae00", dark: "#78350f" };
}

// 1 episode
let PNTT: Episode[] = [{
  id: 0,
  title: "",
  path: "",
  link: "",
  other_link: "",
  videoId: "",
}];
for (let i = 1; i <= 143; i++) {
  PNTT.push({
    id: i,
    title: `PNTT ep. ${i}`,
    image: `/images/pham_nhan_tu_tien_duyen_khoi.jpg`,
    path: `pham-nhan-tu-tien`,
    link: `https://yanhh3d.vip/pham-nhan-tu-tien/tap-${i}`,
    videoId: "",
  })
}
PNTT.shift();
PNTT.map(ep => {
  switch(ep.id) {
    case 1:
      ep.videoId = 'x7vgpfu';
      break;
    case 2:
      ep.videoId = 'x7vgptq';
      break;
    case 3:
      ep.videoId = 'x7vgq8j';
      break;
    case 4:
      ep.videoId = 'x7vgqa7';
      break;
    case 5:
      ep.videoId = 'x7vc7s5';
      break;
    case 6:
      ep.videoId = 'x7vgrjq';
      break;
    case 7:
      ep.videoId = 'x7vllb0';
      break;
    case 8:
      ep.videoId = 'x7vrtmy';
      break;
    case 9:
      ep.videoId = 'x7wu7b4';
      break;
    case 10:
      ep.videoId = 'x7wu7b5';
      break;
    case 11:
      ep.videoId = '';
      break;
    case 12:
      ep.videoId = '';
      break;
    case 13:
      ep.videoId = 'x7x6gwh';
      break;
    case 14:
      ep.videoId = '';
      break;
    case 15:
      ep.videoId = '';
      break;
    case 16:
      ep.videoId = '';
      break;
    case 17:
      ep.videoId = '';
      break;
    case 18:
      ep.videoId = '';
      break;
    case 19:
      ep.videoId = '';
      break;
    case 20:
      ep.videoId = '';
      break;
    case 21:
      ep.videoId = '';
      break;
    case 22:
      ep.videoId = '';
      break;
    case 23:
      ep.videoId = '';
      break;
    case 24:
      ep.videoId = '';
      break;
    case 25:
      ep.videoId = '';
      break;
    case 26:
      ep.videoId = '';
      break;
    case 27:
      ep.videoId = '';
      break;
    case 28:
      ep.videoId = '';
      break;
    case 29:
      ep.videoId = '';
      break;
    case 30:
      ep.videoId = '';
      break;
    case 31:
      ep.videoId = '';
      break;
    case 32:
      ep.videoId = '';
      break;
    case 33:
      ep.videoId = '';
      break;
    case 34:
      ep.videoId = '';
      break;
    case 35:
      ep.videoId = '';
      break;
    case 36:
      ep.videoId = '';
      break;
    case 37:
      ep.videoId = '';
      break;
    case 38:
      ep.videoId = '';
      break;
    case 39:
      ep.videoId = '';
      break;
    case 40:
      ep.videoId = '';
      break;
    case 41:
      ep.videoId = '';
      break;
    case 42:
      ep.videoId = '';
      break;
    case 43:
      ep.videoId = '';
      break;
    case 44:
      ep.videoId = '';
      break;
    case 45:
      ep.videoId = '';
      break;
    case 46:
      ep.videoId = '';
      break;
    case 47:
      ep.videoId = '';
      break;
    case 48:
      ep.videoId = '';
      break;
    case 49:
      ep.videoId = '';
      break;
    case 50:
      ep.videoId = '';
      break;
    case 51:
      ep.videoId = '';
      break;
    case 52:
      ep.videoId = '';
      break;
    case 53:
      ep.videoId = '';
      break;
    case 54:
      ep.videoId = '';
      break;
    case 55:
      ep.videoId = '';
      break;
    case 56:
      ep.videoId = '';
      break;
    case 57:
      ep.videoId = '';
      break;
    case 58:
      ep.videoId = '';
      break;
    case 59:
      ep.videoId = '';
      break;
    case 60:
      ep.videoId = '';
      break;
    case 61:
      ep.videoId = '';
      break;
    case 62:
      ep.videoId = '';
      break;
    case 63:
      ep.videoId = '';
      break;
    case 64:
      ep.videoId = '';
      break;
    case 65:
      ep.videoId = '';
      break;
    case 66:
      ep.videoId = '';
      break;
    case 67:
      ep.videoId = '';
      break;
    case 68:
      ep.videoId = '';
      break;
    case 69:
      ep.videoId = '';
      break;
    case 70:
      ep.videoId = '';
      break;
    case 71:
      ep.videoId = '';
      break;
    case 72:
      ep.videoId = '';
      break;
    case 73:
      ep.videoId = '';
      break;
    case 74:
      ep.videoId = '';
      break;
    case 75:
      ep.videoId = '';
      break;
    case 76:
      ep.videoId = '';
      break;
    case 77:
      ep.videoId = '';
      break;
    case 78:
      ep.videoId = '';
      break;
    case 79:
      ep.videoId = '';
      break;
    case 80:
      ep.videoId = '';
      break;
    case 81:
      ep.videoId = '';
      break;
    case 82:
      ep.videoId = '';
      break;
    case 83:
      ep.videoId = '';
      break;
    case 84:
      ep.videoId = '';
      break;
    case 85:
      ep.videoId = '';
      break;
    case 86:
      ep.videoId = '';
      break;
    case 87:
      ep.videoId = '';
      break;
    case 88:
      ep.videoId = '';
      break;
    case 89:
      ep.videoId = '';
      break;
    case 90:
      ep.videoId = '';
      break;
    case 91:
      ep.videoId = '';
      break;
    case 92:
      ep.videoId = '';
      break;
    case 93:
      ep.videoId = '';
      break;
    case 94:
      ep.videoId = '';
      break;
    case 95:
      ep.videoId = '';
      break;
    case 96:
      ep.videoId = '';
      break;
    case 97:
      ep.videoId = '';
      break;
    case 98:
      ep.videoId = '';
      break;
    case 99:
      ep.videoId = '';
      break;
    case 100:
      ep.videoId = '';
      break;
    case 101:
      ep.videoId = '';
      break;
    case 102:
      ep.videoId = '';
      break;
    case 103:
      ep.videoId = '';
      break;
    case 104:
      ep.videoId = '';
      break;
    case 105:
      ep.videoId = '';
      break;
    case 106:
      ep.videoId = '';
      break;
    case 107:
      ep.videoId = '';
      break;
    case 108:
      ep.videoId = '';
      break;
    case 109:
      ep.videoId = '';
      break;
    case 110:
      ep.videoId = '';
      break;
    case 111:
      ep.videoId = '';
      break;
    case 112:
      ep.videoId = '';
      break;
    case 113:
      ep.videoId = '';
      break;
    case 114:
      ep.videoId = '';
      break;
    case 115:
      ep.videoId = '';
      break;
    case 116:
      ep.videoId = '';
      break;
    case 117:
      ep.videoId = '';
      break;
    case 118:
      ep.videoId = '';
      break;
    case 119:
      ep.videoId = '';
      break;
    case 120:
      ep.videoId = '';
      break;
    case 121:
      ep.videoId = '';
      break;
    case 122:
      ep.videoId = '';
      break;
    case 123:
      ep.videoId = '';
      break;
    case 124:
      ep.videoId = '';
      break;
    case 125:
      ep.videoId = '';
      break;
    case 126:
      ep.videoId = 'x9dck9i';
      break;
    case 127:
      ep.videoId = 'x9czvpa';
      break;
    case 128:
      ep.videoId = '';
      break;
    case 129:
      ep.videoId = 'x9dqu2s';
      break;
    case 130:
      ep.videoId = 'x9eedea';
      break;
    case 131:
      ep.videoId = '';
      break;
    case 132:
      ep.videoId = '';
      break;
    case 133:
      ep.videoId = '';
      break;
    case 134:
      ep.videoId = 'x9g4oou';
      break;
    case 135:
      ep.videoId = 'x9gkg10';
      break;
    case 136:
      ep.videoId = '';
      break;
    case 137:
      ep.videoId = 'x9he6ka';
      break;
    case 138:
      ep.videoId = 'x9hrst2';
      break;
    case 139:
      ep.videoId = 'x9hs7ca';
      break;
    case 140:
      ep.videoId = 'x9ia04m';
      break;
    case 141:
      ep.videoId = 'x9iwwt4';
      break;
    case 142:
      ep.videoId = '';
      break;
    case 143:
      ep.videoId = '';
      break;
    default:
      return;
  }
});

// Combo 3 episode
let PNTTCombo3: Episode[] = [{
  id: 0,
  title: "",
  path: "",
  link: "",
  other_link: "",
  videoId: "",
}];
for (let i = 1; i <= 48; i++) {
  PNTTCombo3.push({
    id: i,
    title: `PNTT combo ${i*3-2}-->${i*3}`,
    image: `/images/pham_nhan_tu_tien_cover.jpg`,
    path: `pham-nhan-tu-tien-combo-3`,
    link: `https://www.dailymotion.com/pham-nhan-tu-tien-combo-3/combo-${i*5-2}-${i*3}`,
    videoId: "",
  })
}
PNTTCombo3.shift();
PNTTCombo3.map(ep => {
  switch(ep.id) {
    case 1:
      ep.videoId = 'x8pyrk2';
      break;
    case 2:
      ep.videoId = 'x8pzoxq';
      break;
    case 3:
      ep.videoId = 'x8pzp6a';
      break;
    case 4:
      ep.videoId = 'x8q246h';
      break;
    case 5:
      ep.videoId = 'x8q24t8';
      break;
    case 6:
      ep.videoId = 'x8q26ap';
      break;
    case 7:
      ep.videoId = 'x8q7mkl';
      break;
    case 8:
      ep.videoId = 'x8q7p03';
      break;
    case 9:
      ep.videoId = '';
      break;
    case 10:
      ep.videoId = 'x8qfrja';
      break;
    case 11:
      ep.videoId = '';
      break;
    case 12:
      ep.videoId = 'x8qftsv';
      break;
    case 13:
      ep.videoId = 'x8qi52g';
      break;
    case 14:
      ep.videoId = 'x8qi60v';
      break;
    case 15:
      ep.videoId = 'x8qi6ps';
      break;
    case 16:
      ep.videoId = '';
      break;
    case 17:
      ep.videoId = 'x8qjmao';
      break;
    case 18:
      ep.videoId = '';
      break;
    case 19:
      ep.videoId = '';
      break;
    case 20:
      ep.videoId = '';
      break;
    case 21:
      ep.videoId = '';
      break;
    case 22:
      ep.videoId = '';
      break;
    case 23:
      ep.videoId = '';
      break;
    case 24:
      ep.videoId = '';
      break;
    case 25:
      ep.videoId = '';
      break;
    case 26:
      ep.videoId = '';
      break;
    case 27:
      ep.videoId = '';
      break;
    case 28:
      ep.videoId = '';
      break;
    case 29:
      ep.videoId = '';
      break;
    case 30:
      ep.videoId = '';
      break;
    case 31:
      ep.videoId = '';
      break;
    case 32:
      ep.videoId = '';
      break;
    case 33:
      ep.videoId = '';
      break;
    case 34:
      ep.videoId = '';
      break;
    case 35:
      ep.videoId = '';
      break;
    case 36:
      ep.videoId = '';
      break;
    case 37:
      ep.videoId = '';
      break;
    case 38:
      ep.videoId = '';
      break;
    case 39:
      ep.videoId = '';
      break;
    case 40:
      ep.videoId = '';
      break;
    case 41:
      ep.videoId = '';
      break;
    case 42:
      ep.videoId = '';
      break;
    case 43:
      ep.videoId = '';
      break;
    case 44:
      ep.videoId = '';
      break;
    case 45:
      ep.videoId = '';
      break;
    case 46:
      ep.videoId = '';
      break;
    case 47:
      ep.videoId = '';
      break;
    case 48:
      ep.videoId = '';
      break;

    default:
      return;
  }
});

// Combo 5 episode
let PNTTCombo5: Episode[] = [{
  id: 0,
  title: "",
  path: "",
  link: "",
  other_link: "",
  videoId: "",
}];
for (let i = 1; i <= 29; i++) {
  PNTTCombo5.push({
    id: i,
    title: `PNTT combo ${i*3-4}-->${i*5}`,
    image: `/images/mortals-journey-to-immortality-season-3.png`,
    path: `pham-nhan-tu-tien-combo-3`,
    link: `https://www.dailymotion.com/pham-nhan-tu-tien-combo-5/combo-${i*5-4}-${i*5}`,
    videoId: "",
  })
}
PNTTCombo5.shift();
PNTTCombo5.map(ep => {
  switch(ep.id) {
    case 1:
      ep.videoId = 'x9botrk';
      break;
    case 2:
      ep.videoId = '';
      break;
    case 3:
      ep.videoId = '';
      break;
    case 4:
      ep.videoId = '';
      break;
    case 5:
      ep.videoId = '';
      break;
    case 6:
      ep.videoId = '';
      break;
    case 7:
      ep.videoId = '';
      break;
    case 8:
      ep.videoId = '';
      break;
    case 9:
      ep.videoId = '';
      break;
    case 10:
      ep.videoId = '';
      break;
    case 11:
      ep.videoId = 'x8qcg56';
      break;
    case 12:
      ep.videoId = '';
      break;
    case 13:
      ep.videoId = '';
      break;
    case 14:
      ep.videoId = '';
      break;
    case 15:
      ep.videoId = '';
      break;
    case 16:
      ep.videoId = '';
      break;
    case 17:
      ep.videoId = '';
      break;
    case 18:
      ep.videoId = '';
      break;
    case 19:
      ep.videoId = '';
      break;
    case 20:
      ep.videoId = '';
      break;
    case 21:
      ep.videoId = '';
      break;
    case 22:
      ep.videoId = '';
      break;
    case 23:
      ep.videoId = '';
      break;
    case 24:
      ep.videoId = '';
      break;
    case 25:
      ep.videoId = '';
      break;
    case 26:
      ep.videoId = '';
      break;
    case 27:
      ep.videoId = 'x9gltja';
      break;
    case 28:
      ep.videoId = '';
      break;
    case 29:
      ep.videoId = '';
      break;

    default:
      return;
  }
});

// Series II
let PNTTSII: Episode[] = [{
  id: 0,
  title: "",
  path: "",
  link: "",
  other_link: "",
  videoId: "",
}];
for (let i = 1; i <= 143; i++) {
  PNTTSII.push({
    id: i,
    title: `PNTT ep. ${i}`,
    image: `/images/pham_nhan_tu_tien.jpg`,
    path: `pham-nhan-tu-tien`,
    link: `https://yanhh3d.vip/pham-nhan-tu-tien/tap-${i}`,
    videoId: "",
  })
}
PNTTSII.shift();
PNTTSII.map(ep => {
  switch(ep.id) {
    case 1:
      ep.videoId = 'x7vgpfu';
      break;
    case 2:
      ep.videoId = 'x7vgptq';
      break;
    case 3:
      ep.videoId = 'x7vgq8j';
      break;
    case 4:
      ep.videoId = 'x7vgqa7';
      break;
    case 5:
      ep.videoId = 'x7vc7s5';
      break;
    case 6:
      ep.videoId = 'x7vgrjq';
      break;
    case 7:
      ep.videoId = 'x7vllb0';
      break;
    case 8:
      ep.videoId = 'x7vrtmy';
      break;
    case 9:
      ep.videoId = 'x7wu7b4';
      break;
    case 10:
      ep.videoId = 'x7wu7b5';
      break;
    case 11:
      ep.videoId = '';
      break;
    case 12:
      ep.videoId = '';
      break;
    case 13:
      ep.videoId = 'x7x6gwh';
      break;
    case 14:
      ep.videoId = '';
      break;
    case 15:
      ep.videoId = '';
      break;
    case 16:
      ep.videoId = '';
      break;
    case 17:
      ep.videoId = '';
      break;
    case 18:
      ep.videoId = '';
      break;
    case 19:
      ep.videoId = '';
      break;
    case 20:
      ep.videoId = '';
      break;
    case 21:
      ep.videoId = '';
      break;
    case 22:
      ep.videoId = '';
      break;
    case 23:
      ep.videoId = '';
      break;
    case 24:
      ep.videoId = '';
      break;
    case 25:
      ep.videoId = '';
      break;
    case 26:
      ep.videoId = '';
      break;
    case 27:
      ep.videoId = '';
      break;
    case 28:
      ep.videoId = '';
      break;
    case 29:
      ep.videoId = '';
      break;
    case 30:
      ep.videoId = '';
      break;
    case 31:
      ep.videoId = '';
      break;
    case 32:
      ep.videoId = '';
      break;
    case 33:
      ep.videoId = '';
      break;
    case 34:
      ep.videoId = '';
      break;
    case 35:
      ep.videoId = '';
      break;
    case 36:
      ep.videoId = '';
      break;
    case 37:
      ep.videoId = '';
      break;
    case 38:
      ep.videoId = '';
      break;
    case 39:
      ep.videoId = '';
      break;
    case 40:
      ep.videoId = '';
      break;
    case 41:
      ep.videoId = '';
      break;
    case 42:
      ep.videoId = '';
      break;
    case 43:
      ep.videoId = '';
      break;
    case 44:
      ep.videoId = '';
      break;
    case 45:
      ep.videoId = '';
      break;
    case 46:
      ep.videoId = '';
      break;
    case 47:
      ep.videoId = '';
      break;
    case 48:
      ep.videoId = '';
      break;
    case 49:
      ep.videoId = '';
      break;
    case 50:
      ep.videoId = '';
      break;
    case 51:
      ep.videoId = '';
      break;
    case 52:
      ep.videoId = '';
      break;
    case 53:
      ep.videoId = '';
      break;
    case 54:
      ep.videoId = '';
      break;
    case 55:
      ep.videoId = '';
      break;
    case 56:
      ep.videoId = '';
      break;
    case 57:
      ep.videoId = '';
      break;
    case 58:
      ep.videoId = '';
      break;
    case 59:
      ep.videoId = '';
      break;
    case 60:
      ep.videoId = '';
      break;
    case 61:
      ep.videoId = '';
      break;
    case 62:
      ep.videoId = '';
      break;
    case 63:
      ep.videoId = '';
      break;
    case 64:
      ep.videoId = '';
      break;
    case 65:
      ep.videoId = '';
      break;
    case 66:
      ep.videoId = '';
      break;
    case 67:
      ep.videoId = '';
      break;
    case 68:
      ep.videoId = '';
      break;
    case 69:
      ep.videoId = '';
      break;
    case 70:
      ep.videoId = '';
      break;
    case 71:
      ep.videoId = '';
      break;
    case 72:
      ep.videoId = '';
      break;
    case 73:
      ep.videoId = '';
      break;
    case 74:
      ep.videoId = '';
      break;
    case 75:
      ep.videoId = '';
      break;
    case 76:
      ep.videoId = '';
      break;
    case 77:
      ep.videoId = '';
      break;
    case 78:
      ep.videoId = '';
      break;
    case 79:
      ep.videoId = '';
      break;
    case 80:
      ep.videoId = '';
      break;
    case 81:
      ep.videoId = '';
      break;
    case 82:
      ep.videoId = '';
      break;
    case 83:
      ep.videoId = '';
      break;
    case 84:
      ep.videoId = '';
      break;
    case 85:
      ep.videoId = '';
      break;
    case 86:
      ep.videoId = '';
      break;
    case 87:
      ep.videoId = '';
      break;
    case 88:
      ep.videoId = '';
      break;
    case 89:
      ep.videoId = '';
      break;
    case 90:
      ep.videoId = '';
      break;
    case 91:
      ep.videoId = '';
      break;
    case 92:
      ep.videoId = '';
      break;
    case 93:
      ep.videoId = '';
      break;
    case 94:
      ep.videoId = '';
      break;
    case 95:
      ep.videoId = '';
      break;
    case 96:
      ep.videoId = '';
      break;
    case 97:
      ep.videoId = '';
      break;
    case 98:
      ep.videoId = '';
      break;
    case 99:
      ep.videoId = '';
      break;
    case 100:
      ep.videoId = '';
      break;
    case 101:
      ep.videoId = '';
      break;
    case 102:
      ep.videoId = '';
      break;
    case 103:
      ep.videoId = '';
      break;
    case 104:
      ep.videoId = '';
      break;
    case 105:
      ep.videoId = '';
      break;
    case 106:
      ep.videoId = '';
      break;
    case 107:
      ep.videoId = '';
      break;
    case 108:
      ep.videoId = '';
      break;
    case 109:
      ep.videoId = '';
      break;
    case 110:
      ep.videoId = '';
      break;
    case 111:
      ep.videoId = '';
      break;
    case 112:
      ep.videoId = '';
      break;
    case 113:
      ep.videoId = '';
      break;
    case 114:
      ep.videoId = '';
      break;
    case 115:
      ep.videoId = '';
      break;
    case 116:
      ep.videoId = '';
      break;
    case 117:
      ep.videoId = '';
      break;
    case 118:
      ep.videoId = '';
      break;
    case 119:
      ep.videoId = '';
      break;
    case 120:
      ep.videoId = '';
      break;
    case 121:
      ep.videoId = '';
      break;
    case 122:
      ep.videoId = '';
      break;
    case 123:
      ep.videoId = '';
      break;
    case 124:
      ep.videoId = '';
      break;
    case 125:
      ep.videoId = '';
      break;
    case 126:
      ep.videoId = 'x9dck9i';
      break;
    case 127:
      ep.videoId = 'x9czvpa';
      break;
    case 128:
      ep.videoId = '';
      break;
    case 129:
      ep.videoId = 'x9dqu2s';
      break;
    case 130:
      ep.videoId = 'x9eedea';
      break;
    case 131:
      ep.videoId = '';
      break;
    case 132:
      ep.videoId = 'x9fesde';
      break;
    case 133:
      ep.videoId = '';
      break;
    case 134:
      ep.videoId = 'x9g4oou';
      break;
    case 135:
      ep.videoId = 'x9gkg10';
      break;
    case 136:
      ep.videoId = '';
      break;
    case 137:
      ep.videoId = 'x9he6ka';
      break;
    case 138:
      ep.videoId = 'x9hrst2';
      break;
    case 139:
      ep.videoId = 'x9hs7ca';
      break;
    case 140:
      ep.videoId = 'x9ia04m';
      break;
    case 141:
      ep.videoId = 'x9iwwt4';
      break;
    case 142:
      ep.videoId = '';
      break;
    case 143:
      ep.videoId = '';
      break;
    default:
      return;
  }
});

export {
  PNTT,
  PNTTCombo3,
  PNTTCombo5,
  PNTTSII,
}
