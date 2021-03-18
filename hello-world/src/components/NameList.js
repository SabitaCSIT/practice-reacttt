import React from 'react'
import Person from './Person'

function NameList() {
    const names=['Sabita','Binita','Pema']
    const nameList=names.map((name,index)=><h2>{index} {name}</h2>)
    return (
        <div>{nameList}</div>
    ) 

    const persons=[
        {
            id:1,
            name:"Sabita",
            age:20,
            skill:"React"
        },
        {
            id:2,
            name:"Binita",
            age:21,
            skill:"Node"
        },
        {
            id:3,
            name:"pema",
            age:20,
            skill:"Angular"
        }

    ]
    const personList=persons.map((person)=><Person key={person.id} person= {person}/>)
    return(<div>{personList}</div>)
}

export default NameList
