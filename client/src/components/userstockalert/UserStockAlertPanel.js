import React from "react";
import {
  Box, Stack, Typography, Card, CardContent, CardActions, List, TextField,
  ListItem, ListItemText, ListSubheader, Switch, ListItemIcon, Checkbox, Button,
} from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import useStyles from "./UserStockAlertPanelTheme";
import AutoSearch from "../autosearch/AutoSearch";

export default function UserStockAlertPanel() {
  const classes = useStyles();

  return (
    <Box p={1} sx={{ height: "100", boxSizing: "border-box" }} className={classes.mainBox}>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        spacing={3}
        sx={{ padding: "20px 0px" }}
      >
        <Typography sx={{ typography: { sm: "h6", xs: "subtitle1" }, color: "#eeeeee" }}>
          Stock alert
        </Typography>
        {/* -----------------autoSearch---------- */}
        <Box>
          <AutoSearch />
        </Box>
        {/* ----------------InfoPanel---------- */}
        <Box
          component="span"
          sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
        >
          <Card sx={{ background: "#424242", alignItems: { md: "center" } }} className={classes.cardAlign}>
            {/* ----------stock Info-------------- */}
            <CardContent>
              <Typography sx={{ fontSize: 14, color: "#eeeeee" }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be
                nev
                o
                lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                "a benevolent smile"
              </Typography>
            </CardContent>
            {/* ------------------------------------------- */}
            {/* ------------------- stock action------------------------ */}
            <CardActions>
              <List
                sx={{ width: "100%", maxWidth: 360, bgcolor: "#424242" }}
                subheader={<ListSubheader sx={{ bgcolor: "#424242" }}>Set Stock Alarm</ListSubheader>}
              >
                {/* --lower-- */}
                <ListItem>
                  <ListItemIcon>
                    <KeyboardDoubleArrowDownIcon />
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-wifi" primary="Lower" />
                  <Switch
                    edge="end"
                    inputProps={{
                      "aria-labelledby": "switch-list-label-wifi",
                    }}
                  />
                </ListItem>
                {/* --higher-- */}
                <ListItem>
                  <ListItemIcon>
                    <KeyboardDoubleArrowUpIcon />
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-wifi" primary="Higher" />
                  <Switch
                    edge="end"
                    inputProps={{
                      "aria-labelledby": "switch-list-label-wifi",
                    }}
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <KeyboardDoubleArrowUpIcon />
                  </ListItemIcon>
                  <ListItemText id="switch-list-label-wifi" primary="Email" />
                  <Checkbox
                    edge="end"
                  />
                </ListItem>

                <ListItem>
                  <TextField id="demo-helper-text-misaligned-no-helper" label="Enter Price" size="small" margin="none" sx={{ width: "100%" }} />
                </ListItem>

                <ListItem>
                  <Button variant="outlined" sx={{ width: "100%" }}>Create alert</Button>
                </ListItem>

              </List>
            </CardActions>
          </Card>
        </Box>
      </Stack>
    </Box>

  );
}
