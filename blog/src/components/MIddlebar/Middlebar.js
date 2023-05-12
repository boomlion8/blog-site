import React from "react";
import house from "./images/house.jpg";
import house1 from "./images/house1.jpg";
import house2 from "./images/house2.jpg";

import cafe1 from "./images/cafe1.jpg";
import cafe2 from "./images/cafe2.jpg";
import cafe3 from "./images/cafe3.jpg";
import cafe4 from "./images/cafe4.jpg";
import cafe5 from "./images/cafe5.jpg";
import cafe6 from "./images/cafe6.jpg";
import cafe7 from "./images/cafe7.jpg";
import cafe8 from "./images/cafe8.jpg";

import monument1 from "./images/monument1.jpg";
import monument2 from "./images/monument2.jpg";
import monument3 from "./images/monument3.jpg";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

import { BiArrowToRight } from "react-icons/bi";

import "./middlebar.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function Middlebar() {
  return (
    <>
      <div className="middlebar">
        <div className="middlebar_wrapper">
          <div className="middlebar_component">
            <div>
              <img src={house} alt="" className="house" />
            </div>
            <div className="house">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit
              </p>
            </div>
            <div>
              <img src={house1} alt="" className="house" />
            </div>
          </div>
          <div className="middlebar_component">
            <div className="house">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit
              </p>
            </div>
            <div>
              <img src={house2} alt="" className="house" />
            </div>
            <div className="house">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit
              </p>
            </div>
          </div>
        </div>

        <h1 className="heading">Where to Eat In Dilyan</h1>
        <div>
          <div className="middlebar_component">
            <h1 className="heading_second">Loren ipsum</h1>
            <div>
              <img src={cafe1} alt="" className="house" />
            </div>
            <div>
              <img src={cafe2} alt="" className="house" />
            </div>
            <div className="heading_second">
              <BiArrowToRight />
            </div>
          </div>

          <div className="middlebar_component">
            <h1 className="heading_second">Loren ipsum</h1>
            <div>
              <img src={cafe3} alt="" className="house" />
            </div>
            <div>
              <img src={cafe4} alt="" className="house" />
            </div>
            <div className="heading_second">
              <BiArrowToRight />
            </div>
          </div>
          <div className="middlebar_component">
            <h1 className="heading_second">Loren ipsum</h1>
            <div>
              <img src={cafe5} alt="" className="house" />
            </div>
            <div>
              <img src={cafe6} alt="" className="house" />
            </div>
            <div className="heading_second">
              <BiArrowToRight />
            </div>
          </div>
          <div className="middlebar_component">
            <h1 className="heading_second">Loren ipsum</h1>
            <div>
              <img src={cafe7} alt="" className="house" />
            </div>
            <div>
              <img src={cafe8} alt="" className="house" />
            </div>
            <div className="heading_second">
              <BiArrowToRight />
            </div>
          </div>
        </div>

        <h1 className="heading">Where to go in Dilyan</h1>
        <div>
          <div>11 May 2023</div>
          <div>Loren Ipsum</div>
          <div className="monument_wrapper">
            <div>
              <img src={monument1} alt="" className="monument" />
            </div>
            <div className="monument_right">
              <div>
                <img src={monument2} alt="" className="monument_img" />
              </div>
              <div>
                <img src={monument3} alt="" className="monument_img" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="heading">Gallery</h1>

        <div className="card">
          <div className="card__item">
            <div>
              <img src={img1} alt="" className="img_img" />
            </div>
            <div></div>
          </div>
          <div className="card__item">
            <div>
              <img src={img2} alt="" className="img_img" />
            </div>
            <div></div>
          </div>
          <div className="card__item">
            <div>
              <img src={img3} alt="" className="img_img" />
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom_header">
          <h1 className="heading wel">Welcome to Dilyan</h1>
        </div>

        <div>
          <div className="bottombar">
            <div className="bottombar_left">
              <div className="category">Category</div>
              <div className="bottombar_item">History</div>
              <div className="bottombar_item">Monuments</div>
              <div className="bottombar_item">Entertainment</div>
            </div>
            <div className="bottombar_left">
              <div className="category">Section</div>
              <div className="bottombar_item">Photo</div>
              <div className="bottombar_item">Videos</div>
              <div className="bottombar_item">Articles</div>
            </div>
            <div className="bottombar_left">
              <div className="category">Contact</div>
              <div className="bottombar_item">Amer</div>
              <div className="bottombar_item">loremipsum@gmail.com</div>
              <div className="card">
                <div>
                  <BsFacebook />
                </div>
                <div>
                  <BsInstagram />
                </div>
                <div>
                  <BsTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Middlebar;
