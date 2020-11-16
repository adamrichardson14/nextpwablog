import React from 'react';
import Link from 'next/link';

const Pagination = ({ postMeta, slug }) => {
  const pag = postMeta.pagination;
  console.log(pag);
  return (
    <div className='flex-row text-sm space-x-3'>
      {pag.prev ? (
        <Link
          href={{
            pathname: '/blog/category/[slug]/[page]',
            query: {
              slug: slug,
              page: pag.prev,
            },
          }}>
          <a className={`${'text-gray-500'}`}>Previous</a>
        </Link>
      ) : (
        <span className='text-sm text-gray-700'>Page:</span>
      )}
      <Link
        href={{
          pathname: '/blog/category/[slug]/[page]',
          query: {
            slug: slug,
            page: pag.page,
          },
        }}>
        <a className={`${'text-yellow-700'}`}>{pag.page}</a>
      </Link>
      {pag.next ? (
        <Link
          href={{
            pathname: '/blog/category/[slug]/[page]',
            query: {
              slug: slug,
              page: pag.next,
            },
          }}>
          <a className={`${'text-gray-500'}`}>Next</a>
        </Link>
      ) : null}
    </div>
  );
};

export default Pagination;

// {Array.from({ length: postMeta.pagination.pages }, (_, index) => {
//     return (
//       <span>
//         <Link
//           href={{
//             pathname: '/blog/category/[slug]/[page]',
//             query: {
//               slug: slug,
//               page: index + 1,
//             },
//           }}>
//           <a
//             className={`${
//               index === currentPage - 1
//                 ? 'text-yellow-500'
//                 : 'text-gray-500'
//             }`}>
//             {index + 1}
//           </a>
//         </Link>
//       </span>
//     );
//   })}
