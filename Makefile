TESTS = $(shell find codes/microservices-mine-unfinished/auth/test -name "*.test.js")
TESTS += $(shell find codes/microservices-mine-unfinished/user/test -name "*.test.js")

default:
	# make build -- run test and build
	# make test -- run test

build: test build-frontend

install:
	npm install
	make -C codes/timesheet-frontend install
	make -C codes/microservices-mine-unfinished/auth install
	make -C codes/microservices-mine-unfinished/user install

test:
	nyc mocha $(TESTS)

build-frontend:
	make -C codes/timesheet-frontend build
