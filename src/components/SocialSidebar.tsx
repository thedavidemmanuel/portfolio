import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const SocialSidebar: React.FC = () => {
  return (
    <div className="social-icons-side fixed left-10 bottom-0 z-10 md:hidden">
      <ul className="flex flex-col items-center p-0 m-0 after:content-[''] after:block after:w-[1px] after:h-[90px] after:mx-auto after:bg-slate">
        <li className="mb-5">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                className="text-slate text-xl transition-all hover:text-green hover:-translate-y-[3px]">
            <FaGithub />
          </Link>
        </li>
        <li className="mb-5">
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                className="text-slate text-xl transition-all hover:text-green hover:-translate-y-[3px]">
            <FaLinkedin />
          </Link>
        </li>
        <li className="mb-5">
          <Link href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"
                className="text-slate text-xl transition-all hover:text-green hover:-translate-y-[3px]">
            <FaTwitter />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
