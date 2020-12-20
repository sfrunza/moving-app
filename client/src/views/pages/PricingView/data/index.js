import { colors } from '@material-ui/core';

export const interstate = {
  account: {
    title: 'Account',
    subtitle: 'Let’s try to fix your account issues.',
    icon: 'fas fa-user',
    color: colors.amber,
    items: [
      {
        title: 'New York, NY',
        updated: '$950',
      },
      {
        title: 'Washington, DC.',
        updated: '$1450',
      },
      {
        title: 'Chicago, IL',
        updated: '$1750',
      },
      {
        title: 'Philadelphia, PA',
        updated: '$1250',
      },
    ],
  },
  billing: {
    title: 'Billing',
    subtitle: 'Let’s try to fix your billing issues.',
    icon: 'fas fa-dollar-sign',
    color: colors.indigo,
    items: [
      {
        title: 'Florida, FL',
        updated: '$2550',
      },
      {
        title: 'Texas',
        updated: '$2450',
      },
      {
        title: 'California',
        updated: '$3950',
      },
      {
        title: 'Atlanta, GA',
        updated: '$2150',
      },
    ],
  },
};

export const pricings = [
  {
    title: '2 Movers',
    subtitle: 'Starting at ',
    monthly: 90,
    annual: 90,
    priceSuffix: ' / MO',
    features: [
      '2 Proffesional Movers',
      'Clean, fully stocked moving trucks',
      'Delicate handling of your belongings',
      'Free Furniture Protection',
      'Responsible and Reliable',
    ],
    disclaimer: 'We Care about Your Stuff!',
    isHighlighted: false,
  },
  {
    title: '3 Movers',
    subtitle: 'Starting at ',
    monthly: 120,
    annual: 120,
    priceSuffix: ' / MO',
    features: [
      '3 Proffesional Movers',
      'Clean, fully stocked moving trucks',
      'Delicate handling of your belongings',
      'Free Furniture Protection',
      'Responsible and Reliable',
    ],
    disclaimer: 'We Care about Your Stuff!',
    isHighlighted: true,
  },
  {
    title: '4 Movers',
    subtitle: 'Starting at ',
    monthly: 160,
    annual: 160,
    priceSuffix: ' / MO',
    features: [
      '4 Proffesional Movers',
      'Clean, fully stocked moving trucks',
      'Delicate handling of your belongings',
      'Free Furniture Protection',
      'Responsible and Reliable',
    ],
    disclaimer: 'We Care about Your Stuff!',
    isHighlighted: false,
  },
];
