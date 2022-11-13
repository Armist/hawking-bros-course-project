import {citySlice} from './CitySlice';
import axios from 'axios';
import type {City} from './../../types/index';
import type {AppDispatch} from './../store';

export const fetchCities = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(citySlice.actions.citiesFetching());
		const response = await axios.get<City[]>('http://localhost:3000/cities');
		dispatch(citySlice.actions.citiesFetchingSuccess(response.data));
	} catch (e: unknown) {
		dispatch(citySlice.actions.citiesFetchingError(e.message));
	}
};
