module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["G-X6X6TD6RP5"],"gtagConfig":{"anonymize_ip":true,"cookie_expires":0},"pluginConfig":{"head":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/**"],"origin":"https://www.googletagmanager.com","delayOnRouteUpdate":0}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"fbc1a8da0fb3bbba3f1653b38e05195a"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
