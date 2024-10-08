import React from "react";
import Container from "./Container";
import { Icons } from "./icons";
import { POSTS } from "@/lib/constants";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="text-md font-semibold">Coding Jitsu</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm ">
              Stay Up To Date with the latest News and Insights form our blog.
            </p>
            <div className=" flex space-x-4">
              <a
                href="https://x.com/big_chungus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icons.twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
              <a
                href="https://github.com/BrianHammer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icons.gitHub className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Blog</h3>
            <ul className="space-y-2 text-sm">
              {POSTS.map((post) => (
                <li key={post.href}>
                  <Link
                    href={`${post.href}`}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:brianhammer4work@gmail.com"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Subscribe to our newsletter to stay up to date with the latest
              news and updates
            </p>
            <form>
              <div className="flex flex-row gap-2 lg:flex-col xl:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:text-gray-400 dark:border-gray-700">
          &copy; 2024 Coding Jitsu. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
