import React, { useState, useEffect } from "react";
import Image from "components/Image";
import { DebounceInput } from "react-debounce-input";

export default function About() {
  const [state, setState] = useState({ search: null, data: [] });
  // const [data, setdata] = useState({ search: "", data: [] });

  const getImages = () => {
    const clientId = "TvVqwPIY_ZKFzAkzioLZtHyppyJy907FhHF4_REcJ9Y";
    const apiUrl = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${state.search}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log("This is your data", result);
        setState({ ...state, data: result.results });
      });
  };

  useEffect(() => {
    console.log("search changed");
    if (state.search) getImages();
  }, [state.search]);

  useEffect(() => {
    console.log("did mount");

    return () => {
      console.log("unmounted");
    };
  }, []);

  const handleChange = ({ target }) => {
    setState({ ...state, search: target.value });

    console.log(target.value);
    // this.getImages(target.value);
    // this.setState({search:target.value},this.getImages)
  };

  return (
    <>
      <DebounceInput
        minLength={4}
        debounceTimeout={1000}
        onChange={handleChange}
        value={state.search}
      />
      <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: 0 }}>
        {state.data.map((val) => (
          <a key={val.id} href={val.urls.raw} download>
            <Image url={val.urls.small} />
          </a>
        ))}
      </div>
    </>
  );
}
