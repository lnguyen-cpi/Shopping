import React from "react"

class Decrement extends React.Component {


    render() {

        return (

            <>
                <button onClick={() => {this.props.decrement(this.props.count)}}>-</button>
            </>
        )
    }
}


export default Decrement;