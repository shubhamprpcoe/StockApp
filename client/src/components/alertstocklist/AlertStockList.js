import React from "react";
import {
  Box, Stack, Card, Button, Divider, Grid, Typography,
} from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import useStyles from "./AlertStockListTheme";

export default function AlertStockList() {
  const classes = useStyles();

  return (
    <Box p={1} sx={{ height: "100", boxSizing: "border-box" }} className={classes.mainAlertStockBox}>
      <Card variant="outlined" sx={{ backgroundColor: "#212121", height: "100%", padding: "0px 0px" }}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          py={2}
        >
          <Button variant="contained" size="small">filter</Button>
          <Button variant="contained" size="small">filter</Button>

        </Stack>
        <Divider variant="middle" sx={{ background: "#bdbdbd" }} />
        {/* ----------------Alert Card------------- */}
        <Card sx={{
          background: "#757575",
          margin: "20px",
          "&:hover": {
            background: "#121212",
            color: "#eeeeee",
          },
        }}
        >
          <Box sx={{ my: 3, mx: 2, textAlign: "left" }}>
            <Grid container alignItems="left">
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="div">
                  Toothbrush
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  $4.50
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="caption" gutterBottom>
              Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
              just down the hall.
            </Typography>
          </Box>
          <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            <Stack
              direction="row"
              spacing={3}
            >
              <DeleteForeverRoundedIcon
                sx={{
                  color: "#fafafa",
                  "&:hover": {
                    color: "#d84315",
                  },
                }}
                fontSize="medium"
              />
              <DriveFileRenameOutlineRoundedIcon
                sx={{
                  color: "#fafafa",
                  "&:hover": {
                    color: "#d84315",
                  },
                }}
                fontSize="medium"
              />
            </Stack>
          </Box>
        </Card>
        {/* ------------------------------------------- */}

        <Card sx={{
          background: "#757575",
          margin: "20px",
          "&:hover": {
            background: "#121212",
            color: "#eeeeee",
          },
        }}
        >
          <Box sx={{ my: 3, mx: 2, textAlign: "left" }}>
            <Grid container alignItems="left">
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="div">
                  Toothbrush
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  $4.50
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="caption">
              Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
              just down the hall.
            </Typography>
          </Box>
          <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            <Stack
              direction="row"
              spacing={3}
            >
              <DeleteForeverRoundedIcon
                sx={{
                  color: "#fafafa",
                  "&:hover": {
                    color: "#d84315",
                  },
                }}
                fontSize="medium"
              />
              <DriveFileRenameOutlineRoundedIcon
                sx={{
                  color: "#fafafa",
                  "&:hover": {
                    color: "#d84315",
                  },
                }}
                fontSize="medium"
              />
            </Stack>
          </Box>
        </Card>

      </Card>

    </Box>
  );
}
