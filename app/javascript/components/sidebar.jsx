import React from "react";
import axios from 'axios';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List,{ ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {withStyles} from "material-ui/styles/index";
import PropTypes from "prop-types";
import App from "../components/App.jsx";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 700,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
        flex:1,
        flexGrow:1
    },
    flex: {
        flex: 1,
    },
    toolbar: theme.mixins.toolbar,
});

function  Sidebar(props) {

    const { classes } = props;
      return(
          <div className={classes.root}>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>    <ListItem button>
                    <ListItemText primary="Option1" />
                </ListItem>
                   </List>
                <Divider />
                <List>
                    <ListItem button component="a" href="#">
                        <ListItemText primary="Option3" />
                    </ListItem>
                </List>
                <Divider/>
            </Drawer>
            <main className={classes.content}>
              <div className={classes.toolbar} />
                <App/>
            </main>
          </div>
      )
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);

