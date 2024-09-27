# gatsby-plugin-klaro

## Description
This plugin allows to add [KIProtect Klaro](https://github.com/kiprotect/klaro) to your Gatsby site.
The plugin adds the necessary configuration and script in the head of your page.

## How to install

### Install the plugin through npm
The installation of `gatsby-plugin-klaro` is done the same way as you would install other plugins.
Refer to [Using a plugin in your site](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-plugin-in-your-site/) for a detailed guide.
Note that you need `npm` to use this plugin. You might also use another prefered package manager that you currently use.

Run the following commandto install `gatsby-plugin-klaro`:
```
npm install gatsby-plugin-klaro
```

### Load the plugin
Put the plugin into your `gatsby-config.js`. It is **important** that you insert the plugin at the top of
your loaded plugins. The order of the plugins in your `gatsby-config.js` specifies their load order.
As Klaro is a CMP it is recommended to put it at the top of your `<head></head>`.

```javascript
module.exports = {
    plugins: [
        ...
        {
            `gatsby-plugin-klaro`,
            options: {
                ...
            }
        },
        ...
    ]
};
```

## Available options

#### `klaroVersion` (optional, default: `v0.7.11`)
The version of Klaro that should be used. Use the same version strings as you find
on [Releases](https://github.com/kiprotect/klaro/releases) on the Klaro repository.
Example value: "v0.7.11"

#### `klaroUrl` (optional, default: offical klaro url with `klaroVersion` as version)
The Klaro url that should be used to load the Klaro script.
You can use %version% as a placeholder for `klaroVersion`.
The following example shows how to use a local Klaro version that lays in your static content folder.
Example value: "klaro.js"

#### `config` (required if `configUrl` is not set)
The configuration that you want to apply to Klaro.
This value is a JSON object that contains the necessary configuration of Klaro.
You can either use the `config` **or** `configUrl` option to configure Klaro.
Note that `config` has a higher priority than `configUrl` and will override `configUrl`
if both options are set. Also no configuration merging will be applied.
Example value: {...}

#### `configUrl` (required if `config` is not set)
The URL to a JavaScript file that should be loaded as configuration source.
Please use the default variable when in your JavaScript configuration file
which is `window.klaroConfig` for this to work properly.
You can either use the `config` **or** `configUrl` option to configure Klaro.
Note that `config` has a higher priority than `configUrl` and will override `configUrl`
if both options are set. Also no configuration merging will be applied.
Example value: "config.js"


#### `includeInDevelopment` (optional, default: false)
Specify if Klaro should be included in development builds.
Example value: true

## Examples of usage

#### Default URL & embedded configuration example
Usage with the default URL for Klaro and an embedded configuration:
```javascript
module.exports = {
    plugins: [
        ...
        {
            resolve: "gatsby-plugin-klaro",
            options: {
                includeInDevelopment: true,
                klaroVersion: "v0.7.11",
                config: {
                    privacyPolicy: "/privacy",
                    apps: [{
                        name: "google-analytics",
                        default: true,
                        title: "Google Analytics",
                        purposes: ["statistics"],
                        cookies: [/^ga/i],
                    },],
                }
            }
        },
        ...
    ],
};
```

#### Custom URL and external configuration example
Usage with a custom URL for Klaro and an external configuration located at static/config.js:
```javascript
module.exports = {
    plugins: [
        ...
        {
            resolve: "gatsby-plugin-klaro",
            options: {
                includeInDevelopment: true,
                klaroVersion: "v0.7.11",
                configUrl: "config.js"
            }
        },
        ...
    ],
};
```

## How to develop locally

#### Prerequisites
To develop locally you need the following tools:
 - NodeJS (recommended version: 14.15.4)
 - NPM

#### Setup
To set the project up, simply let npm install your dependencies as always:
```bash
npm install
```

#### Building the project
To build the project use the build script provided by npm:
```bash
npm run build
```
Note that building will also run eslint and jest tests.

If you want to collect coverage while building, use the following script instead:
```bash
npm run buildCoverage
```

#### Compiling the project
To compile the project run the following npm script:
```bash
npm run compile
```

#### Clean compile output
To clean the compiled output (which lays in the root directory), run:
```bash
npm run clean
```

## How to run tests
The project uses eslint as linter and jest as the testing framework.
You can run the tools using npm.

#### Run linting and testing suites
Use the following npm command to run eslint and jest:
```bash
npm run test
```

#### Run only eslint
Use the following npm command to run eslint:
```bash
npm run lint
```

#### Run only jest
Use the following npm command to run jest:
```bash
npm run test
```

## How to contribute
You are welcome to contribute to `gatsby-plugin-klaro`! Refer to Contributing for information about issues and code contributions.
