function loadAbout(){
  const content = document.getElementById('content');
    content.innerHTML = '';
    const headline = document.createElement('h1');
    headline.textContent = "About Us";
    headline.classList.add('headline');

    const abouttext=document.createElement('p');
    abouttext.textContent="Founded in 1990, Our Restaurant has been serving delicious meals made from the freshest ingredients. Our mission is to provide an unforgettable dining experience with exceptional service and a warm atmosphere.";
    abouttext.classList.add('about-text');

    const mission=document.createElement('p');
    mission.textContent="Our mission is to create a welcoming environment where guests can enjoy high-quality food and excellent service. We are committed to sustainability and supporting local farmers and suppliers.";
    mission.classList.add('mission-text');

     const location=document.createElement('div');
     location.innerHTML=`
        <h2>Our Location</h2>
        <p>123 Foodie Lane, Flavor Town, FT 45678</p>
        <p>Phone: (123) 456-7890</p>
        `;
        content.appendChild(headline);
    content.appendChild(abouttext);
    content.appendChild(mission);
    content.appendChild(location);
    }
    export default loadAbout;



