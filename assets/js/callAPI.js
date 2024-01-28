const selectOption = document.querySelector(".custom-select");
const name = document.querySelector("#name");
const avatar = document.querySelector("#avatar");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const id = document.querySelector("#id");
const buttonSubmit = document.querySelector(".submit");
const data = [];
axios.get("https://60becf8e6035840017c17a48.mockapi.io/users")
    .then((respon)=>{
        return respon.data;
    })
    .then((datas)=>{
        selectOption.addEventListener("change",()=>{
            if(selectOption.value==="put" || selectOption.value==="delete"){
                // Nếu không có id
                if(id.value===""){
                    const confirmId = confirm("Vui lòng nhập id");
                    if(confirmId){
                        id.focus();
                    }
                }else{ 
                    // Tìm id ra in ra giao diện
                    const idApi = id.value;
                    const checkExist = false;
                    datas.forEach((data)=>{
                        if(idApi==data.id){
                            name.value = data.name;
                            avatar.value = data.avatar;
                            city.value = data.city;
                            email.value = data.email;
                            checkExist = true;
                        }
                    })
                    if(!checkExist){
                        const confirmId = confirm("Id không tồn tại. Vui lòng nhập lại");
                        if(confirmId){
                            id.focus();
                        }
                    }
                }
            }else{
                name.value = "";
                avatar.value = "";
                city.value = "";
                email.value = "";
                id.value = "";
            }
        })
    })
buttonSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(name.value!=="" && avatar.value!=="" && city.value!=="" && email.value!==""){
        const postApi = {
            name: name.value,
            avatar: avatar.value,
            city: city.value,
            email: email.value
        }
        if(selectOption.value==="post"){
            document.cookie = "status=Thêm mới"
            const isConfirm = confirm(`Bạn có chắc chắn muốn thêm`);
            if(isConfirm){
            axios.post("https://60becf8e6035840017c17a48.mockapi.io/users",postApi)
                .then((respon)=>{location.reload();})     
            }
        }else if(selectOption.value==="put"){
            document.cookie = "status=Cập nhật"
            const isConfirm = confirm(`Bạn có chắc chắn muốn sửa id ${id.value}`);
            if(isConfirm){
            axios.put(`https://60becf8e6035840017c17a48.mockapi.io/users/${id.value}`,postApi)
                .then((respon)=>{location.reload();}) 
            }  
        }else if(selectOption.value==="delete"){
            document.cookie = "status=Xóa"
            const isConfirm = confirm(`Bạn có chắc chắn muốn xóa id ${id.value}`);
            if(isConfirm){
                axios.delete(`https://60becf8e6035840017c17a48.mockapi.io/users/${id.value}`)
                      .then((respon)=>{location.reload();})                
            }
        }
    }else{
        confirm("Vui lòng nhập đủ thông tin");
    }
})




