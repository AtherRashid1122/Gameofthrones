import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { Increament, Decreament } from '../Action/action'


const Home = () => {
    const counter1 = useSelector((state) => state.Loginreducer.counter)
    // const state = useSelector(state => state.lo)
    const dispatch = useDispatch()
    const [counter, setcounter] = useState('')
    // console.log(counter1)



    // console.log("counter neww", counter)

    return (

        <div style={{ justifyContent: 'center', alignContent: "center", textAlign: 'center' }}>
            <h1>
                CounterApp
            </h1>


            <div style={{ marginTop: '60px', background: "red", border: '2px solid black' }}>
                <button style={{ margin: '20px' }} onClick={() => dispatch(Increament())}>
                    +
                </button>
                <text style={{ margin: '20px' }}>
                    {counter1}
                </text>
                <button style={{ margin: '20px' }} onClick={() => dispatch((Decreament()))} >
                    -
                </button>

            </div>
        </div>
    )
}

export default Home

    // const Search = (e) => {
    //     let filterdata = [];
    //     let input = e.target.value;
    //     filterdata = data.filter((item, index) => {
    //         return item.firstName.search(input) != -1;
    //     });
    //     setdata(filterdata);
    // }
