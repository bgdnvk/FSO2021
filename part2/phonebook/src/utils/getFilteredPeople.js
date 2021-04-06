//if the name includes the query return newArr with whatever fits
const getFilteredPeople = (persons, query) => {
    let newArr = []
    if(query === ""){
        return persons
    }
    console.log('persons is', persons);
    for(let person of persons) {
        if(person.name.toLowerCase().includes(query.toLowerCase())){
            newArr = [...newArr, person]
        }
    }
    return newArr
}
export default getFilteredPeople