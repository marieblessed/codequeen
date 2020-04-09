const books = require ("./books.js")
console.log (books);
for(let v = 0 ; v<books.length; v++){
const author = books[v].author;
const title = books[v].title;
var text2 = 'Author' + author;
var text1 = 'book' + title;

console.log (text2);
console.log (text1);
}

for(let v =0; v< books.length ; v++){
if( v>=350){
console.log(text1);
}else{
    const title = books[v].pages;
    var text3 = (title)
    console.log (text3);
}


}