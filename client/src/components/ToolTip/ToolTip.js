import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

export default function ToolTip({ isMobile, title, children, ...rest }) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div>
      {isMd ? (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={title}
          arrow
          placement="top"
          {...rest}
        >
          {children}
        </Tooltip>
      ) : (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={title}
            arrow
            placement="top"
            style={{ width: "100%" }}
            {...rest}
          >
            <span>
              <Button
                onClick={handleTooltipOpen}
                fullWidth
                size="small"
                style={{ minWidth: 32 }}
              >
                {children}
              </Button>
            </span>
          </Tooltip>
        </ClickAwayListener>
      )}
    </div>
  );
}
