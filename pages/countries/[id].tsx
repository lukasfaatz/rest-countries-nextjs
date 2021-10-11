import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Header from "../../components/Header";
import { Country } from "../../models/Country";
import { ArrowLeftIcon } from "@heroicons/react/outline";

interface CountryPageProps {
	country: Country;
}

function CountryPage({ country }: CountryPageProps) {
	const [themeMode, setdarkMode] = useState("dark");
	const languages = Object.values(country.languages).map(
		(language) => language
	);
	const borders = Object.values(country.borders).map((border) => border);
	const nativeName = Object.values(country.name.nativeName).map(
		(native) => native.common
	)[0];
	const currencies = Object.keys(country.currencies).map(
		(currency) => currency
	);

	const changeTheme = (mode: boolean) => {
		mode ? setdarkMode("dark") : setdarkMode("");
	};

	return (
		<div className={themeMode}>
			<div className='dark:bg-gray-800 dark:text-white h-screen'>
			<Header theme={(mode: boolean) => changeTheme(mode)} />
			<div className='px-24'>
				<div className='py-16'>
					<Link href='/'>
						<div className='border-2 p-2 px-4  w-36 flex items-center shadow-md rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600'>
							<ArrowLeftIcon className='h-8 w-8' />
							<a className='text-xl mx-2'>Back</a>
						</div>
					</Link>
				</div>
				<div className='flex flex-col  md:flex-row gap-5'>
					<div id='flag' className='w-full md:w-1/2 '>
						<Image src={country.flags.svg} height={600} width={900}></Image>
					</div>
					<div id='information' className='w-full md:w-1/2 md:text-2xl  '>
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
						<div className='flex items-center pt-24 '>
							<div>
								<p className='font-bold'>Border Countries:</p>
							</div>
							<div className=''>
								{borders.map((border) => (
									<span className='shadow-md rounded-lg  p-2 mx-4 text-center h-12  border-2'>
										{border}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		
			</div>
		</div>
	);
}

export default CountryPage;

interface StaticCountryProps {
	params: {
		id: string;
	};
}

export async function getStaticProps({ params }: StaticCountryProps) {
	const response = await axios.get<Country[]>(
		`https://restcountries.com/v3.1/name/${params.id}`
	);

	return {
		props: {
			country: response.data[0],
		},
	};
}

export async function getStaticPaths() {
	const response = await axios.get<Country[]>(
		`https://restcountries.com/v3.1/all`
	);
	const paths = response.data.map((country: Country) => {
		return { params: { id: country.name.common } } as StaticCountryProps;
	});

	return {
		paths,
		fallback: false,
	};
}