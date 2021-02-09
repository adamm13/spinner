let loading = ['\r|  ', '\r/  ', '\r-  ', '\r\\ ', '\r| ', '\r|  ', '\r/  ', '\r-  ', '\r\\ ', '\r| ']

for (let i = 0; i < loading.length; i++) {
  setTimeout(() => {
    process.stdout.write(loading[i]);
  }, i * 200);
}