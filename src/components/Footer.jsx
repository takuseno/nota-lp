import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import { NotaLogo } from "../assets/logos/NotaLogo";

const footerData = [
  {
    title: "Support",
    items: [{title: "Feedback", href: "https://forms.gle/eg1dZWEcKeTp5op56"}],
  },
  //{
  //  title: "Important Links",
  //  items: [
  //    "Organization Team",
  //    "Our Journeys",
  //    "Pricing Plans",
  //    "Roadmap",
  //    "Terms & Conditions",
  //    "Privacy Policy",
  //  ],
  //},
  //{
  //  title: "Company",
  //  items: ["About Us", "Jobs", "Press", "Contact Us"],
  //},
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <NotaLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Nota
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">Support</h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item.title}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.title}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
