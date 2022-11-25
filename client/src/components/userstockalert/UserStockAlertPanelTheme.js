import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardAlign: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },

}));

export default useStyles;
