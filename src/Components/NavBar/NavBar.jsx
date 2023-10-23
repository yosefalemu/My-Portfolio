import SideBar from "../SideBar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="navBar">
      {/* slider */}
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Joseph portfolio
        </motion.span>
        <motion.div
          className="social-links"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="#">
            <img src="/assets/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/assets/github.png" alt="" />
          </a>
          <a href="#">
            <img src="/assets/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/assets/linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="/assets/telegram.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
