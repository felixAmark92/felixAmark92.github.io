export let resizeImageUrl = (originalUrl) => {
  const parts = originalUrl.split("/");
  const gamesIndex = parts.indexOf("games");
  parts.splice(gamesIndex, 0, "resize", 640, "-");
  const resizedUrl = parts.join("/");

  return resizedUrl;
};
