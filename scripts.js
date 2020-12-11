console.log("js");

$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is ready");

  //render items to DOM
  renderToDom();

  //click listeners
  $("#submitButton").on("click", handleClick);
  $("#deleteButton").on("click", handleClick);
}
