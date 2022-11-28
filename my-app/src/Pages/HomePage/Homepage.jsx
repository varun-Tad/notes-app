import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { TfiViewList } from "react-icons/tfi";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineLabel } from "react-icons/md";
import { BsArchive, BsFillTrashFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import { IoGridOutline } from "react-icons/io";

const Homepage = () => {
  return (
    <>
      <nav className="home-navbar">
        <div className="hamburger-menu">
          <GiHamburgerMenu />
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
        <aside className="side-bar">
          <div>
            <div className="sideBar-item">
              <GrHomeRounded />
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
        <main>
          <p>hello</p>
        </main>
      </div>
    </>
  );
};

export default Homepage;
