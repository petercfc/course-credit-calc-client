// other
import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

//redux
import { compose } from "redux";

// material-ui
import { withStyles } from "@material-ui/core/styles";
import withTheme from "../configs/withTheme";

//components
import Loading from "../components/Loading";

// // code split pages
const Students = loadable(() => import("./Students"));
const StudentDetail = loadable(() => import("./StudentDetail"));
const Courses = loadable(() => import("./Courses"));
const CourseDetail = loadable(() => import("./CourseDetail"));
const Degrees = loadable(() => import("./Degrees"));
const Departments = loadable(() => import("./Departments"));
const Subjects = loadable(() => import("./Subjects"));

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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(12)
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
                  <Route path="/students" component={Students} />
                  <Route path="/courses/:id" component={CourseDetail} />
                  <Route path="/courses" component={Courses} />
                  <Route path="/degrees" component={Degrees} />
                  <Route path="/departments" component={Departments} />
                  <Route path="/subjects" component={Subjects} />
                  <Route path="/" component={Students} />
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

export default compose(
  withTheme,
  withStyles(styles)
)(Index);
