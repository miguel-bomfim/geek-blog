import { FaStar, FaStarHalf  } from "react-icons/fa";

interface StarRatingProps {
    rating: number
  }
  
  export default function StarRating({ rating }: StarRatingProps) {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
  
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return <FaStar key={index} className="w-6 h-6 text-yellow-400 fill-current" />
          } else if (index === fullStars && hasHalfStar) {
            return <FaStarHalf key={index} className="w-6 h-6 text-yellow-400 fill-current" />
          } else {
            return <FaStar key={index} className="w-6 h-6 text-gray-300" />
          }
        })}
      </div>
    )
  }
  