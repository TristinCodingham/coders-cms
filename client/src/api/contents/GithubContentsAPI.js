import React from 'react';
import axios from 'axios';

/*
/repos/:owner/:name/git/
/repos/:owner/:name/contents/
/repos/:owner/:name/pulls/
/repos/:owner/:name/branches/
/repos/:owner/:name/compare/
/repos/:owner/:name/commits/
/repos/:owner/:name/issues/<number>/labels
*/

export default function GithubContentsAPI() {
    const [state, setState] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);

    function getData() {
        axios.get("https://api.github.com/repos/TristinCodingham/coders-cms/git/trees/c56bc2c758520931f033ae53199f0c03895c821b")
            .then(data => setState(data))
            .catch(err => setIsError(err))
            .finally(() => setIsLoading(false));
    }

    React.useEffect(() => {
        if(isLoading) getData();
    }, [isLoading]);

    if(isLoading) return "Loading";
    if(isError) return "Error";

    console.log(state)
    return (
        <div>
            
        </div>
    )
}

