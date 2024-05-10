import { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./style.scss"

const LikeButton = () => {
    const [favourite, setFavourite] = useState(false)

    const handleLikedProduct = (): void => {
        setFavourite(!favourite)
    }
    return (
        <div>
            <i onClick={handleLikedProduct}> {favourite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}</i>
        </div>
    )
}

export default LikeButton