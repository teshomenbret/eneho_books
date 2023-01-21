import { combineReducers } from 'redux';

import books from './books';
import events from './events'

export const reducers = combineReducers({
    books: books,
    events: events
});