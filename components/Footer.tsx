import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const footerSections = [
  {
    title: "Product",
    links: [
      "Website Templates",
      "Website Builder",
      "Website Design",
      "Wix Features",
      "App Market",
      "Web Hosting",
      "Domain Names",
      "Website Accessibility",
      "Mobile App Builder",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Online Store",
      "Online Booking",
      "Restaurant Website",
      "Blog Website",
      "Portfolio Website",
      "eCommerce Website",
      "Wix Studio",
      "Enterprise Solutions",
      "Student Website",
      "Professional Tools",
      "Logo Maker",
    ],
  },
  {
    title: "Learn",
    links: [
      "Wix Blog",
      "Privacy and Security Hub",
      "SEO Learning Hub",
      "Wix Encyclopedia",
    ],
  },
  {
    title: "Support",
    links: [
      "Help Center",
      "Hire a Professional",
      "Report Abuse",
      "System Status",
    ],
  },
  {
    title: "Company",
    links: [
      "Press & Media",
      "Investor Relations",
      "Wix Capital",
      "Accessibility Statement",
      "Patent Notice",
      "Sitemap",
      "Careers",
    ],
  },
];

const socialIcons = [
  { icon: <FaFacebook size={20} /> },
  { icon: <FaYoutube size={20} /> },
  { icon: <FaInstagram size={20} /> },
  { icon: <FaTiktok size={20} /> },
  { icon: <FaPinterest size={20} /> },
  { icon: <FaTwitter size={20} /> },
  { icon: <FaLinkedin size={20} /> },
];

export default function Footer() {
  return (
    <footer className='bg-background text-foreground  '>
      <nav className='flex items-center flex-col'>
        <div className='min-[1366px]:w-[1248px] gap-[66px] flex  py-[54px] '>
          <div className='flex w-full justify-between'>
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className=' text-base font-medium '>{section.title}</h3>
                <ul className='space-y-2 mt-3'>
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href='#'
                        className='text-black text-sm font-normal hover:text-[#166aea] mt-3'
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='max-w-[224px]'>
            <Link href='/'>
              <svg
                width='71'
                height='28'
                viewBox='0 0 166 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_14420_9297)'>
                  <path
                    d='M165.301 -0.000244141H156.17C153.637 -0.000244141 151.269 1.25408 149.847 3.35174L137.635 21.366C137.31 21.8437 136.605 21.8437 136.279 21.366L124.068 3.35174C122.648 1.25408 120.278 -0.000244141 117.745 -0.000244141H108.614L130.367 32.0892L108.734 63.9998H117.865C120.398 63.9998 122.766 62.7454 124.188 60.6478L136.279 42.8123C136.605 42.3346 137.31 42.3346 137.635 42.8123L149.726 60.6478C151.146 62.7454 153.517 63.9998 156.05 63.9998H165.181L143.547 32.0892L165.301 -0.000244141Z'
                    fill='black'
                  ></path>
                  <path
                    d='M89.8276 6.54627V63.9998H94.1917C97.8083 63.9998 100.739 61.0694 100.739 57.4532V-0.000244141H96.375C92.7583 -0.000244141 89.8276 2.93008 89.8276 6.54627Z'
                    fill='black'
                  ></path>
                  <path
                    d='M81.8291 -0.00012207H77.9455C73.6696 -0.00012207 69.9648 2.95689 69.0173 7.12552L60.3292 45.3184L52.7249 9.6662C51.3182 3.07698 44.5573 -1.36654 37.6389 0.544309C33.2322 1.76127 29.9652 5.48422 29.0123 9.95442L21.4853 45.2704L12.8133 7.12819C11.8631 2.95955 8.15834 -0.00012207 3.88239 -0.00012207H0.00146484L14.5563 63.9972H20.0707C25.0753 63.9972 29.3993 60.4984 30.4429 55.6039L39.7475 11.94C39.8623 11.3982 40.3481 11.0059 40.9006 11.0059C41.4531 11.0059 41.9389 11.3982 42.0537 11.94L51.3663 55.6066C52.4099 60.5011 56.7339 63.9972 61.7385 63.9972H67.2716L81.8291 -0.00012207Z'
                    fill='black'
                  ></path>
                </g>
                <defs>
                  <clipPath id='clip0_14420_9297'>
                    <rect width='165.305' height='64' fill='white'></rect>
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <p className='mt-[36px] text-sm text-[#2f2f30] leading-[24px]'>
              The Wix website builder offers a complete solution from
              enterprise-grade infrastructure and business features to advanced
              SEO and marketing tools–enabling anyone to create and grow online.
            </p>
            <ul className='flex flex-col gap-[6px] mt-[30px] text-sm font-medium '>
              <Link href='#' className='hover:text-[#166aea]'>
                About
              </Link>
              <Link href='#' className='hover:text-[#166aea]'>
                Contact
              </Link>
            </ul>
          </div>
        </div>
        <div className='border-t w-full'>
          <div className='min-[1366px]:w-[1248px] min-[750px]:w-[647px] my-[30px] mx-auto flex items-center  '>
            <div className='flex space-x-4 mb-4 md:mb-0'>
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href='#'
                  className=' h-9 w-9 rounded-full hover:bg-[#e5efff] flex items-center justify-center'
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className='flex items-center justify-end flex-1 gap-[42px]'>
              <ul className='flex items-center gap-[18px] flex-wrap'>
                <Link
                  href='#'
                  className='text-sm hover:text-[#166aea] font-medium'
                >
                  Terms of Use
                </Link>
                <Link
                  href='#'
                  className='text-sm hover:text-[#166aea] font-medium'
                >
                  Privacy Policy
                </Link>
              </ul>
              <span className='text-sm  font-medium'>
                © 2006-2024 Wix.com, Inc
              </span>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}
