import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";

export type ErrorResponse = {
  error: string;
};

export default function useCustomMutation<TData = unknown, TVariables = void>(
  options: UseMutationOptions<TData, ErrorResponse, TVariables>,
): UseMutationResult<TData, ErrorResponse, TVariables> {
  return useMutation<TData, ErrorResponse, TVariables>(options);
}
