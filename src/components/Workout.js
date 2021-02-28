import React from "react";
import {
  Header,
  Card,
  CardContent,
  CardHeader,
  CardMeta,
  List,
  ListItem,
  Divider,
  Grid,
  GridRow,
  GridColumn,
} from "semantic-ui-react";

const SelectedWorkout = ({ workout }) => {
  return (
    <Card fluid>
      <CardContent>
        <CardHeader>{workout?.name}</CardHeader>
        <CardMeta>
          {workout?.goal}/{workout?.level}
        </CardMeta>
      </CardContent>
      <CardContent>
        <p style={{ fontSize: "1.1rem" }}>{workout?.notes}</p>

        {workout?.days.map((d, i) => (
          <div key={i}>
            <Divider horizontal>
              <Header size='medium'>{d.description}</Header>
            </Divider>
            {!d.off && (
              <>
                {d.warmup && (
                  <p style={{ marginBottom: "1.6em" }}>
                    <span style={{ fontWeight: "bold" }}>Warm-up:</span>{" "}
                    {d.warmup}
                  </p>
                )}
                <Grid>
                  <GridRow columns='equal'>
                    {d.routine.map((r, i) => (
                      <GridColumn>
                        <Header size='tiny' key={i}>
                          {r.name}
                        </Header>
                        <List link size='medium' selection>
                          {r.exercises.map((e, i) => (
                            <ListItem key={i}>
                              <a href={e.url} target='_blank' rel='noreferrer'>
                                {e.description}
                              </a>
                            </ListItem>
                          ))}
                        </List>
                      </GridColumn>
                    ))}
                  </GridRow>
                </Grid>
              </>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SelectedWorkout;