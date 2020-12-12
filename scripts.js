console.log("js");

$(document).ready(handleReady);

let infoBank = [];

function handleReady() {
  console.log("jquery is ready");

  //render items to DOM
  renderToDom();

  //click listeners
  $("#submitButton").on("click", handleClick);
  // $("#deleteButton").on("click",'deleteEmployee,  delete);
}

function renderToDom() {
  console.log("in renderToDom");
  //make sure the DOM is empty
  $("#infoDisplay").empty();
  //append everything in the array, append them to the table
  for (let info of infoBank) {
    $("#infoDisplay").append(`
      <tr class= "info">
      <td>${info.firstName}</td>
      <td>${info.lastName}</td>
      <td>${info.idNumber}</td>S
      <td>${info.jobTitle}</td>
      <td>${info.annualSalary}</td>
      </tr>`);
  }
  //append the total costs below the table
}

function handleClick() {
  console.log("In Handle Click");
  //take what the user input and store it into the array for later use
  let employeeInfo = {
    firstName: $("#firstNameInput").val(),
    lastName: $("#lastNameInput").val(),
    idNumber: $("#idNumberInput").val(),
    jobTitle: $("#jobTitleInput").val(),
    annualSalary: $("#annualSalaryInput").val(),
  };
  console.log(employeeInfo);
  infoBank.push(employeeInfo);
  //loop through the array and divide the total salary by 12
  totalSalary();
  //apply the items added by user to the table
  renderToDom();

  //clear out the search fields after use
  clearInputs();
}

function clearInputs() {
  $("#firstNameInput").val("");
  $("#lastNameInput").val("");
  $("#idNumberInput").val("");
  $("#jobTitleInput").val("");
  $("#annualSalaryInput").val("");
}

function totalSalary() {
  //loop through array
  //add all annualSalary of each person together then divide by 12
  let monthlyCosts = $("#monthlyCosts");
  let allSalaries = 0;
  console.log(allSalaries);
  for (let i = 0; i < infoBank.length; i++) {
    allSalaries += Number(infoBank[i].annualSalary);
  }
  let totalCost = allSalaries / 12;
  monthlyCosts.empty();
  monthlyCosts.append("Total Cost:", totalCost.toFixed(2));
}

function delete() {
  console.log("in delete");
  $("#infoDisplay").parent().parent().remove();
}
