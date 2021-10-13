import React from "react";
import { Country } from "../models/Country";
import Borders from "./Borders";

interface CountryInformationProps {
	country: Country;
	countries: Country[];
}

function CountryInformation({ country, countries }: CountryInformationProps) {
	const languages = Object.values(country.languages).map(
		(language) => language
	);
	const borders = Object.values(country.borders).map((border) => border);
	const [nativeName] = Object.values(country.name.nativeName).map(
		(native) => native.common
	);
	const currencies = Object.keys(country.currencies).map(
		(currency) => currency
	);

	return (
		<div id='information' className='w-full md:w-1/2 '>
			<h1 className='text-4xl font-bold py-12'>{country.name.common}</h1>
			<div className='flex flex-col  md:flex-row'>
				<div className='w-full md:w-1/2 space-y-3'>
					<div className='flex'>
						<div className='font-bold pr-1'>Native Name:</div>
						<div>{nativeName}</div>
					</div>{" "}
					<div className='flex'>
						<div className='font-bold pr-1'>Population:</div>
						<div>{country.population.toLocaleString()}</div>
					</div>
					<div className='flex'>
						<div className='font-bold pr-1'>Region:</div>
						<div>{country.region}</div>
					</div>
					<div className='flex'>
						<div className='font-bold pr-1'>Sub Region:</div>
						<div>{country.subregion}</div>
					</div>
					<div className='flex'>
						<div className='font-bold pr-1'>Capital: </div>
						<div>{country.capital}</div>
					</div>
				</div>
				<div className='w-full md:w-1/2 space-y-3'>
					<p>
						<b>Top Level Domain:</b> {country.tld}
					</p>
					<p>
						<b>Currencies:</b> {currencies.join(", ")}
					</p>
					<p>
						<b>Langaguges:</b> {languages.join(", ")}
					</p>
				</div>
			</div>
			<Borders borders={borders} countries={countries} />
		</div>
	);
}

export default CountryInformation;
