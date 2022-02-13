// phoneNumber increasing or decresing share function 
// phoneNumber increasing or decresing share function 
function shareFunctionOne(isIncresing){
  const phoneNumber = document.getElementById('phone-number');
  const phoneTotal = document.getElementById('phone-total');
  if(isIncresing){
  phoneNumber.value = parseInt(phoneNumber.value) + 1;
  phoneTotal.innerText = phoneNumber.value * 1219;
  }
  else if(phoneNumber.value > 1){
    phoneNumber.value = parseInt(phoneNumber.value) - 1;
    phoneTotal.innerText = phoneNumber.value * 1219;
  }
}
// phoneNumber incresing  event
document.getElementById('phone-plus').addEventListener('click', function(){
  shareFunctionOne(true)
});
// phoneNumber decresing event
document.getElementById('phone-minus').addEventListener('click', function(){
shareFunctionOne(false)
});
// caseNumber increasing or decreasing share function
// caseNumber increasing or decreasing share function
function shareFunctionTwo(isIncresing){
  const phoneTotal = document.getElementById('case-total');
  const caseNumber = document.getElementById('case-number');
  if(isIncresing){
    caseNumber.value = parseInt(caseNumber.value) + 1;
    phoneTotal.innerText = caseNumber.value * 59;}
  else if(caseNumber.value > 1){
      caseNumber.value = parseInt(caseNumber.value) - 1;
      phoneTotal.innerText = caseNumber.value * 59; 
    }
  }

  // caseNumber Incresing event
document.getElementById('case-plus').addEventListener('click', function(){
  shareFunctionTwo(true)
});
// caseNumber decreasing event
document.getElementById('case-minus').addEventListener('click', function(){
  shareFunctionTwo(false)
});

const crossButtons = document.getElementsByClassName('remove-item');
  for(const crossButton of crossButtons){
    crossButton.addEventListener('click', function(event){
      event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
    })
  }

function calculateTotal(){
  const phoneNumber = document.getElementById('phone-number');
  const caseNumber = document.getElementById('case-number');
  const subTotal = document.getElementById('sub-total');
  const taxAmount = document.getElementById('tax-amount');
  const totalPrice = document.getElementById('total-price');
  let subTotal1 = phoneNumber.value * 1219;
  let subTotal2 = caseNumber.value * 59;
  subTotal.innerText = subTotal1 + subTotal2;
  taxAmount.innerText = (subTotal.innerText * 0.2).toFixed(2);
  totalPrice.innerText = parseFloat(subTotal.innerText) + parseFloat((subTotal.innerText * 0.2).toFixed(2));

  return subTotal.innerText, subTotal.innerText, totalPrice.innerText
}
