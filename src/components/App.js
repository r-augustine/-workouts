import React, { useState } from "react";
import {
  Container,
  Menu,
  Grid,
  GridRow,
  GridColumn,
  Message,
  MenuItem,
} from "semantic-ui-react";
import { workouts } from "../utils/workouts";
import CardItem from "./CardItem";
import SelectedWorkout from "./Workout";

const App = () => {
  const [selected, setSelected] = useState(null);

  const renderCards = () =>
    workouts.map((workout, i) => (
      <CardItem
        workout={workout}
        key={i}
        fluid={true}
        onClick={() => {
          setSelected(workout);
        }}
      />
    ));

  return (
    <>
      <Menu borderless>
        <Container>
          <MenuItem header active>
            Workouts
          </MenuItem>
        </Container>
      </Menu>
      <Container>
        <Grid>
          <GridRow>
            <GridColumn width={6}>{renderCards()}</GridColumn>
            <GridColumn width={10}>
              {selected && <SelectedWorkout workout={selected} />}
              {!selected && (
                <Message
                  fluid
                  info
                  header='Select a workout!'
                  content='Please select a workout from the list'
                />
              )}
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </>
  );
};

export default App;
