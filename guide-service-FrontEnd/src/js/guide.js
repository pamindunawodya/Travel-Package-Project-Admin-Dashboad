// loadAllGuides();
//
// function loadAllGuides() {
//
//     function loadGuideData() {
//         $.ajax({
//             url: 'http://localhost:8030/Mapping/api/guide', // Replace with your actual backend URL
//             method: 'GET',
//             dataType: 'json',
//             success: function (data) {
//                 if (data.code === '200') {
//                     var guides = data.data;
//                     var guideLists = $('#card-container');
//
//                     // Iterate through the hotel data and create card elements
//                     for (var i = 0; i < guides.length; i++) {
//                         var guide = guides[i];
//                         var card = `
//                                       <div class="col-12 col-md-6 col-lg-3 card-wrapper mt-4">
//                                         <div class="card">
//                                           <img class="card-img-top" src="images/1.jpg" alt="...">
//                                           <div class="card-body">
//                                             <!--  Customize this section  -->
//                                              <div class="card-title" title=""><u><h5>`+guide.id+`</h5></u></div>
//                                               <div class="card-title" title="">`+guide.guidename+`</div>
//                                               <div class="card-title" title="">`+guide.guideaddress+`</div>
//                                               <div class="card-title" title="">`+guide.age+`</div>
//                                               <div class="card-title" title="">`+guide.gender+`</div>
//                                               <div class="card-title" title="">`+guide.contactnumber+`</div>
//
//                                               <div class="card-title" title="">`+guide.exeprience+`</div>
//                                               <div class="card-title" title="">`+guide.double_man_day_value+`</div>
//
//                                             <div style="float: right"><small>Free guid</small></div>
//                                             <!--  End  -->
//                                           </div>
//                                         </div>
//                                       </div>
//                         `;
//
//
//
//                         guideLists.append(card);
//
//                         $("#card-container .col-12:last-child div img").attr('src', `data:image/png;base64,`+guide.guideimage+``);
//                         // $("#card-container .col-12:last-child div img").attr('src', `data:image/png;base64,`+vehicle.guide_nic_image+``);
//                     }
//                 } else {
//                     // Handle the error case here
//                     console.log('Error: ' + data.message);
//                 }
//             },
//             error: function (error) {
//                 // Handle the error case here
//                 console.log('Error: ' + error);
//             }
//         });
//     }
//
//     // Call the function to load hotel data
//     loadGuideData();
//
//
//
// }

loadAllGuides();

function loadAllGuides() {

    function loadGuideData() {
        $.ajax({
            url: 'http://localhost:8030/Mapping/api/guide', // Replace with your actual backend URL
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                if (data.code === '200') {
                    var guides = data.data;
                    var guideLists = $('#card-container');

                    // Iterate through the hotel data and create card elements
                    for (var i = 0; i < guides.length; i++) {
                        var guide = guides[i];
                        var card = `<div class="row">
                                      <div class="col-md-4">
                                      <div class="row">
                                        <div class="col-md-6">
                                             <img src="" alt="" class="img-thumbnail guide-image" >
                                        </div>
                                         <div class="col-md-6">
                                            <img src="" alt="" class="img-thumbnail nic-image" >
                                         </div>
                                      </div>
                                      </div>
                                      <div class="col-md-8">
                                          <div class="container text-center details-wrapper">
                                              <div class="details-col">
                                                  <div class="details lblid" >
                                                      <div class=""> <small>Id :</small> </div>
                                                      <div> `+guide.id+` </div>
                                                  </div>
                                                  <div class="details">
                                                      <div> <small style="color:deepskyblue;">Name :</small> </div>
                                                      <div>`+guide.guidename+`</div>
                                                  </div>
                          
                                                  <div class="details">
                                                      <div> <small style="color:deepskyblue;">Address :</small> </div>
                                                      <div>`+guide.guideaddress+`</div>
                                                  </div>
                                              </div>
                                              <div style="padding-left: 20px;">
                                                  <div class="details">
                                                      <div> <small style="color:deepskyblue;">Age :</small> </div>
                                                      <div> `+guide.guideaddress+` </div>
                                                  </div>
                                                  <div class="details">
                                                      <div> <small style="color:deepskyblue;">Gender :</small> </div>
                                                      <div>`+guide.gender+`</div>
                                                  </div>
                          
                                                  <div class="details">
                                                      <div> <small style="color:deepskyblue;">Contact number :</small> </div>
                                                      <div>`+guide.contactnumber+`</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                     </div>
                        `;



                        guideLists.append(card);

                        $("#card-container .row:last-child .col-md-4 .guide-image").attr('src', `data:image/png;base64,`+guide.guideimage+``);
                        $("#card-container .row:last-child .col-md-4  .nic-image").attr('src', `data:image/png;base64,`+guide.guide_nic_image+``);
                    }
                } else {
                    // Handle the error case here
                    console.log('Error: ' + data.message);
                }
            },
            error: function (error) {
                // Handle the error case here
                console.log('Error: ' + error);
            }
        });
    }

    // Call the function to load hotel data
    loadGuideData();



}