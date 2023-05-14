const isServer = typeof window !== undefined ? false : true;

if (isServer) {
  (async () => {
    const { server } = await import("src/mocks/server");
    server.listen();
  })();
} else {
  (async () => {
    const { worker } = await import("src/mocks/browser");
    worker.start();
  })();
}
export { };
