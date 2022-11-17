import React, { useState, useEffect } from "react";
import {
  Container, Grid, Card, Typography, Divider,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./LeftBarTheme";

import CurrentPrice from "./currentPrice/CurrentPrice";
import Parameter from "./parameter/Parameter";

import { registerCtx, updateCtx, delectCtx } from "../../redux/slice/slice";

export default function LeftBar(props) {
  const count = 1;
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const ctxState = useSelector((state) => state);

  const [cmpData, setcmpData] = useState([]);
  const propCmpcode = props.homestate;
  useEffect(() => {
    // -----------------------Calling API and sending to parementer comp --------------------------

    fetch("http://localhost:5000/listData/leftBar", {
      method: "POST",
      body: JSON.stringify({ propCmpcode }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        const data = response.json();
        return data;
      }).then((data) => {
        setcmpData(data);
        //  console.log(data , "dhcvdg")
      }).catch((error) => {
      });
  }, [props]);

  // count = count +1
  // console.log(ctxState,count , "ctxState")

  return (
    <div>

      <Container>
        <Card className={classes.cardBorder}>
          <Grid container direction="column" justifyContent="center" spacing={1}>
            <Grid item>
              {/* -------------Stock Name--------- */}

              <Typography variant="subtitle1" align="left">
                {/* {ctxState ? ctxState.price.shortName : null} */}
                {/* {cmpName} */}
              </Typography>
            </Grid>

            <Grid item>

              {/* ---------CurrentPrice----------- */}

              <CurrentPrice />
              <Divider light />
            </Grid>
            {/* --------------StockParameter----------- */}

            {
              cmpData.map((currVal, index) => {
                { console.log(currVal, "secound"); }
                return <Parameter val={currVal} key={index} />;
              })

            }
            <Grid item xs />
          </Grid>
        </Card>
      </Container>

    </div>
  );

  //   // let [cmpData, setcmpData] = useState(false);
  //   // let [ctxData, setCtxData] = useState( false);

  //   let str = ``
  //  async function Speed (){
  //   let  ctxState = await  useSelector((state) => state.ctx.stockAnalysisData.leftBarArrData);
  //   // console.log(ctxState)

  //   // ctxState.leftBarArrData.map((currVal, index)=>{
  //   //   str += `<Parameter val=${currVal} key=${index}></Parameter>`
  //   // })
  //   }
  //   Speed()

  //   return (
  //     <div>

  //       <Container >
  //         <Card className={classes.cardBorder}>
  //           <Grid container direction="column" justifyContent="center" spacing={1} >
  //             <Grid item >
  //               {/* -------------Stock Name--------- */}

  //               <Typography variant="subtitle1" align="left">
  //                 LIC Housing Finance Ltd
  //                 {/* {cmpName} */}
  //               </Typography>
  //             </Grid>
  //             <Grid item >

  //               {/* ---------CurrentPrice----------- */}

  //               <CurrentPrice></CurrentPrice>
  //               <Divider light />
  //             </Grid>
  //             {/* --------------StockParameter----------- */}
  //             {/* {console.log(ctxData, "render")}
  //             {
  //              ctxData ? ctxData.map((currVal, index) => {
  //                 return <Parameter val={currVal} key={index}></Parameter>
  //               }) : ''

  //             } */}
  //             <Grid item xs>
  //             </Grid>
  //           </Grid>
  //         </Card>
  //       </Container>

//     </div>
//   )
}
