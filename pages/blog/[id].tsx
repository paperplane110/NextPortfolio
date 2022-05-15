import { getAllBlogIds, getBlogData } from "../../lib/blog";
import { ColorH2 } from "../../components/Paragraph";
import ReactMarkdown from "react-markdown";
import Date from "../../components/date";
import styles from "../../styles/Blog.module.css";

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
  return {
    props: {
      blogData,
    },
  };
}

type blogPageProps = {
  blogData: {
    title: string;
    date: string;
    content: string;
  };
};

export default function Blog({ blogData }: blogPageProps) {
  return (
    <div>
      <ColorH2>{blogData.title}</ColorH2>
      <Date dateString={blogData.date} />
      <br />
      <div className={styles.mdStyle}>
        <ReactMarkdown>{blogData.content}</ReactMarkdown>
      </div>
    </div>
  );
}
