
export function getUserProfilePhoto(name) {
  if (!name) return "U";
  const words = name.split(" ");

  if (words.length >= 2) {
    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}