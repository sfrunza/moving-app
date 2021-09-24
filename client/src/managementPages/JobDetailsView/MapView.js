import React from "react";
import { Card } from "@material-ui/core";

function MapView() {
  return (
    <Card>
      <img
        src="https://www.jqueryscript.net/images/direction-route-google-maps.jpg"
        alt="maps"
        height="200"
        width="100%"
        style={{ objectFit: "cover" }}
      />
    </Card>
  );
}
export default MapView;
