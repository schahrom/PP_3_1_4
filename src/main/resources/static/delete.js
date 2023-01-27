async function deleteUserData(id) {

    let href = `http://localhost:8080/api/users/${id}`
        $.get(href, function (user) {
            $('.myDeleteForm #dId').val(user.id);
            $('.myDeleteForm #dUsername').val(user.username);
            $('.myDeleteForm #dLastName').val(user.lastName);
            $('.myDeleteForm #dAge').val(user.age);
            $('.myDeleteForm #dEmail').val(user.email);
        })

    

    document.getElementById('delete-user-button').addEventListener('click', async () =>{
            const res = await fetch(`http://localhost:8080/api/users/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        document.getElementById(`user${id}`).remove();
    })
}