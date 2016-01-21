BIN=node_modules/.bin

build:
	$(BIN)/babel src --out-dir lib

clean:
	rm -rf lib

test: lint

lint:
	$(BIN)/eslint src

PHONY: build clean test lint
