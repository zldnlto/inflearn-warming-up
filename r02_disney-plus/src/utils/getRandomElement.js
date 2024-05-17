export default function getRandomElement(array) {
  const copiedArray = [...array];
  let randomIndex = Math.floor(Math.random() * (copiedArray.length + 1));
  console.log(randomIndex);
  return copiedArray[randomIndex];
}
