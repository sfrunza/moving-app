import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader, TypedText } from 'src/components/molecules';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  items: {
    display: 'flex',
  }
}));

const PricingTable = props => {
  const classes = useStyles();

  return(
      <div className="pricing-container">
        <div className="pricing_table">
          <div className="pricing_hover_area">
            <ul className="pricing_column_first" >
                <li className="pricing_header1 discount"></li>
                <li className="even"><span>2 Movers & Truck</span></li>
                <li className="even"><span>3 Movers & Truck</span></li>
                <li className="even"><span>4 Movers & Truck</span></li>
                <li className="even"><span>Additional Mover</span></li>
            </ul>
          </div>
            <div className="pricing_hover_area">
                <ul className="gradient_blue ">
                    <li className="pricing_header1 discount">Discounted</li>
                    <li className="odd discount" data-table="2 Movers">$90 <span>/hr</span></li>
                    <li className="odd discount" data-table="3 Movers">$120 <span>/hr</span></li>
                    <li className="odd discount" data-table="4 Movers">$160 <span>/hr</span></li>
                    <li className="odd discount" data-table="Additional Mover">$35 <span>/hr</span></li>
                </ul>
            </div>

            <div className="pricing_hover_area">
                <ul className="gradient_green " >
                    <li className="pricing_header1 standard">Standard</li>
                    <li className="odd standard" data-table="2 Movers">$100 <span>/hr</span></li>
                    <li className="odd standard" data-table="3 Movers">$140<span>/hr</span></li>
                    <li className="odd standard" data-table="4 Movers">$180 <span>/hr</span></li>
                    <li className="odd standard" data-table="Additional Mover">$35 <span>/hr</span></li>
                </ul>
            </div>

            <div className="pricing_hover_area">
                <ul className="gradient_red ">
                    <li className="pricing_header1 pick">Peak</li>
                    <li className="odd peak" data-table="2 Movers">$120 <span>/hr</span></li>
                    <li className="odd peak" data-table="3 Movers">$160 <span>/hr</span></li>
                    <li className="odd peak" data-table="4 Movers">$200 <span>/hr</span></li>
                    <li className="odd peak" data-table="Additional Mover">$40 <span>/hr</span></li>
                </ul>
            </div>
        </div>
        <SectionHeader
          title={
            <span>
              <span className="discount-span">
                Discounted Rate:{' '}
              </span>
              {' '}Monday - Thursday
            </span>
          }
          titleProps={{
            variant: 'body2',
            color: 'textSecondary'
          }}
          disableGutter
        />
        <SectionHeader
          title={
            <span>
              <span className="standard-span">
                Standard Rate:{' '}
              </span>
              {' '}Weekends, first & last week of the month
            </span>
          }
          titleProps={{
            variant: 'body2',
            color: 'textSecondary',
          }}
          disableGutter
        />
        <SectionHeader
          title={
            <span>
              <span className="peak-span">
                Peak Rate:{' '}
              </span>
              {' '}National holidays & peak moving days
            </span>
          }
          titleProps={{
            variant: 'body2',
            color: 'textSecondary'
          }}
          disableGutter
        />

    </div>


  );
}

export default PricingTable;
