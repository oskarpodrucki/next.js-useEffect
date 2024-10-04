import Image from "next/image"

export default function Country({country}){

    return(
        <div className="flex justify-center items-center h-[33px] w-[333px] border p-4 mt-1 ml-1 border-red-500">
            <Image
            src={country.flags.png}
            height={20}
            width={40}
            sizes="(max-width: 80px) 100vw, 33vw"
            alt={country.name.common}
            />
            {country.name.common}

        </div>
    )
}