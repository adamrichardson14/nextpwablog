import React from 'react';
import { useRouter } from 'next/router';
import { getData } from '../../utils/utils';
import CategoryMenu from '../../components/CategoryMenu';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import Link from 'next/link';

const Category = ({ posts, categories }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <CategoryMenu tags={categories.tags} />
      <Posts posts={posts.posts} />
    </>
  );
};

export default Category;

export const getStaticProps = async ({ params }) => {
  const { API_KEY } = process.env;
  const posts = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/posts/?key=${API_KEY}&filter=tag:${params.slug}&fields=title,slug,feature_image,custom_excerpt,published_at`
  );
  const categories = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/tags/?key=${API_KEY}`
  );

  console.log(posts);
  return {
    props: {
      posts,
      categories,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
