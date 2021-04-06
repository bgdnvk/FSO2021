import React from 'react'
//TODO: make better filter
const filterPeople = (persons, name) => persons.filter( p => p.name === name)

const getFilteredPeople = (persons, query) => {
    if(query === ""){
        return persons
    }
    console.log('persons is', persons);
    for(let person of persons) {
        if(person.name.startsWith(query)){
            return filterPeople(persons, person.name)
        }
    }
}
export default getFilteredPeople