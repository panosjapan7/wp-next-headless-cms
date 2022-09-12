import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/category.module.css'

const Category = () => {
    const router = useRouter();
    const { category } = router.query;
    const [posts, setPosts] = useState([]);
  
    const fetchData = async () => {
        console.log("category: ", category);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/posts?category=${category}`
      );
      const data = await response.json();
      setPosts(data.posts);
      console.log("data.posts: ", data.posts)
    };
  
    useEffect(() => {
      fetchData();
      // eslint-disable-next-line
    }, [category]);
  
    return (
      <>
        <Head>
          <meta name="keywords" content="education, headless cms, wordpress, nextjs" />
          <meta name="Panos Tsapanidis" content="Webb21 CMS" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{category ? category.toUpperCase() : "Category"}</title>
        </Head>
        <div className={styles.categoryPageWrapper}>
          <p className={styles.categoryName}>{category}</p>
          <div className={styles.postsList}>
            {posts &&
              posts.map((post, index) => {
                return (
                  <Link href={`/posts/${post.ID}`} key={index}>
                    <p className={styles.postTitle}>{post.title}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      </>
    );
  };
  
  export default Category;