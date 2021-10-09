import React from "react";
import { Country } from "../models/Country";
import Image from "next/image";

function CountryItem({ country }: any) {
	return (
		<div className='group'>
			<div
				id='country'
				className='flex flex-col bg-white shadow-xl transform hover:scale-105'
			>
				<Image
					src={country.flags.svg}
					alt='Countries flag'
					width={300}
					height={200}
				/>
				<div className='p-4'>
					<h2 className='text-xl font-bold'>{country.name.common}</h2>
					<p>
						<b>Population</b>: {country.population.toLocaleString()}
					</p>
					<p>
						<b>Region:</b> {country.region}
					</p>
					<p>
						<b>Capital:</b> {country.capital}
					</p>
				</div>
			</div>
		</div>
	);
}

export default CountryItem;
