import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';


const BookList = (props) => {
const {books} = useContext(BookContext)
    return books.length ? ( 
        <div className="book-list">
            <ul>
                {
                    books.map(
                        (book) => (<BookDetails book={book} key={book.id}/> )
                    )
                }
            </ul>
        </div>
    ) :
    (<div className ="empty">
        You're done, way to go champ got some sleep.
    </div>)
}
 
export default BookList;