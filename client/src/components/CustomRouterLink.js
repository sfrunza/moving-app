import React, { forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <RouterLink {...props} />
  </div>
));
export default CustomRouterLink;
