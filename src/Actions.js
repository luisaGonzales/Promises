import store from './Store' 

export async function search (text) {
    const url = text;
    fetch(url)
        .then(res => res.json())
        .then(res => {
            let items = [...store.getState().items];
            let newPlanet = items.concat({
                name : res.pl_name,
                dens : res.pl_dens,
                telescope : res.pl_telescope,
                img : res.img,
                year : res.pl_disc
            });
            store.setState({
                items : newPlanet
            });
        })
}

export async function getPlanets() {
    const url = "data/earth-like-results.json";
    fetch(url)
    .then(res => res.json())
    .then(res => {
        res.results.map(planet => {
            return (search(planet));
        })
    })
}