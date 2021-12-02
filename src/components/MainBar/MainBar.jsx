import React, { useState } from "react";

//MUI components
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import TollBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

//MUI personalize
import { makeStyles } from "@material-ui/styles";

//Router
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  box: {
    flexGrow: "1",
  },
  link_nav: {
    textDecoration: "none",
    color: "rgb(234, 222, 222)",
    textTransform: "uppercase",
    flexDirection: "column",
    justifyContent: "center",
  },
  nav_bar: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    backgroundColor: "rgb(131, 131, 131)",
  },
  text: {
    listStyle: "none",
  },
  span_true: {
    margin: "0",
    fontSize: "5px",
    color: "rgb(184, 82, 82)",
    backgroundColor: "rgb(184, 82, 82)",
  },
  span_false: {
    position: "absolute",
    opacity: 0,
  },
});

const MainBar = () => {
  const classes = useStyle();

  const [value, setValues] = useState(0);

  const handleSpan = (defined) => {
    setValues(defined);
  };

  return (
    <Box className={classes.box}>
      <AppBar position="static" style={{ height: "13vh" }}>
        <TollBar variant="dense" className={classes.nav_bar}>
          <Link to="/" className={classes.link_nav}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 5 }}
              onClick={(e) => handleSpan(0)}
            >
              Logo
            </IconButton>
          </Link>
          <Link
            to="/"
            className={classes.link_nav}
            onClick={(e) => handleSpan(e.target.value)}
          >
            <Typography
              variant="overline"
              color="inherit"
              component="li"
              className={classes.text}
              sx={{ fontSize:"1rem" }}
            >
              Home
            </Typography>
            <Box
              component="span"
              className={
                value === 0 ? `${classes.span_true}` : `${classes.span_false}`
              }
            >
              ____________________
            </Box>
          </Link>
          <Link
            to="/work"
            className={classes.link_nav}
            onClick={(e) => handleSpan("/work")}
          >
            <Typography
              variant="overline"
              color="inherit"
              component="li"
              className={classes.text}
              sx={{ fontSize:"1rem" }}
            >
              How we work
            </Typography>
            <Box
              component="span"
              className={
                value === "/work"
                  ? `${classes.span_true}`
                  : `${classes.span_false}`
              }
            >
              ___________________________________________________
            </Box>
          </Link>
          <Link
            to="/contact"
            className={classes.link_nav}
            onClick={(e) => handleSpan("/contact")}
          >
            <Typography
              variant="overline"
              color="inherit"
              component="li"
              className={classes.text}
              sx={{ fontSize:"1rem" }}
            >
              Contact
            </Typography>
            <Box
              component="span"
              className={
                value === "/contact"
                  ? `${classes.span_true}`
                  : `${classes.span_false}`
              }
            >
              _________________________________
            </Box>
          </Link>
        </TollBar>
      </AppBar>
    </Box>
  );
};

export default MainBar;
