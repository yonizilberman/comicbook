//********************  php check code  ********************
function checkform() {
    var EmailCheck=document.tofes.email.value;
    var lnamecheck=document.tofes.fname.value;
    var Commentcheck=document.tofes.Comment.value;

    if (lnamecheck==null || lnamecheck=="") {
        alert ("no name in");
        return false;
    }
    if (Commentcheck==null || Commentcheck=="") {
        alert ("no comment raet her");
        return false;
    }
   if(EmailCheck.indexOf("@")<1 || EmailCheck.indexOf(".")<1)
    {alert ("your Email is no good") ;return false;}

   alert ("good job") ;
    return true;
  }
  //********************  php check end  *********************