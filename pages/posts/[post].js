import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import styles from "../../styles/post.module.css"
import parse from "html-react-parser";


function Post() {
    const router = useRouter();
    const [post, setPost] = useState([]);
    const [postCategory, setPostCategory] = useState([]);
    const [postId, setPostId] = useState();

    const fetchData = async () => {
      console.log("fetchData clg postId: ", postId)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`
      );
      const data = await response.json();
      console.log("data: ", data)
      setPost(data)
  
      // Saves the object that contains the category data into a var
      let obj = data.categories;
      setPostCategory(Object.keys(obj)[0]);
    };
  
    useEffect(() => {
      if(router.query.post) {
        console.log("useEffect router.query.post has value: ", Number(router.query.post));
        setPostId(Number(router.query.post))
        
        if(postId) {
          fetchData();
        }
      }
      // eslint-disable-next-line
    }, [router.query, postId]);
  
    return (
      <div className={styles.post}>
        <div className={styles.postIdCategoryContainer}>
          <p className={styles.singlePost}>
            Post id: {post.ID ? post.ID : `${postId} doesnt exist`}
          </p>
          <p className={styles.singlePost}>
            Post Category:{" "}
            {postCategory ? postCategory : `${postCategory} doesnt exist`}
          </p>
          <p className={styles.singlePost}>
            Post Date:{" "}
            {post.date ? post.date.split("T")[0] : `${post.date} doesnt exist`}
          </p>
        </div>
  
        {post.title && <h1 className="singlePost">{post.title}</h1>}
        {/* <Image className="featured-image" src={post.featured_image} alt="" /> */}
        {post.content && <div className="singlePost">{parse(post.content)}</div>}
      </div>
    );
  }
  
  export default Post;