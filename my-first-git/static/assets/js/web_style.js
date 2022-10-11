
    function dropdown_menu(){
        document.getElementById("dropdown1").classList.toggle("show")

    }
    const element = document.querySelector("#scroll");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,

  });
});
/*
        const left = document.getElementsByClassName("prev");
        const right = document.getElementsByClassName("next");
        left.addEventListener('click', () => {leftScroll()});
        right.addEventListener('click',()=>{rightScroll()});
        function leftScroll() {
            const go_left = document.getElementById("scroll");
            go_left.scrollBy(200, 0);
        }
        function rightScroll() {
            const go_right = document.getElementById("scroll");
            go_right.scrollBy(-200, 0);
      }
*/
    function leftScroll() {
        const left = document.querySelector(".content_container");
        left.scrollBy(200, 0);
      }
      function rightScroll() {
        const right = document.querySelector(".content_container");
        right.scrollBy(-200, 0);
      }

      