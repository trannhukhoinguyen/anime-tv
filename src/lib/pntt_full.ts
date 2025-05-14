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
    title: `Phàm Nhân Tu Tiên Tập ${i} - VietSub`,
    image: `/images/pham_nhan_tu_tien_avatar.jpg`,
    path: `pham-nhan-tu-tien`,
    link: `https://yanhh3d.vip/pham-nhan-tu-tien/tap-${i}`,
    videoId: "",
  })
}
PNTT.shift();
PNTT.map(ep => {
  switch(ep.id) {
    case 1:
      ep.videoId = 'https://short-cdn.ink/1c9620d1-df19-4684-ab37-886b18bdb34d';
      break;
    case 2:
      ep.videoId = 'https://short-cdn.ink/c220bfab-4895-4cda-a3de-cca0c2115412';
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
      ep.videoId = '';
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
      ep.videoId = '';
      break;
    case 127:
      ep.videoId = '';
      break;
    case 128:
      ep.videoId = '';
      break;
    case 129:
      ep.videoId = '';
      break;
    case 130:
      ep.videoId = '';
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
      ep.videoId = '';
      break;
    case 135:
      ep.videoId = '';
      break;
    case 136:
      ep.videoId = '';
      break;
    case 137:
      ep.videoId = '';
      break;
    case 138:
      ep.videoId = '';
      break;
    case 139:
      ep.videoId = '';
      break;
    case 140:
      ep.videoId = '';
      break;
    case 141:
      ep.videoId = '';
      break;
    case 142:
      ep.videoId = 'https://scontent-sin2-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQN-Tpx2ikn9FeUr3c3DC6MG-YW9yCsZKQK-4fOk02JlQair8wsIS7cdh2VCM5z0FVgWCO7L_w0D_KWG_Ah64Dj1.mp4?strext=1&_nc_cat=100&_nc_sid=5e9851&_nc_ht=scontent-sin2-1.xx.fbcdn.net&_nc_ohc=gPOXq6HV0VEQ7kNvwFpA_Kv&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMTI4MC5kYXNoX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjoxMDQ4OTc3NTYwNDcxNTI3LCJ2aV91c2VjYXNlX2lkIjoxMDEyMiwiZHVyYXRpb25fcyI6OTkyLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=aa6e2d56b60e91&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSUNXbUFCdmp6VlBWMHdIQVBRUjdPeWVhLVlLYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dLMEhUQjFLZE8wTnFjZ0RBS3F2YWpsZHI0Y05ickZxQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJs6f9O3Dgt0DFQIoAkMzLBdAjweuFHrhSBgZZGFzaF9oMjY0LWJhc2ljLWdlbjJfNzIwcBEAdQJllJ4BAA&_nc_zt=28&_nc_eui2=AeGS_06SJ5vUUnvrQqFpgbCkRWde9AKd0XVFZ170Ap3RdTaFesNmS_8gG1ShvxLyvMnFPbeeKOj0Uv3NJVuBYpiK&oh=00_AfItseQK6oYJRFam7aFsnYAPsnl73W56ewmlEhDw32pj7A&oe=6824997A';
      break;
    case 143:
      ep.videoId = 'https://scontent-sin2-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQMczsUpBuUAKZsrklSZhUoYGpF0Ye-TvSz6svsCasjZ1ZLVCEgg9-N8HO3VBa_OXsQ365Pxxtezgxrv1kAhwbTQ.mp4?strext=1&_nc_cat=102&_nc_sid=5e9851&_nc_ht=scontent-sin2-1.xx.fbcdn.net&_nc_ohc=88VquhLs3doQ7kNvwF9QVyV&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMTI4MC5kYXNoX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjoxMjE4NjU0NjU5OTI1MzcxLCJ2aV91c2VjYXNlX2lkIjoxMDEyMiwiZHVyYXRpb25fcyI6MzIsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=86e7c08f9da4fed8&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTXhVZVIzMzgyOXZybFFDQUV3QnRkZDN1dThDYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dERG9peDFoWUVlcl9UOEZBQnQ4OVZnNExTdzJickZxQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJvbV3uGEl6oEFQIoAkMzLBdAQBRaHKwIMRgZZGFzaF9oMjY0LWJhc2ljLWdlbjJfNzIwcBEAdQJllJ4BAA&_nc_zt=28&_nc_eui2=AeGy05klilIA6QGkUvZ6uh_fcUzieZi5lYRxTOJ5mLmVhH4sSlLgtiChzUEf8lib9GpI7gECUv4Po0GYx7L3m-bu&oh=00_AfIbSWLs2gET_XJq-Dk1Nvl-CP9aqMlXeTPh7QcdMzKGMw&oe=6824B4A0';
      break;
    default:
      return;
  }
});

export default PNTT
