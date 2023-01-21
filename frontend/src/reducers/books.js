import { FETCH_ALL_BOOK } from "../constants/booksActionTypes";

export default (books = [], action) => {
    switch(action.type){
        case FETCH_ALL_BOOK:
            return action.payload
        default:
            return books
    }
}