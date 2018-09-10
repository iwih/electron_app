import React from 'react'

// const Image = () => (
//     <div>
//         this is the link : {this.props.location.state.imgUrl}
//     </div>
// )
class Image extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.location.state.imgUrl}/>
            </div>

        )
    }
}

export default Image