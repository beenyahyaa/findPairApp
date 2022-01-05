import src1 from "../Pictures/atm.jpeg";
import src2 from "../Pictures/bts.jpeg";
import src3 from "../Pictures/bvb.jpeg";
import src4 from "../Pictures/ch.jpeg";
import src5 from "../Pictures/ajax.jpeg";
import src6 from "../Pictures/fcb.jpeg";
import src7 from "../Pictures/mci.jpeg";
import src8 from "../Pictures/om.jpeg";
import src9 from "../Pictures/psg.jpeg";
import src10 from "../Pictures/rv.jpeg";

const pairs = [
  {
    src: src1,
    club: "atm"
  },
  {
    src: src2,
    club: "bts"
  },
  {
    src: src3,
    club: "bvb"
  },
  {
    src: src4,
    club: "ch"
  },
  {
    src: src5,
    club: "ajax"
  },
  {
    src: src6,
    club: "fcb"
  },
  {
    src: src7,
    club: "mci"
  },
  {
    src: src8,
    club: "om"
  },
  {
    src: src9,
    club: "psg"
  },
  {
    src: src10,
    club: "rv"
  }
];

export function getImages(number) {
  const images = pairs.slice(0, number);

  return [...images, ...images].map((card, i) => ({ ...card, id: i + 1 }));
}
