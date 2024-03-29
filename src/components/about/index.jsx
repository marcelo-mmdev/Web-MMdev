import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../config/constants";
import { SectionWrapper } from "../../config/hoc";
import { fadeIn, textVariant } from "../../config/utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-2 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="Developer Full-Stack"
          className="w-50 h-60 rounded-[20px] object-contain"
        />

        <h3 className="text-white text-[14px] py-2 font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex gap-10">
        <div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
              Software Developer Full-Stack.
            </p>
            <h2 className={styles.sectionHeadText}>Marcelo Rodrigues.</h2>
          </motion.div>

          <div className="mt-10 flex flex-row justify-between gap-5">
            <div className="flex">
              {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
              ))}
            </div>
            <div className="mt-1 flex flex-row">
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
              >
                I'm a Software Developer recently graduated in Analysis and
                Systems Development, I'm very interested in always wanting to
                find solutions to problems using technology. Passionate about
                Programming and Anime. I'm always looking for me update in the
                area of Software Development, participating in groups, forums
                and online courses. I have 2 years of experience and already I
                worked both in the back-end and in the front-end, using Java,
                Javascript, Typescript, Reactjs, Spring, Nodejs, PostgreSQL, SQL
                Server and I'm currently studying Nextjs and Spring Boot as I
                have a lot to evolve as a person and as a developer.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
