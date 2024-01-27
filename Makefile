name ='./src'
profile = 'todo express'

help:
	@echo "Makefile arguments:"
	@echo "	name:"
	@echo "		テストしたいファイルをあいまい検索するときは指定してください"
	@echo "		example: make test name=GetNotification"
	@echo ""
	@echo "Makefile commands:"
	@echo "	setup:"
	@echo "		初期設定コマンド, コンテナ内でnpm installとマイグレーションを行なう"
	@echo "	up:"
	@echo "		コンテナをバックグラウンドで起動する"
	@echo "	down:"
	@echo "		コンテナを停止する"


# コンテナ準備系

up:
	docker-compose up -d

down:
	docker-compose down

ps:
	docker-compose ps