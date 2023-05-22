import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import PageComponent from "@/components/pagecomponent";
import Styles from "@/styles/pagenotfound.module.css";
import Computer from "@/images/computer.jpg";

const PageNotFound = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 1500);
  // }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <PageComponent>
        <div className={Styles.container}>
          <h3>Page Not Found</h3>
          <hr />
          <div className={Styles.imageContainer}>
            <Image
              src={Computer}
              fill
              alt="John Makola"
              className={Styles.image}
            />
          </div>
        </div>
      </PageComponent>
    </div>
  );
};

export default PageNotFound;
