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

const SelectedWorkout = ({ workout, modal = false }) => {
  return !modal ? (
    <Card fluid>
      <CardContent>
        <CardHeader>{workout?.name}</CardHeader>
        <CardMeta>
          {workout?.goal}/{workout?.level}
        </CardMeta>
      </CardContent>
      <CardContent>
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
                <Grid columns={2}>
                  <GridRow columns='equal'>
                    {d.routine.map((r, i) => (
                      <GridColumn key={`${r.name}-${i}`}>
                        <Header size='tiny'>{r.name}</Header>
                        <List link size='medium' selection>
                          {r.exercises.map((e, i) => (
                            <ListItem key={`ex-${i}`}>{e.description}</ListItem>
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
  ) : (
    <>
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
              <Grid columns={2}>
                <GridRow columns='equal'>
                  {d.routine.map((r, i) => (
                    <GridColumn key={`${r.name}-${i}`}>
                      <Header size='tiny'>{r.name}</Header>
                      <List link size='medium' selection>
                        {r.exercises.map((e, i) => (
                          <ListItem key={`ex-${i}`}>{e.description}</ListItem>
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
    </>
  );
};

export default SelectedWorkout;
