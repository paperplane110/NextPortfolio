import { getAllBlogIds, getBlogData, getPreviousNextIds } from "../../lib/blog";
import { ColorH2 } from "../../components/Paragraph";
import Date from "../../components/date";
import styles from "../../styles/Blog.module.css";
import BlogMarkdown from "../../components/Markdown"
import NextLink from "next/link"
import { Grid, Card, Text } from "@nextui-org/react"

export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

type gspProps = {
  params: { id: string };
};

export async function getStaticProps({ params }: gspProps) {
  const blogData = await getBlogData(params.id);
  const { nextId, previousId } = getPreviousNextIds(params.id)
  return {
    props: {
      blogData,
      nextId,
      previousId
    },
  };
}

type blogPageProps = {
  blogData: {
    id: string;
    title: string;
    date: string;
    content: string;
  },
  nextId: string,
  previousId: string,
};

type paginationProps = {
  previousId: string,
  nextId: string,
}
const Pagination = ({ previousId, nextId }: paginationProps) => {
  return (
    <Grid.Container
      style={{ padding: "2rem 0" }}
      gap={2}
      justify="center"
    >
      <Grid xs={6}>
        <NextLink href={`/blog/${previousId}`}>
          <Card shadow={false} className={styles.paginationBtm}>
            <Text h4>{previousId ? "👈 Previous post" : "Back to Blog.🏡"}</Text>
            <Text color="grey">{previousId ? previousId : "This is the first post"}</Text>
          </Card>
        </NextLink>
      </Grid>
      <Grid xs={6}>
        <NextLink href={`/blog/${nextId}`}>
          <Card shadow={false} style={{ alignItems: 'flex-end' }} className={styles.paginationBtm}>
            <Text h4>
              {nextId ? "Next post 👉" : "Back to Blog 🏡"}
            </Text>
            <Text color="grey">{nextId ? nextId : "This is the latest post"}</Text>
          </Card>
        </NextLink>
      </Grid>
    </Grid.Container >
  )
}

export default function Blog({ blogData, nextId, previousId }: blogPageProps) {
  console.log(`id: ${blogData.id}`);
  console.log(`next: ${nextId}`);
  console.log(`previous: ${previousId}`);
  return (
    <div>
      <ColorH2>{blogData.title}</ColorH2>
      <Date dateString={blogData.date} />
      <br />
      <div className={styles.mdStyle}>
        <BlogMarkdown markdown={blogData.content} />
      </div>
      <Pagination previousId={previousId} nextId={nextId} />
    </div>
  );
}
