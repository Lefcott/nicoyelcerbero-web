export const getThumbnailUrl = (url: string) => {
  let videoId = "unknown";

  if (url.includes("youtu.be")) {
    videoId = url.replace(/\?.*/g, "").substring(url.lastIndexOf("/") + 1);
  } else if (url.includes("youtube.com")) {
    videoId = new URL(url).searchParams.get("v") || videoId;
  }

  return `https://img.youtube.com/vi/${videoId}/1.jpg`;
};
