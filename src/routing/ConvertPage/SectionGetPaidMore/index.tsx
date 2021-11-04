import { Link } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const SectionGetPaidMore = (props: any) => {
  const styles = useStyles();

  return (
    <section className={styles.sectionGetPaidMore}>
      <div className={styles.contentBox}>
        <div className={styles.bagImage}>
          <img src="/images/bag.png" alt="" />
        </div>
        <div className={styles.grText}>
          <div>Ready to make more money?</div>
          <div>Start your job search today</div>
        </div>
        <div className={styles.clearfix}></div>
        <Link href="#" className={styles.linkGet}>
          Get Paid More
        </Link>
      </div>
    </section>
  );
};

export default SectionGetPaidMore;
