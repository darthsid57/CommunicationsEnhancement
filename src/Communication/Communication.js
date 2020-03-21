import React, { Component } from "react";
import axios from "axios";
import Labelinputfield from "./components/labelinputfield";
import CommendationForm from "./components/CommendationForm";
import DropdownOptions from "./components/Dropdownoptions";
import Pickerfordate from "./components/DateButton";
//import ImageComponent from "./components/ImageComponent";
import Showme from "./components/Showme";
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
  Input,
  Label,
  TextArea,
  Responsive,
  Segment,
  Accordion
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TypeofCommunication from "./components/Typeofcommunication";
import Regions from "../Communication/Redux/data/Regions";
import Offices from "../Communication/Redux/data/offices";
import IdTypes from "../Communication/Redux/data/IdType";
import User from "../Communication/Redux/data/User";

class Communication extends Component {
  state = { activeItem: "home" };

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      options: [
        { key: 1, text: "Choice 1", value: 1 },
        { key: 2, text: "Choice 2", value: 2 },
        { key: 3, text: "Choice 3", value: 3 }
      ],
      typeofcategory: "",
      clientNumber: "",
      phoneContact: "",
      clientName: "",
      emailAddress: "",
      idNumber: "",
      idType: "",
      region: "",
      office: "",
      activeIndex: 0,
      regionValue: "",
      officeValue: "",
      IdTypeValue: ""
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleTypeOfCategoryDropdown = this.handleTypeOfCategoryDropdown.bind(
      this
    );

    this.handleTypeofCommChange = this.handleTypeofCommChange.bind(this);
    this.handleClientNumberChange = this.handleClientNumberChange.bind(this);
    this.handlePhoneContactChange = this.handlePhoneContactChange.bind(this);
    this.handleClickAccordion = this.handleClickAccordion.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleOfficeChange = this.handleOfficeChange.bind(this);

    // this.handleClientNameChange = this.handleClientNameChange.bind(this);
    // this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    // this.handleIdNumberChange = this.handleIdNumberChange.bind(this);
    this.handleIdTypeChange = this.handleIdTypeChange.bind(this);
  }

  handleClientNumberChange(event) {
    console.log(event.target.value);
    this.setState({ clientNumber: event.target.value });
    console.log(this.state.clientNumber);
  }

  handlePhoneContactChange(event) {
    this.setState({});
  }

  handleTypeofCommChange(event, { value }) {
    this.setState({
      typeofcategory: value
    });
    console.log(value);
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

  handleTypeOfCategoryDropdown() {
    this.setState({ typeofcategory: "Choice 2" });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleClickAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleRegionChange(event, { value }) {
    console.log(value);
    this.setState({
      regionValue: value
    });
  }

  handleOfficeChange(event, { value }) {
    console.log(value);
    this.setState({
      officeValue: value
    });
  }

  handleIdTypeChange(event, { value }) {
    console.log(value);
    this.setState({
      IdTypeValue: value
    });
  }

  render() {
    const { activeItem, activeIndex } = this.state;

    const SizeForm = (
      <Menu inverted widths={8} color="grey" stackable>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          href="https://www.lta.com.fj"
          target="_blank"
        />
        <Menu.Item
          name="licensing"
          active={activeItem === "licensing"}
          onClick={this.handleItemClick}
          href="https://www.lta.com.fj/licensing"
          target="_blank"
        />
        <Menu.Item
          name="registration"
          active={activeItem === "registration"}
          onClick={this.handleItemClick}
          href="https://www.lta.com.fj/registration"
          target="_blank"
        />
        <Menu.Item
          name="road safety"
          active={activeItem === "road safety"}
          onClick={this.handleItemClick}
          href="https://www.lta.com.fj/road-safety"
          target="_blank"
        />
        <Menu.Item
          name="enforcement"
          active={activeItem === "enforcement"}
          onClick={this.handleItemClick}
          href="https://www.lta.com.fj/enforcement"
          target="_blank"
        />
        <Menu.Item
          name="passengers"
          active={activeItem === "passengers"}
          onClick={this.handleItemClick}
          href="https://www.lta.com.fj/passengers"
          target="_blank"
        />
        <Menu.Item
          name="agencies"
          active={activeItem === "agencies"}
          onClick={this.handleItemClick}
          href="https://www.lta.com.fj/agencies"
          target="_blank"
        />
        <Menu.Item
          name="about us"
          active={activeItem === "about us"}
          onClick={this.handleItemClick}
          href="https://www.lta.com.fj/about-us"
          target="_blank"
        />
      </Menu>
    );

    if (this.state.typeofcategory === "Choice 2") {
      return <CommendationForm />;
    } else {
      return (
        <Container className="mainpage">
          {/* <Showme /> */}
          <Segment.Group>
            <Responsive as={Segment} maxWidth={767}>
              <Accordion as={Menu} vertical>
                <Menu.Item>
                  <Accordion.Title
                    active={activeIndex === 0}
                    content="Menu"
                    index={0}
                    onClick={this.handleClickAccordion}
                  />
                  <Accordion.Content
                    active={activeIndex === 0}
                    content={SizeForm}
                  />
                </Menu.Item>
              </Accordion>
            </Responsive>
            <Responsive as={Segment} minWidth={1125}>
              <Menu inverted widths={8} color="grey" stackable>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                  href="https://www.lta.com.fj"
                  target="_blank"
                />
                <Menu.Item
                  name="licensing"
                  active={activeItem === "licensing"}
                  onClick={this.handleItemClick}
                  href="https://www.lta.com.fj/licensing"
                  target="_blank"
                />
                <Menu.Item
                  name="registration"
                  active={activeItem === "registration"}
                  onClick={this.handleItemClick}
                  href="https://www.lta.com.fj/registration"
                  target="_blank"
                />
                <Menu.Item
                  name="road safety"
                  active={activeItem === "road safety"}
                  onClick={this.handleItemClick}
                  href="https://www.lta.com.fj/road-safety"
                  target="_blank"
                />
                <Menu.Item
                  name="enforcement"
                  active={activeItem === "enforcement"}
                  onClick={this.handleItemClick}
                  href="https://www.lta.com.fj/enforcement"
                  target="_blank"
                />
                <Menu.Item
                  name="passengers"
                  active={activeItem === "passengers"}
                  onClick={this.handleItemClick}
                  href="https://www.lta.com.fj/passengers"
                  target="_blank"
                />
                <Menu.Item
                  name="agencies"
                  active={activeItem === "agencies"}
                  onClick={this.handleItemClick}
                  href="https://www.lta.com.fj/agencies"
                  target="_blank"
                />
                <Menu.Item
                  name="about us"
                  active={activeItem === "about us"}
                  onClick={this.handleItemClick}
                  href="https://www.lta.com.fj/about-us"
                  target="_blank"
                />
              </Menu>
            </Responsive>
          </Segment.Group>

          <Header as="h1">Communication Management</Header>
          <Divider inverted />
          <Header as="h2">Customer Details</Header>
          <Grid columns={2} divided padded fluid stackable>
            <User />
            {/* <Grid.Row>
              <Grid.Column>
                <Form>
                  <Form.Field>
                    <Grid columns={2} divided stackable>
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
                        <Grid.Column
                          padded
                          verticalAlign="middle"
                          textAlign="center"
                        >
                          <input
                            placeholder="Client Number"
                            className="finput"
                            onChange={this.handleClientNumberChange}
                          />

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
                        <Grid.Column
                          padded
                          verticalAlign="middle"
                          textAlign="center"
                        >
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
                          <IdTypes
                            label="ID Type"
                            placeholder="ID Type"
                            onChange={this.handleIdTypeChange}
                          />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Form>
                  <Form.Field>
                    <Grid columns={2} divided stackable>
                      <Grid.Row>
                        <Grid.Column
                          padded
                          textAlign="center"
                          verticalAlign="middle"
                        >
                          <label className="flabel">Phone Contact :*</label>
                        </Grid.Column>
                        <Grid.Column padded textAlign="center">
                          {/* <label>(Please provide a valid Contact Number)</label> */}
            {/* <input
                            placeholder="Phone Contact"
                            className="finput"
                          />
                        </Grid.Column>
                      </Grid.Row>
                      <Labelinputfield
                        label="Email Address :*"
                        placeholder="Email Address"
                      />
                      <Grid.Row>
                        <Regions
                          label="Region"
                          placeholder="Region"
                          onChange={this.handleRegionChange}
                        />
                        <Offices
                          label="Office"
                          placeholder="Office"
                          onChange={this.handleOfficeChange}
                        />
                      </Grid.Row>
                    </Grid>
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row> */}
          </Grid>
          <Header as="h1">Communication Details</Header>
          <Divider inverted />
          <TypeofCommunication ClientNumber={this.state.clientNumber} />

          {/* <Grid columns={2} divided>
            <Grid.Row padded>
              <Grid.Column padded>
                <Grid.Row padded></Grid.Row>
                <Grid.Row padded>
                  <Checkbox
                    label="I hereby declare that all the information provided is true . 
                  The information you give us in relation to this communication may be given to the police , 
                  law enforcement officers or any licensing body. "
                    padded
                  />
                </Grid.Row>
                <Form.Field padded>
                  <Label as="a" basic color="red" pointing="right">
                    Note
                  </Label>
                  <span>
                    Its Mandatory to fill in all the information that is
                    required by the Land Transport Authority.
                  </span>
                </Form.Field>
                <Form.Field onSubmit={this.onFormSubmit} padded inline>
                  {/* <Header as="h3">File Upload</Header> */}
          {/* <Input type="file" name="myImage" onChange={this.onChange} />
                  <Button type="submit" color="google plus">
                    Upload
                  </Button>
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Button color="orange" type="submit" padded>
                  Submit
                </Button>
                <Button color="green" type="submit" padded>
                  Reset
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Label>test1</Label>
            </Grid.Row>
          </Grid> */}
        </Container>
      );
    }
    //   return (
    //     <Container className="mainpage" fluid>
    //       <Menu inverted widths={8} color="grey">
    //         <Menu.Item
    //           name="home"
    //           active={activeItem === "home"}
    //           onClick={this.handleItemClick}
    //         />
    //         <Menu.Item
    //           name="licensing"
    //           active={activeItem === "licensing"}
    //           onClick={this.handleItemClick}
    //           link="https://www.lta.com.fj/"
    //         />
    //         <Menu.Item
    //           name="registration"
    //           active={activeItem === "registration"}
    //           onClick={this.handleItemClick}
    //         />
    //         <Menu.Item
    //           name="road safety"
    //           active={activeItem === "road safety"}
    //           onClick={this.handleItemClick}
    //         />
    //         <Menu.Item
    //           name="enforcement"
    //           active={activeItem === "enforcement"}
    //           onClick={this.handleItemClick}
    //         />
    //         <Menu.Item
    //           name="passengers"
    //           active={activeItem === "passengers"}
    //           onClick={this.handleItemClick}
    //         />
    //         <Menu.Item
    //           name="agencies"
    //           active={activeItem === "agencies"}
    //           onClick={this.handleItemClick}
    //         />
    //         <Menu.Item
    //           name="about us"
    //           active={activeItem === "about us"}
    //           onClick={this.handleItemClick}
    //         />
    //       </Menu>
    //       <Header as="h1">Communication Management</Header>
    //       <Divider inverted />
    //       <Header as="h2">Customer Details</Header>
    //       <Grid columns={2} divided padded fluid>
    //         <Grid.Row>
    //           <Grid.Column>
    //             <Form>
    //               <Form.Field>
    //                 <Grid columns={2} divided>
    //                   <Grid.Row>
    //                     <Grid.Column
    //                       padded
    //                       verticalAlign="middle"
    //                       textAlign="left"
    //                     >
    //                       <label className="flabel">Client Number</label>
    //                       <br />
    //                       <label>(Licence Number)</label>
    //                     </Grid.Column>
    //                     <Grid.Column padded>
    //                       <input placeholder="Client Number" className="finput" />
    //                     </Grid.Column>
    //                   </Grid.Row>
    //                   <Grid.Row>
    //                     <Grid.Column
    //                       padded
    //                       verticalAlign="middle"
    //                       textAlign="left"
    //                     >
    //                       <label className="flabel">Client Name :*</label>
    //                     </Grid.Column>
    //                     <Grid.Column padded>
    //                       <input placeholder="Client Name" className="finput" />
    //                     </Grid.Column>
    //                   </Grid.Row>
    //                   <Grid.Row columns={3}>
    //                     <Grid.Column
    //                       padded
    //                       verticalAlign="middle"
    //                       textAlign="center"
    //                     >
    //                       <label className="flabel">ID Number :*</label>
    //                     </Grid.Column>
    //                     <Grid.Column padded>
    //                       <input placeholder="ID Number" className="finput" />
    //                     </Grid.Column>
    //                     <Grid.Column padded>
    //                       <Dropdown placeholder="ID Type" selection fluid />
    //                     </Grid.Column>
    //                   </Grid.Row>
    //                 </Grid>
    //               </Form.Field>
    //             </Form>
    //           </Grid.Column>
    //           <Grid.Column>
    //             <Form>
    //               <Form.Field>
    //                 <Grid columns={2} divided>
    //                   <Grid.Row>
    //                     <Grid.Column
    //                       padded
    //                       textAlign="center"
    //                       verticalAlign="middle"
    //                     >
    //                       <label className="flabel">Phone Contact :*</label>
    //                     </Grid.Column>
    //                     <Grid.Column padded textAlign="center">
    //                       <label>(Please provide a valid Contact Number)</label>
    //                       <input placeholder="Phone Contact" className="finput" />
    //                     </Grid.Column>
    //                   </Grid.Row>
    //                   <Grid.Row>
    //                     <Grid.Column padded>
    //                       <label className="flabel">First Name</label>
    //                       <br />
    //                       <label>(Licence Number)</label>
    //                     </Grid.Column>
    //                     <Grid.Column padded>
    //                       <input placeholder="First Name" className="finput" />
    //                     </Grid.Column>
    //                   </Grid.Row>
    //                   <Grid.Row>
    //                     <Grid.Column padded>
    //                       <Dropdown placeholder="Region" selection fluid />
    //                     </Grid.Column>
    //                     <Grid.Column padded>
    //                       <Dropdown placeholder="Office" selection fluid />
    //                     </Grid.Column>
    //                   </Grid.Row>
    //                 </Grid>
    //               </Form.Field>
    //             </Form>
    //           </Grid.Column>
    //         </Grid.Row>
    //       </Grid>
    //       <Header as="h1">Communication Details</Header>
    //       <Divider inverted />
    //       <Grid columns={2} divided padded>
    //         <Grid.Row>
    //           <Grid.Column>
    //             <Dropdown
    //               placeholder="Type of Communication"
    //               selection
    //               fluid
    //               options={this.state.options}
    //             />
    //           </Grid.Column>
    //           <Grid.Column>
    //             <Dropdown placeholder="Sub Category" selection fluid />
    //           </Grid.Column>
    //         </Grid.Row>
    //         <Grid.Row>
    //           <Grid.Column>
    //             <Form>
    //               <Grid columns={2} divided>
    //                 <Grid.Row>
    //                   <Grid.Column
    //                     padded
    //                     verticalAlign="middle"
    //                     textAlign="left"
    //                   ></Grid.Column>
    //                 </Grid.Row>
    //                 <Grid.Row>
    //                   <Grid.Column
    //                     padded
    //                     verticalAlign="middle"
    //                     textAlign="center"
    //                   >
    //                     <label className="flabel">Client Name :*</label>
    //                   </Grid.Column>
    //                   <Grid.Column padded>
    //                     <input placeholder="Client Name" className="finput" />
    //                   </Grid.Column>
    //                 </Grid.Row>
    //                 <Grid.Row columns={2}>
    //                   <Grid.Column
    //                     padded
    //                     verticalAlign="middle"
    //                     textAlign="center"
    //                   >
    //                     <label className="flabel">ID Number :*</label>
    //                   </Grid.Column>
    //                   <Grid.Column padded>
    //                     <input placeholder="ID Number" className="finput" />
    //                   </Grid.Column>
    //                 </Grid.Row>
    //                 <Grid.Row columns={2}>
    //                   <Grid.Column
    //                     padded
    //                     verticalAlign="middle"
    //                     textAlign="center"
    //                   >
    //                     <label className="flabel">ID Number :*</label>
    //                   </Grid.Column>
    //                   <Grid.Column padded>
    //                     <input placeholder="ID Number" className="finput" />
    //                   </Grid.Column>
    //                 </Grid.Row>
    //               </Grid>
    //             </Form>
    //           </Grid.Column>
    //           <Grid.Column>
    //             <Form>
    //               <Form.Field>
    //                 <Grid columns={2} divided>
    //                   <Grid.Row>
    //                     <Grid.Column padded>
    //                       <label className="flabel">First Name</label>
    //                       <br />
    //                       <label>(Licence Number)</label>
    //                     </Grid.Column>
    //                     <Grid.Column padded>
    //                       <input placeholder="First Name" className="finput" />
    //                     </Grid.Column>
    //                   </Grid.Row>
    //                   <Grid.Row>
    //                     <Grid.Column padded>
    //                       <label className="flabel">First Name</label>
    //                       <br />
    //                       <label>(Licence Number)</label>
    //                     </Grid.Column>
    //                     <Grid.Column padded>
    //                       <input placeholder="First Name" className="finput" />
    //                     </Grid.Column>
    //                   </Grid.Row>
    //                   <Grid.Row>
    //                     <Grid.Column padded>
    //                       <Dropdown placeholder="Region" selection fluid />
    //                     </Grid.Column>
    //                     <Grid.Column padded>
    //                       <Dropdown placeholder="Office" selection fluid />
    //                     </Grid.Column>
    //                   </Grid.Row>
    //                 </Grid>
    //               </Form.Field>
    //             </Form>
    //           </Grid.Column>
    //         </Grid.Row>
    //       </Grid>

    //       <Grid columns={2} divided>
    //         <Grid.Row padded>
    //           <Grid.Column padded>
    //             <Grid.Row padded></Grid.Row>
    //             <Grid.Row padded>
    //               <Checkbox
    //                 label="I hereby declare that all the information provided is true .
    //                 The information you give us in relation to this communication may be given to the police ,
    //                 law enforcement officers or any licensing body. "
    //                 padded
    //               />
    //             </Grid.Row>
    //             <Form.Field padded>
    //               <Label as="a" basic color="red" pointing="right">
    //                 Note
    //               </Label>
    //               <span>
    //                 Its Mandatory to fill in all the information that is required
    //                 by the Land Transport Authority.
    //               </span>
    //             </Form.Field>
    //             <Form.Field onSubmit={this.onFormSubmit} padded inline>
    //               {/* <Header as="h3">File Upload</Header> */}
    //               <Input type="file" name="myImage" onChange={this.onChange} />
    //               <Button type="submit" color="google plus">
    //                 Upload
    //               </Button>
    //             </Form.Field>
    //           </Grid.Column>
    //           <Grid.Column>
    //             <Button color="orange" type="submit" padded>
    //               Submit
    //             </Button>
    //             <Button color="green" type="submit" padded>
    //               Reset
    //             </Button>
    //           </Grid.Column>
    //         </Grid.Row>
    //         <Grid.Row>
    //           <Label>test1</Label>
    //         </Grid.Row>
    //       </Grid>
    //     </Container>
    //   );
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

// {/* <Grid columns={2} divided padded>
//             <Grid.Row>
//               <Grid.Column>
//                 {/* <Dropdown
//                   placeholder="Type of Communication"
//                   selection
//                   fluid
//                   options={this.state.options}
//                 /> */}
//                 {/* <Dropdown
//                   placeholder="Type of Communication"
//                   selection
//                   fluid
//                   options={this.state.options}
//                   onChange={this.handleTypeofCommChange}
//                 /> */}

//               </Grid.Column>
//               <Grid.Column>
//                 <Dropdown placeholder="Sub Category" selection fluid />
//               </Grid.Column>
//             </Grid.Row>
//             <Grid.Row>
//               <Grid.Column>
//                 <Form>
//                   <Grid columns={2} divided>
//                     <Labelinputfield
//                       label="Type of Incident :*"
//                       placeholder="Type of Incident"
//                     />

//                     <Labelinputfield
//                       label="Time of Incident :*"
//                       placeholder="Time of Incident"
//                     />
//                     <Labelinputfield
//                       label="Incident Area:*"
//                       placeholder="Incident Area"
//                     />
//                   </Grid>
//                 </Form>
//               </Grid.Column>
//               <Grid.Column>
//                 <Form>
//                   <Form.Field>
//                     <Grid columns={2} divided>
//                       <Labelinputfield
//                         label="Vehicle Number"
//                         placeholder="Vehicle Number"
//                       />
//                       <Grid.Row columns={2} padded>
//                         <DropdownOptions placeholder="Location of Incident" />
//                         <Pickerfordate />
//                       </Grid.Row>
//                       <Grid.Row>
//                         <Grid.Column
//                           padded
//                           verticalAlign="middle"
//                           textAlign="center"
//                         >
//                           <TextArea rows={3} placeholder="Tell us more" fluid />
//                         </Grid.Column>
//                       </Grid.Row>
//                     </Grid>
//                   </Form.Field>
//                 </Form>
//               </Grid.Column>
//             </Grid.Row>
//           </Grid> */}
