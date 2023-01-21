import { FETCH_ALL_EVENT } from "../constants/eventsActionTypes";

export default (events = [], action) => {
    switch(action.type){
        case FETCH_ALL_EVENT:
            return action.payload
        default:
            return events
    }
}