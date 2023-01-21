import { FETCH_ALL_EVENT } from "../constants/eventsActionTypes";

import * as api from '../api/events_api'

export const getEvents = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEvents()

        dispatch({type: FETCH_ALL_EVENT, payload: data})
    }catch(error) {
        console.log(error)
    }
}