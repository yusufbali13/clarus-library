import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";
import profile from "../../assets/about.png";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="anthony" />
      <InfoContainer>
        <h2>Hi, I'm Yusuf</h2>
        <h3>I’m currently learning Front-end Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, NextJs, NodeJS, MongoDB,SQL, Python,
          AWS Services, bootstrap, sass.
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
        <IconContainer>
          {iconData.map((item) => (
            <a key={item.icon} href={item.href}>
              <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
            </a>
          ))}
        </IconContainer>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
