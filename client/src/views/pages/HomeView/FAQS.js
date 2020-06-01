import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2)
    }
  },
  container: {
    display: 'flex !important',
    flexWrap: 'wrap !important',
    [theme.breakpoints.down('sm')]: {
      display: 'table !important'
    }
  },
  item: {
    fontFamily: "Maison Neue",
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}));
const data = [
  {
    id: 1,
    question: "How much do movers cost in Boston?",
    answer: "The average charge for a local move in Metro Boston area is about $80 to $100 per hour for a 2 men crew and a moving truck. This cost will vary based on specific moving needs."
  },
  {
    id: 2,
    question: "Should I buy moving insurance?",
    answer: "While most moving companies offer $0.60 per pound for a damaged or lost item, Insight Moving offer value protection up to $20,000 in household goods coverage at no extra charge.."
  },
  {
    id: 3,
    question: "How can I get moving boxes in Boston?",
    answer: "You can try nearest home improvement stores or order a Full Packing Services. Our experienced movers will have all necessary packing materials to pack everything safe and professionally."
  },
  {
    id: 4,
    question: "How many movers do I need for my move?",
    answer: "It depends on the size of your move and amount of stairs. Most 1 or 2 bedroom apartment moves can be easily done with 2 or 3 movers crew."
  },
  {
    id: 5,
    question: "Do I need a parking permit for my moving truck in Boston?",
    answer: "Moving permit is not required in Boston, however it is the only legal way to reserve the space for the moving van. The cost for a one-day moving truck parking permit is $110, according to the website for the city of Boston."
  },
  {
    id: 6,
    question: "How far in advance should you schedule movers?",
    answer: "As early as you can, especially if you are planning to move in a peak moving season. Typically 2-3 weeks is enough to reserve the date you want. We also accept early and last minute bookings."
  }
]

function FAQS({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="textPrimary"
          style={{fontFamily: "Maison Neue Bold", textAlign: 'center' }}
        >
          Frequently asked questions
        </Typography>
        <Box my={3}>
          <Divider />
        </Box>

          <Grid
            className={classes.container}
          >
            {
              data.map(item => {
                return (
                  <Box mt={6} style={{flex: '0 50%', boxSizing: 'border-box'}} key={item.id}>
                    <dd>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        style={{fontFamily: "Maison Neue Bold" }}
                      >
                        {item.question}
                      </Typography>
                    </dd>
                    <dt>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        className={classes.item}
                      >
                        {item.answer}
                      </Typography>
                    </dt>
                  </Box>
                )
              })
            }
          </Grid>
      </Container>
    </div>
  );
}

FAQS.propTypes = {
  className: PropTypes.string
};

export default FAQS;
