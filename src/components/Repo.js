import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./component.css";
import { useSelector } from "react-redux";
import link from "../link.svg";

const Repo = ({ repo, index }) => {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={"repo-container" + (darkMode ? " repo-dark" : "")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.01 * index }}
      >
        <div className="repo-top">
          <p>{repo.name}</p>
          {repo.language ? <p>{repo.language}</p> : null}
          <a
            href={repo.html_url}
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            <span>
              <img src={link} height={20} width={20} alt="url-link-icon" />
            </span>
          </a>
        </div>
        <div className="repo-bottom">
            {repo.description ? repo.description : "No description available."}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Repo;
