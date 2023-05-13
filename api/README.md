## Coding principles
Controllers should stay simple as posible. All data parsing and validating try to do with DTO or Pipes.
All logic should go in services.

To create new module use `nest generate module Neki`

## Documentation
Swagger documentation is accesible on http://localhost:3000/swagger
NestJs documentation is accessible on https://docs.nestjs.com

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

