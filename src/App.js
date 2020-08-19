import React, { Component } from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "@material-ui/core";
// import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pan: "",
      nationality: "",
      accountNum: "",
      creditCard: "",
      loans: "",
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ submitted: false });
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  // handleSubmit(e) {
  //   console.log(this.state);

  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3005/banks", this.state)
  //     .then((results) => {
  //       const emptyState = {
  //         name: "",
  //         pan: "",
  //         nationality: "",
  //         accountNum: "",
  //         creditCard: "",
  //         loans: "",
  //       };
  //       this.setState(emptyState);
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     });
  // }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="App">
          <Typography
            style={{
              backgroundColor: "cornflowerblue",
              color: "white",
              width: "380px",
              borderRadius: "20px 20px 0px 0px",
              paddingLeft: "30px",
            }}
            variant="h6"
            gutterBottom
          >
            CUSTOMER DETAILS(MANDATORY)
          </Typography>
          <Divider style={{ backgroundColor: "cornflowerblue" }} />

          <div style={{ display: "flex" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "10px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ marginRight: "10px" }}
                >
                  Name of Account Holder :
                </Typography>
                <TextField
                  style={{ width: "800px" }}
                  id="filled-basic"
                  type="text"
                  variant="filled"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "10px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ marginRight: "95px" }}
                >
                  Date of Birth :
                </Typography>
                <TextField
                  style={{ width: "300px" }}
                  id="filled-basic"
                  type="date"
                  variant="filled"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "10px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ marginRight: "123px" }}
                  >
                    PAN No. :
                  </Typography>
                  <TextField
                    style={{ width: "350px" }}
                    id="filled-basic"
                    type="number"
                    variant="filled"
                    name="pan"
                    value={this.state.pan}
                    onChange={this.handleChange}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ marginRight: "10px" }}
                  >
                    Nationality :
                  </Typography>
                  <TextField
                    style={{ width: "350px" }}
                    id="filled-basic"
                    type="text"
                    variant="filled"
                    name="nationality"
                    value={this.state.nationality}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <input
                style={{
                  height: "192px",
                  width: "200px",
                  alignItems: "center",
                  border: "1px solid black",
                  paddingLeft: "30px",
                  marginLeft: "30px",
                }}
                type="file"
              />
            </div>
          </div>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ marginRight: "10px", fontWeight: "bold" }}
          >
            Relationship with the Bank :
          </Typography>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Savings Account"
              />
              <TextField
                style={{ width: "250px" }}
                id="filled-basic"
                type="number"
                variant="filled"
                helperText="Account Number #1"
                name="accountNum"
                value={this.state.accountNum}
                onChange={this.handleChange}
              />
              <TextField
                style={{ width: "250px" }}
                id="filled-basic"
                type="number"
                variant="filled"
                helperText="Account Number #2"
              />
              <TextField
                style={{ width: "250px" }}
                id="filled-basic"
                type="number"
                variant="filled"
                helperText="Account Number #3"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Credit Cards"
              />
              <TextField
                style={{ width: "250px" }}
                id="filled-basic"
                type="number"
                variant="filled"
                helperText="Credit Card Number #1"
                name="creditCard"
                value={this.state.creditCard}
                onChange={this.handleChange}
              />
              <TextField
                style={{ width: "250px" }}
                id="filled-basic"
                type="number"
                variant="filled"
                helperText="Credit Card #2"
              />
              <TextField
                style={{ width: "250px" }}
                id="filled-basic"
                type="number"
                variant="filled"
                helperText="Credit Card #3"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Loans"
              />
              <TextField
                style={{ width: "250px" }}
                id="filled-basic"
                type="number"
                variant="filled"
                helperText="Loan Number #1"
                name="loans"
                value={this.state.loans}
                onChange={this.handleChange}
              />
              <TextField
                style={{ width: "250px" }}
                id="filled-basic"
                type="number"
                variant="filled"
                helperText="Loan #2"
              />
              <TextField
                style={{ width: "250px" }}
                id="filled-basic"
                type="number"
                variant="filled"
                helperText="Loan #3"
              />
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{
                marginRight: "10px",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              Annual Income(৳) :
            </Typography>
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Less than 2L"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="2L - 5L"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="5L - 10L"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="10L & Above"
            />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{
                marginRight: "10px",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              Occupation (Please tick one) :
            </Typography>
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Salaried"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Student"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Retire"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Home Maker"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Unemployed"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Business Owner*"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Self Employed Professional*"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Others*"
            />
            <p>*(Please specify)</p>
            <TextField
              style={{ width: "180px" }}
              id="filled-basic"
              type="text"
              variant="filled"
            />
            <div>
              <Button
                variant="contained"
                style={{ margin: "24px 12px 12px 12px" }}
                type="submit"
                name="submit"
                value="Submit"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
