
// document.addEventListener('DOMContentLoaded', ()=>{
//     const sections = document.querySelectorAll('section');
//     const navList = document.getElementsById('a-list');
    
//     sections.forEach(section => {
//         const listItem = document.createElement('li');
//         const anchor = document.createElement('a');
//         anchor.href = `${section.id}`;
//         anchor.textContent = section.getAttribute('data-nav');
//         anchor.classList.add('menu-list');

//         listItem.appendChild(anchor);
//         navList.appendChild(listItem);
//     })
// })
document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.getElementsByClassName("nav");  // Accessing the first element with class 'nav'
    const sections = document.querySelectorAll('section');  // Select all sections
    const navList = document.getElementById('a-list');  // Accessing the element with id 'a-list'


    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const images = document.querySelectorAll('.carousel img');
  const imgWidth = images[0].clientWidth;
  let index = 0;

    nextBtn.addEventListener('click', () => {
        if (index < images.length - 4) { // Show 4 images at a time
      index++;
      carousel.style.transform = `translateX(-${index * imgWidth}px)`;
    } else {
      index = 0; // Reset to the first image when reaching the end
      carousel.style.transform = `translateX(0)`;
    }
  });

    prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      carousel.style.transform = `translateX(-${index * imgWidth}px)`;
    } else {
      index = images.length - 4; // Move to the last set of images
      carousel.style.transform = `translateX(-${index * imgWidth}px)`;
    }
  });

  // Adjust on window resize
    window.addEventListener('resize', () => {
    const imgWidth = images[0].clientWidth;
    carousel.style.transform = `translateX(-${index * imgWidth}px)`;
  });

    const readMoreBtn = document.querySelector('.read-more-btn');
    const textContent = document.querySelector('.text-content');

    readMoreBtn.addEventListener('click', () => {
        textContent.classList.toggle('expanded');
        readMoreBtn.textContent = textContent.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });

    sections.forEach(section => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');

// // Ensure the section has an ID for proper navigation
// if (!section.id) {
//     section.id = section.getAttribute('data-nav').toLowerCase().replace(/\s+/g, '-');  // Fallback ID creation
// }

    anchor.href = `#${section.id}`;
        anchor.textContent = section.getAttribute('data-nav');
        anchor.classList.add('menu-list');

    listItem.appendChild(anchor);
    navList.appendChild(listItem);
  });
});

// Smooth scroll behavior for anchor clicks
anchor.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent default jump to section
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
  });
});
