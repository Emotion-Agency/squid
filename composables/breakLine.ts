export const useBreakLine = () => {
  return (string: string) => {
    return string.replace(/(?:\r\n|\r|\n)/g, '</br>')
  }
}
