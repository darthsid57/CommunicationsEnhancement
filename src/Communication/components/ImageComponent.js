import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class ImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: "/src/Communication/components/triangle.png"
    };
  }

  render() {
    return (
      <div>
        <Image src={this.state.src} />
      </div>
    );
  }
}

export default ImageComponent;
