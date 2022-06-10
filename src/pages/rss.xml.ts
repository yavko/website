import rss from "@astrojs/rss";
import dateStuff from "../dates";
import { Post } from "../types";

const postImportResult = import.meta.globEager("./blog/**/*.md");
const postImportResultValues = Object.values<{
  url: string;
  frontmatter: Post;
}>(postImportResult);

const posts = postImportResultValues.map((post) => ({
  ...post.frontmatter,
  url: post.url,
  dates: {
    published: dateStuff(post.frontmatter.pubDate, "date"),
    modified: dateStuff(post.frontmatter.modDate, "date"),
  },
}));

export const get = () =>
  rss({
    title: "Yavko's blog",
    description: "Yavko's blog for random stuff",
    site: "https://yavko.com",
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      link: post.url,
      pubDate: post.dates.published,
    })),
    customData: `<language>en-us</language>`,
    stylesheet: "/xsl/rss.xsl",
  });
