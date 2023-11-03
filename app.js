const listItemInput = document.querySelector('#listItemInput') //element
const myUnOrderedList = document.querySelector('ul')
const submtBtn = document.querySelector('#submit')

console.log(myUnOrderedList.innerHTML)

function submitHandler() {
    let val = listItemInput.value
    const li = `
    <li id=${val}>
    <h1>${val}</h1>
    <div>
        <span class="listButton" id="edit" onclick="editHandler('${val}')">edit</span>
        <span class="listButton" id="delete" onclick="deleteHandler('${val}')">delete</span>
    </div>
</li>
`
    myUnOrderedList.innerHTML += li
    listItemInput.value = ""

}

function editHandler(val) {
    console.log(val)
    const li = document.getElementById(val)
    listItemInput.value = li.children[0].textContent
    submtBtn.textContent = "Edit"
    submtBtn.setAttribute('onclick', `newEditHandler('${val}')`)
}
function deleteHandler(val) {
    console.log(val)
    const li = document.getElementById(val)
    console.log(li)
    myUnOrderedList.removeChild(li)
}

function newEditHandler(val) {
    console.log(val)
    const li = document.getElementById(val)
    li.children[0].innerHTML = listItemInput.value
    submtBtn.textContent = "Submit"
    submtBtn.setAttribute('onclick', `submitHandler()`)
    listItemInput.value = ""
}