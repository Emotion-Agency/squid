export const useLoadState = () => {
  const isInEditor = useState('inEditor', () => false)
  const isLoaded = useState('inLoaded', () => false)
  const isWaiting = useState('isWaiting', () => false)

  return { isInEditor, isLoaded, isWaiting }
}
