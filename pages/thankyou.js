import PageComponent from "@/components/pagecomponent";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import Signature from "@/images/signature.png";
import Styles from "@/styles/thankyou.module.css";

function ThankYou({ name }) {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div>
      {/* <PageComponent> */}
      <div>
        <h3>Thank You</h3>
        Dear {name},
        <p>
          {" "}
          I wanted to take a moment to thank you for taking the time to visit my
          website portfolio and consider me for your project. It means a great
          deal to me that you would take an interest in my work and I am truly
          grateful for the opportunity to showcase my skills and experience.
        </p>
        <p>
          I am passionate about what I do and strive to deliver high-quality
          results that exceed expectations. Whether you're looking for a website
          designer, developer, or content creator, I am confident that I have
          the skills and expertise to meet your needs and help you achieve your
          goals.
        </p>
        <p>
          Please feel free to reach out to me with any questions you may have or
          to discuss your project in more detail. I would be honored to work
          with you and help bring your vision to life.
        </p>
        <p> Once again, thank you for considering me for your project.</p>
        <p> I look forward to hearing from you soon.</p>
        <p>Best regards,</p>
      </div>
      <div className={Styles.imageContainer}>
        <Image
          src={Signature}
          fill
          alt="John Makola"
          className={Styles.image}
        />
      </div>
      <span>Email:</span> <p>johnmakola@gmail.com</p>
      <span>Email 2:</span> <p>info@johnmakola.com</p>
      <span>Tel No:</span> <p>+254-721447666</p>
      {/* </PageComponent> */}
    </div>
  );
}

export default ThankYou;
