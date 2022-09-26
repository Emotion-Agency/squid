export const useBreakLine = () => {
  return (string: string | any) => {
    if (typeof string === 'string') {
      return string.replace(/(?:\r\n|\r|\n)/g, '</br>')
    }
    return string
  }
}
