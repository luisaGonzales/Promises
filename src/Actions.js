import store from './Store';     

async function toJson(param) {
    return fetch(param)
    .then(res => res.json())
    .then (res => {
        return {
            name : res.pl_name,
            dens : res.pl_dens,
            telescope : res.pl_telescope,
            img : res.img,
            year : res.pl_disc
        };
    })
}

export async function search() {
    const res = await fetch("data/earth-like-results.json").then(result => result.json());
    const list = await getPlanets(res.results);
    store.setState({
        items : list
    })
}

function getPlanets(list) {
  return Promise.all(list.map(planet => toJson(planet)))
}

// export async function search (text) {
//     const url = text;
//     fetch(url)
//         .then(res => res.json())
//         .then(res => {
//             let items = [...store.getState().items];
//             let newPlanet = items.concat({
//                 name : res.pl_name,
//                 dens : res.pl_dens,
//                 telescope : res.pl_telescope,
//                 img : res.img,
//                 year : res.pl_disc
//             });
//             store.setState({
//                 items : newPlanet
//             });
//         })
// }

// export async function getPlanets() {
//     const url = "data/earth-like-results.json";
//     fetch(url)
//     .then(res => res.json())
//     .then(res => {
//         res.results.map(planet => {
//             return (search(planet));
//         })
//     })
// }



