import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { TfiViewList } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineLabel } from "react-icons/md";
import { BsArchive, BsFillTrashFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import { IoGridOutline } from "react-icons/io";

const Homepage = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);

  const [inputFocusToggle, setInputFocusToggle] = useState(true);

  const toogleSidebar = () => {
    setSideBarStatus(!sideBarStatus);
  };

  const inputFocusHandler = () => {
    setInputFocusToggle(!inputFocusToggle);
  };

  return (
    <>
      <nav className="home-navbar">
        <div className="hamburger-menu">
          <GiHamburgerMenu onClick={toogleSidebar} />
        </div>
        <div className="mid">
          <div>
            <input
              placeholder="Search"
              className="input-search"
              type="search"
            />
            <button className="btn-search" title="search">
              <BsSearch />
            </button>
          </div>

          <div>
            <TfiViewList title="List View" className="list-view" />
          </div>
        </div>
      </nav>
      <div className="center">
        <aside className={sideBarStatus ? "side-bar-show" : "side-bar-hide"}>
          <div>
            <div className="sideBar-item">
              <AiFillHome />
              <p>Home</p>
            </div>

            <div className="sideBar-item">
              <MdOutlineLabel />
              <p>Label</p>
            </div>

            <div className="sideBar-item">
              <BsArchive />
              <p>Archive</p>
            </div>

            <div className="sideBar-item">
              <BsFillTrashFill />
              <p>Trash</p>
            </div>

            <div className="sideBar-item">
              <CgProfile />
              <p>Profile</p>
            </div>
          </div>
        </aside>
        <main
          className={
            sideBarStatus ? "main-containerSmall" : "main-containerBig"
          }
        >
          <div className="inner-main">
            {inputFocusToggle ? (
              <div className="takeANote-input-container">
                <input
                  className="takeANote-input"
                  type="text"
                  placeholder="Take a note..."
                  onFocus={inputFocusHandler}
                ></input>
              </div>
            ) : (
              <div className="addNote-input-container">
                <input
                  className="addANote-input"
                  type="text"
                  placeholder="Enter title"
                ></input>
                <input
                  type="text"
                  className="addANote-input-ext"
                  placeholder="Take a note..."
                ></input>
                <div className="addNote-inp-btns">
                  <button onClick={inputFocusHandler}>Close</button>
                  <button>Add Note</button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Homepage;
