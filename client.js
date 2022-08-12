const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully conected to the game server!");
    conn.write("Name: IMD");

    /*
    conn.write("Move: up");

    setTimeout(() => {
      conn.write("Move: left");
    }, 2000);

    setInterval(() => {
      conn.write("Move: left");
    }, 100);
    */

  });

  return conn;
};

module.exports = connect;
