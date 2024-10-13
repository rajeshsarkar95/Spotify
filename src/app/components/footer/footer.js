/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import "./footer.css";
import Image from "next/image";
import Rectangle from "@/app/public/Rectangle.png";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { BsRepeat } from "react-icons/bs";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { TbMicrophone2 } from "react-icons/tb";
import { PiQueue } from "react-icons/pi";
import { LuLaptop2 } from "react-icons/lu";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { LuMoveDiagonal } from "react-icons/lu";
function footer() {
  const [visible, setVisible] = useState(false);
  const [play, setPlay] = useState(false);

  const handleVisible = () => {
    setVisible(true);
  };

  const handleHide = () => {
    setVisible(false);
  };

  const handleplay = () => {
    setPlay(true);
  };

  const handlepoused = () => {
    setPlay(false);
  };

  return (
    <>
      <div className="footer_container">
        <div className="footer_Dreaming">
          <div className="footer_Iames">
            <Image className="Footer_images" src={Rectangle} alt="" />
          </div>
          <div className="heading">
            <h4>Dreaming </h4>
            <p>NEFFEX</p>
          </div>
          <div className="herdicon">
            {visible ? (
              <i onClick={handleHide} className="footer_icon_green">
                <FaHeart />
              </i>
            ) : (
              <i onClick={handleVisible} className="footer_icon_heart">
                <CiHeart />
              </i>
            )}
          </div>
        </div>
        <div className="footer_play">
          <div className="music_playicon">
            <div className="shuffle">
              <i>
                <FaShuffle />
              </i>
            </div>
            <div className="previous">
              <i>
                <MdSkipPrevious />
              </i>
            </div>

            <div className="play">
              {play ? (
                <i onClick={handlepoused}>
                  <FaPlay />
                </i>
              ) : (
                <i onClick={handleplay}>
                  <TbPlayerPauseFilled />
                </i>
              )}
            </div>

            <div className="next">
              <i>
                <MdSkipNext />
              </i>
            </div>
            <div className="repite">
              <i>
                <BsRepeat />
              </i>
            </div>
          </div>
        </div>
        <div className="footer_volume">
          <div className="microphone">
            <i>
              <TbMicrophone2 />
            </i>
          </div>
          <div className="queue">
            <i>
              <PiQueue />
            </i>
          </div>
          <div className="laptop">
            <i>
              <LuLaptop2 />
            </i>
          </div>
          <div className="speakar">
            <i>
              <HiOutlineSpeakerWave />
            </i>
          </div>
          <div className="radiobutton">
            <progress id="file" value="0" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div className="diagonal">
            <i>
              <LuMoveDiagonal />
            </i>
          </div>
        </div>
      </div>
    </>
  );
}
export default footer;
