import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";

const EventCard = ({ event }) => {
    const { id, name, location, imageUrl, interseted_ids, going_ids } = event


    return (
        <div className="overflow-hidden rounded-md bg-[#242526]">
            <Image src={imageUrl} width={500} height={500} alt={name} className="w-full min-h-72" />
            <div className="p-3">
                <Link href={`/details/${id}`} className="font-bold text-lg">{name}</Link>
                <p className="text-[#9C9C9C] text-sm mt-1">{location}</p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>{interseted_ids?.length > 0 ? interseted_ids.length : 0} Interested</span>
                    <span className="mx-3">|</span>
                    <span>{going_ids.length} Going</span>
                </div>
                {/* Buttons */}
                <ActionButtons />
            </div>
        </div>

    )
}
export default EventCard;