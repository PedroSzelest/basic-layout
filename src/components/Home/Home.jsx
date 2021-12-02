import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";

//List
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

//Icons
import SearchIcon from "@material-ui/icons/Search";
import WorkIcon from "@material-ui/icons/Work";
import MapIcon from "@material-ui/icons/Map";
import PublicIcon from "@material-ui/icons/Public";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";

//Components
import SlideHome from "./Slide/SlideHome";
import InfiniteList from "./InfiniteList/InfiniteList";

import { makeStyles } from "@material-ui/styles";
import { StyledEngineProvider } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import "./Home.css";

const useStyle = makeStyles({
  box_article: {
    padding: "10vh",
    paddingLeft: "20vw",
    paddingRight: "20vw",
  },
  text_article: {
    color: "rgb(44, 39, 46)",
  },
});

const Home = () => {
  const classes = useStyle();

  return (
    <StyledEngineProvider injectFirst>
      <Box component="section">
        <SlideHome />
        <Container component="article" className={classes.box_article}>
          <Typography
            component="p"
            className={classes.text_article}
            sx={{
              fontSize: "1.5rem",
              fontWeight: "200",
              fontFamily: "Poppins",
              textAlign: "center",
            }}
          >
            Working across functions, industry sectors and geographies, we work
            with many of the world’s largest and most respected companies,
            sourcing senior executives for board level, VP and Director
            positions. By engaging with candidates through digital channels, we
            are more effective at attracting top talent, no matter where they
            are physically located.
          </Typography>
        </Container>
        <Box component="article" className="article_image">
          
            <Typography component="h4">
              Talk to a consultant about the services
              <Link to="/contact">
                <Fab size="small">
                  <AddIcon />
                </Fab>
              </Link>
            </Typography>
          <Box component="div"></Box>
          <List className="list_services">
            <Typography component="h4" className="list_title">
              Services
            </Typography>
            <ListItem
              key="zero"
              disableGutters
              secondaryAction={
                <IconButton>
                  <SearchIcon />
                </IconButton>
              }
              className="work_list_item"
            >
              <ListItemText primary={"Executive search"} />
            </ListItem>
            <ListItem
              key="first"
              disableGutters
              secondaryAction={
                <IconButton>
                  <WorkIcon />
                </IconButton>
              }
            >
              <ListItemText primary={"Executive search"} />
            </ListItem>
            <ListItem
              key="second"
              disableGutters
              secondaryAction={
                <IconButton>
                  <MapIcon />
                </IconButton>
              }
            >
              <ListItemText primary={"Executive search"} />
            </ListItem>
            <ListItem
              key="third"
              disableGutters
              secondaryAction={
                <IconButton>
                  <PublicIcon />
                </IconButton>
              }
            >
              <ListItemText primary={"Executive search"} />
            </ListItem>
          </List>
        </Box>
        <Container component="article" className="container_check">
          <Typography component="h3" className="grid_title_typography">
            Competitive Advantages
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className="grid_container"
          >
            <Grid item xs={6} className="grid_item">
              <Typography component="body1" className="grid_typography">
                <CheckIcon className="check_icon" /> Customised approach
              </Typography>
            </Grid>
            <Grid item xs={6} className="grid_item">
              <Typography component="body1" className="grid_typography">
                <CheckIcon className="check_icon" /> Customised approach
              </Typography>
            </Grid>
            <Grid item xs={6} className="grid_item">
              <Typography component="body1" className="grid_typography">
                <CheckIcon className="check_icon" /> Customised approach
              </Typography>
            </Grid>
            <Grid item xs={6} className="grid_item">
              <Typography component="body1" className="grid_typography">
                <CheckIcon className="check_icon" /> Customised approach
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <InfiniteList />
      </Box>
    </StyledEngineProvider>
  );
};

export default Home;
