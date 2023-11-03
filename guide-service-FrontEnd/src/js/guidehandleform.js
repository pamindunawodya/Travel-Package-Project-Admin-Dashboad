
$('#btnGuidedAdd').on('click', () => {

    GuideAddRequest();
});

GuideAddRequest=()=>{


    const id=document.getElementById('txtguideid0').value;
    const guidename=document.getElementById('txtguideName0').value;
    const guideaddress=document.getElementById('txtguideAddress0').value;
    const age=document.getElementById('txtGuideAge').value;
    const gender = document.getElementById('txtgender').value;
    const contactnumber = document.getElementById('txtfGuidecontact').value;
    const guideimage=document.getElementById('txtGuideImage0');
    const guidenicImage =document.getElementById('txtGuideNicImage0');
    const exeprience =document.getElementById('txtguideExeprience0').value;
    const mandayvalue =document.getElementById('txtManDAyValue0').value;

    AddGuideObj(id,guidename,guideaddress,age,gender,contactnumber,guideimage,guidenicImage,exeprience,mandayvalue);

}



AddGuideObj=(id,guidename,guideaddress,age,gender,contactnumber,guideimage,guidenicImage,exeprience,mandayvalue) => {
    const addGuideData = new FormData();
   addGuideData.append("id",id);
   addGuideData.append("guidename",guidename);
   addGuideData.append("guideaddress",guideaddress);
   addGuideData.append("age",age);
   addGuideData.append("gender",gender);
   addGuideData.append("contactnumber",contactnumber);
   addGuideData.append("guideimage",guideimage.files[0]);
   addGuideData.append("guide_nic_image",guidenicImage.files[0]);
   addGuideData.append("exeprience",exeprience);
   addGuideData.append("man_day_value",mandayvalue);




    console.log(id)


    sendAjaxguideRequest (addGuideData);
};

sendAjaxguideRequest = (addGuideData) => {
    console.log("Added Guide");
    $.ajax({
        url: "http://localhost:8030/Mapping/api/guide",
        type: "POST",
        data: addGuideData,
        processData: false,
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


//Update Vehicle


$('#btnguideUpdate').on('click', () => {

    GuideUpdateRequest();
});

GuideUpdateRequest=()=>{

    const id=document.getElementById('txtguideid0').value;
    const guidename=document.getElementById('txtguideName0').value;
    const guideaddress=document.getElementById('txtguideAddress0').value;
    const age=document.getElementById('txtGuideAge').value;
    const gender = document.getElementById('txtgender').value;
    const contactnumber = document.getElementById('txtfGuidecontact').value;
    const guideimage=document.getElementById('txtGuideImage0');
    const guidenicImage =document.getElementById('txtGuideNicImage0');
    const exeprience =document.getElementById('txtguideExeprience0').value;
    const mandayvalue =document.getElementById('txtManDAyValue0').value;

    UpdateGuideObj(id,guidename,guideaddress,age,gender,contactnumber,guideimage,guidenicImage,exeprience,mandayvalue);
}



UpdateGuideObj=(id,guidename,guideaddress,age,gender,contactnumber,guideimage,guidenicImage,exeprience,mandayvalue) => {

    const updateGuideData = new FormData();
    updateGuideData.append("id",id);
    updateGuideData.append("guidename",guidename);
    updateGuideData.append("guideaddress",guideaddress);
    updateGuideData.append("age",age);
    updateGuideData.append("gender",gender);
    updateGuideData.append("contactnumber",contactnumber);
    updateGuideData.append("guideimage",guideimage.files[0]);
    updateGuideData.append("guide_nic_image",guidenicImage.files[0]);
    updateGuideData.append("exeprience",exeprience);
    updateGuideData.append("man_day_value",mandayvalue);

    UpdateAjaxGuideRequest(updateGuideData);
};

UpdateAjaxGuideRequest = (updateVehicleData) => {

    $.ajax({
        url: "http://localhost:8030/Mapping/api/guide",
        type: "PUT",
        data: updateVehicleData,
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

//delete vehicle by id

$("#btnguideDelete").click(function () {
    let id=$("#txtguideid0").val();

    $.ajax({
        url: "http://localhost:8030/Mapping/api/guide?id="+id,
        type:"DELETE",
        dataType: "json",
        success:function (resp){
            alert(resp.message);

        },
        error:function (e) {
            alert(JSON.parse(e.responseText).message);

        }
    });
});

$(document).ready(function() {
    // Attach a keyup event to the text field
    $('#txtguidesearch').keyup(function() {
        getAllItems();
    });
});

function getAllItems() {
    // Get the value from the text field
    let name = $('#txtguidesearch').val();
    console.log("Search now: " + name);
    getAllAjaxItemReq(name);
}

function getAllAjaxItemReq(name) {
    $.ajax({
        url: "http://localhost:8030/Mapping/api/guide/search?guidename=" + name,
        type: "GET",
        dataType: "json",
        success: function(resp) {
            console.log(resp);
            // Call a function to handle the response data, e.g., displaying it in the UI.
            displayResults(resp);
        },
        error: function(e) {
            console.error(e); // Log the error to the console for more details.
        }
    });
}

function displayResults(response) {
    var resultsContainer = $('#txtguidesearch');

    // Clear the container
    resultsContainer.empty();

    // Check if the response status is 200 (OK)
    if (response.status === "200") {
        var message = response.message;
        // Create a message element and append it to the container
        var messageElement = $('<p>').text(message);
        resultsContainer.append(messageElement);

        if (response.data && response.data.length > 0) {
            // Create a list element (ul) for the search results
            var resultList = $('<ul>');
            response.data.forEach(function (guide) {
                // Create list item (li) for each search result
                var listItem = $('<li>').text(guide.guidename); // Adjust this based on your GuideDTO structure
                resultList.append(listItem);
            });

            // Append the list to the container
            resultsContainer.append(resultList);
        }
    } else {
        // Handle the case when the search fails
        var errorMessage = "Search failed. Please try again.";
        resultsContainer.text(errorMessage);
    }
}


