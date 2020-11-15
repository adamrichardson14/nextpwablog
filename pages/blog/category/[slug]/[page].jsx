import React from 'react';
import { useRouter } from 'next/router';
import { getData } from '../../../../utils/utils';
import CategoryMenu from '../../../../components/CategoryMenu';
import Header from '../../../../components/Header';
import Posts from '../../../../components/Posts';
import Link from 'next/link';
import IntroText from '../../../../components/IntroText';
import BackButton from '../../../../components/BackButton';

const Category = ({
  posts,
  categories,
  currentCategory,
  slug,
  currentPage,
}) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <IntroText
        title={currentCategory.name}
        description={currentCategory.description}
      />
      <CategoryMenu tags={categories.tags} />
      <Posts posts={posts.posts} />
      <div className='flex justify-center space-x-3 text-gray-500 font-semibold items-center text-md'>
        <span className='text-sm'>Page:</span>
        {Array.from({ length: posts.meta.pagination.pages }, (_, index) => {
          return (
            <span>
              <Link
                href={{
                  pathname: '/blog/category/[slug]/[page]',
                  query: {
                    slug: slug,
                    page: index + 1,
                  },
                }}
              >
                <a
                  className={`${
                    index === currentPage - 1
                      ? 'text-yellow-500'
                      : 'text-gray-500'
                  }`}
                >
                  {index + 1}
                </a>
              </Link>
            </span>
          );
        })}
        <BackButton router={router} />
      </div>
    </>
  );
};

export default Category;

export const getStaticProps = async ({ params }) => {
  const { API_KEY } = process.env;
  const posts = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/posts/?key=${API_KEY}&filter=tag:${params.slug}&fields=title,slug,feature_image,custom_excerpt,published_at&page=${params.page}&limit=10`
  );
  const categories = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/tags/?key=${API_KEY}`
  );

  const currentCategory = await categories.tags.find(
    (cat) => cat.slug === params.slug
  );

  return {
    props: {
      posts,
      categories,
      currentCategory,
      currentPage: params.page,
      slug: params.slug,
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
