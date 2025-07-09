module.exports = (req, res) => {
    res.json({
        id: "org.streamuj.tv.demo",
        version: "1.2.0",
        name: "StreamujTV (Sosac) Demo",
        description: "Demo addon pre prehrávanie streamov vo Stremio",
        catalogs: [
            {
                type: "movie",
                id: "streamuj-catalog",
                name: "Streamuj.tv",
                extra: [{ name: "search" }]
            }
        ],
        resources: ["catalog", "stream"],
        types: ["movie"],
        idPrefixes: ["tt"]
    });
};
