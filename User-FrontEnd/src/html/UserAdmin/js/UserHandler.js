
// loadAllUsers();

function bindRowClickEvents(){
    $("#tblUser>tr").click(function (){
        let name=$(this).children(":eq(0)").text();
        let address=$(this).children(":eq(1)").text();
        let contact=$(this).children(":eq(2)").text();
        let email=$(this).children(":eq(3)").text();
        let password=$(this).children(":eq(4)").text();
        let file=$(this).children(":eq(5)").text();

        //set table details values to text fields

        $("txtName0").val(name);
        $("txtSuerAddress0").val(address);
        $("txtUserContact0").val(contact);
        $("txtUserEmail0").val(email);
        $("txtUserPass0").val(password);
        $("register-form-NIC-image0").val(file);
    });
}

//select text fields get values form
function  setTextFieldValues(name,address,contact,email,password,file){

    $("txtName0").val(name);
    $("txtSuerAddress0").val(address);
    $("txtUserContact0").val(contact);
    $("txtUserEmail0").val(email);
    $("txtUserPass0").val(password);
    $("register-form-NIC-image0").val(file);
}





$('#btnCustomerAdd').on('click', () => {

    RegisterUserRequest();
});

RegisterUserRequest=()=>{
    const name=document.getElementById('txtName0').value;
    const address=document.getElementById('txtSuerAddress0').value;
    const contact=document.getElementById('txtUserContact0').value;
    const email = document.getElementById('txtUserEmail0').value;
    const pass = document.getElementById('txtUserPass0').value;
    const fileinput=document.getElementById('register-form-NIC-image0');
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


//get all customer database
$("#btnCustomerGetAll").click(function (){
   console.log("btn get")
    //send ajax request to the customer controller
    loadAllUsers();
});

function loadAllUsers(){

    $("#tblUser").empty();
    $.ajax({
        url: "http://localhost:8080/Mapping/api/user/api/all" ,
        method: "GET",
        async: true,
        success: (resp) => {
            if (resp.code === '200') {
                resp.data.map(cus => {

                    var row = '<tr><td>'  + cus.name + '</td><td>' + cus.address + '</td><td>' + cus.contact + '</td><td>'+'</td><td>'+cus.email+'</td><td>'+cus.password+'</td>`<td><img width="100"></td>`</tr>';
                    $("#tblUser").append(row);
                    $("#tblUser tr:last-child td img").attr('src', `data:image/png;base64,${cus.fileData}`);

                });
                bindRowClickEvents();
                setTextFieldValues("","","","","","");
                $("#txtUserEmail0").focus();
            }
        },
        error: (ob) => {
            console.log(ob)
            alert(ob.responseJSON.message);
        },
    });
              /*  var row = '<tr><td>'  + cus.name + '</td><td>' + cus.address + '</td><td>' + cus.contact + '</td><td>'+'</td><td>'+cus.email+'</td><td>'+cus.password+'</td><td>'+cus.files+'</td></tr>';
                $("#tblUser").append(row);*/


           /* bindRowClickEvents();
            setTextFieldValues("","","","","","");
            $("#txtUserEmail0").focus();*/

}

$('#btnCustomerUpdate').on('click', () => {
    const name=document.getElementById('txtName0').value;
    const address=document.getElementById('txtSuerAddress0').value;
    const contact=document.getElementById('txtUserContact0').value;
    const email = document.getElementById('txtUserEmail0').value;
    const pass = document.getElementById('txtUserPass0').value;
    const fileinput=document.getElementById('register-form-NIC-image0');
    const userSignupData = new FormData();

    userSignupData.append("name", name);
    userSignupData.append("address", address);
    userSignupData.append("contact", contact);
    userSignupData.append("email", email);
    userSignupData.append("password", pass);
    userSignupData.append('file', fileinput.files[0]);

    updaetAjaxUserRequest(userSignupData);
});


updaetAjaxUserRequest = (userSignupData) => {
    console.log("Updating user data");
    console.log(userSignupData)
    $.ajax({
        url: "http://localhost:8080/Mapping/api/user",
        type: "PATCH",
        data: userSignupData,
        processData: false,
        contentType: false,
        success: function (resp) {

            console.log(resp);
            alert(resp.message);
            setTextFieldValues("","","","","","")

        },
        error: function (e) {
            console.error(e);
            alert(e.responseText);
        }
    });
};

//delete user by email

$("#btnCustomerDelete").click(function () {
    let userEmail=$("#txtUserEmail0").val();
    $.ajax({
        url: "http://localhost:8080/Mapping/api/user?email="+userEmail,
        type:"DELETE",
        dataType: "json",
        success:function (resp){
            alert(resp.message);
           loadAllUsers();
        },
        error:function (e) {
            alert(JSON.parse(e.responseText).message);

        }
    });
});

