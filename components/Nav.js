import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "@/images/johnmakolalogo.png";
import Styles from "@/styles/Nav.module.css";
// import { useOutsideClick } from "@/utils/outsideClick";
import { FaBars, FaChevronDown } from "react-icons/fa";

function Nav() {
  const router = useRouter();
  const [showLinks, setShowLinks] = useState(false);
  const currentRoute = router.pathname;
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setShowLinks(!showLinks);
    setHover(!hover);
  };

  // useEffect(() => {
  //   if (showLinks === true) {
  //     setTimeout(() => {
  //       setShowLinks(false);
  //     }, 3000);
  //   }
  // }, [showLinks]);

  return (
    <div className={Styles.Navbar}>
      <div
        className={Styles.leftSide}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <button
        // onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars className={Styles.faBars} />
        </button>
        <div className={Styles.imageContainer}>
          <Image src={Logo} fill alt="John Makola" className={Styles.image} />
        </div>
        <div className={Styles.links} id={!showLinks ? "" : Styles.hidden}>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/aboutme">
              <li>About Me</li>
            </Link>

            <Link href="/projects">
              <li>Projects</li>
            </Link>
            <Link
              href="/skillspage"
              className={
                currentRoute === "/skillspage"
                  ? Styles.active
                  : Styles.nonActive
              }
            >
              <li>Skill-Set</li>
            </Link>
            <Link
              href="/techstack"
              className={
                currentRoute === "/techstack" ? Styles.active : Styles.nonActive
              }
            >
              <li>Tech-Stack</li>
            </Link>
            <Link href="John_Makola_Curriculum_Vitae.pdf" target="_blank">
              <li>Download CV</li>
            </Link>
            <Link
              href="/articles/1"
              className={
                currentRoute === "/articles/" ? Styles.active : Styles.nonActive
              }
            >
              <li> Articles</li>
            </Link>
            <Link href="/contact">
              <li>Get in Touch</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={Styles.rightSide}>Nav</div>
    </div>
  );
}

export default Nav;
