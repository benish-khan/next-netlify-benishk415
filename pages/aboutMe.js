import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="my-48  mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl">Stoked!</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">
          Always Be Learning!
        </p>
      </h1>
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        I am Benish. I am a Solutions Engineer at Netlify, avid reader,
        not-so-pro but passionate boxer and among other hobbies I've recently
        started to learn bouldering! Here, we are going to talk about my
        adventures learning JavaScript, React and NextJS over the next year!
        I'll link you to the classes I'm taking and content I find useful very
        soon! Lets do this!
      </h2>

      <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
        <Link href="https://www.netlify.com/">
          <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800">
            Netlify
          </a>
        </Link>
        <Link href="https://jamstack.org/">
          <a className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800">
            JAMstack
          </a>
        </Link>
      </div>
    </div>
  );
}
