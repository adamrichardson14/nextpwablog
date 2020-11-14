import React from 'react';
import { useRouter } from 'next/router';
import { getData } from '../../../utils/utils';
import CategoryMenu from '../../../components/CategoryMenu';
import Header from '../../../components/Header';
import Posts from '../../../components/Posts';
import IntroText from '../../../components/IntroText';
import Link from 'next/link';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';

const Category = ({
  posts,
  categories,
  currentCategory,
  currentPage,
  slug,
}) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  if (posts.posts.length === 0) {
    return (
      <>
        <Head>
          <meta name='robots' content='noindex' />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }
  return (
    <>
      <Header />
      <IntroText
        title={currentCategory.name}
        description={currentCategory.description}
      />
      <CategoryMenu tags={categories.tags} />
      <Posts posts={posts.posts} />
      <div className='flex justify-center space-x-2 items-center'>
        <span className='text-sm text-gray-600'>Page:</span>
        {Array.from({ length: posts.meta.pagination.pages }, (_, index) => {
          return (
            <Link
              href={{
                pathname: '/category/[slug]/[page]',
                query: {
                  slug: slug,
                  page: index + 1,
                },
              }}
            >
              <a
                className={`text-lg ${
                  index === currentPage - 1 ? 'text-yellow-500' : 'undefined'
                }`}
              >
                {index + 1}
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;

export const getStaticProps = async ({ params }) => {
  const { API_KEY } = process.env;
  const posts = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/posts/?key=${API_KEY}&filter=tag:${params.slug}&fields=title,slug,feature_image,custom_excerpt,published_at&page=${params.page}&limit=1`
  );
  const categories = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/tags/?key=${API_KEY}`
  );

  const currentCategory = await categories.tags.find(
    (cat) => cat.slug === params.slug
  );
  console.log(posts);
  return {
    props: {
      posts,
      categories,
      currentCategory,
      currentPage: params.page,
      slug: params.slug,
      prevPage: posts.meta.pagination.prev,
      nextPage: posts.meta.pagination.next,
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
