import React from "react";
import { Country } from "../models/Country";
import CountryItem from "./CountryItem";

interface CountryListProps {
	countries: Country[];
}

function CountryList({ countries }: CountryListProps) {
	return (
        <div className='flex place-content-center justify-items-center'>

		<div id='countries' className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:max-w-6xl gap-12'> 
			{countries.map((country: Country) => {
				return <CountryItem key={country.name.official} country={country} />;
			})}
		</div>
        </div>
	);
}

export default CountryList;
