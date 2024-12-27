import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl text-white">Task Management</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Codingsluv. All rights reserved.
        </p>
        <p className="text-sm font-medium text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          Made with ❤️ by
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @codingsluv
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <FaFacebook className="mr-1 cursor-pointer size-6" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaSquareXTwitter className="mr-1 cursor-pointer size-6" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaLinkedin className="mr-1 cursor-pointer size-6" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaInstagram className="mr-1 cursor-pointer size-6" />
          </a>
        </span>
      </div>
    </footer>
  );
}
