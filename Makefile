.DEFAULT_GOAL := help
.PHONY: setup build help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup: clean ## Setup project
	npm install

install: clean
	npm ci

start: ## Run project
	npm run start

clean: ## Remove node_modules
	rm -rf node_modules

test: ## Run test
	npm run test

test.coverage:
	npm run test --coverage

