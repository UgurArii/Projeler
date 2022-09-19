var yazi = document.querySelector("#yorum");
var sonuc = document.querySelector("#sonuc");

yazi.oninput = function(){
    var maksimum = 250;
    this.value = this.value.substr(0, maksimum);
    var kalan = maksimum-this.value.length;
    
    sonuc.innerHTML = 'Kalan Karakter: '+kalan;
    
}

