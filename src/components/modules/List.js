import React from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core/";

import Item from "./Item";

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isFetching: true,
      error: null
    };
  }

  componentDidMount() {
    fetch("http://134.209.138.34/items/")
      .then(res => res.json())
      .then(res =>
        this.setState({
          data: res,
          isFetching: false
        })
      )

      .catch(e =>
        this.setState({
          isFetching: false,
          error: e
        })
      );
  }

  render() {
    const { data, isFetching, error } = this.state;

    if (isFetching) {
      return (
        <Grid
          container
          item
          xs={12}
          alignContent="center"
          justify="center"
          style={{ height: "100vh" }}
        >
          <Typography variant="h5" component="h1">
            Загрузка...
          </Typography>
          <Grid
            container
            item
            xs={12}
            justify="center"
            style={{ marginTop: "20px" }}
          >
            <CircularProgress />
          </Grid>
        </Grid>
      );
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <Grid container spacing={3} justify="flex-start">
        <Grid
          container
          item
          xs={12}
          justify="center"
          style={{ marginTop: "25px" }}
        >
          <Typography variant="h5" component="h1">
            Тестовое приложение для Авито.Недвижимость
          </Typography>
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Item props={item} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
