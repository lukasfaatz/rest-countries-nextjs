import React from 'react'
import {SearchIcon} from '@heroicons/react/outline'

function SearchBar( { search, filter}) {
    return (
        <div id='search' className='flex relative  align-middle'>
            <SearchIcon 
            className='h-6 w-6 z-50 mt-2 ml-1 text-gray-500 dark:text-gray-100'></SearchIcon>
            <input
            className='pl-8 absolute h-10 dark:text-gray-50 rounded-lg md:w-72 dark:bg-gray-700'
            type='text'
            placeholder='Search for a country ...'
            value={search}
            onChange={(event) => filter(event)}
        />
    </div>
    )
}

export default SearchBar
