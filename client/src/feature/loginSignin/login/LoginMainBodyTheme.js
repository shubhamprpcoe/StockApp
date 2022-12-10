import { makeStyles } from "@material-ui/core/styles";
import Image from "../../../assets/login/rm222batch5-mind-02.jpg";

const useStyles = makeStyles((theme) => ({

  pc_login_containerWidth: {
    width: "100%",
    boxSizing: "border-box",
  },

  pc_login_boxWidth: {
    maxWidth: "100vw",
    height: "99vh",
    Width: "100vw",
    padding: "5rem 20rem",
    boxSizing: "border-box",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      backgroundColor: "red",
      padding: "6rem 8rem",
    },
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "red",
      padding: "5rem 1rem",
    },

  },
  pc_login_inBox: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${Image})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundRepeat: " no-repeat",
    backgroundPosition: " center center",

  },
  pc_login_mainText: {
    padding: "6% 6% 0% 6%",
    fontWeight: "bold",
  },

}));

export default useStyles;
