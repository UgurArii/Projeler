function resim(r){
    var rest;
    
    if(r == 0){
        rest = "https://cdn.pixabay.com/photo/2014/12/08/17/52/horse-561221_960_720.jpg";
    }else if(r == 1){
        rest = "https://cdn.pixabay.com/photo/2018/05/21/19/15/white-horse-3419146_960_720.jpg";
    }else if(r == 2){
        rest = "html.png";
    }else{
        rest = "Loading_icon.gif";
    }
    
    document.getElementById('resim_degis').src = rest;
}
