import React from 'react'

const Home = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='grid grid-cols-1 gap-5'>
                <input 
                    className='bg-slate-200 py-2 w-full rounded pl-2' 
                    type='email' 
                    placeholder='Enter your email'
                />
                <input 
                    className='bg-slate-200 py-2 w-full rounded pl-2' 
                    type='text' 
                    placeholder='Enter Room Code'
                />
                <button className='bg-slate-400 py-2 w-full rounded hover:bg-slate-600 hover:text-white'>
                    Enter Room
                </button>
            </div>
        </div>
    )
}

export default Home