console.log("js");

$(document).ready(handleReady);

let infoBank = [];

function handleReady() {
  console.log("jquery is ready");

  //render items to DOM
  renderToDom();

  //click listeners
  $("#submitButton").on("click", handleClick);
  $("#deleteButton").on("click", handleClick);
}

function renderToDom() {
  //make sure the DOM is empty
  $("#foodList").empty();
  //append everything in the array, append them to the table
  for (let info of infoBank) {
    $("#infoDisplay").append(`
      <tr class= "info">
      <td>${info.firstNameInput}</td>
      <td>${info.lastNameInput}</td>
      <td>${info.idNumberInput}</td>
      <td>${info.jobTitleInput}</td>
      <td>${info.annualSalaryInput}</td>
      </tr>`);
  }
}
