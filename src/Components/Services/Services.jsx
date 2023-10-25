import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const underLineVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: -60,
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 2,
      },
    },
  };
  const itemUnderLineVariants = {
    initial: {
      x: -4500,
      opacity: 0,
    },
    animate: {
      x: -30,
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 2,
      },
    },
  };

  return (
    <div className="services">
      <div className="wrapper">
        <div className="header">
          <h1 className="title">What i do current now</h1>
          <motion.div
            className="underline"
            variants={underLineVariants}
            initial="initial"
            animate="animate"
          />
        </div>

        <motion.div
          className="items-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="item" variants={textVariants}>
            <motion.div className="item-wrapper" whileHover={{ scale: 0.9 }}>
              <motion.div className="item-header">
                <motion.h3 className="item-title">Student @ AAiT</motion.h3>
                <motion.div
                  className="item-underline"
                  variants={itemUnderLineVariants}
                />
              </motion.div>
              <motion.p className="item-text">
                I am a fifth-year electrical and computer engineering student,
                and I've achieved a strong CGPA and honed my programming skills
                over two years of self-learning.
              </motion.p>
              <motion.p className="starting-time">
                <motion.span>Starting-time</motion.span> : October-2019
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div className="item" variants={textVariants}>
            <motion.div className="item-wrapper" whileHover={{ scale: 0.9 }}>
              <motion.div className="item-header">
                <motion.h3 className="item-title">Intern @ MiNT</motion.h3>
                <motion.div
                  className="item-underline"
                  variants={itemUnderLineVariants}
                />
              </motion.div>
              <motion.p className="item-text">
                I'm interning and developing a website for the Ministry of
                Innovation and Technology using React, Node, and GraphQL.
              </motion.p>
              <motion.p className="starting-time">
                <motion.span>Starting-time</motion.span> : October-01-2023
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div className="item" variants={textVariants}>
            <motion.div className="item-wrapper" whileHover={{ scale: 0.9 }}>
              <motion.div className="item-header">
                <motion.h3 className="item-title">
                  Intern @ Addis Software
                </motion.h3>
                <motion.div
                  className="item-underline"
                  variants={itemUnderLineVariants}
                />
              </motion.div>
              <motion.p className="item-text">
                I'm interning at Addis Software, where I'm developing a website
                for a music player app using the MERN stack.
              </motion.p>
              <motion.p className="starting-time">
                <motion.span>Starting-time</motion.span> : October-14-2023
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="over-lay">Current position</div>
      </div>
    </div>
  );
};

export default Services;
