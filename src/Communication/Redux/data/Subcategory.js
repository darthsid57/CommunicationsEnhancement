import React, { Component } from "react";
import { connect } from "react-redux";
import { getSubCategory } from "../Actions/SubCategoryAction";
import { Dropdown, Grid } from "semantic-ui-react";

class SubCategory extends Component {
  componentWillMount() {
    this.props.getSubCategory();
  }

  render() {
    return (
      <Grid.Column>
        <Dropdown
          label={this.props.label}
          placeholder={this.props.placeholder}
          fluid
          selection
          search
          options={this.props.SubCategory}
          onChange={this.props.onChange}
          error={this.props.error}
        />
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => ({
  SubCategory: state.SubCategory.items
});

export default connect(mapStateToProps, { getSubCategory })(SubCategory);
