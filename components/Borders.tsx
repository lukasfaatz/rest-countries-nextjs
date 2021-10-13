import React from "react";
import Link from "next/link";
import { Country } from "../models/Country";

interface BordersProps {
	borders: string[];
	countries: Country[];
}

interface BorderName {
	name: string;
	cca3: string;
}

function Borders({ borders, countries }: BordersProps) {
	const borderMap = (): BorderName[] => {
		let bordersWithCca3: BorderName[] = [];

		countries.map((country: Country) => {
			if (borders.includes(country.cca3)) {
				bordersWithCca3.push({ name: country.name.common, cca3: country.cca3 });
			}
		});

		return bordersWithCca3;
	};

	return (
		<div className='flex flex-col py-24 '>
			<div>
				<p className='font-bold p-2'>Border Countries:</p>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				{borderMap().map((border: BorderName) => (
					<Link
						key={border.cca3}
						href='/countries/[id]'
						as={`/countries/${border.cca3}`}
					>
						<a className='shadow-md rounded-lg text-sm  p-2 text-center w-24 border-2 dark:hover:bg-gray-600 hover:bg-gray-50'>
							{border.name}
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Borders;
