# Kubernetes Angular Demo 

this repository contains a sample Angular application that calls RESTful APIs

----

# Setup

on macOS 
### Install nvm
```shell
  brew install nvm
```
   - see https://formulae.brew.sh/formula/nvm#default
   - check successful installation with `nvm current`

```console
foo@bar:~$ nvm current
v22.14.0
```   


### Install and setup NodeJS
```shell
  nvm install 22
```
- installs NodeJS v22.14.0 (LTS)
- the output should look like the following:

```console
foo@bar:~$ nvm install 22
Downloading and installing node v22.14.0...
Downloading https://nodejs.org/dist/v22.14.0/node-v22.14.0-darwin-arm64.tar.xz...
############################################################################# 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v22.14.0 (npm v10.9.2)
```
   
#### Set default NodeJS version

```shell
  nvm alias default 22
```

```console
foo@bar:~$ nvm alias default 22
default -> 22 (-> v22.14.0)
```

### Install dependencies
```shell
  npm install
```

### Install Angular

```shell
  npm install -g @angular/cli@19.0.0
```

- this command installs the Angular CLI globally into the /bin directory under your configured Node version directory
  - e,g, ~/.nvm/versions/node/v22.14.0/bin/
- to check if Angular CLI was installed into the right directory execute `which ng` in your shell

```console
foo@bar:~$ which ng
${YOUR_HOME_DIR}/.nvm/versions/node/v22.14.0/bin/ng
```

# Run the Angular application

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
