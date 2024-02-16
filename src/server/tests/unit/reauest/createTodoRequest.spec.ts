import express from "express";
import { CreateTodoRequest } from "../../../presentation/requests/createTodoRequest";
import { BadRequestError } from "../../../errors/badRequestError";
import { ErrorMessage } from "../../../errors/ErrorMessage";
describe("createTodoRequestのテスト", () => {
  const makeFakeRequest = (body: any = {}, params: any): express.Request => {
    return {
      body,
      params,
    } as express.Request;
  };

  it("入力されたparamsを元にリクエストが生成されているか", () => {
    const req = makeFakeRequest(
      {
        name: "name_test",
        userId: "user_id_test",
      },
      {}
    );
    const request = new CreateTodoRequest(req);

    expect(request.requestBody.userId).toBe("user_id_test");
    expect(request.requestBody.name).toBe("name_test");
  });

  it("nameが空文字の場合、BadRequestErrorがthrowされる", () => {
    const req = makeFakeRequest(
      {
        name: "",
        userId: "user_id_test",
      },
      {}
    );

    expect(() => new CreateTodoRequest(req)).toThrow(BadRequestError);
  });

  it("userIdが空文字の場合、BadRequestErrorがthrowされる", () => {
    const req = makeFakeRequest(
      {
        name: "name_test",
        userId: "",
      },
      {}
    );

    expect(() => new CreateTodoRequest(req)).toThrow(BadRequestError);
  });
});
