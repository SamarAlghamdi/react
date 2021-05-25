import React from 'react'

function PersonCard(props) {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair color: {props.hairColor}</p>
        </div>
    )
}

export default PersonCard

import React, { Component } from 'react'

// export default class PersonCard extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                 <p>Age: {this.props.age}</p>
//                 <p>Hair color: {this.props.hairColor}</p>
//             </div>
//         )
//     }
// }