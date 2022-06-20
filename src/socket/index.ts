let socket: WebSocket

export const getSocket = (): WebSocket => {
  if (socket) return socket

  socket = new WebSocket(
    'wss://6ch89n700a.execute-api.us-east-1.amazonaws.com/Prod'
  )

  socket.onopen = () => {
    console.log('Successfully Connected')
  }

  socket.onclose = (event: any) => {
    console.log('Socket Closed Connection: ', event)
  }

  socket.onerror = (error: any) => {
    console.log('Socket Error: ', error)
  }

  return socket
}
