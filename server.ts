import { createServer } from "https";

import { parse } from "url";

import next from "next";

import fs from "fs";

import path from "path";

import express, { Request, Response } from "express";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  //key: fs.readFileSync("/etc/letsencrypt/live/growguppy.com/privkey.pem"),
  //cert: fs.readFileSync("/etc/letsencrypt/live/growguppy.com/fullchain.pem"),
  
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.cert'),
};

app.prepare().then(() => {
  const server = express();

  server.all("*", (req: Request, res: Response) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  //createServer(httpsOptions, server).listen(443, () => {
  //  console.log("> Server listening on https://localhost:443");
  //});

  createServer(httpsOptions, server).listen(3000, () => {
    console.log("> Server listening on https://localhost:3000");
  });
});
