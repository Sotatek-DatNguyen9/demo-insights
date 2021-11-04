import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme: any) => {
  return {
    headerWrap: {
      width: "100%",
      height: "100%",
      backgroundColor: "#1fc76a",
    },
    headerWrapTitle: {
      color: "#FFF",
      fontSize: "30px!important",
      width: "100%",
      height: "100%",
      padding: "40px 0 0 0",
      fontFamily: "roboto",
      marginBottom: "15px",
    },
    headerWrapTitleSpan: {
      color: "#ffe03c ",
      fontSize: "30px!important",
    },
    headerWrapContent:{
        color:"#fff",
        fontSize:"20px",
        paddingBottom:"20px"
    }
  };
});
export default styles;
