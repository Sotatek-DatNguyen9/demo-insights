import React from "react";
import useStyles from "./styles";
import { Container } from "@material-ui/core";
const Header = () => {
  const styles = useStyles();
  return (
    <div className={styles.headerWrap}>
      <Container>
        <div className={styles.headerWrapTitle}>
          Joblabs . <span className={styles.headerWrapTitleSpan}>Insights</span>
        </div>
        <div className={styles.headerWrapContent}>
        Learn about the latest market trends and find your ideal company
        </div>
      </Container>
    </div>
  );
};
export default Header;
