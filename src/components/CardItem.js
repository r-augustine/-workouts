import React from "react";
import {
  Card,
  CardContent,
  CardMeta,
  CardDescription,
  CardHeader,
} from "semantic-ui-react";

const CardItem = ({ workout, fluid, onClick }) => {
  return (
    <Card fluid={fluid} onClick={onClick}>
      <CardContent>
        <CardHeader>{workout.name}</CardHeader>
        <CardMeta>
          {workout.goal}/{workout.level}
        </CardMeta>
      </CardContent>
    </Card>
  );
};

export default CardItem;
