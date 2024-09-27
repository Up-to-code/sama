import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

interface FooterProps {
  companyName: string;
  links: { label: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, links }) => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 text-white">
      <div className="mb-2 md:mb-0">© {new Date().getFullYear()} {companyName}</div>
      <div className="flex gap-4 items-center justify-center">
        <Link href="https://facebook.com/samhh" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="h-6 w-6" />
        </Link>
        <Link href="https://twitter.com/samhh" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="h-6 w-6" />
        </Link>
        <Link href="https://instagram.com/samhh" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-6 w-6" />
        </Link>
      </div>
      <div className="flex space-x-4">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
