import { ArrowLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { Country } from "../models/Country";

interface CountryFlagProps {
	country: Country;
}

function CountryFlag({ country }: CountryFlagProps) {
	return (
		<div id='flag' className='w-full md:w-1/2'>
			<Image src={country.flags.svg} height={600} width={900}></Image>
		</div>
	);
}

export default CountryFlag;
