function forTown() {
    var radiobutton = document.querySelector(".reg:checked")
    var specificT = radiobutton.value

    for (var i = 0; i < registrationList.length; i++){
      if (registrationList[i].startsWith(specificT)) {
        document.getElementById("myList").innerHTML = ""// kwenzeka ntoni apha
        appendElement(registrationList[i])
      }
      else {
        setTimeout(function () {
          displayMessage.innerHTML = "There is no registration number for this town"
          displayMessage.classList.add("error")
        }, 0);
        setTimeout(function () {
          displayMessage.innerHTML = ""
        }, 2000);
      }
    }
    textclear()
}