import BookList from "../BookList"
import uuid from 'react-uuid';


export const bookReducer =(state, action) => {
    switch (action.type){
        case 'ADD_BOOK':
            return[...state,{
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            } ]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
        
    }
}