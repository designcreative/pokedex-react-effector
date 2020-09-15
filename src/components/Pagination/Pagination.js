import React from "react";
import { useStore } from "effector-react";
import { Button } from "react-bootstrap";

import { offset } from "../../store/store";

import { setPageOffsetPrevious } from "../../store/events";
import { setPageOffsetNext } from "../../store/events";

offset.on(setPageOffsetPrevious, (state, payload) =>
  state <= 0 ? state - payload : 0
);
offset.on(setPageOffsetNext, (state, payload) => state + payload);

const Pagination = () => {
  const page = useStore(offset);
  return (
    <div className="my-4">
      <Button
        variant="outline-secondary"
        onClick={() => {
          setPageOffsetPrevious(16);
        }}
      >
        Previous
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => {
          setPageOffsetNext(16);
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
