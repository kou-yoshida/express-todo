import { BaseApiError } from "./base/baseApiError";

export class NotExistError extends BaseApiError {
  constructor(message: string) {
    super(message, 404);
  }
}
