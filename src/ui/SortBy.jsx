import { useSearchParams } from "react-router-dom"
import Select from "./Select"

function SortBy({options}) {
    const [searchParams,setSearchParams] = useSearchParams()
    const sortBy = searchParams.get('sortBy') || '';

    function handleChange(e) {
        console.log("e.target.value:", e.target.value); // Подивимося, що приходить
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams);
    }
    

    return (
       <Select options={options} type='white' onChange={handleChange} value={sortBy}/>
    )
}

export default SortBy
