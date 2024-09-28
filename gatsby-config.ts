import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Copygrafos`,
    siteUrl: `http://www.copygraphos.com`
  },
  pathPrefix: "",
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
     
     "gatsby-plugin-image",
     "gatsby-plugin-sharp",
     "gatsby-transformer-sharp",
     {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "images",
          "path": "./src/images/"
        },
        __key: "images"
      },
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          trackingIds: [
            "G-X6X6TD6RP5",
          ],
          gtagConfig: {
            anonymize_ip: true,
            cookie_expires: 0,
          },
          pluginConfig: {
            head: true,
            respectDNT: true,
            exclude: ["/preview/**", "/do-not-track/**"],
          },
        },
      },
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          icon: "src/images/icon.png",
        },
      },
      {
        resolve: "gatsby-plugin-klaro",
        options: {
          includeInDevelopment: true,
          klaroVersion: "v0.7.11",
          config: {
            lang: "es",
            privacyPolicy: "../src/images",
            services: [
              {
                trackingId: "G-X6X6TD6RP5",
                name: "google-analytics",
                default: true,
                title: "Google Analytics and others",
                purposes: ["statistics"],
                cookies: [/^ga/i],
              },
            ],
          },
        },
      }
]
};

export default config;
