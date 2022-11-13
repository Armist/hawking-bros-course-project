import type {City} from './../../types/index';
import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

type CityState = {
	cities: City[];
	isLoading: boolean;
	error: string;
};

const initialState: CityState = {
	cities: [],
	isLoading: false,
	error: '',
};

export const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
		addCity(state, action: PayloadAction<City>) {
			state.cities.push(action.payload);
		},
		citiesFetching(state) {
			state.isLoading = true;
		},
		citiesFetchingSuccess(state, action: PayloadAction<City[]>) {
			state.isLoading = false;
			state.error = '';
			state.cities = action.payload;
		},
		citiesFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default citySlice.reducer;
