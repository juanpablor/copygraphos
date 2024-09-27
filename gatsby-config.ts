import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Copygrafos`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/copygraphos",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
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
            "G-X6X6TD6RP5", // Reemplaza con tu ID de Google Analytics
            // Si tienes otras IDs de seguimiento como Google Ads, puedes añadirlas aquí
            // "AW-CONVERSION_ID", 
            // "DC-FLOODIGHT_ID",
          ],
          // Configuración de Google Analytics para anonimizar IPs, evitar seguimiento en desarrollo, etc.
          gtagConfig: {
            anonymize_ip: true,
            cookie_expires: 0,
          },
          // Configuración adicional
          pluginConfig: {
            // Deshabilitar el tracking en entornos de desarrollo
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
