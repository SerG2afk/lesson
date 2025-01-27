//=================================================
// burger-menu
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    // .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open 
    if (targetElement.closest('.icon-menu')) {
      document.documentElement.classList.toggle('open-menu');
      e.preventDefault();
    }
  })
  //=================================================

//   const listItem = document.querySelectorAll(`.menu__link`)
//   console.log(listItem)
//   listItem.forEach((listItem, index)  => {
//   // console.log(listItem.innerHTML)
//   listItem.textContent = `<span> Ку № ${index} </span>`
// })

// let newElement = document.createElement(`div`)
// newElement.innerHTML = `<span> Хай </span>`
// console.log(newElement)

// const page = document.querySelector(`.main`)
// // (`.main`).before(newElement)
// page.prepend(newElement)


// const page = document.querySelector(`.header`)

// let template = `<div class="block">`
// if (page) {
//   template += `<span> Хай </span>`
// }
// template += `</div>`
// console.log(template)

// // page.insertAdjacentHTML("beforeend", template)
// page.insertAdjacentHTML("beforeend", `<div class="block"<span> Хай </span></div>`)