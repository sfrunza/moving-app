import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MovingCalculator from "src/components/MovingCalculator";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(1),
    },
  },
}));

export default function CalculatorDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        disableElevation
        size="large"
      >
        Get a Quote
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.dialogRoot }}
      >
        <MovingCalculator handleClose={handleClose} showX={true} />
      </Dialog>
    </>
  );
}
