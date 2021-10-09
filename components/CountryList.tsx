import React from "react";
import CountryItem from "./CountryItem";

function CountryList({ countries }: any) {
	return (
        <div className='flex place-content-center justify-items-center'>

		<div id='countries' className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:max-w-6xl gap-12'>
			{countries.map((country: any) => {
				return <CountryItem country={country} />;
			})}
		</div>
        </div>
	);
}

export default CountryList;
