import React, { useState } from "react";
import { Container, IconButton } from "@material-ui/core";
import FirstStep from "./FirstStep";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import X from "src/icons/X";
import { useSelector } from "src/store";
import FourthStep from "./FourthStep";
import ContactInfoStep from "./ContactInfoStep";
import ReviewAndSubmit from "./ReviewAndSubmit";
import ThankYou from "./ThankYou";

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    padding: theme.spacing(2, 1),
  },
  dialogContent: {
    padding: theme.spacing(1),
  },
  dialogActions: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 1),
    display: "flex",
    justifyContent: "space-between",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

const RootForm = ({ handleClose, showX }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const {
    date,
    time,
    deliveryDate,
    fromZip,
    toZip,
    origin,
    destination,
    fromAddress,
    toAddress,
    fromApt,
    toApt,
    movingSize,
    fromHouseType,
    toHouseType,
    check,
    movingService,
    firstName,
    lastName,
    email,
    phone,
    additionalInfo,
  } = useSelector((state) => state.booking);
  const { rates } = useSelector((state) => state.rates);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const dialogTitle = [
    "Get a Quote!",
    "Fill Move Details",
    "Moving calculator result",
    "Fill Address",
    "Fill Contact Info",
    "Review & Submit",
  ];

  return (
    <Container maxWidth="xs" style={{ maxHeight: 606, overflow: "auto" }}>
      <DialogTitle
        id="form-dialog-title"
        classes={{ root: classes.dialogTitle }}
      >
        {dialogTitle[activeStep]}
        {(activeStep === 0 || activeStep === 6) && showX ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={() => handleClose()}
          >
            <X />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent classes={{ root: classes.dialogContent }}>
        {activeStep === 0 && (
          <FirstStep
            handleNext={handleNext}
            handleClose={handleClose}
            initial={{
              date,
              time,
              deliveryDate,
              fromZip,
              toZip,
              check,
              movingService,
            }}
          />
        )}
        {activeStep === 1 && (
          <SecondStep
            handleBack={handleBack}
            handleNext={handleNext}
            initial={{ movingSize, fromHouseType, toHouseType }}
          />
        )}
        {activeStep === 2 && (
          <ThirdStep
            handleBack={handleBack}
            handleNext={handleNext}
            ratesFromDb={rates}
          />
        )}
        {activeStep === 3 && (
          <FourthStep
            handleNext={handleNext}
            handleBack={handleBack}
            initial={{
              origin,
              destination,
              fromZip,
              toZip,
              fromAddress,
              toAddress,
              fromApt,
              toApt,
            }}
          />
        )}
        {activeStep === 4 && (
          <ContactInfoStep
            handleNext={handleNext}
            handleBack={handleBack}
            initial={{
              firstName,
              lastName,
              email,
              phone,
              additionalInfo,
            }}
          />
        )}
        {activeStep === 5 && (
          <ReviewAndSubmit handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 6 && <ThankYou handleClose={handleClose} />}
      </DialogContent>
    </Container>
  );
};

export default RootForm;
