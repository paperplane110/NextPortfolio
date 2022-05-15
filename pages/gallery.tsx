import type { NextPage } from "next";
import { Paragraph } from "../components/Paragraph";
import GalleryGrid from "../components/GalleryGrid";

import flowerPic from "../public/gallery/flower.jpg";
import kidDogPic from "../public/gallery/kidDog.jpg";
import planePic from "../public/gallery/plane.jpeg";
import linkPic from "../public/gallery/link.jpeg";
import cathedralPic from "../public/gallery/cathedral-bw.jpeg";
import doorEarthPic from "../public/gallery/door-earth.jpeg"
import springPic from "../public/gallery/spring.png"
import parkPic from "../public/gallery/park.jpeg"

const picList = [
  { width: 12, pic: kidDogPic },
  { width: 12, pic: parkPic },
  { width: 12, pic: linkPic },
  { width: 6.8, pic: cathedralPic },
  { width: 5.2, pic: flowerPic },
  { width: 12, pic: doorEarthPic },
  { width: 12, pic: planePic },
  { width: 12, pic: springPic },

];

const Gallery: NextPage = () => {
  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        fugit earum voluptas officia, quasi saepe et commodi, dolores cumque
        quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet
        repellendus
      </Paragraph>
      <GalleryGrid picList={picList} gap={2} />
    </div>
  );
};

export default Gallery;
