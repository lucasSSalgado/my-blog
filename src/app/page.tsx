import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { capilizeFirstLetter, formatDate, getLastPost, removeUnderlineInTitle } from '@/utils/utils';
import { lastBlog } from '../../types';
import LatestArticles from './components/LastetArticles';

const FeaturedPost = ({ post }:{ post: lastBlog }) => (
  <div className="relative w-11/12 mx-auto py-5 px-10 rounded-3xl overflow-hidden mt-5 border border-solid border-dark shadow-lg shadow-zinc-700/50">
    <div className="absolute inset-0">
      <ExportedImage
        src={post.metaData.image}
        alt="Background Image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-opacity-40"></div>
    </div>

    <div className="relative z-10">
      <div className="flex flex-col justify-between items-start pt-1">
        <h1 className="text-5xl font-bold text-white">
          <Link href={post.blogPath} className="underline-animation [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6),_0_8px_16px_rgba(0,0,0,0.4)]">
            { capilizeFirstLetter(post.metaData.title) }
          </Link>
        </h1>

        <Link 
          className="inline-block mx-auto md:mx-0 mt-6 rounded-xl bg-gradient-to-r from-violet-600 via-blue-300 to-emerald-500 p-[2px] hover:scale-105 transition-all ease duration-200" 
          href={post.folderPath}
        >
          <span className="block rounded-xl bg-zinc-800 text-white py-2 px-6 font-medium text-sm md:text-base">
            { capilizeFirstLetter(removeUnderlineInTitle(post.folderName)) }
          </span>
        </Link>
      </div>

      <div className="flex justify-between mt-14 gap-2 mx-auto">
        <div className="font-bold text-lg text-white w-full [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6)] bg-opacity-70 p-3 rounded-lg">
          <p>{ post.metaData.description } </p>
          <p className='text-right'> { formatDate(post.metaData.date) } </p>
        </div> 
      </div>
    </div>
  </div>
);

export default function Home() {
  const post = getLastPost();

  return (
    <main className="md:container md:px-4 md:mt-2 mx-auto mt-10 items-center">
      <FeaturedPost post={post} />
      <LatestArticles />
    </main>
  );
}