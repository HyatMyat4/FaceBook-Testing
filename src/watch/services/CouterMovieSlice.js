import { createSlice } from  '@reduxjs/toolkit';

const initialState = {
    AllMovieData : [] ,
    ChangeCounter : 3
}

export const CounterMovieSlice = createSlice({
        name : 'CounterMovie',
        initialState,
        reducers: {
            AddAllMovieData: (state , actions ) => {
                state.AllMovieData = actions.payload
            },       
            ChangeCounterEngin: ( state, actions ) => {
                state.ChangeCounter += actions.payload
            },

        }
})

export const { AddAllMovieData } = CounterMovieSlice.actions;

export const { ChangeCounterEngin } = CounterMovieSlice.actions

export const  AllMovieDataC = (state) => state.CounterMovie.AllMovieData;

export const ChangeCounterC = (state) => state.CounterMovie.ChangeCounter

export default CounterMovieSlice.reducer;