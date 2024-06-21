const one = document.querySelector.bind(document);
const alls = document.querySelectorAll.bind(document);

var booksElement = alls(".book");
console.log(booksElement);
async function animateElements(elements) {
    for (let index = 0; index < elements.length; index++) {
        await elements[index].animate({
            marginTop: '0',
            opacity: 1
        }, 1000).finished; 
    }
}
animateElements(booksElement);
