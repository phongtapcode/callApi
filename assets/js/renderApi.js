const getApi = document.querySelector(".table tbody");
axios.get("https://60becf8e6035840017c17a48.mockapi.io/users")
    .then((respon)=>{
        return respon.data;
    })
    .then(datas=>{
        datas.forEach((data)=>{
            getApi.innerHTML += `
            <th scope="row">${data.id}</th>
            <td>${data.name}</td>
            <td><img width="130px" src=${data.avatar} alt="Lỗi"></td>
            <td>${data.email}</td>
            <td>${data.city}</td>
            `
        })
    })
$(document).ready(function() {
    $('#notificationModal').modal('show');

    // Tự động tắt modal sau 3 giây (3000 milliseconds)
    setTimeout(function() {
        $('#notificationModal').modal('hide');
    }, 3000);
    });
