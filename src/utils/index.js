export const getRandomAdjective = () => {
  const adjectives = [
    "cute",
    "funny",
    "awesome",
    "adorable",
    "fierce",
    "playful",
    "Joyful",
    "Energetic",
    "Vibrant"
  ];
  const randomIndex = Math.floor(Math.random() * adjectives.length);
  return adjectives[randomIndex];
};
