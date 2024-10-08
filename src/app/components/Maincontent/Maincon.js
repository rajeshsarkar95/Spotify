"use client";
import React from "react";
import Image from "next/image";
import "./Maincon.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import profile from "@/app/public/profile.png";
import { MdArrowDropUp } from "react-icons/md";
import Group from "@/app/public/playList/Group.png";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";

function Mainbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handlevisible = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div  className="main-content">
        <div className="main-nav">
          <div className="nav-circals">
            <div className="first-arrow">
              <i>
                <IoIosArrowBack />
              </i>
            </div>
            <div className="second-arrow">
              <i>
                <IoIosArrowForward />
              </i>
            </div>
          </div>

          <div onClick={handlevisible} className="profile-con">
            <Image src={profile} alt="" className="profile-image" />
            <div className="profile-name">Anjeli </div>
            <div className="profile-icon">
              <i>{isOpen ? <IoMdArrowDropdown /> : <MdArrowDropUp />}</i>
            </div>
          </div>
        </div>
        {isOpen ? (
          <div className="Main_Showbar">
            <p>
              Acounts{" "}
              <i className="shower_icon">
                <MdManageAccounts />
              </i>
            </p>
            <p>Profile</p>
            <p>Log out</p>
          </div>
        ) : null}

        <div className="Main_Container">
          <div className="first_container">
            <h1 className="Main_heading">Good morning</h1>
            {/* first box */}
            <div className="main_box_container">
              <div className="Main_boxs">
                <div>
                  <Image className="Main_music_img" src={Group} alt="music" />
                </div>
                <div>
                  <h5 className="Main_h5">Liked Songs</h5>
                </div>
              </div>
              {/* second box */}
              <div className="Main_boxs">
                <div>
                  <Image className="Main_music_img" src={Group} alt="music" />
                </div>
                <div>
                  <h5 className="Main_h5">Liked Songs</h5>
                </div>
              </div>
              {/* third box */}
              <div className="Main_boxs">
                <div>
                  <Image className="Main_music_img" src={Group} alt="music" />
                </div>
                <div>
                  <h5 className="Main_h5">Liked Songs</h5>
                </div>
              </div>
              {/* forth box */}
              <div className="Main_boxs">
                <div>
                  <Image className="Main_music_img" src={Group} alt="music" />
                </div>
                <div>
                  <h5 className="Main_h5">Liked Songs</h5>
                </div>
              </div>
              {/* five box */}
              <div className="Main_boxs">
                <div>
                  <Image className="Main_music_img" src={Group} alt="music" />
                </div>
                <div>
                  <h5 className="Main_h5">Liked Songs</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="second_container">
            <h1 className="Main_heading">Shows you might like</h1>
            <div className="card-container">
              {/* card  1 */}
              <div className="card">
                <div className="card-image">
                  <Image src={Group} alt="Weekly Motivation" />
                </div>
                <div className="card-content">
                  <h1>Weekly Motivation</h1>
                  <p>Ben Ina Scott</p>
                </div>
              </div>
              {/* caed 2 */}
              <div className="card">
                <div className="card-image">
                  <Image src={Group} alt="Weekly Motivation" />
                </div>
                <div className="card-content">
                  <h1>Weekly Motivation</h1>
                  <p>Ben Ina Scott</p>
                </div>
              </div>
              {/* card 3 */}
              <div className="card">
                <div className="card-image">
                  <Image src={Group} alt="Weekly Motivation" />
                </div>
                <div className="card-content">
                  <h1>Weekly Motivation</h1>
                  <p>Ben Ina Scott</p>
                </div>
              </div>
              {/* card 4 */}
              <div className="card">
                <div className="card-image">
                  <Image src={Group} alt="Weekly Motivation" />
                </div>
                <div className="card-content">
                  <h1>Weekly Motivation</h1>
                  <p>Ben Ina Scott</p>
                </div>
              </div>
              {/* card 4 */}
              <div className="card">
                <div className="card-image">
                  <Image src={Group} alt="Weekly Motivation" />
                </div>
                <div className="card-content">
                  <h1>Weekly Motivation</h1>
                  <p>Ben Ina Scott</p>
                </div>
              </div>
              <div className="card">
                <div className="card-image">
                  <Image src={Group} alt="Weekly Motivation" />
                </div>
                <div className="card-content">
                  <h1>Weekly Motivation</h1>
                  <p>Ben Ina Scott</p>
                </div>
              </div>
            </div>
            {/* card ens */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Mainbar;
