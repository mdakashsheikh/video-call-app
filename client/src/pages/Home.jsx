import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../providers/Socket'

const Home = () => {
    const { socket } = useSocket();
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [roomId, setRoomId] = useState()

    const handleRoomJoined = useCallback(({ roomId }) => {
        navigate(`/room/${roomId}`)
    }, [navigate])

    useEffect(() => {
        socket.on('joined-room', handleRoomJoined)

        return () => {
            socket.off('joined-room', handleRoomJoined)
        }
    }, [handleRoomJoined, socket])
    
    const handleJoinRoom = () => {
        socket.emit('join-room', { emailId: email, roomId })
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='grid grid-cols-1 gap-5'>
                <input 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    className='bg-slate-200 py-2 w-full rounded pl-2' 
                    type='email' 
                    placeholder='Enter your email'
                />
                <input 
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                    className='bg-slate-200 py-2 w-full rounded pl-2' 
                    type='text' 
                    placeholder='Enter Room Code'
                />
                <button 
                    className='bg-slate-400 py-2 w-full rounded hover:bg-slate-600 hover:text-white'
                    onClick={handleJoinRoom}
                >
                    Enter Room
                </button>
            </div>
        </div>
    )
}

export default Home