import React, { useState, createRef } from "react";
import {
  Container,
  Menu,
  Grid,
  GridRow,
  GridColumn,
  Message,
  MenuItem,
  Modal,
  Button,
} from "semantic-ui-react";
import { workouts } from "../utils/workouts";
import CardItem from "./CardItem";
import SelectedWorkout from "./Workout";
import useScreens from "../hooks/useScreens";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const screenSize = useScreens();
  const contextRef = createRef();

  console.log(contextRef.current);

  const renderCards = () =>
    workouts.map((workout, i) => (
      <CardItem
        workout={workout}
        key={i}
        fluid={true}
        onClick={() => {
          setSelected(workout);
          if (screenSize === "mobile") {
            setOpen(true);
          }
        }}
      />
    ));

  return (
    <div>
      <Menu borderless fluid>
        <Container>
          <MenuItem header active>
            Workouts
          </MenuItem>
        </Container>
      </Menu>
      <Container>
        <Grid>
          <GridRow>
            <GridColumn width={screenSize === "mobile" ? 16 : 6}>
              {screenSize && screenSize === "mobile" && (
                <Modal open={open} onClose={() => setOpen(false)} closeIcon>
                  <Modal.Header>{selected?.name}</Modal.Header>
                  <Modal.Content>
                    <SelectedWorkout workout={selected} modal={true} />
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={() => setOpen(false)} color='red'>
                      Close
                    </Button>
                  </Modal.Actions>
                </Modal>
              )}
              {renderCards()}
            </GridColumn>
            {screenSize && screenSize !== "mobile" && (
              <GridColumn width={10}>
                {selected && <SelectedWorkout workout={selected} />}
                {!selected && (
                  <Message
                    size='large'
                    info
                    header='Select a workout!'
                    content='Please select a workout from the list'
                  />
                )}
              </GridColumn>
            )}
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
