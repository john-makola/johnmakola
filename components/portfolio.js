import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Styles from "@/styles/portfolio.module.css";

const inter = Inter({ subsets: ["latin"] });

function Portforlio() {
  return (
    <div className={Styles.container}>
      <div>
        <h3>Portforlio</h3>
        <h3>Recent Projects</h3>
        <div className={Styles.grid}>
          <Link
            href="http://www.aspiregraphics.co.ke/"
            className={Styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Aspire Graphics <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              WebSite for Aspire Graphics an IT Support Firm running
              Web-App/Software Development Services & Print Services.
            </p>
          </Link>

          <Link
            href="http://gloan.africa/"
            className={Styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              G-LOAN: <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Website, Mobile and Backend Management Information System for a
              Financial Lending Company.
            </p>
          </Link>

          <Link
            href="/staffappraisal"
            className={Styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Staff Appraisal System <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              A management Information System for Staff Performance Appraisal
            </p>
          </Link>

          <Link
            href="https://www.simplesimonsafaris.com/"
            className={Styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Simple Simon Safaris <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              A Personal Tours and Travels Portforlio Web site for Simon,
              Offering Hiking, Trekking and Trails Trips in East Africa:
            </p>
          </Link>
          <a
            href="http://invistainc.africa/"
            className={Styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Investment Co. Website <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              A Wordpress Website for an Ivestment Company
            </p>
          </a>
          <a
            href="https://visitationdaughtersihm.org/"
            className={Styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Visitation Daughters <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Community Based Website for Visitation Daughters of Mary
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portforlio;
