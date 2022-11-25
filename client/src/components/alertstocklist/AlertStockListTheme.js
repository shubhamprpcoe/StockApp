import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainAlertStockBox: {
    height: "100%",
    overflow: "auto",
    [theme.breakpoints.down("md")]: {
      height: "fit-content",
    },
  },

}));

export default useStyles;
