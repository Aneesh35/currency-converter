const url='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';
let curfrom=document.querySelector('.from select')
let curto=document.querySelector('.to select')
let select=document.querySelectorAll('.dropdown select')
let msg = document.querySelector(".msg");
let btn = document.querySelector("form button");

for (let i of select) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (i.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if (i.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
      i.append(newOption);
    }
    i.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }
  const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    const btn = document.querySelector("form button");
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };
  const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    console.log('hi')
    console.log(amount)
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${url}/${curfrom.value.toLowerCase()}/${curto.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[curto.value.toLowerCase()];
  
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${curfrom.value} = ${finalAmount} ${curto.value}`;
  };
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
  
  window.addEventListener("load", () => {
    updateExchangeRate();
  });