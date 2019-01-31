  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHkkch_s5b9oFohMeuFMTjNavfDr_h5DE",
    authDomain: "octo-goggles.firebaseapp.com",
    databaseURL: "https://octo-goggles.firebaseio.com",
    projectId: "octo-goggles",
    storageBucket: "octo-goggles.appspot.com",
    messagingSenderId: "812220762789"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');

  function OctoGoggles(){
    toastr.clear();
    var info={};
    var errors=[];
    $('form#contact-form').find('.form-control').each(function(){
          info[$(this).attr('name')]=$(this).val();
    });
    if (info.name=='') {
      errors.push('Name');
      $('small#name').fadeIn();
      $('input#name').css('border-color','red');
    }else{
      $('input#name').css('border-color','#ccc');
      $('small#name').hide();
    }
    if (info.email=='') {
      errors.push('Email');
      $('input#email').css('border-color','red');
      $('small#email').fadeIn();
    }else{
      $('input#email').css('border-color','#ccc');
      $('small#email').hide();
    }
    if (info.message=='') {
      errors.push('Message');
      $('textarea#message').css('border-color','red');
      $('small#message').fadeIn();
    }else{
      $('textarea#message').css('border-color','#ccc');
      $('small#message').hide();
    }
    if (errors.length==0) {
      info.phonenumber=$('input#phonenumber').val() !=='' ? $('input#phonenumber').val() :'Not Set!';
      $('#confirmation_message').show();
      // console.log(info);
      SaveMessage(info);
    }

  }

  function SaveMessage(info){
     $('form#contact-form')[0].reset();
    var newMessageRef=messagesRef.push();

    newMessageRef.set(info);
    
    setTimeout(function(){
      $('#confirmation_message').html('Sent!');
      $('#confirmation_message').html('Sending.....');
      $('#confirmation_message').css('display','none');
      toastr.info('Message Sent!');
    }, 2000);
  }



  function KarisLogin(){
    var email =$("input#inputEmail").val();
    var password =$("input#inputPassword").val();
    console.log(email,password);

    return false;
  }















































  console.log("%cSTOP! I am watching you!", "color: red; font-size: x-large");