import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../App.css";
import "./component.css";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./loader";
import { useDispatch, useSelector } from "react-redux";
import close from "../close.svg";
import web from '../web.svg';
import { GetUserRepos } from "../redux/actions";
import Repo from "./Repo";

const Modal = ({ modal, setModal }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const darkMode = useSelector((state) => state.darkMode);
  const repos = useSelector(state => state.repos);
  const error = useSelector((state) => state.error);
  const { result } = useSelector((state) => state.userInfo);

  const [page, setPage] = useState(0);

  const handleBlogOpen = (url) => {
    window.location.replace(url)
  }

  const handleLoadRepos = (page) => {
    setPage(page);
    dispatch(GetUserRepos(result.login, page));
  }


  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setModal(false);
      }, 1500);
    }
  });

  useEffect(() => {document.title = 'Search for an user'}, [])

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {modal && (
          <motion.div
            className={"user-modal" + (darkMode ? " modal-dark" : "")}
            key="opened"
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {result && (
                <>
                <div className="modal-top">
                  <div className="profile">
                    <motion.img
                      className="modal-image"
                      animate={{ scale: 1, x: 0, y: 0 }}
                      src={result.avatar_url}
                      height={150}
                      alt="profile-pic"
                    />
                    <p className={darkMode ? "color-dark" : ""}>{result.bio ? result.bio : ""}</p>
                  </div>
                  <div>
                    <motion.img
                    onClick={() => setModal(false)}
                    className={'close-icon'}
                      animate={{ scale: 1, x: 0, y: 0 }}
                      src={close}
                      height={35}
                      alt="close-button-icon"
                    />
                  </div>
                </div>
                <div className={"modal-body" + (darkMode ? " color-dark" : "")}>
                <div className="flex-col">
                    <p>Location</p>
                    <p>{result.location ? result.location : "N/A"}</p>
                  </div>
                  <div className="flex-col">
                    <p>Name</p>
                    <p>{result.name ? result.name : result.login}</p>
                  </div>
                  <div className="flex-col">
                    <p>Gists</p>
                    <p>{result.public_gists}</p>
                  </div>
                  <div className="flex-col">
                    <p>Followers</p>
                    <p>{result.followers ? result.followers : 0}</p>
                  </div>
                  <div className="flex-col">
                    <p>Repositories</p>
                    <p>{result.public_repos}</p>
                  </div>
                  <div className="flex-col">
                    <p>Following</p>
                    <p>{result.following ? result.following : 0}</p>
                  </div>

                  <div className="flex-col">
                    <p>Created On</p>
                    <p>{result.created_at ? new Date(result.created_at).toDateString() : "N/A"}</p>
                  </div>
                  <div className="flex-col">
                    <p>Updated On</p>
                    <p>{result.updated_at ? new Date(result.updated_at).toDateString() : "N/A"}</p>
                  </div>
                  <div className="flex-col">
                    <p>Blog</p>
                    <p onClick={() => handleBlogOpen(result.blog)}><img alt="blog-icon" src={web} height={25} width={25} /></p>
                  </div>
                  

                </div>
                <div className={"repos"}>
                  {repos && repos.length > 0 && (
                    repos.map((repo, index) => {
                      return (
                        <Repo repo={repo} key={index} index={index} />
                      )
                    })
                  )}
                </div>
                
                <button className="load-repos" onClick={() => handleLoadRepos(page + 1)}>
                  Load Repositories
                </button>
                
                </>
            )}

            {loading && <Loader />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Modal.propTypes = {
  userInfo: PropTypes.object,
  // name: PropTypes.string,
  // email: PropTypes.string,
  // image: PropTypes.string,
  // followers: PropTypes.number,
  // following: PropTypes.number,
  // website: PropTypes.string,
  // githubUrl: PropTypes.string,
  // location: PropTypes.string,
  // repos: PropTypes.number,
  // bio: PropTypes.string,
  // createdAt: PropTypes.string,
  // updatedAt: PropTypes.string,

  modal: PropTypes.bool,
  setModal: PropTypes.func,
};

export default Modal;
