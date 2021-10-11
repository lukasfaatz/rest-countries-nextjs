import { useState } from "react"
export default  function useFullNameBorders() {
    const [countryBorder, setCountryBorder] = useState([])

    return [countryBorder, setCountryBorder];
}
