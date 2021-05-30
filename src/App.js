import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ClearRepos, GetUser, ToggleDarkMode } from "./redux/actions";
import Modal from "./components/modal";
import Toast from "./components/toast";
import sun from "./sun.svg";
import moon from "./moon.svg";
import heart from './heart.svg';
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open : {
    y : '-40vh'
  },
  closed : {
    y : 0
  }
}

const App = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const darkMode = useSelector((state) => state.darkMode);
  const [modal, setModal] = useState(false);

  useEffect(() => {document.title = 'Search for an user'}, [])

  const handleChange = (value) => {
    setUsername(value);
  };

  const handleSearch = (code) => {
    if ((code === "Enter" || code === "NumpadEnter") && username.length !== 0) {
      setModal(true);
      dispatch(GetUser(username));
      dispatch(ClearRepos());
    }
  };

  return (
    <div className={"main" + (darkMode ? " dark" : "")}>
      <AnimatePresence>
        {darkMode ? (
          <motion.img
            src={sun}
            className="toggle"
            height={35}
            width={35}
            alt="sun-icon"
            onClick={() => dispatch(ToggleDarkMode())}
          />
        ) : (
          <motion.img
            src={moon}
            className="toggle"
            height={35}
            width={35}
            alt="moon-icon"
            onClick={() => dispatch(ToggleDarkMode())}
          />
        )}
      </AnimatePresence>
      <motion.input
        className={darkMode ? "dark-input" : ""}
        type="text"
        variants={variants}
        animate={modal ? "open" : "closed"}
        placeholder="Enter a username"
        value={username}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleSearch(e.key)}
      />

      <Modal
        modal={modal}
        setModal={setModal}
      />
      <Toast />
      <p className={"about" + (darkMode ? " color-dark" : "")}>Made with <img className="heart" src={heart} height={25} width={25} alt="heart-icon"/> by Adityesh</p>
    </div>
  );
};
export default App;
