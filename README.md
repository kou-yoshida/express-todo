# express-todo

## モデル定義

### TODO

- id number ID
- name タスク名 string
- status ステータス enum('todo','completed','deleted')
- created_at 作成日時 Date
- updated_at 更新日時 Date
- user_id タスクを作成した user_id

### USER

- id ID
- name ユーザーネーム
- email メールアドレス
- password_hash ハッシュ化したパスワード

## 実装内容

- User 関連
  - signUp(ユーザー登録)
  - login（jwt の発行）
- Todo 関連
  - createTodo（新規作成）
  - updateTodo（更新）
  - deleteTodo （削除）
  - getTodos （一覧取得）
  - getTodo (一件取得)
- params のバリデーション（zod を使用）
- 簡易的なエラーハンドリング
- jwt を使用した認証機能（session 管理を行っていない為、ログアウトはなし）
- jest でのユニットテスト
