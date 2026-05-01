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

document.querySelector("#read").addEventListener("click",(e)=>{
    if(e.target.checked==true) e.target.value="Yes"
    else e.target.value="No"
})


document.querySelector("#form-add").addEventListener('click',(e)=>{
    e.preventDefault()
    
    if(document.querySelector("#read").checked)document.querySelector("#read").value="Yes"
    else document.querySelector("#read").value="No"


    let temp= [...document.querySelectorAll("#book__form  input")].map((n)=>{
        return n.value})
    createAddBook(...temp)
})

function addToDom(book){
    const row=document.createElement("tr")
    content.appendChild(row)
    for(const [ignore,n] of Object.entries(book)){
        const temp = document.createElement("td")
        temp.innerText=n;
        row.appendChild(temp)
    }
    const btn=document.createElement("button")
    btn.innerText="x"

    const removebutton=document.createElement("td")
    removebutton.appendChild(btn)
    row.appendChild(removebutton)
    
    btn.addEventListener("click",(e)=>{
    const parent=removebutton.parentElement
    parent.outerHTML="";
    })

}



