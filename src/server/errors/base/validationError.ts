import { BaseApiError } from "./baseApiError";

export class ValidationError extends BaseApiError {
  constructor(message: string) {
    super(message, 403);
  }
}
