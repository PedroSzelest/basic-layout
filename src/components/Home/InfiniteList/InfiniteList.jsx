import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import list from "./list.js";

import "./InfiniteList.css";

const InfiniteList = () => {
  const [moveList, setMoveList] = useState(0);

  const backChangeList = () => {
      if(moveList < 0) setMoveList(moveList + 100);
  };

  const forwardChangeList = () => {
    if(moveList > -200) setMoveList(moveList - 100);
  };

  return (
    <Box component="article" className="main_container_infinite">
      <Typography component="h3">Industry Sectors</Typography>
      <Fab
        size="medium"
        color="inherit"
        arial-label="back"
        className="back_icon_infinite"
        onClick={() => backChangeList()}
      >
        <ArrowBackIosIcon />
      </Fab>
      <Grid
        container
        rowSpacing={3}
        className="grid_container_infinite"
        wrap="nowrap"
        sx={{ transform: `translateX(${moveList}%)` }}
      >
        {list.map((group) => (
          <Grid item className="grid_item_infinite" wrap="nowrap">
            {group.map((each) => (
              <Box component="div" className="box_container_infinite">
                <Box component="div" classNama="icon_container_infinite">
                  <Icon className="icon_infinite">{each.icon}</Icon>
                </Box>
                <Typography
                  component="overline"
                  className="typography_infinite"
                >
                  {each.message}
                </Typography>
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
      <Fab
        size="medium"
        color="inherit"
        arial-label="forward"
        className="forward_icon_infinite"
        onClick={() => forwardChangeList()}
      >
        <ArrowForwardIosIcon />
      </Fab>
    </Box>
  );
};

export default InfiniteList;
