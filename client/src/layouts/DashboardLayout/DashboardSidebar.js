import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Drawer,
  Hidden,
  Typography,
  useTheme,
} from "@material-ui/core";
// import ReceiptIcon from "@material-ui/icons/Receipt";
// import BriefcaseIcon from "src/icons/Briefcase";
import CalendarIcon from "src/icons/Calendar";
// import ChartPieIcon from "src/icons/ChartPie";
// import ChartSquareBarIcon from "src/icons/ChartSquareBar";
// import ChatAltIcon from "src/icons/ChatAlt";
// import ClipboardListIcon from "src/icons/ClipboardList";
// import FolderOpenIcon from "src/icons/FolderOpen";
// import MailIcon from "src/icons/Mail";
// import ShareIcon from "src/icons/Share";
// import ShoppingBagIcon from "src/icons/ShoppingBag";
// import ShoppingCartIcon from "src/icons/ShoppingCart";
// import UserIcon from "src/icons/User";
import UsersIcon from "src/icons/Users";
import NavSection from "./NavSection";
import Scrollbar from "../../components/Scrollbar";
import { useSelector } from "src/store";
import TruckFillIcon from "src/icons/TruckFill";
import CurrencyDollar from "src/icons/CurrencyDollar";
import ChartSquareBar from "src/icons/ChartSquareBar";

const sections = [
  {
    title: "",
    items: [
      {
        title: "Overview",
        path: "/dashboard/analytics",
        icon: <ChartSquareBar fontSize="small" />,
      },
      {
        title: "Calendar",
        path: "/dashboard/calendar",
        icon: <CalendarIcon fontSize="small" />,
      },
      {
        title: "Jobs",
        path: "/dashboard/jobs",
        icon: <TruckFillIcon fontSize="small" />,
      },
      {
        title: "Customers",
        path: "/dashboard/customers",
        icon: <UsersIcon fontSize="small" />,
      },
      {
        title: "Employees",
        path: "/dashboard/employees",
        icon: <UsersIcon fontSize="small" />,
      },
      {
        title: "Rates",
        path: "/dashboard/rates",
        icon: <CurrencyDollar fontSize="small" />,
      },
      // {
      //   title: "Overview",
      //   path: "/dashboard",
      //   icon: <ChartSquareBarIcon fontSize="small" />,
      // },
      // {
      //   title: "Analytics",
      //   path: "/dashboard/analytics",
      //   icon: <ChartPieIcon fontSize="small" />,
      // },

      // {
      //   title: "Finance",
      //   path: "/dashboard/finance",
      //   icon: <ShoppingBagIcon fontSize="small" />,
      // },
    ],
  },
];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const theme = useTheme();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box p={2}>
          <Box
            style={{
              alignItems: "center",
              backgroundColor: theme.palette.background.level2,
              borderRadius: 8,
              display: "flex",
              overflow: "hidden",
              padding: 16,
            }}
          >
            <RouterLink to={`/dashboard/users/${user.id}`}>
              <Avatar
                style={{
                  cursor: "pointer",
                  height: 48,
                  width: 48,
                }}
              />
            </RouterLink>
            <Box ml={2}>
              <Typography color="textPrimary" variant="subtitle2">
                {user.first_name + " " + user.last_name}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                {user?.role}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box p={2}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              style={{ marginTop: 24 }}
              {...section}
            />
          ))}
        </Box>
        {/* <Box p={2}>
          <Typography color="textPrimary" variant="subtitle2">
            Need Help?
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Check our docs
          </Typography>
          <Button
            color="primary"
            component={RouterLink}
            fullWidth
            disableElevation
            style={{ marginTop: 16 }}
            to="/docs"
            variant="contained"
          >
            Documentation
          </Button>
        </Box> */}
      </Scrollbar>
    </Box>
  );

  return (
    <div>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          PaperProps={{
            style: {
              width: 250,
            },
          }}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          open
          PaperProps={{
            style: {
              height: "calc(100% - 64px)",
              top: "64px",
              width: 280,
            },
          }}
          variant="permanent"
        >
          {content}
        </Drawer>
      </Hidden>
    </div>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default DashboardSidebar;
