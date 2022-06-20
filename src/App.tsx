import { useState, useRef, useEffect } from 'react'
import './App.css'
import { IUser } from './interfaces/IUser'
import { getAll } from './services/UserService'
import { getSocket } from './socket'

import ListUser from './components/ListUser'

function App() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<IUser[]>([])
  const ws = useRef<WebSocket | null>(null)

  useEffect(() => {
    ws.current = getSocket()
  }, [])

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      const data = await getAll()
      setUsers(data)
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    if (!ws.current) return

    ws.current.onmessage = (e: MessageEvent) => {
      setLoading(true)

      const newUser: IUser = JSON.parse(e.data)

      setUsers((state) => [...state, newUser])
      setLoading(false)
    }
  })

  const handleClick = async () => {
    setLoading(true)

    const data = await getAll()

    setUsers(data)
    setLoading(false)
  }

  const skeleton = () => {
    return (
      <div className="container pb-6 px-4 sm:px-8 rounded-md mx-auto mt-20">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="flex flex-col space-y-3">
            <div className="w-60 bg-gray-300 h-6 rounded-md "></div>
            <div className="w-60 bg-gray-300 h-6 rounded-md "></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="container p-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Update
        </button>

        {loading ? skeleton() : <ListUser users={users} />}
      </div>
    </div>
  )
}

export default App
