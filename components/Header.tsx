import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";
import useDarkMode from "../hooks/UseDarkMode";

function Header( ) {


	const [colorTheme, setTheme ] = useDarkMode();

	const dark = () => {
		return (
		<div className='flex items-center'> 
			<MoonIcon className='w-8 h-8 pr-1' />
			<p>Dark Mode</p>
		</div>
		)
	} 

	const light = 
		<div className='flex items-center'> 
			<SunIcon className='w-8 h-8 pr-1' />
			<p>Light Mode</p>
		</div>
	
	return (
		<div id='navigation' className='flex justify-between p-5 dark:text-gray-100 bg-white dark:bg-gray-800 border-b-2 shadow-sm'>
			<h1 className='text-4xl'>Where in the world?</h1>

			
			<button onClick={() => setTheme(colorTheme)}>
			{colorTheme === 'light' ?  dark() : light}
			</button>
		</div>
	);
}

export default Header;
