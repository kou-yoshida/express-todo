export class BaseApiError extends Error {
  constructor(message: string, private _statusCode: number) {
    super(message);

    this.name = new.target.name;
  }
}
