import { useState, useEffect } from 'react';
import './GitHubUser.css';

const GitHubUser = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const fetchUserData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
            } else {
                throw new Error('Failed to fetch user data');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (username) {
            fetchUserData();
        }
    }, [username]);

    return (
        <>
            <div className = "container">
                <input 
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={handleInputChange}
                />
            
                {userData ? (
                        <div>
                    <h2>{userData.name}</h2>
                        <p>Username: {userData.login}</p>
                        <p>Followers: {userData.followers}</p>
                        <p>Following: {userData.following}</p>
                        <p>Public Repos: {userData.public_repos}</p>
                    </div>
                ) : (
                <p>No user data available</p>
                )}
            </div>
        </>
    );
};

export default GitHubUser;