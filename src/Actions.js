import store from './Store' 

export async function getPlanets() {
    const allUrls = "data/earth-like-results.json"
    fetch(allUrls)
        .then(res => res.json())
        .then(res => {
            const results = res.results;
            store.setState({
                allResults : results
            })
        });
}

getPlanets();


export async function search () {
    console.log(1 , store.getState().allResults);
    const allResults = [...store.getState().allResults];
    allResults.map((url) => {
        return (
            fetch(url)
            .then(res => res.json())
            .then(res => {
                let items = [...store.getState().items];
                let newPlanet = items.concat({
                    name : res.pl_name,
                    dens : res.pl_dens,
                    telescope : res.pl_telescope,
                    img : res.img
                });
                store.setState({
                    items : newPlanet
                });
            })
        );
    })
    // const url = "data/Kepler-22b.json"
    // fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
    //         let items = [...store.getState().items];
    //         let newPlanet = items.concat({
    //             name : res.pl_name,
    //             dens : res.pl_dens,
    //             telescope : res.pl_telescope,
    //             img : res.img
    //         });
    //         store.setState({
    //             items : newPlanet
    //         });
    //     })
}

// export async function search () {
//     const url = "data/Kepler-22b.json"
//     fetch(url)
//         .then(res => res.json())
//         .then(res => {
//             let items = [...store.getState().items];
//             let newPlanet = items.concat({
//                 name : res.pl_name,
//                 dens : res.pl_dens,
//                 telescope : res.pl_telescope,
//                 img : res.img
//             });
//             store.setState({
//                 items : newPlanet
//             });
//         })
// }


// const res = await fetch(url);
// store.setState({items: res.data})
// export const addComment = (name, comment) => {
//     const comments = [...store.getState().comments]
//     const newComment= comments.concat( {
// 		name: name,
// 		comment: comment
// 	});

// 	store.setState({
// 		comments: newComment
// 	})
// }

// export const removeComment = (index) => {
//     const comments =  store.getState().comments.filter( (item, idx) => idx != index );
// 	store.setState({
// 		comments: comments
// 	})
// }