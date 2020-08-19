export default function userPushEnterMain(enter) {
  // Number 13 is the "Enter" key on the keyboard
  if (enter.keyCode === 13) {
    enter.preventDefault();
    document.querySelector("#searchbutton").click();
  }
}

export function userPushEnterOne(enter) {
  // Number 13 is the "Enter" key on the keyboard
  if (enter.keyCode === 13) {
    enter.preventDefault();
    document.querySelector("#add-city-one").click();
  }
}

export function userPushEnterTwo(enter) {
  // Number 13 is the "Enter" key on the keyboard
  if (enter.keyCode === 13) {
    enter.preventDefault();
    document.querySelector("#add-city-two").click();
  }
}
