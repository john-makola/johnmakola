import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import PageComponent from "@/components/pagecomponent";
import Styles from "@/styles/pagenotfound.module.css";
import Computer from "@/public/pfmsystem.png";

const StaffAppraisal = () => {
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
          <h3>Staff Performance Appraisal System</h3>
          <hr />
          <div>
            <p>
              A staff performance appraisal system can be used by organizations
              to evaluate and assess the performance of their employees. The
              goal of this appraisal system is to provide feedback to employees
              on their work performance, identify areas where improvement is
              needed, and to provide a basis for making decisions about
              promotion, salary increases, and training.
            </p>
            <p>
              This System typically helps each employee set goals and
              objectives, and then evaluates their performance against these
              goals at regular intervals. The evaluation process may involves
              self-assessment by each employee, as well as feedback from their
              supervisor, colleagues, and customers.
            </p>
            <h5>Objectictive of the System</h5>
            <p>The objectives of the performance appraisal system is to:</p>
            <ul>
              <li>Help organizations identify and retain top performers</li>
              <li>Improve the performance of underperforming employees</li>
              <li>
                Create a culture of continuous improvement and development.
              </li>
            </ul>
          </div>
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

export default StaffAppraisal;
