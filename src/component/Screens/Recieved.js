import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


function useQuery() {

    return new URLSearchParams(useLocation().search);

}


const Recieved = () => {
    let query = useQuery()

    const [item, setitem] = useState([])

    useEffect(() => {
        fetch('https://thronesapi.com/api/v2/Characters/' + query.get('id')).then(response => response.json()).then(json => setitem(json))
    }, [query])


    console.log("recieved data is ", item.firstName)

    return (
        <div style={{}}>

            <h3>
                First Name is:  {item.firstName}
            </h3>
            <h3>
                Last Name is : {item.lastName}
            </h3>

            <h3>
                Full Name is:  {item.fullName}
            </h3>

            <h3>
                Title :  {item.title}

            </h3>

            <h3>
                Family is:  {item.family}

            </h3>
            <img style={{ height: '200px', width: '200px' }} src={item.imageUrl} alt="Logo" />;

        </div>
    )
}

export default Recieved
