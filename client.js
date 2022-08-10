const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  console.log(data);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;