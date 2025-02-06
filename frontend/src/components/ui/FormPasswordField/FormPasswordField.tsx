import type { ButtonProps, GroupProps, InputProps } from "@chakra-ui/react";
import {
  IconButton,
  Input,
  mergeRefs,
  useControllableState,
} from "@chakra-ui/react";
import * as React from "react";
import { LuEye, LuEyeOff, LuLock } from "react-icons/lu";
import { InputGroup } from "../InputGroup/InputGroup";
import { Field } from "../Field/Field";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export interface PasswordVisibilityProps<TFieldValues extends FieldValues> {
  defaultVisible?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  visibilityIcon?: { on: React.ReactNode; off: React.ReactNode };
  label: string;
  invalid: boolean | undefined;
  errorText: string | undefined;
  fieldName: Path<TFieldValues>;
  fieldPlaceholder: string;
  registerOptions?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  register: UseFormRegister<TFieldValues>;
}

export interface FormPasswordFieldProps<TFieldValues extends FieldValues>
  extends InputProps,
    PasswordVisibilityProps<TFieldValues> {
  rootProps?: GroupProps;
}

export const FormPasswordField = React.forwardRef(function FormPasswordField<
  TFieldValues extends FieldValues,
>(
  props: FormPasswordFieldProps<TFieldValues>,
  forwardedRef: React.Ref<HTMLInputElement>,
) {
  const {
    rootProps,
    defaultVisible,
    visible: visibleProp,
    onVisibleChange,
    visibilityIcon = { on: <LuEye />, off: <LuEyeOff /> },
    label,
    invalid,
    errorText,
    fieldName,
    fieldPlaceholder,
    register,
    registerOptions,
    ...rest
  } = props;

  const [visible, setVisible] = useControllableState({
    value: visibleProp,
    defaultValue: defaultVisible || false,
    onChange: onVisibleChange,
  });

  const inputRef = React.useRef<HTMLInputElement>(null);
  const { ref: registerRef, ...registerProps } = register(
    fieldName,
    registerOptions,
  );

  return (
    <Field label={label} invalid={invalid} errorText={errorText}>
      <InputGroup
        width="full"
        endElement={
          <VisibilityTrigger
            disabled={rest.disabled}
            onPointerDown={(e) => {
              if (rest.disabled) return;
              if (e.button !== 0) return;
              e.preventDefault();
              setVisible(!visible);
            }}
          >
            {visible ? visibilityIcon.off : visibilityIcon.on}
          </VisibilityTrigger>
        }
        startElement={<LuLock />}
        {...rootProps}
      >
        <Input
          {...rest}
          {...registerProps}
          ref={mergeRefs(forwardedRef, inputRef, registerRef)}
          type={visible ? "text" : "password"}
          placeholder={fieldPlaceholder}
          autoComplete="on"
        />
      </InputGroup>
    </Field>
  );
}) as <TFieldValues extends FieldValues>(
  props: FormPasswordFieldProps<TFieldValues> & {
    ref?: React.Ref<HTMLInputElement>;
  },
) => React.ReactElement;

const VisibilityTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function VisibilityTrigger(props, ref) {
    return (
      <IconButton
        tabIndex={-1}
        ref={ref}
        me="-2"
        aspectRatio="square"
        size="sm"
        variant="ghost"
        height="calc(100% - {spacing.2})"
        aria-label="Toggle password visibility"
        {...props}
      />
    );
  },
);
