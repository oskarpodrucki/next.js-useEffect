import Image from "next/image"

export default function Country({country}){

    return(
        <div className="flex flex-col justify-center items-center w-[333px] border p-1 mt-1 ml-1 border-black">
            <Image
            src={country.flags.png}
            height={200}
            width={300}
            alt={country.name.common}
            className="w-[300px] h-[200px]"
            />
            {country.name.common}

        </div>
    )
}