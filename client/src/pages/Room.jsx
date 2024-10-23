import React, { useCallback, useEffect } from "react";
import { useSocket } from "../providers/Socket"
import { usePeer } from "../providers/Peer";

const RoomPage = () => {
    const { socket } = useSocket()
    const { peer, createOffer } =  usePeer();

    const handleNewUserJoined = useCallback(async(data) => {
        const { emailId } = data;
        console.log('New user joined room', emailId)
        const offer = await createOffer();
        socket.emit('call-user', { emailId, offer })

    }, [ createOffer, socket ])

    const handleIncommigCall = useCallback(async(data) => { 
        const { from, offer } = data;
        console.log('Incomming call from')
        const ans = await createAnswer(offer)
        socket.emit('call-accepted', { emailId: from, ans })

     }, [createAnswer, socket])

    useEffect(() => {
        socket.on('user-joined', handleNewUserJoined)
        socket.on('incomming-call', handleIncommigCall)

        return () => {
            socket.off('user-joined', handleNewUserJoined)
            socket.off('incomming-call', handleIncommigCall)
        }

    }, [handleNewUserJoined, socket])
    
    return (
        <div>
            <h1>Room Page</h1>
        </div>
    )
}

export default RoomPage