import Link from "next/link";
import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <>
      
      <div className={styles.copyright}>
        <div className={styles.containerCopyright}>
          <p>
            {" "}
            Copyright : &copy; {new Date().getFullYear()} John Makola
          </p>
        </div>

        <div className={styles.containerCopyright}>
          <ul>
            <li>
              <Link href="/about">About this Portforlio</Link>
            </li>
            <li>
              <Link href="/">Privacy & Cookies</Link>
            </li>
            <li>
              <Link href="/">Help</Link>{" "}
            </li>
            <li>
              <Link href="/">Feedback</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
