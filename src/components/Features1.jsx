import { motion } from "framer-motion";

import light from "../assets/images/screenshot_light.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full pt-24 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">Just take your notes</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Simplicity matters
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Nota focuses on essential functionalities to be a minimal note-taking app you want to use for your daily work.
                There is no plugin system, but Nota offers everything you need.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>GitHub-flavored Markdown</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Light/Dark theme</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Vim mode support</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-4/5 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <div className="flex justify-center">
              <img
                src={light.src}
                alt="Feature image"
                className="rounded-xl object-contain m-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
