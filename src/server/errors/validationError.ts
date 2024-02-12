import { BaseApiError } from "./base/baseApiError";

export class ValidationError extends BaseApiError {
  constructor(message: string) {
    super(message, 403);
  }
}
