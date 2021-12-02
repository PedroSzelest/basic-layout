import React, { useState } from "react";
import Box from "@material-ui/system/Box";

// Back / Forward
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AddIcon from "@material-ui/icons/Add";

// Check
import { pink } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

//CSS
import "./SlideHome.css";
import { Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

const SlideHome = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const [checkValue, setCheckValue] = useState(0);

  const handleBackPage = () => {
    if (translateValue < 0) {
      setTranslateValue(translateValue + 100);
      setCheckValue(translateValue + 100);
    }
  };

  const handleNextPage = () => {
    if (translateValue > -300) {
      setTranslateValue(translateValue - 100);
      setCheckValue(translateValue - 100);
    }
  };

  const handleChangeCheck = (each) => {
    setCheckValue(each);
    setTranslateValue(each);
  };

  const changeCheckValues = (each) => ({
    checked: checkValue === parseInt(each),
    onChange: (e) => handleChangeCheck(e.target.value),
    value: each,
    name: "color-radio-button-demo",
    inputProps: { "arial-label": each },
  });

  return (
    <Box component="div" className="main_container">
      <Box
        sx={{ "& > :not(style)": { m: 1 } }}
        className="arrow_back_container"
        onClick={handleBackPage}
      >
        <Fab size="medium" color="inherit" arial-label="back">
          <ArrowBackIcon />
        </Fab>
      </Box>
      <Box
        component="div"
        className="slide1"
        sx={{ transform: `translateX(${translateValue}%)` }}
      >
        <Box component="div">
          <Typography component="h4">
            Executive <span>Search</span>
          </Typography>
          <hr />
          <Typography component="p">reinvented for the digital era</Typography>
          <Typography component="p">
            Learn more
            <Link to="/work">
              <Fab size="small">
                <AddIcon />
              </Fab>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        className="slide2"
        sx={{ transform: `translateX(${translateValue}%)` }}
      >
        <Box component="div">
          <Typography component="h4">
            Executive <span>Search</span>
          </Typography>
          <hr />
          <Typography component="p">reinvented for the digital era</Typography>
          <Typography component="p">
            Learn more
            <Link to="/about">
              <Fab size="small">
                <AddIcon />
              </Fab>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        className="slide3"
        sx={{ transform: `translateX(${translateValue}%)` }}
      >
        <Box component="div">
          <Typography component="h4">
            Executive <span>Search</span>
          </Typography>
          <hr />
          <Typography component="p">reinvented for the digital era</Typography>
          <Typography component="p">
            Learn more
            <Link to="/search">
              <Fab size="small">
                <AddIcon />
              </Fab>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        className="slide4"
        sx={{ transform: `translateX(${translateValue}%)` }}
      >
        <Box component="div">
          <Typography component="h4">
            Executive <span>Search</span>
          </Typography>
          <hr />
          <Typography component="p">reinvented for the digital era</Typography>
          <Typography component="p">
            Learn more
            <Link to="/contact">
              <Fab size="small">
                <AddIcon />
              </Fab>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ "& > :not(style)": { m: 1 } }}
        className="arrow_forward_container"
        onClick={handleNextPage}
      >
        <Fab size="medium" color="inherit" arial-label="forward">
          <ArrowForwardIcon />
        </Fab>
      </Box>
      <Box component="div" className="check_container">
        <Radio
          {...changeCheckValues(0)}
          sx={{ color: pink[800], "&.Mui-checked": { color: pink[600] } }}
        />
        <Radio
          {...changeCheckValues(-100)}
          sx={{ color: pink[800], "&.Mui-checked": { color: pink[600] } }}
        />
        <Radio
          {...changeCheckValues(-200)}
          sx={{ color: pink[800], "&.Mui-checked": { color: pink[600] } }}
        />
        <Radio
          {...changeCheckValues(-300)}
          sx={{ color: pink[800], "&.Mui-checked": { color: pink[600] } }}
        />
      </Box>
    </Box>
  );
};

export default SlideHome;
