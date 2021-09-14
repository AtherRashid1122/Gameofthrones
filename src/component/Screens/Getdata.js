import React, { useState, useEffect } from 'react'

import { Route, Switch, Link } from "react-router-dom";

const Getdata = () => {
    const [data, setdata] = useState([])
    const [input, setinput] = useState()



    const Search = (e) => {
        let filterdata = [];
        let input = e.target.value;

        console.log("value = ", input)
        filterdata = data.filter((item, index) => {
            return item.firstName.search(input) != -1;
        });
        setdata(filterdata);
    }



    // console.log("data is", data)


    // const Showdata = () => {
    //     fetch('https://thronesapi.com/api/v2/Characters').then(response => response.json()).then(json => setdata(json))
    // }

    useEffect(() => {
        fetch('https://thronesapi.com/api/v2/Characters').then(response => response.json()).then(json => setdata(json))

    }, [])

    console.log(data)
    return (
        <div >
            <div style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <input onChange={Search} type="text"></input>
                <button  >Search</button>
            </div>


            <list>
                {
                    data?.map((item, index) => {

                        // console.log("itemsss", item)
                        return (
                            <div>

                                <h1> Id :{item.id}, FirstName :{item.firstName} ,LastName :{item.lastName} <Link to={`/recieved?id=${item.id}`}> Show details </Link></h1>
                            </div>
                        )
                    })
                }
            </list>



        </div>
    )
}

export default Getdata;