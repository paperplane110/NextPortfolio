/*
 * @Description: 
 * @version: 
 * @Author: TianyuYuan
 * @Date: 2022-05-20 21:14:14
 * @LastEditors: TianyuYuan
 * @LastEditTime: 2022-05-20 22:17:41
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "blog");

export function getSortedBlogData() {
  // Get file names under /blog
  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      date: matterResult.data.date,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogDirectory);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

/**
 * Get the meta info for specified blog id
 * @param id the id of blog file
 * @returns if id is empty return {id}, else return {id, ...matterResult.data}
 */
export function getMetaInfo(id: string) {
  if (id === "") return {id};
  const fullPath = path.join(blogDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents)
  return {
    id,
    ...matterResult.data
  }
}

export function getPreviousNextIds(id: string) {
  // get ordered blog ids
  const allFileNames = fs.readdirSync(blogDirectory);
  const allIds = allFileNames.map((fileName) => (fileName.replace(/\.md$/, "")))
  const orderedIds = allIds.sort()
  const nextIndex = orderedIds.indexOf(id) + 1
  const previousIndex = orderedIds.indexOf(id) - 1
  let nextId = ""
  let previousId = ""
  if (nextIndex < orderedIds.length) nextId = orderedIds[nextIndex]
  if (previousIndex >= 0) previousId = orderedIds[previousIndex]

  return {
    nextId: getMetaInfo(nextId),
    previousId: getMetaInfo(previousId),
  }
}

export async function getBlogData(id: string) {
  const filePath = path.join(blogDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // get metadata from md
  const matterResult = matter(fileContents)

  return {
    id,
    date: matterResult.data.date,
    content: matterResult.content,
    ...matterResult.data,
  }
}