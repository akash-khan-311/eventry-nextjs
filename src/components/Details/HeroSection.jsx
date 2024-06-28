import Image from "next/image";
import ActionButtons from "../ActionButtons";

const HeroSection = ({ eventInfo }) => {
    const { name, location, imageUrl, interseted_ids, going_ids } = eventInfo
    return (
        <section className="container">
            <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image src={imageUrl} width={900} height={900} alt="Event 1" className="h-[450px] mx-auto" />
            </div>
            {/* Details */}
            <div className="flex items-end">
                <div className="flex-auto py-4">
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">{location}</p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>{interseted_ids?.length > 0 ? interseted_ids.length : 0} Interested</span>
                        <span className="mx-3">|</span>
                        <span>{going_ids.length} Going</span>
                    </div>
                </div>

                <ActionButtons fromDetails={true} />
            </div>
        </section>

    )
}
export default HeroSection;