import React, { Component } from "react";
import { Basic } from "./ServiceItems";
import { Regular } from "./ServiceItems";
import { Works } from "./ServiceItems";
import { Button } from "../Button";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="Services-Container">
        {/* BASIC */}
        <div className="ServiceCard">
          <div className="Header">
            {Basic.map((item, index) => {
              return (
                <h1 key={index} className={item.titlecName}>
                  {item.title}
                </h1>
              );
            })}
          </div>
          <img
            className="BasicImage"
            src="https://cdn.pixabay.com/photo/2015/09/13/18/43/lawn-mower-938555_960_720.jpg"
          />
          {Basic.map((item, index) => {
            return (
              <p key={index} className={item.cName}>
                {item.description}
              </p>
            );
          })}
        </div>

        {/* REGULAR */}
        <div className="ServiceCard">
          <div className="Header">
            {Regular.map((item, index) => {
              return (
                <h1 key={index} className={item.titlecName}>
                  {item.title}
                </h1>
              );
            })}
          </div>
          <img
            className="RegularImage"
            src="https://knowhow.napaonline.com/wp-content/uploads/2016/08/string-trimmer-via-flickr1.jpg"
          />
          {Regular.map((item, index) => {
            return (
              <p key={index} className={item.cName}>
                {item.description}
              </p>
            );
          })}
        </div>

        {/* WORKS */}
        <div className="ServiceCard">
          <div className="Header">
            {Works.map((item, index) => {
              return (
                <h1 key={index} className={item.titlecName}>
                  {item.title}
                </h1>
              );
            })}
          </div>
          <img
            className="WorksImage"
            src="https://www.gardenseeker.com/wp-content/uploads/2019/11/how-high-to-mow-the-lawn.jpg"
          />
          {Works.map((item, index) => {
            return (
              <p key={index} className={item.cName}>
                {item.description}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Services;
