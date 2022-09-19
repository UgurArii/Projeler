var form = document.getElementById('loan-form');

form.addEventListener('submit',function(e){
   //Result alanını gizle

   document.getElementById('results').style.display = 'none';

   //loading göster
   document.getElementById('loading').style.display = 'block';

   setTimeout(calculateResults, 2000);
   e.preventDefault();
});

function calculateResults(e){
  console.log('Hesaplanıyor');

  var ELamount = document.getElementById('amount');
  var ELinterest = document.getElementById('interest');
  var ELyears = document.getElementById('years');

  var ELMonthly_payment = document.getElementById('monthly-payment');
  var ELtotal_payment = document.getElementById('total-payment');
  var ELtotal_interest = document.getElementById('total-interest');

  var principal = parseFloat(ELamount.value);
  var calculatedInterest = parseFloat(ELinterest.value)/100/12;
  var calculatedPayment = parseFloat(ELyears.value) * 12;

  //Aylık Ödeme
  var x = Math.pow(1+calculatedInterest, calculatedPayment);
  var monthly = (principal * x * calculatedInterest) / (x-1);
  console.log(monthly);

  if(isFinite(monthly)){
    ELMonthly_payment.value = monthly.toFixed(2);
    ELtotal_payment.value = (monthly*calculatedPayment).toFixed(2)
    ELtotal_interest.value = ((monthly*calculatedPayment)- principal).toFixed(2);

    //sonucu göster
    document.getElementById('results').style.display = 'block';

    //loading gizle
    document.getElementById('loading').style.display = 'none';
  }else{
    console.log('Lütfen sayı giriniz');
    showError('Lütfen sayı giriniz');
  }
e.preventDefault();
}

function showError(error){
  //results gizle
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';

  //div oluştur
  var errorDiv = document.createElement('div');
  var ELcard = document.querySelector('.card');
  var ELheading = document.querySelector('.heading');

  //Class Ekle
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  //Heading error ekle
  ELcard.insertBefore(errorDiv, ELheading);

  setTimeout(clearError,3000);

}

function clearError(){
  document.querySelector('.alert').remove()
}



































