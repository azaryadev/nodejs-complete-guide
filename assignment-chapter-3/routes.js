const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  console.log("====================================");
  console.log("server ready on port 3000");
  console.log("url", url);
  console.log("====================================");

  if (url === "/") {
    res.write(
      '<html><head><title>Assignment Chapter 3</title></head><body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body></html>'
    );

    return res.end();
  }

  if (url === "/users") {
    res.write(
      "<html><head><title>List Users</title></head><body><ul><li>User 1</li></ul></body></html>"
    );

    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(parsedBody);
      console.log("username : ", username);

      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
};

module.exports = requestHandler;
