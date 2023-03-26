const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

/*
ini adalah api back end server local pertama saya
untuk mengakses nya gunakan link berikut :
http://notesapp-v1.dicodingacademy.com/

tata cara : 
1. jalankan program ini jika belum berjalan dengan perintah : npm run start

2. ubah dulu pengaturan keamanan di chrome atau edge komputer melalui link ini :
edge://flags/#block-insecure-private-network-requests
chrome://flags/#block-insecure-private-network-requests
disable block tersebut (setelah selesai mencoba kembalikan ke default)

3. ubah (change URL ) dengan memasukkan http://localhost:5000

4. kamu dapat mencobanya !

*/
