const colors = [
  "bg-red-500/90",
  "bg-blue-500/90",
  "bg-green-500/90",
  "bg-yellow-500/90",
  "bg-purple-500/90",
  "bg-pink-500/90",
  "bg-indigo-500/90",
  "bg-orange-500/90",
];

export function getAvatarColor(name) {
  if (!name) return colors[0];

  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }

  return colors[sum % colors.length];
}