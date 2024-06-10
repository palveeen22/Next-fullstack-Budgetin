'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/users");

                if (!response.ok) {
                    throw new Error("Failed fetching data");
                }

                const responseJSON = await response.json();
                setUser(responseJSON);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            }
        };

        fetchData()
    }, [])

    console.log(user, "<<<<");
    return (
        <div>page</div>
    )
}

export default page