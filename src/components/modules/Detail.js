import React from "react";
import {
  Typography,
  Grid,
  CircularProgress,
  Button,
} from "@material-ui/core";

import Photo from "./Slider";

export default class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isFetching: true,
      error: null
    };
  }

  componentDidMount() {
    const id = localStorage.id;
    fetch(`http://134.209.138.34/item/${id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          data: res[0],
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
    const { data, isFetching } = this.state;

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

    return (
      <Grid container item xs={12} justify="center">
        <Grid container item xs={12} justify="center">
          <Typography variant="h5" component="h1" style={{ marginTop: "25px" }}>
            Тестовое приложение для Авито.Недвижимость
          </Typography>
        </Grid>
        <Grid container>
          <Button
            href="/"
            variant="contained"
            color="primary"
            style={{
              flexDirection: "flex-start",
              marginTop: "20px",
              marginBottom: "20px"
            }}
          >
            Назад
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justify="flex-start"
          style={{ flexDirection: "column" }}
        >
          <Typography
            gutterBottom
            color="textPrimary"
            variant="h6"
            component="h2"
          >
            Назначение:
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="h6"
            component="h2"
          >
            {this.state.data.title}
          </Typography>
          <Typography
            gutterBottom
            color="textPrimary"
            variant="h6"
            component="h2"
          >
            Адрес:
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="h6"
            component="h2"
          >
            {this.state.data.address}
          </Typography>
          <Typography
            gutterBottom
            color="textPrimary"
            variant="h6"
            component="h2"
          >
            Описание:
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="h6"
            component="h2"
          >
            {this.state.data.description}
          </Typography>
          <Typography
            gutterBottom
            color="textPrimary"
            variant="h6"
            component="h2"
          >
            Цена:
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="h6"
            component="h2"
          >
            {this.state.data.price}
          </Typography>
          <Typography
            gutterBottom
            color="textPrimary"
            variant="h6"
            component="h2"
          >
            Продавец:
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="h6"
            component="h2"
          >
            {this.state.data.sellerName}
          </Typography>
        </Grid>
        <Photo props={data.images} />
      </Grid>
    );
  }
}
