import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
import database from './firebase'

const TinderCards = () => {
    const [people, setPeople] = useState([])

    // Piece of code which runs based on a condition. Replace the live circle.
    useEffect(() => {
        // this is where the codes run...
        // this will run once when the component loads, and never again , [], porém se preencher dentro do [people] roda mais de 1x

        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => {
                setPeople(snapshot.docs.map( doc => doc.data()))
            })

        return () => {
            // this is the cleanup...
            unsubscribe();
        }

    }, [])

    //BAD (Push to an array in REACT)
    // const people = []
    // people.push('sony', 'qazi')

    //GOOD (Push to an array in REACT)
    // const people = []
    // setPeople(...people, 'sony', 'qazi') - quando mudar a variavel, lembrar de mudar o conteudo. ...people -> mantem tudo que esta no state antes antes e append to that. Para não sobreescrever.

    return (
        <div>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={[ 'up, down' ]}
                >
                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;