import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  pc_login_main: {
    position: "absolute",
    margin: "auto",
    padding: "2rem",
    borderRadius: "4px",

  },
  pc_login_mainText: {
    padding: "6% 6% 0% 6%",
  },
  pc_signup_stack: {
    maxwidth: "150px",
    textAlign: "center",
    padding: "3%",

  },
  pc_signup_button: {
    padding: "3% 5% 0 5%",
  },
  pc_signup_iconButton: {
    padding: "0% 0% 3% 3%",

  },
  new_member: {
    padding: "3% 0% 0% 0%",
  },

}));

export default useStyles;
