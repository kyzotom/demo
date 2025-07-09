export default function handler(req, res) {
  res.status(200).json({
    streams: [{
      title: "Test Stream (DEMO)",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }]
  });
}
