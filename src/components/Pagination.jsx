import React from 'react'

const Pagination = () => {
    return (
        <div className='flex items-center justify-center gap-4 mt-10'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'>Previous</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'>1</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'>2</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'>3</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'>Next</button>
        </div>
    )
}

export default Pagination