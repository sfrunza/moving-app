import { useEffect } from "react";
import NProgress from "nprogress";
import { Box, useTheme } from "@material-ui/core";

const LoadingTable = () => {
  const theme = useTheme();
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        minHeight: "100%",
      }}
    />
  );
};

export default LoadingTable;
