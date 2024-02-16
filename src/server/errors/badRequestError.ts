import { BaseApiError } from "./base/baseApiError";

export class BadRequestError extends BaseApiError {
  constructor(message: string) {
    super(message, 400);
  }
}
