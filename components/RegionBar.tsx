import React from 'react'
import {useState} from 'react'
import {ArrowSmDownIcon} from '@heroicons/react/outline'

function RegionBar({regions, filter}) {
    const [show, setShow] = useState(true)

    const chooseRegion = (region: string) => {
        filter(region)
        setShow(!show);
    }
    return (
        <div id='filter' className='bg-white h-10 flex flex-col '>
            <div className='absolute'>
            <ArrowSmDownIcon className='text-gray-500 h-8 w-8'></ArrowSmDownIcon>
            </div>
            <button className=' w-52 pt-2 z-50' onClick={() => setShow(!show)}>Filter by Region:</button>
            {show ? '' : <div className='z-50 bg-white p-2 flex flex-col'>
            {regions.map((region: string) => {
                return <button className='hover:bg-gray-100 h-8' onClick={() => chooseRegion(region)}>{region}</button>;
            })}
            </div>
            }
            
        {/* <label htmlFor='region-filter'>Filter by Region:</label>
        <select className='appearance-none' name='region' id='region' onChange={(event) => filter(event)}>
            {regions.map((region: string) => {
                return <option value={region}>{region}</option>;
            })}
        </select> */}
    </div>
    )
}

export default RegionBar
