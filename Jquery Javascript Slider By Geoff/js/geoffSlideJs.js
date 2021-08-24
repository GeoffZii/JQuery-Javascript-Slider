$(document).ready(function() {
// start jquery on document ready

    $('#homeSliderThumb11').css({
        "border": "solid rgb(246, 143, 81) 2px",
        "width": "38px",
        "height": "38px"

    });



    // set slider time Interval
        setInterval(function(){



            var choma = $('.active').attr("id");
           

             if(choma=="homeSlide1"){       $('#homeSlide1').css("display", "none");
                                            $('#homeSlide2').css("display", "block");
                                            $('#homeSlide3').css("display", "none");

                                            


                                             $('#homeSlide1').attr("class","ac");
                                             $('#homeSlide2').attr("class","active");
                                            //change active to homeslide2

                                            $('#homeSliderThumb22').css({
                                                "border": "solid rgb(246, 143, 81) 2px",
                                                "width": "38px",
                                                "height": "38px"
                                        
                                            });
                                        }

             if(choma=="homeSlide2"){   $('#homeSlide1').css("display", "none");
                                        $('#homeSlide2').css("display", "none");
                                        $('#homeSlide3').css("display", "block");

                                       

                                        $('#homeSlide2').attr("class","ac");
                                        $('#homeSlide3').attr("class","active");

                                        
                                        //change active to homeslide3
                                        $('#homeSliderThumb33').css({
                                            "border": "solid rgb(246, 143, 81) 2px",
                                            "width": "38px",
                                            "height": "38px"
                                    
                                        });
                                    }


             if(choma=="homeSlide3"){       $('#homeSlide1').css("display", "block");
                                            $('#homeSlide2').css("display", "none");
                                            $('#homeSlide3').css("display", "none");

                                            


                                            $('#homeSlide3').attr("class","ac");
                                            $('#homeSlide1').attr("class","active");

                                            $('#homeSliderThumb11').css({
                                                "border": "solid rgb(246, 143, 81) 2px",
                                                "width": "38px",
                                                "height": "38px"
                                        
                                            });
                                            //change active to homeslide1
                                        }
            
                
                    
        }, 3000);

  

// click Next Slider 

    $('.homeSliderBtnRight').click( function(){


        
           
           var choma = $('.active').attr("id");
          
            if(choma=="homeSlide1"){       $('#homeSlide1').css("display", "none");
                                           $('#homeSlide2').css("display", "block");
                                           $('#homeSlide3').css("display", "none");

                                           


                                            $('#homeSlide1').attr("class","ac");
                                            $('#homeSlide2').attr("class","active");
                                           //change active to homeslide2

                                           $('#homeSliderThumb22').css({
                                               "border": "solid rgb(246, 143, 81) 2px",
                                               "width": "38px",
                                               "height": "38px"
                                       
                                           });
                                       }

            if(choma=="homeSlide2"){   $('#homeSlide1').css("display", "none");
                                       $('#homeSlide2').css("display", "none");
                                       $('#homeSlide3').css("display", "block");

                                      

                                       $('#homeSlide2').attr("class","ac");
                                       $('#homeSlide3').attr("class","active");

                                       
                                       //change active to homeslide3
                                       $('#homeSliderThumb33').css({
                                           "border": "solid rgb(246, 143, 81) 2px",
                                           "width": "38px",
                                           "height": "38px"
                                   
                                       });
                                   }


            if(choma=="homeSlide3"){       $('#homeSlide1').css("display", "block");
                                           $('#homeSlide2').css("display", "none");
                                           $('#homeSlide3').css("display", "none");

                                           


                                           $('#homeSlide3').attr("class","ac");
                                           $('#homeSlide1').attr("class","active");

                                           $('#homeSliderThumb11').css({
                                               "border": "solid rgb(246, 143, 81) 2px",
                                               "width": "38px",
                                               "height": "38px"
                                       
                                           });
                                           //change active to homeslide1
                                       }

          
    });









// click Previous Slider  btn

$('.homeSliderBtnLeft').click( function(){


      var choma = $('.active').attr("id");
      

       if(choma=="homeSlide1"){       $('#homeSlide1').css("display", "none");
                                      $('#homeSlide2').css("display", "none");
                                      $('#homeSlide3').css("display", "block");

                                      


                                       $('#homeSlide1').attr("class","ac");
                                       $('#homeSlide3').attr("class","active");
                                      //change active to homeslide2

                                      $('#homeSliderThumb33').css({
                                          "border": "solid rgb(246, 143, 81) 2px",
                                          "width": "38px",
                                          "height": "38px"
                                  
                                      });
                                  }

       if(choma=="homeSlide2"){   $('#homeSlide1').css("display", "block");
                                  $('#homeSlide2').css("display", "none");
                                  $('#homeSlide3').css("display", "none");

                                 

                                  $('#homeSlide2').attr("class","ac");
                                  $('#homeSlide1').attr("class","active");

                                  
                                  //change active to homeslide3
                                  $('#homeSliderThumb11').css({
                                      "border": "solid rgb(246, 143, 81) 2px",
                                      "width": "38px",
                                      "height": "38px"
                              
                                  });
                              }


       if(choma=="homeSlide3"){       $('#homeSlide1').css("display", "none");
                                      $('#homeSlide2').css("display", "block");
                                      $('#homeSlide3').css("display", "none");

                                      


                                      $('#homeSlide3').attr("class","ac");
                                      $('#homeSlide2').attr("class","active");

                                      $('#homeSliderThumb22').css({
                                          "border": "solid rgb(246, 143, 81) 2px",
                                          "width": "38px",
                                          "height": "38px"
                                  
                                      });
                                      //change active to homeslide1
                                  }

     
});










// end jquery    

  });