import React from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";

function TotalHours({ rate, jobs, calculateSum }) {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="body1" color="textPrimary">
            Total hours:
          </Typography>
          <Typography gutterBottom variant="body1" color="textSecondary">
            {calculateSum(jobs)}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="body1" color="textPrimary">
            Total amount:
          </Typography>
          <Typography gutterBottom variant="body1" color="textSecondary">
            ${calculateSum(jobs) * rate}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TotalHours;
