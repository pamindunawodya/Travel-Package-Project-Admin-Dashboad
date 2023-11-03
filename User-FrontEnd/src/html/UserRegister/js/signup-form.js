$('#btnRegister').on('click', () => {

    RegisterUserRequest();
});

RegisterUserRequest=()=>{
    const name=document.getElementById('nameSignIn').value;
    const address=document.getElementById('addressSignIn').value;
    const contact=document.getElementById('contactSignIn').value;
    const email = document.getElementById('emailSignIn').value;
    const pass = document.getElementById('yourPassword').value;
    const fileinput=document.getElementById('register-form-NIC-image');
    RegisterUserObj(name,address,contact,email,pass,fileinput);

}



RegisterUserObj=(name,address,contact,email,pass,fileinput) => {
    const userSignupData = new FormData();

    userSignupData.append("name", name);
    userSignupData.append("address", address);
    userSignupData.append("contact", contact);
    userSignupData.append("email", email);
    userSignupData.append("password", pass);
    userSignupData.append('file', fileinput.files[0]);
    console.log(pass)
    console.log(email)
    console.log(fileinput);

    sendAjaxUserRequest(userSignupData);
};

sendAjaxUserRequest = (userSignupData) => {
    console.log("Login now");
    $.ajax({
        url: "http://localhost:8080/Mapping/api/user/new/user",
        type: "POST",
        data: userSignupData,
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
