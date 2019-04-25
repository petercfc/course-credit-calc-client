//other
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

//create material-ui styles custom hook
const useStyles = makeStyles(
  theme => ({
    root: {},
    title: { flexGrow: 1 },
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
    <div className={classes.title}>
      <Typography variant="subtitle2" noWrap>
        {title}
      </Typography>
      <Typography variant="caption" noWrap>
        {subTitle}
      </Typography>
    </div>
  );
}

//main export
export default HeaderMenuBack;
