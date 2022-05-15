import { Grid } from "@nextui-org/react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import styles from "../styles/GalleryGrid.module.css";

type ImageProps = {
  src: string | StaticImageData;
};

const NaturalImage = (props: ImageProps) => {
  return (
    <Image
      {...props}
      // set the dimension (affected by layout)
      className={styles.childPic}
      quality="medium"
      layout="responsive" // you can use "responsive", "fill" or the default "intrinsic"
      placeholder="blur"
    />
  );
};
type picListType = { width: number; pic: StaticImageData }[];

export type GalleryGridProps = {
  picList: picListType;
  gap: number;
};

export default function GalleryGrid({ picList, gap }: GalleryGridProps) {
  return (
    <Grid.Container
      css={{ padding: "1rem 0", mt: "1.5rem" }}
      gap={gap}
      justify="center"
    >
      {picList.map(({ width, pic }, idx) => (
        <Grid key={idx} xs={width} sm={width} md={width}>
          <div className={styles.galleryGrid}>
            <NaturalImage src={pic} />
          </div>
        </Grid>
      ))}
    </Grid.Container>
  );
}
