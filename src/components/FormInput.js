import * as React from "react";
// import { useStore } from "effector-react";
import { Col as Column } from "react-flexbox-grid";
import styled from "styled-components";
// import { formInput } from "../store/store";

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  height: 32px;
  border: 1px solid #ccc;
  margin: 32px 0;
  border-radius: 16px;
  outline: none;
  padding-left: 16px;
`;

export const FormInput = () => {
  return (
    <Column xs={6}>
      <Input
        type="text"
        className="input"
        onChange={(e) => console.log(e.currentTarget.value)}
      />
    </Column>
  );
};
