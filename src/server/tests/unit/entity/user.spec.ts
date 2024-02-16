import { User } from "../../../domain/entities/models/user";

describe("userのテスト", () => {
  beforeEach(() => {
    const date = new Date("2024-01-01T00:00:00");
    jest.spyOn(global, "Date").mockImplementation(() => date);
  });

  describe("create", () => {
    test("受けた引数を元にUserが作成されているか", () => {
      const user = User.create({ email: "email", password: "password" });

      expect(user.id).toHaveLength(36);
      expect(user.email).toBe("email");
      expect(user.password).toBe("password");
    });
  });
});
