import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "src/components/SectionHeader";
import CardReview from "src/components/CardReview";
import Slider from "react-slick";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  swiperContainer: {
    // width: "100%",
    maxWidth: 900,
    margin: "auto",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Reviews = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={className} {...rest}>
      <SectionHeader
        border
        title="Testimonials"
        subtitle="Take a look what our customers say."
      />
      <div className={clsx("swiper-container", classes.swiperContainer)}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <CardReview
                key={index}
                noBorder
                noShadow
                text={item.feedback}
                icon={<Rating name="read-only" value={5} readOnly />}
                authorName={item.authorName}
                authorTitle={item.authorOccupation}
                authorPhoto={item.authorPhoto}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Reviews;
