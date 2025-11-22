// active

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



// mobile menu

var sideMenu = document.getElementById("sidemenu");

function openmenu() {
    sideMenu.style.right = "0";
}
function closemenu() {
    sideMenu.style.right = "-200px";
}


//using selectors inside the element

const questions = document.querySelectorAll('.question');
questions.forEach(function (question) {
    // questions.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", function () {

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});

const cards = document.querySelectorAll('.skill-card');
const highlighted = document.getElementById('highlighted');
const highlightedTitle = document.getElementById('highlighted-title');
const highlightedDesc = document.getElementById('highlighted-desc');
const highlightedIcon = document.getElementById('highlighted-icon');

// helper to set highlighted content
function setHighlighted(title, desc, iconHTML, cardEl) {
    highlightedTitle.textContent = title;
    highlightedDesc.textContent = desc;
    highlightedIcon.innerHTML = iconHTML || '<i class="fa-solid fa-star"></i>';

    // toggle active class visually
    cards.forEach(c => c.classList.remove('card-active', 'bg-[#e7c07a]'));
    if (cardEl) {
        cardEl.classList.add('card-active');
    }
}

// attach click & keyboard support
cards.forEach(card => {
    card.addEventListener('click', () => {
        setHighlighted(card.dataset.title, card.dataset.desc, card.dataset.icon, card);
    });
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setHighlighted(card.dataset.title, card.dataset.desc, card.dataset.icon, card);
        }
    });
});

// mark the Ubuntu card as active by default
// find the card with data-title "Ubuntu" (case sensitive)
const defaultCard = Array.from(cards).find(c => c.dataset.title === 'Ubuntu');
if (defaultCard) {
    setHighlighted(defaultCard.dataset.title, defaultCard.dataset.desc, defaultCard.dataset.icon, defaultCard);
}