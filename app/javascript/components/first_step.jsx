import React from "react";
import SimpleSelect from "./select.jsx"
import Typography from 'material-ui/Typography';
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles/index";
import Grid from "material-ui/es/Grid/Grid";
import Card, { CardActions, CardContent } from 'material-ui/Card';
const styles = theme => ({
   root:{
       width:'100%',
   },

    card:{
      width:'30%',
      height:'300px',
    }

});
class FirstStep extends React.Component {

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid
                            container
                            alignItems='center'
                            direction='row'
                            justify='center'
                        >
                 <Card className={classes.card}>
                     <CardContent>
                <Typography>
                    Select Model From Dropdown
                </Typography>
           <SimpleSelect/>
                     </CardContent>
                 </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );

    }



}

FirstStep.propTypes = {
    classes: PropTypes.object.isRequired,
};
const FirstStep1 = withStyles(styles)(FirstStep);
export default FirstStep1;
