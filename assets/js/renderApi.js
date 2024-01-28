const getApi = document.querySelector(".table tbody");
const alertSuccess = document.querySelector(".alert-success");
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
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}
let myPromise = new Promise((resolve,reject)=>{
    var status = getCookie("status");
if (status) {
    resolve(status);
}
})

myPromise.then((status)=>{
    alertSuccess.style.display = "block"
    alertSuccess.innerHTML = `${status} thành công`;
    setTimeout(()=>{
        alertSuccess.style.display = "none"
        document.cookie = "status" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },5000)
})