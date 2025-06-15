import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoTwitter,
} from "react-icons/bi";

const Footer = ({
  // menuItems = [
  //   {
  //     title: "Usefull Links",
  //     links: [
  //       { text: "About", url: "#" },
  //       { text: "Contact", url: "#" },
  //     ],
  //   },
  //   {
  //     title: "Social",
  //     links: [
  //       { text: "Twitter", url: "#" },
  //       { text: "Instagram", url: "#" },
  //       { text: "LinkedIn", url: "#" },
  //     ],
  //   },
  // ],

  currentYear = new Date().getFullYear(),

  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}) => {
  return (
    <div className="container pt-12 pb-6 px-4 md:px-5 lg:px-6 bg-accent-foreground font-karla mx-auto">
      <footer>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="col-span-2 mb-8 lg:mb-0">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="/">
                <img
                  src="/logo.png"
                  alt="AdoptNest Logo"
                  className="h-10 lg:h-12"
                />
              </a>
              <p className="text-lg md:text-xl text-background lg:text-2xl font-bold font-petrona">
                Adopt<span className="text-primary">Nest</span>
              </p>
            </div>
            <p className="mt-3 font-bold text-lg text-background">
              Find your new best friend, right here.
            </p>
          </div>
          {/* {menuItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-4 text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="font-medium hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
          <div>
            <h3 className="mb-3 font-bold text-lg text-background font-petrona">
              Useful Links
            </h3>
            <ul className="space-y-1 lg:space-y-2 text-background/60">
              <li className="hover:font-medium hover:text-primary">
                <a href="/" className="text-sm lg:text-base">
                  Home
                </a>
              </li>
              <li className="hover:font-medium hover:text-primary">
                <a href="/" className="text-sm lg:text-base">
                  About
                </a>
              </li>
              <li className="hover:font-medium hover:text-primary">
                <a href="/" className="text-sm lg:text-base">
                  Contact
                </a>
              </li>
              <li className="hover:font-medium hover:text-primary">
                <a href="/" className="text-sm lg:text-base">
                  Submit a Pet
                </a>
              </li>
              <li className="hover:font-medium hover:text-primary">
                <a href="/" className="text-sm lg:text-base">
                  Changelog
                </a>
              </li>
              <li className="hover:font-medium hover:text-primary">
                <a href="/" className="text-sm lg:text-base">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-lg text-background font-petrona">
              Social Links
            </h3>
            <ul className="space-x-2 text-background/60 flex">
              <li className="font-medium hover:text-primary">
                <a href="/">
                  <BiLogoFacebookSquare className="size-6 lg:size-7" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="/">
                  <BiLogoInstagramAlt className="size-6 lg:size-7" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="/">
                  <BiLogoTwitter className="size-6 lg:size-7" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
          <p className="text-center md:text-left">
            &copy; {currentYear} AdoptNest. All rights reserved.
          </p>
          <ul className="flex gap-4 justify-center md:justify-end">
            {bottomLinks.map((link, linkIdx) => (
              <li key={linkIdx} className="hover:text-primary">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
