import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";


// function fetchjoke(category) {
//     axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
//         .then(function (result) {
//             console.log(result.data.value);

//         })

// }

const fetchjoke = createAsyncThunk("jokes/jokescategory", async function (category) {
    return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(function (result) {
            console.log(result.data.value);
            return result.data.value
        })
})
const initialState = {
    joke: "no jokes"
}


const jokeslice = createSlice({
    name: "joke",
    initialState,
    reducers: {
        

    },extraReducers: (build) => {
        build.addCase(fetchjoke.pending, function () {
            console.log("loading..")
        }).addCase(fetchjoke.fulfilled, (state, action)=>{
            state.joke=action.payload
        })
    }
})



export { fetchjoke }



export default jokeslice