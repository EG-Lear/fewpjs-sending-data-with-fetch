// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// }); 


function submitData (nameVal, emailVal) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${nameVal}`,
            email: `${emailVal}`
        })
    })
    .then(res => res.json())
    .then(value => {
        //console.log(value)
        const loc = document.createElement('div')
        loc.innerHTML = value.id
        document.body.appendChild(loc)
    })
    .catch(value => {
        alert('SKY, IS, FALLING')
        const loc = document.createElement('div')
        loc.innerHTML = value.message
        document.body.appendChild(loc)
    })
}