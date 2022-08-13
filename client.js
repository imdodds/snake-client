const net = require("net");
const { IP, PORT} = require('./constants.js');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully conected to the game server!");
    conn.write("Name: IMD");
  });

  return conn;
};

module.exports = connect;
