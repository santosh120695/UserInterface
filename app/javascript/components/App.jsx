import React from "react";
import axios from 'axios';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List,{ ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {withStyles} from "material-ui/styles/index";
import PropTypes from "prop-types";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';


const styles = theme => ({
    content: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
        flex:1
    },

});

function  App(props) {
    const { classes } = props;
    return(
     <div>
         <Grid container>
         <Grid item xs={12}>
         <Grid
             container
             alignItems='center'
             direction='row'
             justify='flex-end'
         >
         <Button variant="raised" color="primary" className={classes.button} >
             Start
         </Button>
         </Grid>
         </Grid>
         </Grid>
     </div>
    )
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

