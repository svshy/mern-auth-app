import { Input } from "@chakra-ui/react";
import { Field } from "../Field/Field";
import { InputGroup } from "../InputGroup/InputGroup";
import {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { ReactNode } from "react";

interface Props<TFieldValues extends FieldValues> {
  label: string;
  name: Path<TFieldValues>;
  invalid: boolean | undefined;
  errorText: string | undefined;
  placeholder: string;
  register: UseFormRegister<TFieldValues>;
  registerOptions?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  startElement?: ReactNode;
}

const FormTextField = <TFieldValues extends FieldValues>({
  label,
  invalid,
  errorText,
  placeholder,
  startElement,
  register,
  name,
  registerOptions,
}: Props<TFieldValues>) => {
  return (
    <Field label={label} invalid={invalid} errorText={errorText}>
      <InputGroup width="full" startElement={startElement}>
        <Input placeholder={placeholder} {...register(name, registerOptions)} />
      </InputGroup>
    </Field>
  );
};

export default FormTextField;
