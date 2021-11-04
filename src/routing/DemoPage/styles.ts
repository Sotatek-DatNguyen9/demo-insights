import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => {
  return {
      wrapper:{
          backgroundColor:"#f2f2f2"
      },
      mainContent:{
          backgroundColor:"#FFF",
          borderRadius:"20px",
          padding:"5px"
      },
      bigTitle:{
          color:"#000",
          margin:"30px 0 20px 0",
          fontSize:'30px'
      },
      multi:{
        marginTop: 20,
        padding:"8px"
    }
  };
});
export default useStyles;