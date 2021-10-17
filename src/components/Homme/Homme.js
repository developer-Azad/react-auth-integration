import React from 'react';
import useAuth from '../../hooks/useAuth';

const Homme = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>This is home</h1>
            <h2>User: {user.displayName}</h2>
        </div>
    );
};

export default Homme;