import { createSelector } from "reselect";

const getBooksSlc = (state) => {
    return state.book.books;
};
const getFilterSlc = (state) => {
    return state.filter.filter;
};
const getSearchTextSlc = (state) => {
    return state.filter.searchText;
};

export const getBookRslc = createSelector(
    [getBooksSlc, getFilterSlc, getSearchTextSlc],
    (books, filter, search) => {
        let filterBooks = [];
        if(search.length) {
            filterBooks =  books.filter( book =>
                book.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
                || book.author.toLowerCase().indexOf(search.toLowerCase())>=0);
        } else {
            filterBooks =[...books] ;
        }
        switch (filter) {
            case 'all':
                return filterBooks;
            case 'price_h':
            {
                const comparePriceAsc = (a,b) => a.price - b.price;
                return filterBooks.sort(comparePriceAsc);
            }
            case 'price_l':
            {
                const comparePriceDesc = (a,b) => b.price - a.price;
                return filterBooks.sort(comparePriceDesc);
            }
            case 'author':

            {
                const compareAuthor = (a,b) => {
                    const nameA = a.author.toLowerCase();
                    const nameB = b.author.toLowerCase();
                    if(nameA > nameB) return 1;
                    else if(nameA < nameB) return -1;
                    else return 0;

                };
                return filterBooks.sort(compareAuthor);
            }
        }
    }
);

const getCartSlc = (state) => {
    return state.cart.items;
};

export const getTotalCartRslc = createSelector(
    [getCartSlc],
    (cart) => (cart.reduce((total, cartItem)=> total + cartItem.price*cartItem.count, 0))

);