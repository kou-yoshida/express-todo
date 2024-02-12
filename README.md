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

## ts-node

開発時に使用する

## tsc

ビルドする時に使用する

## curl

post の curl curl -X POST -H "Content-Type: application/json" -d '{"name":"太郎", "age":"30"}' https://xxxxx.net/xxxxxx

## テスト関連（jest）

- --forceExit --detectOpenHandles -> 単一プロセスで実行し、デバッグしやすくなる

## TODO

- signUp 済
- login 済
- logout session 管理をいつかやる
- createTodo 済
- updateTodo
- deleteTodo
- getTodos
- DB をモックしたテスト？

## メモ

- データベースログイン mysql -u root -p root ユーザーとしてパスワード入力する
- データベース一覧 show databases
- 切り替え use hoge
- 内容確認 select database()
- 文字コード確認 show variables like '%cha%'
- 照合順序確認 show variables like '%collation%'
