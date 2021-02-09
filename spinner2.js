
const spinner = ['\r|  ', '\r/   ', '\r-   ', '\r\\   ', '\r|\n'];
let incrTime = 0;
for (const char of spinner) {
 

  incrTime += 200;
  setTimeout(() => {
    process.stdout.write(char);
  },incrTime + 300);
}

