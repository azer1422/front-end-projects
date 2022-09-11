const apiUrl='https://jsonplaceholder.typicode.com';
//function to get users
async function fetchUsers(){
    try{
    const response= await fetch(`${apiUrl}/users`);

    if(!response.ok){
        throw new Error(`Failed to fetch users: ${response.status}`);
    }

    return await response.json();
    
}   catch(e) {
    console.log(e);
}
}

//function to display user list
async function listUsers(userContainerElementId){

    const userContainerElement= document.getElementById(userContainerElementId);

    if(!userContainerElement){
       return; 
    }

    fetchUsers()
    .then(users => {
        if(!users){ 
            userContainerElement.innerHTML='No users fetched.';
            return; 
        }

        for(const user of users ){
            userContainerElement.appendChild(userElement(user));
        }
    })
    .catch(e => {
        console.log(e);
    });

}

//function to creat elements
function userElement(user){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', `${apiUrl}/users/${user.id}`);
    anchorElement.setAttribute('target', '_blank');
    anchorElement.innterTest = user.name;

    const userNameElement = document.createElement('h3');
    userNameElement.appendChild(anchorElement);

    
    return userNameElement;

}


