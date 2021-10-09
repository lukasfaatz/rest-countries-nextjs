import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";

function Header() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div id='navigation' className='flex justify-between p-5 bg-white'>
			<h1 className='text-4xl'>Where in the world?</h1>
			<button onClick={() => setDarkMode(!darkMode)}>
			{ darkMode ? <MoonIcon className='w-8 h-8' /> : <SunIcon className='w-8 h-8' />}
			</button>
		</div>
	);
}

export default Header;
