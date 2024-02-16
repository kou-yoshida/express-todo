import { Todo } from "../../../domain/entities/models/todo";

describe("todoのテスト", () => {
  beforeEach(() => {
    const date = new Date("2024-01-01T00:00:00");
    jest.spyOn(global, "Date").mockImplementation(() => date);
  });

  describe("create", () => {
    test("受けた引数を元にTodoが作成されているか", () => {
      const todo = Todo.create({ name: "name_test", userId: "userId_test" });

      expect(todo.id).toBeUndefined();
      expect(todo.status).toBe("todo");
      expect(todo.name).toBe("name_test");
      expect(todo.userId).toBe("userId_test");
      expect(todo.createdAt).toEqual(new Date());
    });
  });

  describe("reConstruct", () => {
    test("受けた引数を元にTodoが再構築されているか", () => {
      const todo = Todo.reConstruct({
        id: 1,
        status: "completed",
        name: "name_test",
        userId: "userId_test",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      expect(todo.id).toBe(1);
      expect(todo.status).toBe("completed");
      expect(todo.name).toBe("name_test");
      expect(todo.userId).toBe("userId_test");
      expect(todo.createdAt).toEqual(new Date());
      expect(todo.updatedAt).toEqual(new Date());
    });
  });

  describe("updateStatus", () => {
    test("受けたステータスに更新されているか", () => {
      const todo = Todo.reConstruct({
        id: 1,
        status: "completed",
        name: "name_test",
        userId: "userId_test",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const updatedTodo = todo.updateStatus("todo");

      expect(updatedTodo.id).toBe(1);
      expect(updatedTodo.status).toBe("todo");
      expect(updatedTodo.name).toBe("name_test");
      expect(updatedTodo.userId).toBe("userId_test");
      expect(updatedTodo.createdAt).toEqual(new Date());
      expect(updatedTodo.updatedAt).toEqual(new Date());
    });
  });

  describe("updateName", () => {
    test("受けた名前に更新されているか", () => {
      const todo = Todo.reConstruct({
        id: 1,
        status: "completed",
        name: "name_test",
        userId: "userId_test",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const updatedTodo = todo.updateName("name_test_updated");

      expect(updatedTodo.id).toBe(1);
      expect(updatedTodo.status).toBe("completed");
      expect(updatedTodo.name).toBe("name_test_updated");
      expect(updatedTodo.userId).toBe("userId_test");
      expect(updatedTodo.createdAt).toEqual(new Date());
      expect(updatedTodo.updatedAt).toEqual(new Date());
    });
  });
});
