const http = require("http");
const fs = require("fs");
const os = require("os");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    //logic to check RAM in GB
    const byteToGb = 1073741824;
    const totalRam = os.totalmem() / byteToGb;
    const availableRAM = os.freemem() / byteToGb;
    res.end(
      JSON.stringify({
        data: { 
          totalRam: `you have ${totalRam} GB of RAM` },
          availableRAM: `you have ${availableRAM} GB of RAM free out of ${totalRam} GB of RAM ` ,


      })
    );
  })
  .listen(8000); //3000-9999

console.log("Application is Runnig");
