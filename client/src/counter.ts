import { rpcClient } from "./main"

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => {
    setCounter(counter + 1)
    rpcClient.Ping({}).then(console.log)
  })
  setCounter(0)
}
