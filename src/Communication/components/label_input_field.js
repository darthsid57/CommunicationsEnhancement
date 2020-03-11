import React from "react";
import { Grid } from "semantic-ui-react";

function label_input_field(_label, _placeholder) {
  return (
    <Grid.Row>
      <Grid.Column padded>
        <label className="flabel">{_label}</label>
        <br />
      </Grid.Column>
      <Grid.Column padded>
        <input placeholder={_placeholder} className="finput" />
      </Grid.Column>
    </Grid.Row>
  );
}

export default label_input_field;
