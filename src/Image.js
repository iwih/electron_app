import React from 'react'
import {Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
// const Image = () => (
//     <div>
//         this is the link : {this.props.location.state.imgUrl}
//     </div>
// )
class Image extends React.Component {
    state = {
        imgUrl: '',
        hide: true
    }

    componentDidMount() {
        ipcRenderer.on('image', (event, args) => this.setState({imgUrl: args, hide: false}))
    }

    render() {
        return (
            <div>
                {this.state.hide ?
                    <Icon loading name={"spinner"} size={"big"} style={{align: 'center'}}/>
                    : <img src={this.state.imgUrl} style={{maxWidth: '100%'}} alt={'thumbnail'}/>}

            </div>

        )
    }
}

export default Image