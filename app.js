const app = require("./src/config/express");

const port = app.get("port");

app.listen(port, () => {
   console.info(`Webserver is up for ${process.env.NODE_ENV} on port ${port}`);
});
