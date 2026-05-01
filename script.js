//function to add book to const array,function to make books obviously
//display the stuff, and implement remove button
//also do the read button
//book has id,name,author,pages,isread?
function Book(name,author,pages,isread,id=crypto.randomUUID()){
    this.id=id;
    this.name=name;
    this.author=author;
    this.pages=parseInt(pages)
    this.isread=isread;
}
const books=[]

