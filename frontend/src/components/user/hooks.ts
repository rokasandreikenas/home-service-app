import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { loginUser, registerUser } from "./api";
import { RegisterRequest } from "./types";
import { ErrorResponse } from "@/types/error";

export const USERS_KEY = "USERS";

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [USERS_KEY] }),
  });
};

export const useRegisterUser = (): UseMutationResult<
  void,
  ErrorResponse,
  RegisterRequest,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [USERS_KEY] }),
  });
};
