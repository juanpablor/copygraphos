!function(e,t,n,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[o]&&i[o],a=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!a[t]){if(!e[t]){var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);if(s)return s(t,!0);if(l&&"string"==typeof t)return l(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}p.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},p.cache={};var c=a[t]=new u.Module(t);e[t][0].call(c.exports,p,c,c.exports,this)}return a[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=s,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return i[o]}}),i[o]=u;for(var f=0;f<t.length;f++)u(t[f]);if(n){var c=u(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({itce5:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);const o={siteMetadata:{title:"Copygrafos",siteUrl:"https://www.copygraphos.com"},pathPrefix:"/copygraphos",graphqlTypegen:!0,plugins:["gatsby-plugin-postcss","gatsby-plugin-image","gatsby-plugin-sharp","gatsby-transformer-sharp",{resolve:"gatsby-source-filesystem",options:{name:"images",path:"./src/images/"},__key:"images"},{resolve:"gatsby-plugin-google-gtag",options:{trackingIds:["G-X6X6TD6RP5"],gtagConfig:{anonymize_ip:!0,cookie_expires:0},pluginConfig:{head:!0,respectDNT:!0,exclude:["/preview/**","/do-not-track/**"]}}},{resolve:"gatsby-plugin-manifest",options:{icon:"src/images/icon.png"}},{resolve:"gatsby-plugin-klaro",options:{includeInDevelopment:!0,klaroVersion:"v0.7.11",config:{lang:"es",privacyPolicy:"../src/images",services:[{trackingId:"G-X6X6TD6RP5",name:"google-analytics",default:!0,title:"Google Analytics and others",purposes:["statistics"],cookies:[/^ga/i]}]}}}]};n.default=o},{"@parcel/transformer-js/src/esmodule-helpers.js":"kmjAC"}],kmjAC:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["itce5"],"itce5","parcelRequiree17d");