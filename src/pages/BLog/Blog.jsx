import React from "react";
import styles from "./Blog.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";
import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";

const blogData = [
  {
    img: IMAGES.blog1,
    title: "Maximize Your 2019 Dental Insurance with lots of Benefits",
    postBy: "Post by: Salman",
    date: "12 Oct, 2019",
  },
  {
    img: IMAGES.blog2,
    title: "Are Your Teeth Making You Old? Are You Surprised!",
    postBy: "Post by: Admin",
    date: "14 Oct, 2019",
  },
  {
    img: IMAGES.blog3,
    title: "Dental Implants: The Next Best Thing to Get Natural Teeth",
    postBy: "Post by: Salman",
    date: "10 Oct, 2020",
  },
  {
    img: IMAGES.blog1,
    title: "Maximize Your 2019 Dental Insurance with lots of Benefits",
    postBy: "Post by: Salman",
    date: "12 Oct, 2019",
  },
  {
    img: IMAGES.blog2,
    title: "Are Your Teeth Making You Old? Are You Surprised!",
    postBy: "Post by: Admin",
    date: "14 Oct, 2019",
  },
  {
    img: IMAGES.blog3,
    title: "Dental Implants: The Next Best Thing to Get Natural Teeth",
    postBy: "Post by: Salman",
    date: "10 Oct, 2020",
  },
];

const Blog = () => {
  return (
    <div className={`${styles.blogSection}`}>
      <div>
        <HeroSection pageTitle="Blog List" />
      </div>
      <Section className={`${styles.blogBox} globalWidth globalPadding`}>
        <h2 className={styles.blogTitle}>Blog</h2>
        <BlogCard blogData={blogData} />
      </Section>
    </div>
  );
};

function BlogCard({ blogData }) {
  return (
    <div className={styles.blogCards}>
      {blogData.map((blog, index) => (
        <Card className={styles.blogCard} key={index}>
          <div className={styles.blogCardImgContainer}>
            <Image
              src={blog.img}
              alt="blog-img"
              className={styles.blogCardImg}
            />
          </div>

          <div className={styles.blogCardDetails}>
            <h1 className={styles.blogCardTitle}>{blog.title}</h1>
            <p className={styles.blogCardCreater}>
              {blog.postBy}
              <span className={styles.blogCardDate}>{blog.date}</span>
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Blog;
