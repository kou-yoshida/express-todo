import { UserDto } from "../../domain/dto/userDto";

export const getLoginResponse = (user: UserDto) => {
  return {
    id: user.id,
    email: user.email,
    token: user.token,
  };
};
