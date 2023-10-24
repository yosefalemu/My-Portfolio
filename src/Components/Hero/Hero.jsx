import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const sliderVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-358%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>YOSEF ALEMU</motion.h2>
          <motion.h1 variants={textVariants}>
            Web and Mobile app developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See latest work
            </motion.button>
            <motion.button className="contactMe" variants={textVariants}>
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="/assets/hero.jpg" alt="" />
      </div>
      <motion.div
        className="slidingText"
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        STUDENT @ AAiT
      </motion.div>
    </div>
  );
};

export default Hero;
