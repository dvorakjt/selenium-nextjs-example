# Testing a Next.js project with Selenium

This is a simple project designed to demonstrate how to test a Next.js project
with Selenium.

## Requirements

1. Ensure you have Node.js version 18.17 or higher installed.
2. Ensure you have Python version 3.8 or higher installed.

## Getting Started

### Installing Selenium

Selenium does not need to be installed on a per-project basis. To see if you
already have it installed, you can run the following command:

```
pip show selenium
```

If installed, it will print information about the package. If the version is less
than 4.6.0, you should update it by running:

```
pip install -U selenium
```

Otherwise, you can install it by running the following command:

```
pip install selenium
```

For more information on installing Selenium, see [this](https://www.selenium.dev/documentation/webdriver/getting_started/install_library/).

For information on upgrading Selenium, see [this](https://www.selenium.dev/documentation/webdriver/troubleshooting/upgrade_to_selenium_4/).

### Drivers

Included with Selenium version 4.6.0 and higher is [Selenium Manager](https://www.selenium.dev/documentation/selenium_manager/).
Selenium Manager automatically discovers the current version of the desired browser and installs
the driver for that browser if it does not already exist. This eliminates the need
to manage browser drivers manually.

### Installing pytest

Be sure to install pytest:

```
pip install pytest
```

### Set up the Next.js project

Clone this repo. In your terminal, navigate inside the project folder and run
`npm install`. Next, run `npm build` and then `npm start` to start the production
server. Finally, to run the Selenium tests, navigate into `src/__tests__/e2e` and run
`python -m pytest`.
