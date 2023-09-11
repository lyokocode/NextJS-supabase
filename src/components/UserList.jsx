import React from 'react'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/users", {
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error("Failed")
    }
    return res.json()
}


const UserList = async () => {
    const users = await getData()
    return (
        <>
            {users && users.map(user => (
                <ul key={user.id}>
                    <li>name: {user.name}</li>
                </ul>
            ))}
        </>
    )
}

export default UserList