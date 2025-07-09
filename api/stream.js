module.exports = (req, res) => {
    res.json({
        streams: [
            {
                title: "Test Stream (DEMO)",
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            }
        ]
    });
};
