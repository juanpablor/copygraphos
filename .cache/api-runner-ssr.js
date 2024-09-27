var plugins = [{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/juanpablo/copygraphos/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-google-gtag',
      plugin: require('/Users/juanpablo/copygraphos/node_modules/gatsby-plugin-google-gtag/gatsby-ssr.js'),
      options: {"plugins":[],"trackingIds":["G-X6X6TD6RP5"],"gtagConfig":{"anonymize_ip":true,"cookie_expires":0},"pluginConfig":{"head":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/**"],"origin":"https://www.googletagmanager.com","delayOnRouteUpdate":0}},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/juanpablo/copygraphos/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"fbc1a8da0fb3bbba3f1653b38e05195a"},
    },{
      name: 'gatsby-plugin-klaro',
      plugin: require('/Users/juanpablo/copygraphos/node_modules/gatsby-plugin-klaro/gatsby-ssr.js'),
      options: {"plugins":[],"includeInDevelopment":true,"klaroVersion":"v0.7.11","config":{"lang":"es","privacyPolicy":"../src/images","services":[{"trackingId":"G-X6X6TD6RP5","name":"google-analytics","default":true,"title":"Google Analytics and others","purposes":["statistics"],"cookies":[{}]}]}},
    },{
      name: 'partytown',
      plugin: require('/Users/juanpablo/copygraphos/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
