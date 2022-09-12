import React, { Component, useState, useEffect } from 'react'
import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await response.json();
    setPosts(data.posts);
    console.log("data: ", data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Webb21 CMS Examinationsuppgift</title>
      </Head>
      <div className={styles.home}>
        <p className={styles.recentPosts}>All Posts</p>
        {posts &&
          posts.map((post) => {
            return (
              <div className={styles.postContainer} key={post.ID}>
                <h1 className={styles.postTitleHome}>{post.title}</h1>
                <p className={styles.postDate}>{post.date.split("T")[0]}</p>
                <Link href={`/posts/${post.ID}`}>
                  <p className={styles.readMore}>Read more..</p>
                </Link>
              </div>
            );
          })}
      </div>
    </>

  );
}

export default Home;