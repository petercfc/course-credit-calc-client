// other
import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

// material-ui
import { withStyles } from "@material-ui/core/styles";
import withTheme from "../configs/withTheme";

//components
import Loading from "../components/Loading";

// // code split pages
const StudentsView = loadable(() => import("./StudentsView"));
const StudentDetail = loadable(() => import("./StudentDetail"));

// code split components
const Footer = loadable(() => import("../components/Footer"));
const Alert = loadable(() => import("../components/Alert"));
// styles
const styles = theme => ({
  root: {
    backgroundColor: "#f5f5f5",
    height: "100vh"
  },
  appShell: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8)
  }
});

// main class
function Index(props) {
  const { classes } = props;
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <div className={classes.appShell}>
          <Route
            path="/"
            render={() => (
              <Suspense fallback={<Loading isCircular />}>
                <Switch>
                  <Route path="/students/:id" component={StudentDetail} />
                  <Route path="/students" component={StudentsView} />
                  <Route path="/" component={StudentsView} />
                </Switch>
              </Suspense>
            )}
          />
        </div>
        <Alert />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default withTheme(withStyles(styles)(Index));
