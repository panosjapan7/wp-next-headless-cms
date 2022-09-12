import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from '../styles/categoryList.module.css'

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);
  
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
      const data = await response.json();
      setCategoryList(data.categories);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div className="category-list-wrapper">
        <p className="categories-header">Categories:</p>
        <div className="categories-container">
          {categoryList &&
            categoryList.map((category, index) => {
              return (
                <Link href={category.name} key={index}>
                  <p className="categories-item">{category.name},</p>
                </Link>
              );
            })}
        </div>
      </div>
    );
  };
  
  export default CategoryList;