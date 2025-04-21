import React from "react";

const Me: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center w-full justify-center bg-white dark:bg-[#030619] text-white p-6">
      <div className="bg-green-100 text-gray-700 dark:text-gray-100 dark:bg-[#0f172a] rounded-2xl shadow-lg p-10 max-w-md w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold text-[#00dc82]">Benyamin Hajizadeh</h1>
        <h1 className="text-xl font-bold text-gray-400">Front-End Developer</h1>
        <p className="text-lg "> Tehran</p>
        <p className="text-lg"> +98 936 136 1311</p>

        <a
          href="https://github.com/benyamin-ben?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 dark:text-[#00dc82] text-green-600 hover:underline"
        >
          🔗 Visit my GitHub
        </a>
      </div>
    </div>
  );
};

export default Me;
