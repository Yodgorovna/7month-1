import React from "react";
import { Logo } from "../../components/Svgs/Logo";
import { Link } from "react-router-dom";
import { User } from "../../components/Svgs/User";
import { Like } from "../../components/Svgs/Like";
import { Post } from "../../components/Svgs/Post";

export const Header = () => {
  return (
    <div className="pb-20 w-[1360px] ml-auto mr-auto">
      <div className="container mt-5 flex items-center justify-between rounded-lg bg-gray-300 p-5 shadow-lg">
        <div className="px-[20px]">
          <Logo />
        </div>
        <nav>
          <ul className="mr-[500px] flex items-center gap-8">
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/women"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/sale"
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/children"
              >
                Children
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/collection"
              >
                Collection
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-2">
            <p className="cursor-pointer text-sm font-medium transition duration-300 hover:text-blue-500">
              English
            </p>
          </li>
          <li className="ml-10"></li>
          <li>
            <User />
          </li>
          <li>
            <Like />
          </li>
          <li>
            <Post />
          </li>
        </ul>
      </div>
    </div>
  );
};
