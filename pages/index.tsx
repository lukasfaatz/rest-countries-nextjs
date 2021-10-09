import type { NextPage } from "next";
import axios from "axios";
import { useState } from "react";
import { Country } from "../models/Country";
import CountryList from "../components/CountryList";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import RegionBar from "../components/RegionBar";

const Home: NextPage = ({ countries }) => {
	const [filteredCountries, setFilteredCountries] =
		useState<Country[]>(countries);
	const [regions, setRegions] = useState<string[]>(
		Array.from(new Set(countries.map((country: Country) => country.region)))
	);
	const [search, setSearch] = useState("");

	const filterByRegion = (region: any) => {
		setFilteredCountries(
			countries.filter(
				(country: Country) => country.region === region
			)
		);
	};

	const filterCountriesByText = (event: any) => {
		console.log(event);
		
		const searchText: string = event.target.value;
		setSearch(event?.target.value);
		if (searchText == "") {
			setFilteredCountries(countries);
		} else {
			setFilteredCountries(
				countries.filter((country: Country) =>
					country.name.common.toLowerCase().includes(searchText.toLowerCase())
				)
			);
		}
	};

	return (
		<div className='bg-gray-100'>
			<Header></Header>
			<div id='container' className='bg-gray-100 px-5'>
				<div id='top-bar' className='flex justify-between p-10'>
					<SearchBar search={search} filter={filterCountriesByText}/>
					<RegionBar regions={regions} filter={filterByRegion}/>
				</div>
				<CountryList countries={filteredCountries}></CountryList>
			</div>
		</div>
	);
};

export default Home;


export async function getServerSideProps() {
	const response = await axios.get("https://restcountries.com/v3.1/all");

	return {
		props: {
			countries: response.data,
		},
	};
}
