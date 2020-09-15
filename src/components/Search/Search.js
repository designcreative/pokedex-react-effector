import React from "react";
import { createEffect, createStore, createEvent, sample } from "effector";
import { useStore, useStoreMap } from "effector-react";
import { Form, FormControl, Button } from "react-bootstrap";

import { searchValue } from "../../store/store";
import { setSearchValue } from "../../store/events";

// searchValue.on(setSearchValue, (payload) => payload);

// const sendFormFx = createEffect({ handler: console.log });
const submitted = createEvent();
searchValue.on(setSearchValue, (state, { key, value }) => ({
  ...state,
  [key]: value,
}));

sample({
  source: searchValue,
  clock: submitted,
  target: setSearchValue,
});

const handleChange = setSearchValue.prepend((e) => ({
  key: e.target.name,
  value: e.target.value,
}));

const Field = ({ name, type }) => {
  const value = useStoreMap({
    store: searchValue,
    keys: [name],
    fn: (values) => values[name] || "",
  });
  return (
    <div>
      <FormControl
        type={type}
        name={name}
        placeholder="Search"
        className="mr-sm-2"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

const Search = (props) => {
  const callSearchFunction = (e) => {
    e.preventDefault();
    console.log("Submitting");
  };

  return (
    <Form inline onSubmit={submitted}>
      {/* <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={search}
        onChange={handleSearchInputChanges}
      /> */}
      <Field name="search" label="Search" />
      <Button variant="outline-success" onClick={callSearchFunction}>
        Search
      </Button>
    </Form>
  );
};

export default Search;
