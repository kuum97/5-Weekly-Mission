import { TProps } from "@/common/Auth/Header";
import { ReactNode } from "react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormSetError,
} from "react-hook-form";

export interface AuthHookProp {
  setError: UseFormSetError<FormValues>;
}

export interface FormValues {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface AuthFormProps {
  children?: ReactNode;
  onSubmit: SubmitHandler<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
  purpose: TProps;
}
