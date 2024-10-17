import React from 'react'

const Home = () => {
    return (
        <div className='w-screen h-screen bg-red-600'>
            <div className='bg-red-300'>
                <input type='email' placeholder='Enter your email...'/>
                <input type='text' placeholder='Enter Room Code' />
                <button>Enter Room</button>
            </div> 
        </div>
    )
}

export default Home