import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [profileImage, setProfileImage] = useState(null);
     const [memories, setMemories] = useState([]);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

     return (
        <UserContext.Provider value={{ 
            profileImage, 
            setProfileImage,
            memories,
            setMemories,
            userInfo,
            setUserInfo
        }}>
            {children}
        </UserContext.Provider>
    )

}

export const useUser = () => useContext(UserContext);