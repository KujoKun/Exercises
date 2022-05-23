export default async function handler(req, res) {
  const { username } = req.query;

  var client = new WebSocketClient();

  client.connect("wss://**/");

  client.on("connectFailed", function (error) {
    console.log("Connect Error: " + error.toString());
  });

  client.on("connect", function (connection) {
    console.log("WebSocket Client Connected");

    connection.sendUTF(username);

    connection.on("error", function (error) {
      console.log("Connection Error: " + error.toString());
    });

    connection.on("close", function () {
      console.log("Connection Closed");
    });

    connection.on("message", function (message) {
      if (message.type === "utf8") {
        console.log("Received: '" + message.utf8Data + "'");
        res.status(200).json({ result: message });
        return;
      }
    });
  });
  res.status(200).json({ result: "There was a problem" });
  return;
}
