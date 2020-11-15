import Link from 'next/link';
import React from 'react';
import Header from '../../components/Header';
import { getData, truncateString } from '../../utils/utils';
import Posts from '../../components/Posts';
import CategoryMenu from '../../components/CategoryMenu';
import IntroText from '../../components/IntroText';

const Home = ({ posts, categories }) => {
  return (
    <>
      <Header />
      <IntroText
        title='Welcome to our Blog'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit molestias
      itaque ex ea ullam ut fuga voluptas, numquam, mollitia illum impedit! Unde
      dolorem voluptates voluptatibus necessitatibus tenetur voluptas magnam
      voluptatem! luptatibus necessitatibus tenetur voluptas magnam voluptatem!'
      />
      <CategoryMenu tags={categories.tags} />
      <Posts posts={posts.posts} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { API_KEY } = process.env;
  const posts = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/posts/?key=${API_KEY}&fields=title,slug,feature_image,custom_excerpt,published_at`
  );
  const categories = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/tags/?key=${API_KEY}`
  );

  return {
    revalidate: 60,
    props: {
      posts,
      categories,
    },
  };
};
