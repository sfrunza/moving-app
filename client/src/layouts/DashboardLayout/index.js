import { useState } from "react";
import { styled } from "@material-ui/core/styles";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { useSelector } from "src/store";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.level2,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const DashboardLayoutWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: "40px",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "280px",
  },
}));

const DashboardLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const DashboardLayoutContent = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch",
});

const DashboardLayout = ({ children }) => {
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);
  const { isLoggingOut } = useSelector((state) => state.auth);
  return (
    <DashboardLayoutRoot>
      <DashboardNavbar
        onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)}
      />
      <DashboardSidebar
        onMobileClose={() => setIsSidebarMobileOpen(false)}
        openMobile={isSidebarMobileOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            {isLoggingOut ? "Loading" : children}
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
