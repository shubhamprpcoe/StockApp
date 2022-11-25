import React from "react";
import {
  Stack,
} from "@mui/material";
// import useStyles from "./AutoSearchTheme";

export default function Autosearch() {
//   const classes = useStyles();

  return (

    <Stack direction="column" alignItems="center">
      <div className="pc-input-main" style={{ width: "90% " }}>
        <form>
          <div className="pc-input-parentflex">
            <input id="stockName" className="pc-input" placeholder="Search stocks ..." type="text" />
          </div>
          <ul className="pc-input-list">

            {/* <li>
              verfvfdvr
            </li>

            <li>
              verfvfdvr
            </li>
            <li>
              verfvfdvr
            </li>
            <li>
              verfvfdvr
            </li> */}

          </ul>
        </form>
      </div>
    </Stack>
  );
}
