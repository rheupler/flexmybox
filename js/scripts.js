const flexSetting = document.querySelector('#output-container');

function updateDirection() {
  let selected = document.querySelector('input[name="flexdirection"]:checked').value;
  flexSetting.style.flexDirection = selected;
}

function updateJustify() {
  let selected = document.querySelector('input[name="justifyContent"]:checked').value;
  flexSetting.style.justifyContent = selected;
}

function updateAlign() {
  let selected = document.querySelector('input[name="alignItems"]:checked').value;
  flexSetting.style.alignItems = selected;
}
