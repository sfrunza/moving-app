import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { SnackbarProvider } from "notistack";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { light, dark } from "src/theme/palette";
import typography from "src/theme/typography";
import { lightShadows, darkShadows } from "src/theme/shadows";
import { useSelector } from "src/store";
// import { verifyAuth } from "./slices/auth";
// import LoadingTable from "./components/LoadingTable";
import ScrollReset from "./components/ScrollReset";

export const history = createBrowserHistory();

function App() {
  // useStyles();
  const { isDark } = useSelector((state) => state.theme);
  // const { isVerifying } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  let darkTheme = createTheme({
    overrides: {
      MuiAvatar: {
        fallback: {
          height: "75%",
          width: "75%",
        },
      },
      MuiButton: {
        root: {
          textTransform: "none",
        },
      },
      MuiIconButton: {
        root: {
          color: "#6b778c",
        },
      },
      MuiTypography: {
        root: {
          textDecoration: "none",
        },
      },
      MuiCardHeader: {
        title: {
          fontSize: 18,
        },
      },
      MuiLinearProgress: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
        },
      },
      MuiListItemIcon: {
        root: {
          minWidth: "auto",
          marginRight: "16px",
        },
      },
      MuiTableRow: {
        root: {
          verticalAlign: "baseline",
        },
      },
    },
    layout: {
      contentWidth: 1236,
    },
    palette: isDark ? dark : light,
    typography,
    shape: {
      borderRadius: 8,
    },
    shadows: isDark ? darkShadows : lightShadows,
  });
  darkTheme = responsiveFontSizes(darkTheme);

  // useEffect(() => {
  //   localStorage.setItem("dark", JSON.stringify(isDark));
  //   dispatch(verifyAuth());
  // }, [dispatch, isDark]);

  // if (isVerifying) {
  //   return <LoadingTable />;
  // }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <SnackbarProvider maxSnack={2}>
          <Router>
            <ScrollReset />
            <Routes />
          </Router>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
