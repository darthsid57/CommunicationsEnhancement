import {
  ADD_CLIENTNUMBER,
  ADD_CLIENTNAME,
  ADD_IDNUMBER,
  ADD_PHONECONTACT,
  ADD_EMAILADDRESS,
  ADD_IDTYPE,
  ADD_REGION,
  ADD_OFFICE,
  GET_USER
} from "../Actions/UserAction";

const initialState = {
  clientNumber: "",
  clientName: "",
  IdNumber: "",
  phoneContact: "",
  emailAddress: "",
  IdType: "",
  region: "",
  office: ""
};

const CustomerDetails = {
  clientNumber: "",
  clientName: "",
  IdNumber: "",
  phoneContact: "",
  emailAddress: "",
  IdType: "",
  region: "",
  office: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENTNUMBER:
      console.log("reducer for User", state, action.payload);
      CustomerDetails.clientNumber = action.payload;
      return {
        clientNumber: CustomerDetails.clientNumber
      };
    case ADD_CLIENTNAME:
      console.log("reducer for User", state, action.payload);
      CustomerDetails.clientName = action.payload;
      return {
        clientName: CustomerDetails.clientName
      };
    case ADD_IDNUMBER:
      console.log("reducer for User", state, action.payload);
      CustomerDetails.IdNumber = action.payload;
      return {
        IdNumber: CustomerDetails.IdNumber
      };
    case ADD_PHONECONTACT:
      console.log("reducer for User", state, action.payload);
      CustomerDetails.phoneContact = action.payload;
      return {
        phoneContact: CustomerDetails.phoneContact
      };
    case ADD_EMAILADDRESS:
      console.log("reducer for User", state, action.payload);
      CustomerDetails.emailAddress = action.payload;
      return {
        emailAddress: CustomerDetails.emailAddress
      };
    case ADD_IDTYPE:
      console.log("reducer for User", state, action.payload);
      CustomerDetails.IdType = action.payload;
      return {
        IdType: CustomerDetails.IdType
      };
    case ADD_REGION:
      console.log("reducer for User", state, action.payload);
      CustomerDetails.region = action.payload;
      return {
        region: CustomerDetails.region
      };
    case ADD_OFFICE:
      console.log("reducer for User", state, action.payload);
      CustomerDetails.office = action.payload;
      return {
        office: CustomerDetails.office
      };
    case GET_USER:
      console.log("Get_USER" + CustomerDetails.clientNumber);
      console.log("Get_USER" + CustomerDetails.clientName);
      console.log("Get_USER" + CustomerDetails.IdNumber);
      return {
        // ...state
        clientNumber: CustomerDetails.clientNumber,
        clientName: CustomerDetails.clientName,
        IdNumber: CustomerDetails.IdNumber,
        phoneContact: CustomerDetails.phoneContact,
        emailAddress: CustomerDetails.emailAddress,
        IdType: CustomerDetails.IdType,
        region: CustomerDetails.region,
        office: CustomerDetails.office
      };
    default:
      return state;
  }
}
