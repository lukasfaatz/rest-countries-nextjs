import React from "react";
import { useState } from "react";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/outline";

interface RegionBarProps {
	regions: string[];
	filter(region: string): void;
}

function RegionBar({ regions, filter }: RegionBarProps) {
	const [show, setShow] = useState(true);

	const chooseRegion = (region: string) => {
		filter(region);
		setShow(!show);
	};
	return (
		<div id='filter' className='bg-white dark:bg-gray-700 dark:text-gray-50 h-10 flex flex-col '>
			<div className='absolute'>
				{show ? <ArrowSmDownIcon className='text-gray-500 dark:text-gray-50 h-8 w-8'></ArrowSmDownIcon> :
					<ArrowSmUpIcon className='text-gray-500 dark:text-gray-50 h-8 w-8'></ArrowSmUpIcon> }
			</div>
			<button className=' w-52 pt-2 z-50' onClick={() => setShow(!show)}>
				Filter by Region:
			</button>
			{show ? (
				""
			) : (
				<ul className='z-50 bg-white dark:bg-gray-700 dark:text-gray-50  p-2 flex flex-col'>
					{regions.map((region: string) => {
						return (
							<li key={region}
								className='hover:bg-gray-100 dark:hover:bg-gray-600 h-8 text-center'
								onClick={() => chooseRegion(region)}
							>
								{region}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default RegionBar;
