console.log("js");

$(document).ready(handleReady);

let infoBank = [];

function handleReady() {
  console.log("jquery is ready");

  //render items to DOM
  renderToDom();

  //click listeners
  $("#submitButton").on("click", handleClick);
  $("#infoDisplay").on("click", "#deleteButton", deleteFunction);
}

function renderToDom() {
  console.log("in renderToDom");
  //make sure the DOM is empty
  $("#infoDisplay").empty();
  //append everything in the array, append them to the table
  for (let info of infoBank) {
    $("#infoDisplay").append(`
      <tr class= "info table table-striped table-hover">
      <td>${info.firstName}</td>
      <td>${info.lastName}</td>
      <td>${info.idNumber}</td>
      <td>${info.jobTitle}</td>
      <td>${info.annualSalary}</td>
      <td><button id = 'deleteButton' class = 'btn btn-outline-warning'> Delete </button></td>
      </tr>`);
  }
  // $('delete')
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
  //clear all the input boxes
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

  if (totalCost >= 20000) {
    $("#monthlyCosts").addClass("overBudget");
    $("#monthlyCosts").removeClass("underBudget");
  } else {
    $("#monthlyCosts").addClass("underBudget");
    $("#monthlyCosts").removeClass("overBudget");
  }
}

function deleteFunction() {
  console.log("in delete");
  $(this).parent().parent().remove();
}
