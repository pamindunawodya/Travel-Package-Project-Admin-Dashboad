
loadAllPackages();
loadCustomerIds();

// Function to load customer IDs using AJAX
function loadCustomerIds() {
    $.ajax({
        url: 'http://localhost:8080/Mapping/api/user/api/all', // Replace with your server endpoint
        method: 'GET', // Use GET method to fetch data
        dataType: 'json', // Assuming data is in JSON format
        contentType:"application/json",
        success: function (data) {
            const cmbUserId = $('#cmbUserId');
            cmbUserId.empty(); // Clear existing options

            // Add the default option
            cmbUserId.append($('<option>', {

                text: '-Select User-',

            }));

            // Populate the combobox with customer IDs
            data.data.map(value => {
                cmbUserId.append($('<option>', {
                    value: value.email, // Assuming each customer object has an 'id' property
                    text: value.email // Change to the appropriate property for customer name
                }));
            });
        },
        error: function (error) {
            console.error('Error loading customer IDs:', error);
        }
    });
}


loadVehicleIds();


// Function to load Vehicle IDs using AJAX
function loadVehicleIds() {
    $.ajax({
        url: 'http://localhost:8080/Mapping/api/vehicle', // Replace with your server endpoint
        method: 'GET', // Use GET method to fetch data
        dataType: 'json', // Assuming data is in JSON format
        contentType:"application/json",
        success: function (data) {
            const cmbVehicleId = $('#cmbVehicleID');
            cmbVehicleId.empty(); // Clear existing options

            // Add the default option
            cmbVehicleId.append($('<option>', {

                text: '-Select Vehicle-',

            }));
            data.data.map(value => {
                cmbVehicleId.append($('<option>', {
                    value: value.id, // Assuming each customer object has an 'id' property
                    text: value.id // Change to the appropriate property for customer name
                }));
            })

        },
        error: function (error) {
            console.error('Error loading Vehicle IDs:', error);
        }
    });
}



loadHotelIds();


// Function to load Vehicle IDs using AJAX
function loadHotelIds() {
    $.ajax({
        url: 'http://localhost:8080/Mapping/api/hotel', // Replace with your server endpoint
        method: 'GET', // Use GET method to fetch data
        dataType: 'json', // Assuming data is in JSON format
        contentType:"application/json",
        success: function (data) {
            const cmbHotelId = $('#cmbHotelID');
            cmbHotelId.empty(); // Clear existing options

            // Add the default option
            cmbHotelId.append($('<option>', {

                text: '-Select Hotel-',

            }));
            data.data.map(value => {
                cmbHotelId.append($('<option>', {
                    value: value.id, // Assuming each customer object has an 'id' property
                    text: value.id // Change to the appropriate property for customer name
                }));
            })

        },
        error: function (error) {
            console.error('Error loading Hotel IDs:', error);
        }
    });
}


loadGuideIds();


// Function to load Vehicle IDs using AJAX
function loadGuideIds() {


    $.ajax({
        url: ' http://localhost:8080/Mapping/api/guide', // Replace with your server endpoint
        method: 'GET', // Use GET method to fetch data
        dataType: 'json', // Assuming data is in JSON format
        contentType:"application/json",
        success: function (data) {
            const cmbGuideID = $('#cmbGuideID');
            cmbGuideID.empty(); // Clear existing options

            // Add the default option
            cmbGuideID.append($('<option>', {

                text: '-Select Guide-',

            }));
            data.data.map(value => {
                cmbGuideID.append($('<option>', {
                    value: value.id, // Assuming each customer object has an 'id' property
                    text: value.id // Change to the appropriate property for customer name
                }));
            })

        },
        error: function (error) {
            console.error('Error loading Guide IDs:', error);
        }
    });
}


//NEXT ID SET FOR TRAVEL PACKAGE

function getNextId(){

    let id;

    $.ajax({
        url: "http://localhost:8080/Mapping/api/travel/package/get/id",
        method: "GET",
        async: false,
        success: (resp) => {
                id = resp.data;
        },
        error: (ob) => {
            console.log(ob)
            alert(ob.responseJSON.message);
        },
    });
    return id;
}


//SAVE Travel Package


$('#btnPackageAdd').on('click', () => {

    PackageAddRequest();
});

PackageAddRequest=()=> {

    const nextId = getNextId();

    $('#txtpackageid0').val(nextId);
    const packagecategory = document.getElementById('txtpackagecategory0').value;
    const packageAreas = document.getElementById('txtpackageAreas0').value;
    const packageGuideID = document.getElementById('cmbGuideID').value;
    const packageHotelID = document.getElementById('cmbHotelID').value;
    const packageVehicleID = document.getElementById('cmbVehicleID').value;
    const packageUserID = document.getElementById('cmbUserId').value;
    const packageValue = document.getElementById('txtPackageValue0').value;
    const packagePaidValue = document.getElementById('txtPackagePaidValue0').value;
    const packageNeedGuide = document.getElementById('txtPackageNeedGuide0').value;
    const packageWithPet = document.getElementById('txtPackageWithPet').value;
    const packageHeadCount = document.getElementById('txtPackageHeadCount').value;
    const noOfChildCount = document.getElementById('txtPackageNoChild').value;
    const noOfAdult = document.getElementById('txtPackageNoAdult').value;
    const full_double_Opt_1 = document.getElementById('txtopt1').value;
    const half_double_Opt_2 = document.getElementById('txtOpt2').value;
    const full_triple_Opt_3 = document.getElementById('txtOpt3').value;
    const half_triple_Opt_4 = document.getElementById('txtOpt4').value;
    const travelPackage_StartDate = document.getElementById('txtPackageStartDate').value;
    const travelPackage_EndDate = document.getElementById('txtPackageEndDate').value;
    const travelPackage_PacedDate = document.getElementById('txtPackagePaceDate').value;

    var packageData = {
        travelPackage_Id: nextId,
        travelPackage_Category: packagecategory,
        travelPackage_Areas: packageAreas,
        guide_id: packageGuideID,
        vehicle_id: packageVehicleID,
        hotel_id: packageHotelID,
        customer_id: packageUserID,
        travelPackage_Value: packageValue,
        travelPackage_PaidValue: packagePaidValue,
        travelPackage_NeedGuide: packageNeedGuide,
        travelPackage_WithPet: packageWithPet,
        travelPackage_HeadCount: packageHeadCount,
        travelPackage_No_Child: noOfChildCount,
        travelPackage_No_Adult: noOfAdult,
        roomCount:{
            full_double_Opt_1: full_double_Opt_1,
            half_double_Opt_2: half_double_Opt_2,
            full_triple_Opt_3: full_triple_Opt_3,
            half_triple_Opt_4: half_triple_Opt_4
        },
        travelPackage_StartDate: travelPackage_StartDate,
        travelPackage_EndDate: travelPackage_EndDate,
        travelPackage_PacedDate: travelPackage_PacedDate

    }

    console.log(packageData);


    $.ajax({
        url:"http://localhost:8080/Mapping/api/travel/package",
        method:"POST",
        contentType:"application/json",
        data:JSON.stringify(packageData),
        data_type:"json",

        success:function (res){
            swal("Save package details successful !", "Click the ok !", "success");
            // setTextFieldValues("","","","");


        },
        error: (ob) => {
            console.log(ob)
            alert(ob.responseJSON.message);
        },
        });

};


//Get All Packages


//get all customer database
$("#btnPackageGetAll").click(function (){

    //send ajax request to the customer controller
    loadAllPackages();
});

function loadAllPackages(){
    $("#tblCustomer").empty();
    $.ajax({
        url: "http://localhost:8080/Mapping/api/travel/package" ,
        contentType:"application/json",
        method:"GET",
        dataType:"json",
        success:function (resp){
            // Loop through the customer data and build table rows
            console.log(resp);
            for (let cus of resp.data) {
                var row = '<tr><td>' + cus.travelPackage_Id + '</td><td>' + cus.travelPackage_Category + '</td><td>' + cus.travelPackage_Areas + '</td><td>' + cus.guide_id + '</td><td>' + cus.vehicle_id + '</td><td>' + cus.hotel_id + '</td><td>' + cus.customer_id +'</td><td>' + cus.travelPackage_Value + '</td><td>' + cus.travelPackage_PaidValue + '</td><td>' + cus.travelPackage_NeedGuide + '</td><td>' + cus.travelPackage_WithPet  + '</td><td>' + cus.travelPackage_HeadCount + '</td><td>' + cus.travelPackage_No_Child +'</td><td>' + cus.travelPackage_No_Adult + '</td><td>' + cus.full_double_Opt_1 +'</td><td>' + cus.half_double_Opt_2 + '</td><td>' + cus.full_triple_Opt_3 +'</td><td>' + cus.half_triple_Opt_4 + '</td><td>' + cus.travelPackage_StartDate +'</td><td>' + cus.travelPackage_EndDate + '</td><td>' + cus.travelPackage_PacedDate  +'</td></tr>';
                $("#tblPackage").append(row);

            }

        }
    });
}




//delete customer by id

$("#btnPackageDelete").click(function () {
    let packageId=$("#txtpackageid0").val();
    $.ajax({
        url: "http://localhost:8080/Mapping/api/travel/package?travelPackage_Id="+packageId,
        type:"DELETE",
        dataType: "json",
        success:function (resp){
            swal("Delete package  successful !", "Click the ok !", "success");
            loadAllPackages();
        },
        error:function (e) {
            alert(JSON.parse(e.responseText).message);

        }
    });
});





// update customer details

$('#btnPackageUpdate').click(function (){

    const id= document.getElementById('txtpackageid0').value;
    const packagecategory = document.getElementById('txtpackagecategory0').value;
    const packageAreas = document.getElementById('txtpackageAreas0').value;
    const packageGuideID = document.getElementById('cmbGuideID').value;
    const packageHotelID = document.getElementById('cmbHotelID').value;
    const packageVehicleID = document.getElementById('cmbVehicleID').value;
    const packageUserID = document.getElementById('cmbUserId').value;
    const packageValue = document.getElementById('txtPackageValue0').value;
    const packagePaidValue = document.getElementById('txtPackagePaidValue0').value;
    const packageNeedGuide = document.getElementById('txtPackageNeedGuide0').value;
    const packageWithPet = document.getElementById('txtPackageWithPet').value;
    const packageHeadCount = document.getElementById('txtPackageHeadCount').value;
    const noOfChildCount = document.getElementById('txtPackageNoChild').value;
    const noOfAdult = document.getElementById('txtPackageNoAdult').value;
    const full_double_Opt_1 = document.getElementById('txtopt1').value;
    const half_double_Opt_2 = document.getElementById('txtOpt2').value;
    const full_triple_Opt_3 = document.getElementById('txtOpt3').value;
    const half_triple_Opt_4 = document.getElementById('txtOpt4').value;
    const travelPackage_StartDate = document.getElementById('txtPackageStartDate').value;
    const travelPackage_EndDate = document.getElementById('txtPackageEndDate').value;
    const travelPackage_PacedDate = document.getElementById('txtPackagePaceDate').value;

    var packageData = {
        travelPackage_Id: id,
        travelPackage_Category: packagecategory,
        travelPackage_Areas: packageAreas,
        guide_id: packageGuideID,
        vehicle_id: packageVehicleID,
        hotel_id: packageHotelID,
        customer_id: packageUserID,
        travelPackage_Value: packageValue,
        travelPackage_PaidValue: packagePaidValue,
        travelPackage_NeedGuide: packageNeedGuide,
        travelPackage_WithPet: packageWithPet,
        travelPackage_HeadCount: packageHeadCount,
        travelPackage_No_Child: noOfChildCount,
        travelPackage_No_Adult: noOfAdult,
        roomCount:{
            full_double_Opt_1: full_double_Opt_1,
            half_double_Opt_2: half_double_Opt_2,
            full_triple_Opt_3: full_triple_Opt_3,
            half_triple_Opt_4: half_triple_Opt_4
        },
        travelPackage_StartDate: travelPackage_StartDate,
        travelPackage_EndDate: travelPackage_EndDate,
        travelPackage_PacedDate: travelPackage_PacedDate

    }

    //send Ajax request to customer


    $.ajax({
        url:"http://localhost:8080/Mapping/api/travel/package",
        method:"PUT",
        contentType:"application/json",
        data:JSON.stringify(packageData),
        data_type:"json",
        success:function (resp){
            swal("Update package details successful !", "Click the ok !", "success");

            loadAllPackages();

        },
        error: function (error) {
            console.log("Error Function");
            let errorMessage = "An error occurred. Please try again later."; // Default error message

            // If there is a specific error message in the response, use that instead
            if (error.responseText) {
                let errorData = JSON.parse(error.responseText);
                if (errorData && errorData.message) {
                    errorMessage = errorData.message;
                }
            }

            swal("Error!", errorMessage, "error");
        }
    })
});




