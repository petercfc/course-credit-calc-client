//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    title: {},
    subTitle: {}
  }),
  { withTheme: true }
);

//main function
function HeaderMenuBack(props) {
  //material-ui styles custom hook
  const classes = useStyles();
  const { title, subTitle } = props;

  //main return
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="subtitle2" noWrap>
        {title}
      </Typography>
      <Typography className={classes.subTitle} variant="caption" noWrap>
        {subTitle}
      </Typography>
    </div>
  );
}

//main export
export default HeaderMenuBack;
