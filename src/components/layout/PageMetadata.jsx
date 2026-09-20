import { useEffect } from "react";
import { useLocation } from "react-router";

import { blogPosts } from "../../data/blogPosts";
import { projects } from "../../data/projects";

const defaultMetadata = {
  title: "Tam Dan Pham | Bioinformatics",
  description:
    "My bioinformatics journey, research notes, programming projects, and computational biology experiments.",
};

function getPageMetadata(pathname) {
  if (pathname === "/") {
    return defaultMetadata;
  }

  if (pathname === "/blog") {
    return {
      title: "Blog | Tam Dan Pham",
      description:
        "Notes and reflections about bioinformatics, computational biology, research, and programming.",
    };
  }

  if (pathname === "/about") {
    return {
      title: "About Me | Tam Dan Pham",
      description:
        "Learn about my background, motivation, skills, education, and research interests in bioinformatics.",
    };
  }

  if (pathname === "/projects") {
    return {
      title: "Little Projects | Tam Dan Pham",
      description:
        "Small programming exercises, visualizations, and interactive bioinformatics projects.",
    };
  }

  if (pathname.startsWith("/blog/")) {
    const slug = pathname.split("/")[2];
    const post = blogPosts.find((item) => item.slug === slug);

    if (post) {
      return {
        title: `${post.title} | Tam Dan Pham`,
        description: post.preview,
      };
    }
  }

  if (pathname.startsWith("/projects/")) {
    const slug = pathname.split("/")[2];
    const project = projects.find((item) => item.slug === slug);

    if (project) {
      return {
        title: `${project.title} | Tam Dan Pham`,
        description: project.description,
      };
    }
  }

  return {
    title: "Page Not Found | Tam Dan Pham",
    description: "The requested page could not be found.",
  };
}

function PageMetadata() {
  const location = useLocation();

  useEffect(() => {
    const metadata = getPageMetadata(location.pathname);

    document.title = metadata.title;

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);

    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", metadata.title);

    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", metadata.description);
  }, [location.pathname]);

  return null;
}

export default PageMetadata;