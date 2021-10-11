import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Header from "../../components/Header";
import { Country } from "../../models/Country";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Borders from "../../components/Borders";
import CountryInformation from "../../components/CountryInformation";
import CountryFlag from "../../components/CountryFlag";

interface CountryPageProps {
	country: Country;
	countries: Country[];
}

function CountryPage({ country, countries }: CountryPageProps) {


	return (
		<div className='dark:bg-gray-800 dark:text-white min-h-screen'>
			<Header />
			<div className='px-12 md:px-24'>
				<div className='py-16'>
					<Link href='/'>
						<div className='border-2 p-2 px-4  w-36 flex items-center shadow-md rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600'>
							<ArrowLeftIcon className='h-8 w-8' />
							<a className='text-xl mx-2'>Back</a>
						</div>
					</Link>
				</div>
				<div className='flex flex-col  md:flex-row gap-5'>
					<CountryFlag country={country}/>
					<CountryInformation country={country} countries={countries}/>
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

	const responseAll = await axios.get<Country[]>(
		`https://restcountries.com/v3.1/all`
	);

	return {
		props: {
			country: response.data[0],
			countries: responseAll.data,
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
