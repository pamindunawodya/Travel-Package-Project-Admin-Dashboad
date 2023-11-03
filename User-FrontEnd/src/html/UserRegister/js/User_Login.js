$('#btnLogin').on('click', () => {
    loginUserRequest();
});

    loginUserRequest=()=>{
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    loginUserObj(email, pass);
}



loginUserObj = ( email,password) => {
    const userLoginData = new FormData();

    userLoginData.append("email", email);
    userLoginData.append("password", password);
    console.log(password)
    console.log(email)


    loginAjaxUserRequest(userLoginData);
};

loginAjaxUserRequest = (userLoginData) => {
    console.log("Login now");
    $.ajax({
        url: "http://localhost:8080/Mapping/api/app1/log",
        type: "POST",
        data: userLoginData,
        processData: false,  // Prevent jQuery from processing the data
        contentType: false,  // Set the content type to false to let the browser set it to "multipart/form-data"
        success:function (resp) {
            console.log(resp);
            alert(resp.message);
        },
        error: (e) => {
            console.error(e);
            alert(e);
        }
    });
};

