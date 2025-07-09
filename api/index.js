const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
  id: "org.demo.addon",
  version: "1.0.0",
  name: "Demo Addon",
  description: "Demo pre Stremio Vercel nasadenie.",
  catalogs: [
    {
      type: "movie",
      id: "demo-catalog",
      name: "Demo Catalog",
      extra: [{ name: "search" }]
    }
  ],
  resources: ["catalog", "stream"],
  types: ["movie"],
  idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler(() => Promise.resolve({ metas: [] }));

builder.defineStreamHandler(() =>
  Promise.resolve({
    streams: [
      {
        title: "Demo Test Stream",
        url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      }
    ]
  })
);

// TOTO je dôležité pre Vercel!
module.exports = (req, res) => builder.getInterface()(req, res);
