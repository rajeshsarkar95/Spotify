/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./Navbar.css";
import home from "@/app/public/home.png";
import SpotifyIme from "@/app/public/Spotifylogo.png";
import serch from "@/app/public/search.png";
import Image from "next/image";
import library from "@/app/public/library.png";
import Vector from "@/app/public/playList/Vector.png";
import Grops from "@/app/public/playList/Group.png";
import Potcust from "@/app/public/playList/potcust.png";

function Navbar() {
  return (
    <>
        <div className="sidebar">
          <div className="side-logo">
            <div className="Nav_Images">
              <Image className="spotify-logo" src={SpotifyIme} alt="spotyfy" />
            </div>
          </div>
          <div className="side-cantainer">
            <div className="box side-home">
              <div className="side-icon-container">
                <div className="side-icon-item">
                  <div className="side-home">
                    <Image src={home} class="side-icon" alt="Home" />
                  </div>
                  <div>
                    <h3>Home</h3>
                  </div>
                </div>
                <div className="side-icon-item">
                  <div>
                    <Image src={serch} class="side-icon" alt="Search" />
                  </div>
                  <div>
                    <h3>Search</h3>
                  </div>
                </div>
                <div className="side-icon-item">
                  <div>
                    <Image src={library} class="side-icon" alt="Library" />
                  </div>
                  <div>
                    <h3>Library</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="box side-paylist">
              <div className="side-icon-container">
                <div className="side-icon-item">
                  <div className="side-home paylist">
                    <Image
                      src={Vector}
                      class="side-icon  paylist-Image"
                      alt="Home"
                    />
                  </div>
                  <div>
                    <h3>Create Playlist</h3>
                  </div>
                </div>
                <div className="side-icon-item">
                  <div>
                    <Image src={Grops} class="side-icon" alt="Search" />
                  </div>
                  <div>
                    <h3>Liked Songs</h3>
                  </div>
                </div>
                <div className="side-icon-item">
                  <div className="potcust">
                    <Image
                      src={Potcust}
                      class="side-icon"
                      id="potcust-Img"
                      alt="Library"
                    />
                  </div>
                  <div>
                    <h3>Your Episodes</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="box side-fav">
              <ul className="side-favrate">
                <h3>FAV</h3>
                <h3>Daily Mix 1</h3>
                <h3>Discover Weekly</h3>
                <h3>Malayalam</h3>
                <h3>Dance / Electronix Mix</h3>
                <h3>EDM / Popular</h3>
              </ul>
            </div>
          </div>
        </div>
        
    </>
  );
}
export default Navbar;
