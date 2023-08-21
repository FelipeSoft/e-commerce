import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const StarRating = ({ stars }: { stars: number }) => {
    if (stars > 5) stars = 5;
    if (stars < 0) stars = 0;

    const starsInt = Math.floor(stars);
    const starsNode: Array<React.ReactNode> = [];

    for(let i = 0; i < starsInt; i++){
        starsNode.push(<AiFillStar className="text-yellow-500"/>)
    }

    for(let i = 0; i < 5 - starsInt; i++){
        starsNode.push(<AiOutlineStar className="text-yellow-500"/>)
    }
    
    return (
        <div className="flex items-center justify-center">
            {starsNode}
            <p className="ml-2">{ stars.toFixed(1) }</p>
        </div>
    )
}