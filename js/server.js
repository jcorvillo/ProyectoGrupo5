const { createReadStream } = require("fs");
const { createServer } = require("http");
const { PORT = 8000 } = process.env;
const HTML_CONTENT_TYPE = "text/html";
const requestListener = (req, res) => {
  res.writeHead(200, { "Content-Type": HTML_CONTENT_TYPE });
  createReadStream("index.html").pipe(res);
};
const server = createServer(requestListener);
server.listen(PORT);

