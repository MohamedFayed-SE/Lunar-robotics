
$('#developerPackage').click(()=>{
    $('.developerPackage').siblings().slideUp(1000,()=>{
        if($('.developerPackage').css("display")=="none")
        $('#developerPackageIcon').css({"transform":"rotate(90deg)"})
      
         else
            $('#developerPackageIcon').css({"transform":"rotate(0deg)"});
           
   
    });
    $('.developerPackage').slideToggle(1000);
    
   
});
   
$('#explorerPackage').click(()=>{
        $('.explorerpackage').siblings().slideUp(1000,()=>{
            if($('.explorerpackage').css("display")=="none")
            $('#explorerPackageIcon').css({"transform":"rotate(90deg)"})
          
             else
                $('#explorerPackageIcon').css({"transform":"rotate(0deg)"});
               // console.log($('.explorerPackage').css("display"))
               
    
        });
        $('.explorerpackage').slideToggle(1000);
 });

 
 $('#visionPackage').click(()=>{
    $('.visionpackage').siblings().slideUp(1000,()=>{
        if($('.visionpackage').css("display")=="none")
            $('#visionPackageIcon').css({"transform":"rotate(90deg)"});
      
         else
            $('#visionPackageIcon').css({"transform":"rotate(0deg)"});
           // console.log($('.explorerPackage').css("display"))
           
  
    });
    $('.visionpackage').slideToggle(1000);
});


 