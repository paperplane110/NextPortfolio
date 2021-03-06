/*
 * @Description: 
 * @version: 
 * @Author: TianyuYuan
 * @Date: 2022-05-20 21:14:14
 * @LastEditors: TianyuYuan
 * @LastEditTime: 2022-05-20 22:20:01
 */
import NextLink from "next/link";
import { Grid, Text } from "@nextui-org/react";
import { Paragraph } from "../../components/Paragraph";
import { getSortedBlogData } from "../../lib/blog";
import { parseISO, format } from "date-fns";
import styles from "../../styles/Blog.module.css";

export async function getStaticProps() {
  const allBlogData = getSortedBlogData();
  return {
    props: {
      allBlogData,
    },
  };
}

export type blogCardProps = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export function BlogCard({ id, title, description, date }: blogCardProps) {
  const dateFormated = format(parseISO(date), "LLLL d, yyyy");
  let shortTitle;
  if (title.length >= 40) {
    shortTitle = `${title.slice(0, 37)}...`;
  } else {
    shortTitle = title;
  }
  return (
    <div className={styles.blogCard}>
      <NextLink href={`/blog/${id}`}>
        <div className={styles.blogDescription}>
          <Text h4 weight="medium">
            {shortTitle}
          </Text>
          <Text weight="medium" color="grey" css={{ mt: "$2" }}>
            {description}
          </Text>
          <Text color="grey">
            {dateFormated}
          </Text>
        </div>
      </NextLink>
    </div>
  );
}

type blogIndexProps = {
  allBlogData: blogCardProps[];
};

export default function Blog({ allBlogData }: blogIndexProps) {
  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        fugit earum voluptas officia, quasi saepe et commodi, dolores cumque
        quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet
        repellendus
      </Paragraph>
      <Grid.Container
        gap={1}
        justify="center"
        css={{ padding: "0", mt: "$10" }}
      >
        {allBlogData.map(({ id, date, title, description }, idx) => (
          <Grid key={idx} xs={12}>
            <BlogCard
              id={id}
              title={title}
              description={description}
              date={date}
            />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}
