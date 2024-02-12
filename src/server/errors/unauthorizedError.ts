import { BaseApiError } from "./base/baseApiError";

export class UnauthorizedError extends BaseApiError {
  constructor(message: string) {
    super(message, 401);
  }
}
