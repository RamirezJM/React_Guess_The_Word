import { words } from "./words";

export function selectWords(){
  const randomWord = Math.floor(Math.random() * words.length)
  return words[randomWord]
}