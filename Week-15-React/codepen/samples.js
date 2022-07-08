// fetch('https://api.thecatapi.com/v1/images/search', {
//   method: 'GET'
// })
//   .then( res => res.json() )
//   .then( res => {
//     let cat = document.getElementById('cat-image');
//     cat.setAttribute('src', res[0].url)
//   })

async function start() {
  
  let response = await fetch('https://api.thecatapi.com/v1/images/search');
  let resJSON = await response.json();
  
  modifyCatImage(resJSON[0].url)
  
}

function modifyCatImage(url) {
  let cat = document.getElementById('cat-image');
  cat.setAttribute('src', url)
}

start()


// fetch('https://jsonplaceholder.typicode.com/posts/4', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 4,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/5', {
//   method: 'DELETE'
// })

// fetch('https://jsonplaceholder.typicode.com/posts/')
//   .then( res => res.json() )
//   .then( res => console.log(res) )
