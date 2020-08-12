import React, { Component } from "react";
import Image from "components/Image";
import { DebounceInput } from "react-debounce-input";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search:''
    };
  }

  componentDidMount() {
    // this.getImages();
  }

  handleChange = ({ target }) => {
    console.log(target.value);
    // this.getImages(target.value);
    this.setState({search:target.value},this.getImages)
  };

  getImages() {
    const clientId = "TvVqwPIY_ZKFzAkzioLZtHyppyJy907FhHF4_REcJ9Y";
    const apiUrl = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${this.state.search}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log("This is your data", result);
        this.setState({ data: result.results });
      });
  }

  render() {
    const { data ,search} = this.state;

    return (
      <>
        <DebounceInput
          minLength={4}
          debounceTimeout={1000}
          onChange={this.handleChange}
          value={search}
        />
        <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: 0 }}>
          {data.map((val) => (
            <a href={val.urls.raw} download>
              <Image url={val.urls.small} />
            </a>
          ))}
        </div>
      </>
    );
  }
}
