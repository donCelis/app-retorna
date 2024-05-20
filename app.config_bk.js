export default () => {
  return {
    name: process.env.APP_ENV === "production" ? "My App" : "My App (DEV)",
    ios: {
      bundleIdentifier: "com.doncelis.wookieMovies",
    },
    android: {
      package: "com.doncelis.wookiemovies",
    },
    expo: {
      name: "Wookie Movies",
      slug: "wookie-movies",
      scheme: "wookie-movies",
    },
  };
};
