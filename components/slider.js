import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/styles/slider.module.css";
import John from "@/images/johnmakola.jpg";

function SliderHome() {
  return (
    <div className={Styles.container}>
      <div className={Styles.column1}>
        <div className={Styles.imageContainer}>
          <Image src={John} fill alt="John Makola" className={Styles.image} />
          <hr />
        </div>
        <ul>
          <Link href="/aboutme">
            <li>About me</li>
            <hr />
          </Link>
          <Link href="/skillspage">
            <li>Skill Set</li>
            <hr />
          </Link>
          <Link href="/projects">
            <li>Projects</li>
            <hr />
          </Link>
          <Link href="/contact">
            <li>Get In Touch</li>
            <hr />
          </Link>
          <Link href="/articles">
            <li>Articles</li>
            <hr />
          </Link>
        </ul>
      </div>
      <div className={Styles.column2}>
        <div className={Styles.titles}>
          <h5>Hi, my name is</h5>
        </div>

        <div className={Styles.titles}>
          <h2>John Makola</h2>
        </div>
        <div className={Styles.descriptionContainer}>
          {" "}
          <h4>
            "I build software that empowers individuals and communities,
            promoting greater social well-being and inclusion."
          </h4>
        </div>

        <div className={Styles.titles}>
          <h5>I am a passionate Full Stack Developer</h5>
        </div>
        <div className={Styles.descriptionContainer}>
          <h5>About me</h5>
          <p>
            I'm a full stack web developer with experience in building and
            supporting web app solutions for a variety of use cases from:
            individuals, small, medium sized, and corporates businesses,
            Non-Governmental and Governmental institutions.{" "}
          </p>
          <p>
            Whether looking for to freshen up your web apps or web portals or
            build new products, develop part components to enhance, optimize
            your usability and user experience, I can help! I am passionate
            about human computer interactions (UI & UX) and delivery of
            exemplary mockups, wireframes, and graphics designs.
          </p>
          <p>
            I am currently based in Nairobi Kenya. I provide my services
            remotely, we can schedule a meeting to further discuss you needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SliderHome;
