import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuIcon
} from "@material-ui/core";

import fliqindia from "../assests/fliqaindia.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#000000"
  }
}));

export default function Navbar({ btn, footer }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#FAEACC" }} position="static">
        <Toolbar>
          {footer ? (
            <>
              <Grid container justify="center" spacing={1}>
                <Grid item>
                  <Button
                    style={{
                      backgroundColor: "#ADD7CC",
                      borderRadius: "10px",
                      color: "#fff"
                    }}
                  >
                    Start designing
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    style={{
                      backgroundColor: "#F9B668",
                      borderRadius: "10px",
                      color: "#fff"
                    }}
                  >
                    Get a quote
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <img
                style={{ width: "162px", height: "42px" }}
                src={fliqindia}
                alt="fliqaindia"
              />

              <Typography variant="h7" className={classes.title}>
                Home
              </Typography>
              <Typography variant="h7" className={classes.title}>
                About US
              </Typography>
              <Typography variant="h7" className={classes.title}>
                Services
              </Typography>
              <Typography variant="h7" className={classes.title}>
                Freelancer
              </Typography>
              <Typography variant="h7" className={classes.title}>
                Blog
              </Typography>
              <Typography variant="h7" className={classes.title}>
                Tutorial
              </Typography>
              <Button className={classes.title} color="inherit">
                Contact Us
              </Button>
              {btn && (
                <Button
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#ADD7CC",
                    color: "#828282"
                  }}
                  color="inherit"
                >
                  Login/Sign up
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
