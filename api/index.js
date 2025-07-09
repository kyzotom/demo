const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
  id: "org.streamuj.tv.demo",
  version: "1.2.0",
  name: "StreamujTV (Sosac) Demo",
  description: "Demo addon pre prehrávanie streamov vo Stremio",
  catalogs: [{
    type: "movie",
    id: "streamuj-catalog",
    name: "Streamuj.tv",
    extra: [{ name: "search" }]
  }],
  resources: ["catalog", "stream"],
  types: ["movie"],
  idPrefixes: ["tt"]
};

const builder = addonBuilder(manifest);

builder.defineCatalogHandler(args => {
  return Promise.resolve({ metas: [] });
});

builder.defineStreamHandler(async ({ id }) => {
  return {
    streams: [{
      title: "Test Stream (DEMO)",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }]
  };
});

module.exports = (req, res) => builder.getInterface()(req, res);
