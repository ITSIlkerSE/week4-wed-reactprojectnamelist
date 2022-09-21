import React from 'react';
import './App.css';
import GreetingsComponent, {GreetingsComponentProps} from "./components/GreetingsComponent";

function App() {

    const listOfPeople: GreetingsComponentProps[] =
        [

            {name: "Ilker", origin: "Hamburg"},

            {name: "Jan", origin: "Frankfurt"},

            {name: "Peter", origin: "Flensburg"},

            {name: "Johannes", origin: "München"}
        ]

    const mapOfGreetingsComponents = listOfPeople.map(
        (singleNameFromListOfPeople) => {
            return <GreetingsComponent name={singleNameFromListOfPeople.name}
                                       origin={singleNameFromListOfPeople.origin}></GreetingsComponent>
        }
    );


    return (
        <div className="App">

            {mapOfGreetingsComponents}

        </div>
    );
}

export default App;
