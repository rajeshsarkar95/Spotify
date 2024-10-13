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
  const [expand, setExpand] = useState(false);
   
  const currentHour = new Date().getHours();

  let greeting = "";

  if(currentHour < 12){
    greeting = "Good Morning";
  } else if (currentHour < 18 ){
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening"
  }
  const handlevisible = () => {
    setIsOpen(!isOpen);
  };
  const handleExpand = () => {
    setExpand(true);
  };
  const handleCollapse = () => {
    setExpand(false);
  };
  return (
    <>
      <div
        className="main-content"
        style={{
          width: expand ? "75%" : "80%",
          transition: "width 0.5s ease",
        }}
      >
        <div className="main-nav">
          <div className="nav-circals">
            <div
              onClick={handleCollapse}
              disabled={expand}
              className="first-arrow"
            >
              <i
                style={{
                  color: !expand ? "gray" : "inherit",
                  cursor: !expand ? "not-allowed" : "pointer",
                }}
              >
                <IoIosArrowBack />
              </i>
            </div>
            <div
              onClick={handleExpand}
              disabled={!expand}
              className="second-arrow"
            >
              <i
                style={{
                  color: expand ? "gray" : "inherit",
                  cursor: expand ? "not-allowed" : "pointer",
                }}
              >
                <IoIosArrowForward />
              </i>
            </div>
          </div>
          <div onClick={handlevisible} className="profile-con">
            <Image src={profile} alt="" className="profile-image" />
            <div className="profile-name">Katrina</div>
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
            <h1 className="Main_heading">{greeting}</h1>
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
            <div className="second_container_flex">
              <h1 className="Main_heading">Shows you might like</h1>
              <h4 className="see_heading">Show all</h4>
            </div>
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
