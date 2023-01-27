async function editUserData(id) {

    let href = `http://localhost:8080/api/users/${id}`;


         $.get(href, function (user) {
           $('.myForm #id').val(user.id);
           $('.myForm #username').val(user.username);
           $('.myForm #lastName').val(user.lastName);
           $('.myForm #age').val(user.age);
           $('.myForm #email').val(user.email);
           $('.myForm #password').val(user.password);
    })

    document.getElementById('edit-user-button').addEventListener('click', async () => {
        const inputId = document.getElementById('id');
        const inputUsername = document.getElementById('username');
        const inputLastName = document.getElementById('lastName');
        const inputAge = document.getElementById('age');
        const inputEmail = document.getElementById('email');
        const inputPassword = document.getElementById('password');
        // const inputRoles = document.getElementById('nRoles');
    
        const id = inputId.value;
        const username = inputUsername.value;
        const lastName = inputLastName.value;
        const age = inputAge.value;
        const email = inputEmail.value;
        const password = inputPassword.value;
    
        if (id && username && lastName && age && email && password) {
            const res = await fetch("http://localhost:8080/api/users", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, username, lastName, age, email, password })
            });
            const result = await res.json();
            usersToHTML(result);
        }
    })


}