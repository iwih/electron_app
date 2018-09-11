import React from 'react';
import "./App.css"
import axios from 'axios'
import './Router'

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const menu = electron.remote.Menu;

class App extends React.Component {
    state = {
        posts: []
    }

    goToImagePage(imgUrl) {
        // this.props.history.push('/Image', {imgUrl: imgUrl})
        ipcRenderer.send('show-image-window', imgUrl)
    }

    componentDidMount() {
        axios.get("https://www.reddit.com/r/aww.json").then(response => {
            this.setState({posts: response.data.data.children})
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="App">
                <ul className={"list-group list-group-flush"}>
                    {this.state.posts.map(post =>

                        <li
                            className={"list-group-item flex-container"}
                            key={post.data.id} onClick={() => this.goToImagePage(post.data.preview.images[0].source.url)}>

                            <img src={post.data.thumbnail} alt={post.data.id} className={'thumbnail'}/>
                            {post.data.title}
                        </li>
                    )}
                </ul>

            </div>

        );
    }
}

export default App;