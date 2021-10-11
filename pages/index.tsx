import axios from "axios";
import { useState } from "react";
import { Country } from "../models/Country";
import CountryList from "../components/CountryList";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import RegionBar from "../components/RegionBar";

interface HomeProps {
	countries: Country[];
}

const Home = ({ countries }: HomeProps) => {
	const [filteredCountries, setFilteredCountries] =
		useState<Country[]>(countries);

	const [search, setSearch] = useState("");

	const filterByRegion = (region: any) => {
		setFilteredCountries(
			countries.filter((country: Country) => country.region === region)
		);
	};
	const regions = Array.from(
		new Set(countries.map((country: Country) => country.region))
	);

	const filterCountriesByText = (event: any) => {
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
		<>
			<Header></Header>
			<div id='container' className='bg-gray-100 dark:bg-gray-800 px-5'>
				<div id='top-bar' className='flex justify-between p-10 '>
					<SearchBar search={search} filter={filterCountriesByText} />
					<RegionBar regions={regions} filter={filterByRegion} />
				</div>
				<CountryList countries={filteredCountries}></CountryList>
			</div>
		</>
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
