import React from "react";
import Link from "next/link";
import { Country } from "../models/Country";

interface BordersProps {
	borders: string[];
	countries: Country[];
}

function Borders({ borders, countries }: BordersProps) {
	const bordersLong = countries
		.filter((country) => {
			return borders.includes(country.cca3);
		})
		.map((country) => {
			return country.name.common;
		});

	return (
		<div className='flex flex-col py-24 '>
			<div>
				<p className='font-bold p-2'>Border Countries:</p>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				{bordersLong.map((border) => (
                    <Link href='/countries/[id]' as={`/countries/${border}`}>
					<a
						key={border}
						className='shadow-md rounded-lg text-sm  p-2 text-center w-24 border-2 dark:hover:bg-gray-600 hover:bg-gray-50'
                        >
						{border}
					</a>
                        </Link>
				))}
			</div>
		</div>
	);
}

export default Borders;
