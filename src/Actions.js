import store from './Store' 



export async function search () {
    const url = "data/Kepler-22b.json"
    fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(res.pl_name)
            let nuevo = [];
            nuevo = [...store.getState().items];
            nuevo.push(res)
            console.log(res)
            store.setState({
                items : nuevo
            });
        })
        
}

// const res = await fetch(url);
// store.setState({items: res.data})