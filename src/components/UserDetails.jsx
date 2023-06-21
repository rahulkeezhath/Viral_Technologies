import React, { useEffect, useState } from 'react'


const UserDetails = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async() =>  {
            try {
                const response = await fetch('https://reqres.in/api/users')
                const result = await response.json()
                console.log(result)
                setData(result.data)
            } catch (error) {
                console.log('Error Fetching data', error);
            }
        }
        fetchData()
    }, [])

  return (
    <div>
        {data ? (
            <div>
                {data.map((item) => (
                    <h1 key={item.id}>{item.id} - {item.first_name} - {item.email}</h1>
                ))}
            </div>
        ): (
            <p>Loading</p>
        )}
    </div>
  )
}

export default UserDetails