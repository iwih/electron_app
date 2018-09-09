import React from 'react';
import "./App.css"
import axios from 'axios'

class App extends React.Component {
    state = {
        posts: []
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
                    {
                        this.state.posts.map(
                            post => <li className={"list-group-item"} key={post.data.id}>{post.data.title}</li>)
                    }
                </ul>
            </div>

        );
    }
}

export default App;