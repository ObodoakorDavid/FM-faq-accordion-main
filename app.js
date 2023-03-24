/** @format */

let accordions = document.querySelectorAll(".accordion");
let arrowDown = document.querySelector(".accordion img");

console.log(accordions);

accordions.forEach((eachAccordion) => {
  eachAccordion.addEventListener("click", () => {
    accordions.forEach((eachAcc) =>
      eachAcc.firstElementChild.nextElementSibling.classList.remove("active")
    );

    console.log(eachAccordion.firstElementChild.nextElementSibling);
    eachAccordion.firstElementChild.nextElementSibling.classList.toggle(
      "active"
    );
    console.log(
      eachAccordion.firstElementChild.firstElementChild.nextElementSibling.classList.toggle(
        "active"
      )
    );
    // .nextSibling.classList.toggle(
    //   "active"
    // );
  });
});
