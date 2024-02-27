# Playwright Automation Framework

### Project Structure

```bash
├── config                          Stores configuration files for different environments
├── spec                            Stores test files
│   ├──support                      Stores utils, helpers, etc.
├── .env                            Local Environment configurations
├── .env.example                    Local Environment configurations template
├── .eslintrc.yml                   Code quality linter configuration structure
├── .gitignore                      Git ignore file
├── .eslint.config.ts               Code quality linter configurations
├── global-setup.ts                 Function which will be run once before all the tests
├── package.json                    Project dependencies and scripts
├── playwright.config.ts            Playwright configuration file
├── README.md                       Project documentation
└── yarn.lock                       Yarn lock file

note: global-setup.ts - The global-setup.ts file not only handles authentication but also saves the signed-in state, including cookies and local storage, for reuse in tests. To skip authentication, set the SKIP_AUTH environment variable to true.
```

### Setup
1. Install [Node.js](https://nodejs.org/en/download/) 
2. Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
3. Clone the repository and navigate to the cloned folder in your terminal. Run the following command to install all the dependencies:
   1. `$ git clone <repo_url>`
   2. `$ cd <cloned_folder>`
   3. `$ yarn install`
   4. `$ yarn playwright install`
4. Create `.env` file in the root folder  _(check `.env.example` for required varaibles)_
5. Run desired test scripts (e.g. `$ yarn googleNews`)

### Running Testing Scenarios
For test scripts refer to `package.json` file

Example script for running e2e `Google Auth and News` tests
*note: ENV defaults to `local` and LOG_LEVEL defaults to `debug`*
```bash
$ SKIP_AUTH=true yarn googleNews (if you want to skip the authentication)
$ SKIP_AUTH=true SKIP_STORAGE=true yarn run googleNewsNegative (if you want to skip the authentication and storage)
$ SKIP_AUTH=true SKIP_STORAGE=true yarn run googleNewsNegative --project=chromium (Use the --project command line option to run a single project, e.g. chromium, firefox, or webkit.)
$ SKIP_AUTH=true ENV=local LOG_LEVEL=debug yarn googleNews
$ SKIP_AUTH=true ENV=dev LOG_LEVEL=debug yarn googleNewsNegative
```

### Generating Reports
For generating reports run the following command:
```bash
$ yarn report
```

supported environments:
```bash
- ENV=local
- ENV=dev
- ENV=stg
```

#### Documentation
- [Playwright Docs](https://playwright.dev/docs/intro)