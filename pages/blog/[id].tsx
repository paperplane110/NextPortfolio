import { getAllBlogIds, getBlogData } from "../../lib/blog";
import { ColorH3 } from "../../components/Paragraph";
import Date from "../../components/date";

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
    contentHtml: string;
  };
};

export default function Blog({ blogData }: blogPageProps) {
  return (
    <div>
      <ColorH3>{blogData.title}</ColorH3>
      <br />
      <Date dateString={blogData.date} />
      <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
    </div>
  );
}
