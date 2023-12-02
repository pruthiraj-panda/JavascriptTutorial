let arr=[1,2,3,4,5,6]
// let collection=arr.filter((num)=>num>3)
// console.log(collection) // array of data
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const collection=books.filter((book)=>book.genre==='History') // collections of book histry
//   console.log(collection)
//   const collection=books.filter((book)=>book.edition>2005&&book.genre=='History')
//   console.log(collection)

const userbooks=books.filter((book)=>{
    return book.edition>2005&&book.genre=='History'
})
console.log(userbooks)