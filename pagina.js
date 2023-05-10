document.getElementById("vm-select").onchange = function() {
    var vm = document.getElementById("vm-select").value;
    if (vm == "UBUNTUSERVERSINTESIS") {
      window.location.href = "UBUNTUSERVERSINTESIS.html";
    } else if (vm == "UBUNTU DESKTOP SINTESIS") {
      window.location.href = "UBUNTU DESKTOP SINTESIS.html";
    }
};
function redirect() {
  var selectElement = document.getElementById("vm-select");
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  if (selectedValue !== "") {
    window.location.href = selectedValue;
  }
}
