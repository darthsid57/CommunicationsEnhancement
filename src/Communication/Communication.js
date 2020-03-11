import React, { Component } from "react";
import axios from "axios";
import "./comm.css";
import {
  Form,
  Checkbox,
  Button,
  Container,
  Header,
  Divider,
  Grid,
  Menu,
  Dropdown,
  Input
} from "semantic-ui-react";

//Importing components
import label_input_field from "./components/label_input_field";
import MenuItem from "./components/MenuItem";

class Communication extends Component {
  state = { activeItem: "home" };

  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post("/upload", formData, config)
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => {});
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container className="mainpage">
        <Menu inverted widths={8}>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="licensing"
            active={activeItem === "licensing"}
            onClick={this.handleItemClick}
            link="https://www.lta.com.fj/"
          />
          <Menu.Item
            name="registration"
            active={activeItem === "registration"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="road safety"
            active={activeItem === "road safety"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="enforcement"
            active={activeItem === "enforcement"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="passengers"
            active={activeItem === "passengers"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="agencies"
            active={activeItem === "agencies"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="about us"
            active={activeItem === "about us"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Header as="h1">Communication Management</Header>
        <Divider inverted />
        <Header as="h2">Customer Details</Header>
        <Grid columns={2} divided padded>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <Grid columns={2} divided>
                    <Grid.Row>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        <label className="flabel">Client Number</label>
                        <br />
                        <label>(Licence Number)</label>
                      </Grid.Column>
                      <Grid.Column padded>
                        <input placeholder="Client Number" className="finput" />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        <label className="flabel">Client Name :*</label>
                      </Grid.Column>
                      <Grid.Column padded>
                        <input placeholder="Client Name" className="finput" />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                      <Grid.Column
                        padded
                        verticalAlign="middle"
                        textAlign="center"
                      >
                        <label className="flabel">ID Number :*</label>
                      </Grid.Column>
                      <Grid.Column padded>
                        <input placeholder="ID Number" className="finput" />
                      </Grid.Column>
                      <Grid.Column padded>
                        <Dropdown placeholder="ID Type" selection fluid />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
                <Form.Field>
                  <Checkbox label="I agree to the Terms and Conditions" />
                </Form.Field>
                <Form.Field onSubmit={this.onFormSubmit} padded inline>
                  {/* <Header as="h3">File Upload</Header> */}
                  <Input type="file" name="myImage" onChange={this.onChange} />
                  <Button type="submit" color="instagram">
                    Upload
                  </Button>
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <Grid columns={2} divided>
                    <Grid.Row>
                      <Grid.Column padded>
                        <label className="flabel">First Name</label>
                        <br />
                        <label>(Licence Number)</label>
                      </Grid.Column>
                      <Grid.Column padded>
                        <input placeholder="First Name" className="finput" />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column padded>
                        <label className="flabel">First Name</label>
                        <br />
                        <label>(Licence Number)</label>
                      </Grid.Column>
                      <Grid.Column padded>
                        <input placeholder="First Name" className="finput" />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column padded>
                        <Dropdown placeholder="Region" selection fluid />
                      </Grid.Column>
                      <Grid.Column padded>
                        <Dropdown placeholder="Office" selection fluid />
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row padded>
                      <Grid.Column>
                        <Button color="orange" type="submit" padded>
                          Submit
                        </Button>
                        <Button color="green" type="submit" padded>
                          Reset
                        </Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Communication;

//NodeJS Code for File Upload
// const path = require("path");
// const multer = require("multer");

// const storage = multer.diskStorage({
//    destination: "./public/uploads/",
//    filename: function(req, file, cb){
//       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//    }
// });

// const upload = multer({
//    storage: storage,
//    limits:{fileSize: 1000000},
// }).single("myImage");
// const router = express.Router();
// router.post("/upload", {
//    upload(req, res, (err) => {
//       console.log("Request ---", req.body);
//       console.log("Request file ---", req.file);//Here you get file.
//       /*Now do where ever you want to do*/
//       if(!err)
//          return res.send(200).end();
//    });
// };);
