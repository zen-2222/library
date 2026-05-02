//function to add book to const array,function to make books obviously
//display the stuff, and implement remove button
//also do the read button
//book has id,name,author,pages,isread?
class Book{
    constructor(name,author,pages,isread,id=crypto.randomUUID()){
        this.id=id
        this.name=name
        this.author=author
        this.pages=parseInt(pages)
        this.isread=Boolean(isread)


    }
}
const books=[];

function createAddBook(name,author,pages,isread){
    const book=new Book(name,author,pages,isread);
    books.push(book);
    addToDom(book);
}

//////////DOM//////
const main = document.querySelector(".main")
const content = document.querySelector("#content")

main.addEventListener("click",(e)=>{
    if(e.target.id == "btn" || e.target.id == "close")  {
        document.querySelector("#book__details").toggleAttribute("open")
    }
})




document.querySelector("#form-add").addEventListener('click',(e)=>{
    e.preventDefault()

    //check for validity
    for(let required of main.querySelectorAll('[required]')){
        if (!required.reportValidity()) return;
    }
    
    
    
    //create book
    let temp= [...document.querySelectorAll("#book__form  input")]
    let [name,author,pages,isread]=[temp[0].value,temp[1].value,temp[2].value,temp[3].checked]
    createAddBook(name,author,pages,isread)
})

function addToDom(book){
    const row=document.createElement("tr")
    content.appendChild(row)
    for(const [ignore,n] of Object.entries(book)){
        const temp = document.createElement("td")
        temp.innerText=n;
        row.appendChild(temp)
    }

    //create removal button functionality
    const btn=document.createElement("button")
    btn.innerText="x"

    const removebutton=document.createElement("td")
    removebutton.appendChild(btn)
    row.appendChild(removebutton)
    const relatedBook = books.length-1

    btn.addEventListener("click",(e)=>{
    const parent=removebutton.parentElement
    parent.outerHTML="";
    books.splice(relatedBook,1)
    })

}



