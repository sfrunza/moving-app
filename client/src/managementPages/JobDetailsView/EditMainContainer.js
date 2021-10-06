import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import PencilAlt from "src/icons/PencilAlt";

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    padding: theme.spacing(3),
    // minWidth: 400,
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(1),
    },
  },
  editIcon: {
    color: theme.palette.primary.main,
    "& svg": { width: 16, height: 16 },
  },
}));

export default function EditMainContainer({ children }) {
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
      <IconButton
        aria-label="edit"
        classes={{ root: classes.editIcon }}
        onClick={handleClickOpen}
      >
        <PencilAlt />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={{ paper: classes.dialogRoot }}
      >
        {children}
      </Dialog>
    </>
  );
}
