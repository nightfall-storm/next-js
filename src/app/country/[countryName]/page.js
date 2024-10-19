import {notFound} from "next/navigation";

export default function Country({params}){
    const {countryName} = params;
    if(countryName == 'isreal'){
        notFound()
    }
    return <div>Country: {countryName}</div>
}