const dbRoles = [{id: 1, name: "ROLE_ADMIN"}, {id: 2, name: "ROLE_USER"}];


async function showRole() {

    const inputRoles = document.getElementById('nRoles');


    inputRoles.innerHTML = `
        <option value="${dbRoles[0].id}" name="ROLE_ADMIN" >${dbRoles[0].name}</option>
        <option value="${dbRoles[1].id}" name="ROLE_USER" >${dbRoles[1].name}</option>
        `
}





document.getElementById('profile-tab').addEventListener('click', showRole)



$("#addNewUser").on('click', async () => {
    const inputUsername = document.getElementById('nUsername');
    const inputLastName = document.getElementById('nLastName');
    const inputAge = document.getElementById('nAge');
    const inputEmail = document.getElementById('nEmail');
    const inputPassword = document.getElementById('nPassword');
    

    const username = inputUsername.value;
    const lastName = inputLastName.value;
    const age = inputAge.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    let listRoles = roleArray(document.getElementById('nRoles'));
    console.log({ username, lastName, age, email, password, roles: listRoles })

    if (username && lastName && age && email && password) {

        const res = await fetch("http://localhost:8080/api/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, lastName, age, email, password, roles: listRoles })
        });
        const result = await res.json();

        inputUsername.value = ''
        inputLastName.value = ''
        inputAge.value = ''
        inputEmail.value =''
        inputPassword.value = ''
    }
})




let roleArray = (options) => {
    let array =[]
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            let role = {
                id: options[i].value,
                name: dbRoles[i].name 
            }

            array.push(role)
        }
    }
    return array
}












