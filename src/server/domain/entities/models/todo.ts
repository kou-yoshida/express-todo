import { randomUUID } from "crypto";

export type TodoCreationParams = {
  name: string;
  userId: string;
};
export type TodoReconstructParams = {
  id: number | undefined;
  status: TodoStatus;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt?: Date;
};
export const TODO_STATUS = {
  Todo: "todo",
  Completed: "completed",
  Deleted: "deleted",
} as const;
export type TodoStatus = (typeof TODO_STATUS)[keyof typeof TODO_STATUS];

export class Todo {
  private constructor(
    private _id: number | undefined,
    private _status: TodoStatus,
    private _name: string,
    private _userId: string,
    private _createdAt: Date,
    private _updatedAt?: Date
  ) {}

  /**
   * TODOの新規作成
   */
  static create(params: TodoCreationParams): Todo {
    return new Todo(
      undefined,
      TODO_STATUS.Todo,
      params.name,
      params.userId,
      new Date()
    );
  }

  /**
   * TODOの再構築
   */
  static reConstruct({
    id,
    status,
    name,
    userId,
    createdAt,
    updatedAt,
  }: TodoReconstructParams): Todo {
    return new Todo(id, status, name, userId, createdAt, updatedAt);
  }

  /**
   * ステータスの更新
   */
  public updateStatus(status: TodoStatus): Todo {
    return Todo.reConstruct({
      id: this._id,
      status,
      name: this._name,
      userId: this._userId,
      createdAt: this._createdAt,
      updatedAt: new Date(),
    });
  }

  /**
   * 名前の更新
   */
  public updateName(name: string): Todo {
    return Todo.reConstruct({
      id: this._id,
      status: this._status,
      name,
      userId: this._userId,
      createdAt: this._createdAt,
      updatedAt: new Date(),
    });
  }

  /**
   * ID
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * ステータス
   */

  public get status(): TodoStatus {
    return this._status;
  }

  /**
   * 名前
   */
  public get name(): string {
    return this._name;
  }

  /**
   * ユーザーID
   */
  public get userId(): string {
    return this._userId;
  }

  /**
   * 作成日
   */
  public get createdAt(): Date {
    return this._createdAt;
  }

  /**
   * 更新日
   */
  public get updatedAt(): Date | undefined {
    return this._updatedAt;
  }
}
