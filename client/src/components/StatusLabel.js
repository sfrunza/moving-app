import React from "react";
import Label from "src/components/Label";

function StatusLabel({ status }) {
  const map = {
    Completed: {
      text: "Completed",
      color: "success",
    },
    Canceled: {
      text: "Canceled",
      color: "error",
    },
    "Needs Attention": {
      text: "Needs Attention",
      color: "warning",
    },
    Confirmed: {
      text: "Confirmed",
      color: "primary",
    },
  };

  const { text, color } = map[status];

  return <Label color={color}>{text}</Label>;
}

export default StatusLabel;
