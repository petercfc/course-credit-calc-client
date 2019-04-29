import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import teal from "@material-ui/core/colors/teal";
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
      light: teal[300],
      main: teal[500],
      dark: teal[700]
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
        borderRadius: 4
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
    MuiFab: {
      root: {
        textTransform: "none",
        backgroundColor: "#fff",
        color: teal[500]
      }
    },
    MuiCard: {
      root: {
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
