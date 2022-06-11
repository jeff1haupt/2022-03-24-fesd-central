// $.get('https://api.openbrewerydb.org/breweries?per_page=10', (data) => {
//     for ( let i = 0; i < data.length; i++ ) {
//         let td = document.getElementById(`${i + 1}`);
//         td.innerText = data[i].name;
//     }
// })

fetch('https://api.openbrewerydb.org/breweries?page=25&per_page=8')
    .then( response => response.json() )
    .then( res => {
        for ( let i = 0; i < res.length; i++ ) {
            let td = document.getElementById(`${i + 1}`);
            td.innerText = res[i].name;
        }
    })