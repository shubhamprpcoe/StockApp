import { makeStyles } from "@material-ui/core/styles";
// import { ThemeProvider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    boxSizing: "border-box",
    height: "100vh",
  },
  mainGridContainer: {
    height: "100%",
  },
  col: {
    backgroundColor: "#757ce8",
    padding: "20px",
    boxSizing: "border-box",
    position: "relative",
  },
  mainGridItem: {
    backgroundColor: "#121212",
    height: "100%",
    overflow: "auto",
    borderRight: "1px solid #424242 ",
    borderRadius: "2px",
    [theme.breakpoints.down("xs")]: {
      height: "fit-content",
      border: "1px solid #424242 ",

    },
  },

}));

export default useStyles;
