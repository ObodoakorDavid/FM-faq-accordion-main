/** @format */

let accordions = document.querySelectorAll(".accordion");
let arrowDown = document.querySelector(".accordion img");

console.log(accordions);

accordions.forEach((eachAccordion) => {
  eachAccordion.addEventListener("click", (e) => {
    // removing all classes first
    accordions.forEach((eachAcc) => {
      eachAcc.firstElementChild.nextElementSibling.classList.remove("active");
      eachAcc.firstElementChild.nextElementSibling.classList.remove("active");
      eachAcc.firstElementChild.firstElementChild.classList.remove("active");
    });

    // console.log(eachAccordion.firstElementChild.nextElementSibling);
    // console.log(e);

    if (
      eachAccordion.firstElementChild.nextElementSibling.classList.contains(
        "active"
      )
    ) {
      eachAccordion.firstElementChild.nextElementSibling.classList.remove(
        "active"
      );
      eachAccordion.firstElementChild.nextElementSibling.classList.remove(
        "active"
      );
      eachAccordion.firstElementChild.firstElementChild.classList.remove(
        "active"
      );
      console.log("kk");
    } else {
      eachAccordion.firstElementChild.nextElementSibling.classList.add(
        "active"
      );
      eachAccordion.firstElementChild.nextElementSibling.classList.add(
        "active"
      );
      eachAccordion.firstElementChild.firstElementChild.classList.add("active");
    }

    // adding class to just the active one

    // console.log(eachAccordion.firstElementChild.firstElementChild);
    // // p tag
    // eachAccordion.firstElementChild.nextElementSibling.classList.toggle(
    //   "active"
    // );

    // eachAccordion.firstElementChild.firstElementChild.classList.toggle(
    //   "active"
    // );
    // console.log(
    //   eachAccordion.firstElementChild.firstElementChild.nextElementSibling.classList.toggle(
    //     "active"
    //   )
    // );
  });
});
