import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { capilizeFirstLetter, formatDate, getLastPost } from '@/utils/utils';
import { lastBlog } from '../../types';

const FeaturedPost = ({ post }:{ post: lastBlog }) => (
  <div className="relative w-11/12 mx-auto py-5 px-10 rounded-3xl overflow-hidden mt-5 border border-solid border-dark shadow-lg shadow-zinc-500/50">
    <div className="absolute inset-0">
      <ExportedImage
        src={post.metaData.image}
        alt="Background Image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>

    <div className="relative z-10">
      <div className="flex justify-between items-start pt-1">
        <h1 className="text-5xl font-bold text-white">
          <Link href={post.blogPath} className="underline-animation [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6),_0_8px_16px_rgba(0,0,0,0.4)]">
            {capilizeFirstLetter(post.metaData.title)}
          </Link>
        </h1>

        <Link 
          className="inline-block rounded-xl bg-gradient-to-r from-violet-600 via-blue-300 to-emerald-500 p-[2px] hover:scale-105 transition-all ease duration-200" 
          href={post.folderPath}
        >
          <span className="block rounded-xl bg-zinc-800 text-white py-2 px-6 font-medium text-sm md:text-base">
            {capilizeFirstLetter(post.folderName)}
          </span>
        </Link>
      </div>

      <div className="flex justify-between mt-20 gap-2 mx-auto">
        <p className="font-bold text-lg w-10/12 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6)] bg-zinc-800 bg-opacity-70 p-3 rounded-lg">
          {post.metaData.description}
        </p>
        <p className="text-lg w-3/12 font-bold mx-auto text-center text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.8),_0_4px_8px_rgba(0,0,0,0.6)] mt-auto">
          {formatDate(post.metaData.date)}
        </p> 
      </div>
    </div>
  </div>
);

const LatestArticles = () => (
  <div className="mt-14 mb-10">
    <h2 className="font-semibold text-2xl mb-4">Últimos Artigos:</h2>
    {/* Replace this with your actual latest articles logic */}
    {[...Array(5)].map((_, index) => (
      <p key={index} className="mb-2 p-2 bg-gray-100 rounded">
        Article placeholder {index + 1}
      </p>
    ))}
  </div>
);

export default function Home() {
  const post = getLastPost();

  return (
    <main className="container mx-auto px-4">
      <FeaturedPost post={post} />
      <LatestArticles />
    </main>
  );
}