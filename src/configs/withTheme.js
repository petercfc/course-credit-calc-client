import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "IBM Plex Sans",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700]
    }
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8
      }
    },
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: 8
      }
    },
    MuiDialogTitle: {
      root: {
        paddingTop: 24
      }
    },
    MuiDialogActions: {
      root: {
        paddingRight: 16,
        paddingBottom: 16
      }
    },
    MuiToolbar: {
      root: {
        paddingLeft: 4,
        paddingRight: 4
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 48
      }
    },
    MuiCardContent: {
      root: {
        paddingTop: 24,
        "&:last-child": {
          paddingBottom: 8
        }
      }
    },
    //+
    MuiFab: {
      root: {
        textTransform: "none",
        backgroundColor: "#fff",
        color: blue[500]
      }
    },
    //+
    MuiCard: {
      root: {
        borderRadius: 8,
        marginBottom: 8,
        boxShadow: "none"
      }
    }
  }
});

function withTheme(Component) {
  function ConfigTheme(props) {
    // ThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return ConfigTheme;
}

export default withTheme;
