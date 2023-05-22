import Head from "next/head";

import styles from "@/styles/Home.module.css";
import SliderHome from "@/components/slider";
import Portforlio from "@/components/portfolio";
import TechnologyStack from "@/components/technologystackhome";
import SkillSetContact from "@/components/skillsetcontact";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Makola</title>
        <meta name="description" content="A Fullstack Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SliderHome />
        <Portforlio />
      </main>
      <TechnologyStack />
      <SkillSetContact />
    </>
  );
}
