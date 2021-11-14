import React from 'react';

import axios from 'axios';

import HomePage from '../../ui/components/pages/public/HomePage.md';
import ReactMarkdown from 'react-markdown';

/*
/repos/:owner/:name/git/
/repos/:owner/:name/contents/
/repos/:owner/:name/pulls/
/repos/:owner/:name/branches/
/repos/:owner/:name/compare/
/repos/:owner/:name/commits/
/repos/:owner/:name/issues/<number>/labels
*/

axios.get("https://api.github.com/repos/TristinCodingham/coders-cms/contents")
    .then(res => console.log(res));

export default class GithubContentsAPI extends React.Component {
    constructor(props) {
        super(props)

        this.state = { md: null }
    }
    componentDidMount() {
        fetch(HomePage)
            .then(res => res.text())
            .then(data => {
                console.log('data', data)
                this.setState({
                    md: data
                });
            })
    }
    render() {
        return(
            <ReactMarkdown children={this.state.md} />
        )
    }
}
