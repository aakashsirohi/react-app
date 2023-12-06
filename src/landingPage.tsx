import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const LandingPage = () => {
    
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        if (liked) {
            console.log('unliked');
        } else {
            console.log('liked');
        }
        setLiked(!liked);
    };  

    return (
        <>
            <h1>Hello ! this is the Landing Page of the App</h1>
            <p>This is part of the projetc for React module at CT (Thieves -133).</p>
            <button onClick={handleLikeClick}>
                {liked ? <FaHeart color="red" /> : <FaHeart color="black" />}
            </button>
        </>
    );
};

export default LandingPage;