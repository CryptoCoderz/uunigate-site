var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 125;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 15, 40);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

// Smooth fade-in logic
$(document).ready(function() {
    // Cat loading logic
    setTimeout(function() {
    $(".box").animate({
      'opacity': '0'
      }, 700);
    }, 1500);
    setTimeout(function() {
    $(".box").css({
      'display': 'none'
      });
    }, 2000);
    // Fade in form after loading logic (fixes hiccup in view)
    setTimeout(function() {
      $(".login").animate({
          'opacity': '1'
      }, 700);
    }, 2500);
});


$(function() {
  "use strict"

  var discordid;
  var mintpin;
  var nftid;
  var nftalias;
  var nftnet;
  var nftdesc;
  var nftimgurl;
  var loggedin = $(".loggedin").hide();
  var t = 500;

  function store() {
    discordid = $("input#discordid").val();
    mintpin = $("input#mintpin").val();
    nftid = $("input#nftid").val();
    nftalias = $("input#nftalias").val();
    nftnet = $("input#nftnet").val();
    nftdesc = $("input#nftdesc").val();
    nftimgurl = $("input#nftimgurl").val();
  }

  function init() {
    $("input[type='submit']").on("click", function() {
      event.preventDefault();
      debugger
      if (document.getElementById("cpatchaTextBox").value == code) {
        store();
        $(".login_inner, .login_inner__avatar").animate({
          'opacity': '0'
        }, t);
        setTimeout(function() {
          $(".login_inner__check").css({
            'opacity': '1',
            'animation': 'spinner 4s 0s linear',
            'transition': 'all ease 3s'
          });
        });
        setTimeout(function() {
          $(".login_inner__check--complete").find('i').animate({
            'opacity': '1'
          }, 500);
        }, 4200);
        setTimeout(function() {
          $(".login").fadeOut(500, function() {
            $(this).remove();
          });
        }, 5000);
        setTimeout(function() {
          loggedin.fadeIn(t, function() {
            var data = new FormData();
            data.append("data" , "REG_DID="+discordid+"\n"+"MNT_PIN="+mintpin+"\n"+"META_NFT_ID="+nftid+"\n"+"META_NFT_ALIAS="+nftalias+"\n"+"META_NFT_NETWORK="+nftnet+"\n"+"META_COMMENTS="+nftdesc+"\n"+"META_OWNER_ID="+discordid+"\n"+"META_OWNER_ADDRS=NULL\n"+"META_CACHED_URL="+nftimgurl+"\n"+"END\n");
            var xhr = new XMLHttpRequest();
            xhr.open( 'post', 'php/module.php', true );
            //xhr.onload = function () {//TODO: this is debugging
            //  console.log(this.response);
            //};
            xhr.send(data);
            $(this).show();
            $(this).find('h2').html("Minting queued for NFT: "+nftid+"<br> (Click Here to Continue)");
          });
        }, 5500);
        setTimeout(function() {
          $(".loggedin h2").animate({
            'opacity': '1'
          }, t);
        }, 6000);
      }else{
        alert("Invalid Captcha. try Again");
          createCaptcha();
      };
    });
    $("input[type='submit2']").on("click", function() {
      store();
      $(".login_inner, .login_inner__avatar").animate({
        'opacity': '0'
      }, t);
      setTimeout(function() {
        $(".login_inner__check").css({
          'opacity': '1',
          'animation': 'spinner 4s 0s linear',
          'transition': 'all ease 3s'
        });
      });
      setTimeout(function() {
        $(".login_inner__check--complete").find('i').animate({
          'opacity': '1'
        }, 300);
      }, 2200);
      setTimeout(function() {
        $(".login").fadeOut(300, function() {
          $(this).remove();
        });
      }, 2000);
      setTimeout(function() {
        loggedin.fadeIn(t, function() {
          $(this).show();
          $(this).find('h2').html("Taking you to UUNIGATE Support Chat");
        });
      }, 3500);
      setTimeout(function() {
        window.location.replace("https://discord.gg/354Vy4W5JX");
      }, 6000);
      setTimeout(function() {
        $(".loggedin h2").animate({
          'opacity': '1'
        }, t);
      }, 3000);
    });
  };
  init();
});