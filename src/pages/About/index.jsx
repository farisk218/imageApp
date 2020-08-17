import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import Card from "components/Card";

export default function About() {
  const [state, setState] = useState({
    search: null,
    data: [],
    page: 1,
    total: 0,
    totalPages: 0,
  });
  // const [data, setdata] = useState({ search: "", data: [] });

  const getImages = (pageNo = 1) => {
    const clientId = "TvVqwPIY_ZKFzAkzioLZtHyppyJy907FhHF4_REcJ9Y";
    const apiUrl = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=${state.search}&page=${pageNo}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log("This is your data", result);
        setState({
          ...state,
          data: result.results,
          total: result.total,
          totalPages: result.total_pages,
          page: pageNo,
        });
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
      {/* {[...Array(state.totalPages)].map((val, i) => (
        <button key={i} onClick={()=>getImages(i+1)}>
          {i+1}
        </button>
      ))} */}
      <button onClick={() => getImages(1)}>first</button>
      {state.page > 2 && (
        <button onClick={() => getImages(state.page - 1)}>
          {state.page - 1}
        </button>
      )}
      {!(state.page===1 || state.page===state.totalPages) && <button>{state.page}</button>}
      {(state.page < state.totalPages-1) && (
        <button onClick={() => getImages(state.page + 1)}>
          {state.page + 1}
        </button>
      )}
      <button onClick={() => getImages(state.totalPages)}>last</button>
      <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: 0 }}>
        {state.data.map((val) => (
          <Card val={val}/> 
        ))}
      </div>
    </>
  );
}
