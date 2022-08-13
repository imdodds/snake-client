// Stores the active TCP connection object
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {

  // press ctrl + c to exit
  if (key === '\u0003') {
    process.exit();
  };

  // press wasd to move 
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  };

  // press h/g to say hello/goodbye
  if (key === 'h') {
    connection.write("Say: Hello!");
  };
  if (key === 'g') {
    connection.write("Say: Goodbye!");
  };

};

module.exports = setupInput;
