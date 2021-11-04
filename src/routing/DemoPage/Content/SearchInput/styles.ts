import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => {
  return {
    inputWrap: {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      marginTop: "10px",
    },
    inputSearch1: {
      width: "100%",
      //   marginRight: "10px",
      backgroundColor: "#f2f2f2",
      border: "none",
      fontSize: "14px",
      padding: "15px 20px",
      height: "auto",
      marginBottom: "15px",
      borderRadius: "10px",
      fontWeight: 700,
      position: "relative",
      "&:focus": {
        border: "none",
        outline: "none",
      },
      "&::placeholder": {
        color: "#cacaca",
      },
    },
    inputSearch2: {
      width: "100%",
      marginRight: "10px",
    },
    wrap: {
      width: "100%",
      margin: "0 10px",
      position: "relative"
    },
    suggestionWrap: {
      position: "absolute",
      top: "61px",
      left: "-1px",
      width: "100%",
      border: "1px solid rgba(128,128,128,0.2)",
      borderRadius: 5,
      zIndex:99,
    },
    itemSearch: {
      display: "flex",
      backgroundColor: "#fff",
      alignItems: "center",
      cursor: "pointer",
      padding: 10,
      borderBottom: "1px solid rgba(128,128,128,0.2)",
      "&:first-child": {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
      },
      "&:last-child": {
        borderBottom: "0px solid",
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
      },
    },
    imageContent: {
      height: 60,
      width: 60,
    },
    image:{
      minWidth: "50px",
      minHeight: "50px",width: "50px",
      height: "50px",
      borderRadius: "3px",
      overflow: "hidden",
      verticalAlign: "middle",
    },
    content: {
     
    },
    text: {
      fontSize: 14,
      fontWeight: 700,
      color: "#3a3a3a",
      marginLeft: 20,
    }
  };
});
export default useStyles;
