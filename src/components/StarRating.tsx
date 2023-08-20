import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const StarRating = ({ stars }: { stars: number }) => {
    return (
        <div className="flex items-center justify-center">
            <AiFillStar className="text-yellow-500"/>
            <AiFillStar className="text-yellow-500"/>
            <AiFillStar className="text-yellow-500"/>
            <AiFillStar className="text-yellow-500"/>
            <AiOutlineStar className="text-yellow-500"/>
        </div>
    )
}