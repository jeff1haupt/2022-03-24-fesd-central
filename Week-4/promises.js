const newPromise = () => {
    getData()
        .then(response => console.log(response.json())) // this only runs if the PROMISE is "fulfilled"
        .catch(console.error('The Promise broke'))  // this only runs if the promise is rejected
        .finally(console.log('program is finished')) // this runs no matter what 
}

function getData () {
    return fetch('https://api.openbrewerydb.org/breweries?page=25')
}

newPromise()

