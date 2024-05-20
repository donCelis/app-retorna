export default () => {
  return {
    name: process.env.APP_ENV === "production" ? "My App" : "My App (DEV)",
    ios: {
      bundleIdentifier:
        process.env.APP_ENV === "production" ? "com.my.app" : "com.my.app-dev",
    },
    expo: {
      name: "Wookie Movies",
      slug: "wookie-movies",
      scheme: "wookie-movies",
    },
  };
};
