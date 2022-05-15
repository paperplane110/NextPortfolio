import type { NextPage } from "next";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";
import { ColorH3, Paragraph } from "../components/Paragraph";
import { ProjectCard } from "../components/ProjectCard";
import { Link, Grid, Text } from "@nextui-org/react";
import GalleryGrid from "../components/GalleryGrid";
import flowerPic from "../public/gallery/flower.jpg";
import kidDogPic from "../public/gallery/kidDog.jpg";
import planePic from "../public/gallery/plane.jpeg";
import linkPic from "../public/gallery/link.jpeg";

import { getSortedBlogData } from "../lib/blog";
import { BlogCard } from "./blog/index";
import type { blogCardProps } from "./blog/index";

const projectList = [
  {
    name: "Data Manager",
    description:
      "A million level image data management system with multiple dimensions labels",
    link: "#",
  },
  {
    name: "HiveX",
    description: "A utility toolbox for algorithm testing",
    link: "#",
  },
  {
    name: "GoBang",
    description: "A little GoBang game running in terminal",
    link: "https://github.com/paperplane110/gobang",
  },
  {
    name: "DinoBot",
    description: "A holonomic robot chassis based on Raspberry Pi",
    link: "#",
  },
];

const picList = [
  { width: 3, pic: flowerPic },
  { width: 9, pic: kidDogPic },
  { width: 6, pic: planePic },
  { width: 6, pic: linkPic },
];

export async function getStaticProps() {
  const first3BlogData = getSortedBlogData().slice(0, 3);
  return {
    props: {
      first3BlogData,
    },
  };
}

type homePageProps = {
  first3BlogData: blogCardProps[];
};

function Home({ first3BlogData }: homePageProps) {
  return (
    <div>
      <div>
        <Paragraph>Hi! I&apos;m Tianyu 👋</Paragraph>
        <Paragraph>
          I&apos;m a Software Engineer in Test(SET) in Beijing. I&apos;m
          interested in Full-Stack technology, UI design, and 3D arts.
        </Paragraph>
        <Paragraph>
          I&apos;m currently doing algorithm testing at
          <Link color="warning" href={"https://www.aibee.cn/"} block>
            Aibee 🐝
          </Link>
          to ensure and improve the quality of image algorithm.
        </Paragraph>
        <Paragraph>
          Meanwhile, I&apos;m leading a 4 people small group, developing a data
          management system which helps testers managing millions of
          images&apos; data.
        </Paragraph>
      </div>
      <div>
        <ColorH3>Blog.</ColorH3>
        <Grid.Container
          css={{ padding: "0", mt: "$10" }}
          gap={1}
          justify="center"
        >
          {first3BlogData.map(({ id, date, title, description }, idx) => (
            <Grid key={idx} xs={4}>
              <BlogCard
                id={id}
                title={title}
                description={description}
                date={date}
              />
            </Grid>
          ))}
        </Grid.Container>
        <div
          style={{
            paddingTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NextLink href="/blog">
            <Link color="primary" block>
              <Text h4>... to read more articals ✍️</Text>
            </Link>
          </NextLink>
        </div>
      </div>

      <div>
        <ColorH3>Projects.</ColorH3>
        <Grid.Container
          css={{ padding: "0", mt: "$10" }}
          gap={1}
          justify="center"
        >
          {projectList.map(({ name, description, link }, idx) => {
            return (
              <Grid key={idx} xs={6}>
                <ProjectCard
                  name={name}
                  description={description}
                  link={link}
                />
              </Grid>
            );
          })}
        </Grid.Container>
      </div>

      <div>
        <ColorH3>Photos & 3D Arts.</ColorH3>
        <GalleryGrid picList={picList} gap={1} />
        <div
          style={{
            paddingTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NextLink href="/gallery">
            <Link color="primary" block>
              <Text h4>... to see more pictures 🖼️</Text>
            </Link>
          </NextLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
