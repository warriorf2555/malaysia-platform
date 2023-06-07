import React from "react";
import { TextInput } from "@mantine/core";

type InputFieldProps = {
  label: string;
  placeholder: string;
};

const InputField: React.FunctionComponent<InputFieldProps> = (props) => {
  return <TextInput {...props} />;
};

export default InputField;
