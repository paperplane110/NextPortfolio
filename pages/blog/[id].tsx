import { getAllBlogIds, getBlogData, getMetaInfo, getPreviousNextIds } from "../../lib/blog";
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

type id2MetaInfo = {
  id: string,
  title: string | undefined,
}

type paginationProps = {
  previousId: id2MetaInfo
  nextId: id2MetaInfo
}

type blogPageProps = {
  blogData: {
    id: string;
    title: string;
    date: string;
    content: string;
  },
  nextId: id2MetaInfo,
  previousId: id2MetaInfo,
};


const Pagination = ({ previousId, nextId }: paginationProps) => {
  return (
    <Grid.Container
      style={{ padding: "2rem 0" }}
      gap={2}
      justify="center"
    >
      <Grid xs={6}>
        <NextLink href={`/blog/${previousId.id}`}>
          <Card shadow={false} className={styles.paginationBtm}>
            <Text h4>{previousId.id ? "👈 Previous post" : "Back to Blog 🏡"}</Text>
            <Text color="grey">{previousId.id ? previousId.title : "This is the first post"}</Text>
          </Card>
        </NextLink>
      </Grid>
      <Grid xs={6}>
        <NextLink href={`/blog/${nextId.id}`}>
          <Card shadow={false} style={{ alignItems: 'flex-end' }} className={styles.paginationBtm}>
            <Text h4>
              {nextId.id ? "Next post 👉" : "Back to Blog 🏡"}
            </Text>
            <Text color="grey">{nextId.id ? nextId.title : "This is the latest post"}</Text>
          </Card>
        </NextLink>
      </Grid>
    </Grid.Container >
  )
}

export default function Blog({ blogData, nextId, previousId }: blogPageProps) {
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
