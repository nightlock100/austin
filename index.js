const foods = [
    {name: 'Waffles'},
    {name: 'Pancakes'},
    {name: 'Caesar Salad'},
    {name: 'PB&J Sandwich'},
    {name: 'Spaghetti'},
    {name: 'Grilled Chicken'},
]


const searchInput = document.querySelector('.input')
searchInput.addEventListener("input", (e) => {
   
    let value = e.target.value

    
    if (value && value.trim().length > 0){
     
         value = value.trim().toLowerCase()
      
    } else {
    }
}

const clearButton = document.getElementById('clear')

clearButton.addEventListener("click", () => {
   
})

// creating and declaring a function called "setList"
// setList takes in a param of "results"
function setList(results){

    for (const person of results){
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // adding a class to each item of the results
        resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(person.name)

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        list.appendChild(resultItem)
    }
}



searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0){
         value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the person's name
        setList(people.filter(person => {
            return person.name.includes(value)
        }))





