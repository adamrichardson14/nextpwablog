import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import { getData, truncateString } from '../utils/utils';
import Posts from '../components/Posts';
import CategoryMenu from '../components/CategoryMenu';
import IntroText from '../components/IntroText';

const Home = () => {
  return (
    <>
      <Header />
      <h1>Welcome to my website</h1>
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
    props: {
      posts,
      categories,
    },
    revalidate: 60,
  };
};
