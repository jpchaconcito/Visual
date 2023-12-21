

function Datos() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            let southElvis = [];
            let other = [];
            json.map(item => {
                item.address.city === "South Elvis" ? southElvis.push(item):other.push(item);   
            });
            console.log(southElvis);
            console.log(other);
        })
        .catch(() => console.log("error"));
}


Datos();