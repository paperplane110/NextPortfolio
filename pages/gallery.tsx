import type { NextPage } from "next";
import { Paragraph } from "../components/Paragraph";
import GalleryGrid from "../components/GalleryGrid";

import flowerPic from "../public/gallery/flower.jpg";
import kidDogPic from "../public/gallery/kidDog.jpg";
import planePic from "../public/gallery/plane.jpeg";
import linkPic from "../public/gallery/link.jpeg";
import cathedralPic from "../public/gallery/cathedral-bw.jpeg";
import doorEarthPic from "../public/gallery/door-earth.jpeg";
import springPic from "../public/gallery/spring.png";
import parkPic from "../public/gallery/park.jpeg";
import classicCouplePic from "../public/gallery/classic-couple.jpeg";
import fourShoesPic from "../public/gallery/four-shoes.jpeg";
import grassInSummerPic from "../public/gallery/grass-in-summer.jpeg";
import greenMossPic from "../public/gallery/green-moss.jpeg";
import lilyRosePic from "../public/gallery/lili-rose.jpeg";
import marioMoonPic from "../public/gallery/mario-moon.jpeg";
import yiheyuanPic from "../public/gallery/yiheyuan.jpeg";
import travelStatuePic from "../public/gallery/travel-statue.jpeg";

const picList = [
  { width: 12, pic: lilyRosePic },
  // { width: 12, pic: greenMossPic },
  { width: 12, pic: kidDogPic },
  { width: 12, pic: parkPic },
  { width: 12, pic: grassInSummerPic },
  { width: 7, pic: fourShoesPic },
  { width: 5, pic: travelStatuePic },
  { width: 12, pic: yiheyuanPic },
  { width: 12, pic: linkPic },
  { width: 6.8, pic: cathedralPic },
  { width: 5.2, pic: flowerPic },
  { width: 12, pic: doorEarthPic },
  { width: 12, pic: marioMoonPic },
  { width: 12, pic: planePic },
  { width: 12, pic: springPic },
  { width: 12, pic: classicCouplePic },
];

const Gallery: NextPage = () => {
  return (
    <div>
      <Paragraph>
        From academic to impressionism, from photographs to 3D arts, here
        collects all of my favorite artworks, photos, game scenes, and 3D arts.
        Vibrant green, sweet pink, warmly orange, rustic black & white, that&apos;s
        all about life.
      </Paragraph>
      <blockquote>
        <h5>
          The purpose of art is washing the dust of daily life off our souls.
          --- from Pablo Picasso
        </h5>
      </blockquote>
      <GalleryGrid picList={picList} gap={2} />
    </div>
  );
};

export default Gallery;
