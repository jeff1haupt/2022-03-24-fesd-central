class Example {
    getUsers = async () => {
        let users = await fetch("https://jsonplaceholder.typicode.com/users");
        let usersJSON = await users.json();
        return usersJSON;
    }
    deleteUser(url, id){
        fetch(`${url}/${id}`)
    }
}

export const example = new Example();