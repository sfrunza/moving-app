import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 70,
    paddingBottom: 128,
  },
  header: {
    fontFamily: 'Maison Neue Demi',
  },
  subHeader: {
    fontFamily: 'Maison Neue Normal',
    marginTop: '5px',
  },
  link: {
    '&:hover' :{
      textDecoration: 'none'
    }
  },
  address: {
    width: '180px',
  },
  infoEmail: {
    fontFamily: 'Maison Neue Normal',
    marginTop: '15px',

  }
}));

const posts = [
  {id: 1, title: 'INFORMATION WE COLLECT AND HOW WE USE IT', content: 'We may store the information you submit to or through the Site, as well as information we collect in connection with your use of the Site. We use the information to fulfill your requests, provide the Site’s functionality, improve the Site’s quality, personalize your experience, track usage of the Site, provide feedback to our moving services, display relevant advertising, provide customer support, message you, back up our systems and allow for disaster recovery, enhance the security of the Site, and comply with legal obligations.'},
  {id: 2, title: 'LINKS TO THIRD PARTY SITES', content: 'The Insight Moving, LLC. Web Site may contain links to other Web Sites. The Linked Sites are not under the control of us and Insight Moving LLC. is not responsible for the contents of any Linked Site. Insight Moving, LLC. Web Site is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Insight Moving LLC. of the site or any association with its operators.'},
  {id: 3, title: 'NO UNLAWFUL OR PROHIBITED USE', content: 'As a condition of your use of the Insight Moving, LLC. Web Site, you warrant to Insight Moving LLC. that you will not use the Insight Moving, LLC. Web Site for any purpose that is unlawful or prohibited by our Privacy Policy . You may not use the Insight Moving LLC. Web Site in any manner which could damage, disable, overburden, or impair the Insight Moving, LLC. reputation, operation or interfere with any other partys use of our services. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through our Web Sites.'},
  {id: 4, title: 'SECURITY', content: 'We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. However, no method of transmission over the Internet or via mobile device, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.'},
  {id: 5, title: 'COPYRIGHT AND TRADEMARK NOTICES:', content: 'We may revise this Privacy Policy from time to time. The most current version of the Privacy Policy will govern our use of information about you and will be located here. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on the Site prior to the effective date of the changes. By continuing to access or use Insight Moving, LLC. Web Site after those changes become effective, you agree to be bound by the revised Privacy Policy .'},
  {id: 6, title: 'MODIFICATIONS TO THIS PRIVACY POLICY', content: 'We may revise this Privacy Policy from time to time . The most current version of the Privacy Policy will govern our use of information about you and will be located here . If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on the Site prior to the effective date of the changes . By continuing to access or use Insight Moving LLC. Web Site after those changes become effective, you agree to be bound by the revised Privacy Policy.'}
];


function Main({ className, ...rest }) {
  const classes = useStyles();
  const email = 'info@insightmoving.com'

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          color="textPrimary"
          className={classes.header}
        >
          Insight Moving privacy policy.
        </Typography>
        <Box mt={4}>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.subHeader}
          >
            This Privacy Policy describes our policies on the collection, use, and disclosure of information about you in connection with your use of our websites, emails, and mobile applications("Site") . The terms "we" and "us" refer to Insight Moving LLC., a Massachusetts corporation. When you use the Site, you consent to our collection, use, and disclosure of information about you as described in this Privacy Policy.
          </Typography>
        </Box>
        {posts.map(info => {

          return (
            <Box mt={4} key={info.id}>
              <Typography
                variant="h4"
                color="textPrimary"
                className={classes.header}
              >
                {info.id}.{" "}{info.title}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.subHeader}
              >
                {info.content}
              </Typography>
            </Box>

          )
        })}
        <Box mt={4}>
          <Typography
            variant="h2"
            color="textPrimary"
            className={classes.header}
          >
            Contact
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.subHeader}
          >
            Please contact our office with any questions or concerns regarding our policy.
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className={clsx(classes.subHeader, classes.address)}
          >
            Insight Moving LLC. 1111 LOL Street Boston, MA 02001
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className={classes.infoEmail}
          >
            <a href={"mailto:" + email}>info@insightmoving.com</a>
          </Typography>

        </Box>
      </Container>
    </div>
  );
}

Main.propTypes = {
  className: PropTypes.string
};

export default Main;
