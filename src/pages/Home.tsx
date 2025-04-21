import React from "react";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030619] sm:mt-10 w-full flex items-center justify-center text-white p-6">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-[#00dc82]">
          Boost Your Productivity
        </h1>
        <p className="text-lg dark:text-gray-300  text-slate-700">
          This is your personal space for managing time, organizing tasks, taking notes, and analyzing your weekly performance.
        </p>
        <ul className="text-left text-gray-600 dark:text-gray-300 space-y-2 list-disc list-inside">
          <li><span className="dark:text-white text-gray-500 font-medium">Task Management</span> — Plan, organize, and prioritize your daily tasks.</li>
          <li><span className="dark:text-white text-gray-500 font-medium">Note Taking</span> — Quickly capture ideas, thoughts, and reminders.</li>
          <li><span className="dark:text-white text-gray-500 font-medium">Weekly Analytics</span> — Track your productivity and personal growth.</li>
          <li><span className="dark:text-white text-gray-500 font-medium">Habit Tracker</span> — Build good habits and break bad ones over time.</li>
          <li><span className="dark:text-white text-gray-500 font-medium">Daily Planner</span> — Structure your day hour by hour.</li>
        </ul>
        <div className="space-x-4 pt-4">
          <Link
            to="/Dashboard/0"
            className="bg-[#00dc82] text-[#030619] px-6 py-2 rounded-xl font-medium shadow-md hover:bg-[#02c674] transition"
          >
            Get Started
          </Link>
 
        </div>
      </div>
    </div>
  );
};

export default Home;
