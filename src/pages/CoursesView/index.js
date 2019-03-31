//other
import React from "react";

//apollo
import gql from "graphql-tag";
import { Query } from "react-apollo";

// material-ui
import { withStyles } from "@material-ui/core/styles";

//components
import SortCourses from "./components/SortCourses";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

// styles
const styles = theme => ({
  root: {
    listStyleType: "none"
  }
});

//main class
class CoursesView extends React.Component {
  //render main
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Query
          query={gql`
            {
              courses {
                name
                id
                number
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <Loading isCircular />;
            if (error) return <Error message={error} />;

            return <SortCourses data={data} />;
          }}
        </Query>
      </div>
    );
  }
}

export default withStyles(styles)(CoursesView);
