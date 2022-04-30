---
title: 'Hamburger menu that hiddes on click outside'
metaTitle: 'Basic React Router 6 & Vite'
metaDesc: 'How to make simple multipage application using react(vite) and react router'
socialImage: images/post2-img.webp
date: '11-04-2022'
tags:
  - HTML
  - JS
  - SASS
  - UX
---

# Intro
The burger appear on width < 700px & shows only when the burger is clicked, but hiddes when the burger is clicked, there's a click outside the navbar or there's a click in any link
- *Minimal JS*
- *No ::after or ::before*
- *Only 1 nesting whit scss (end of navbar), basically vanilla css*

### HTML markup
```html
<nav>
  <!-- burger -->
  <input type="checkbox" class="burger-click" />
  <span class="burger1"></span>
  <span class="burger2"></span>
  <span class="burger3"></span>
  <!-- navbar -->
  <ul class="navbar">
    <li><a href="#">adc</a></li>
    <li><a href="#">adc</a></li>
    <li><a href="#">adc</a></li>
    <li><a href="#">adc</a></li>
  </ul>
</nav>
```

### Hamburger animation (SASS)

```css
/* input area */
.burger-click {
  z-index: 10;
  cursor: pointer;
  position: fixed;
  top: 30px;
  left: 30px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: grey;
  opacity: 0;
}

/* Basic burger styles */
.burger1,
.burger2,
.burger3 {
  position: fixed;
  z-index: 1;
  left: 30px;
  content: "";
  background-color: black;
  width: 30px;
  height: 5px;
  border-radius: 50vw;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background-color 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

.burger1 {
  top: 30px;
}

.burger2 {
  top: 39px;
}

.burger3 {
  top: 49px;
  transform-origin: 0 0;
}

/* click behaivour */
.burger-click:checked ~ .burger1 {
  transform: rotate(-45deg) translate(-7px, 7px);
  background-color: rgb(255, 236, 31);
}

.burger-click:checked ~ .burger2 {
  opacity: 0.1;
  background-color: red;
}

.burger-click:checked ~ .burger3 {
  background-color: rgb(255, 238, 49);
  transform: rotate(45deg) translate(-8px, -18px);
}

// > 700px
@media screen and (min-width: 700px) {
  // hidde the burger on bigger screens
  .burger1,
  .burger2,
  .burger3,
  .burger-click {
    display: none;
  }
}
```

### Navbar styles (SASS)
```css
.navbar {
  list-style: none;
  width: 70vw;
  height: 100vh;
  background-color: palegoldenrod;
  transition: transform 0.4s ease-in-out;
  transform: translateX(-100%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding-left: 50%;
  padding-top: 5%;
}

// the input that triggers the burger
.burger-click:checked ~ .navbar {
  transform: translateX(0);
}

// > 700px
@media screen and (min-width: 700px) {
  // deactivate animation
  .burger-click:checked ~ .navbar {
    transform: unset;
  }

  .navbar {
    display: unset;
    transform: translateX(0);
    width: 100vw;
    height: fit-content;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: palegreen;

    // safe zone for clicks on <a> inside <li>
    * {
      padding: 10px 13px;
    }
  }
}
```

### Logic for click outside elements(JS) 

```js
const checkBox = document.querySelector('.burger-click');
const navbar = document.querySelector('.navbar');
const tableElements = document.querySelectorAll(".link");

// hidde the mobile nav, once a link s clicked
tableElements.forEach((element) => element.addEventListener('click', () => checkBox.checked = false));

// Hidde menu once there's a click outside the nav, & respect the burger
document.addEventListener('click', (event) => {
  const navClicked = navbar.contains(event.target);
  const burgerClicked = checkBox.contains(event.target);

  if (!navClicked && !burgerClicked) {
    checkBox.checked = false;
  }
});
```
