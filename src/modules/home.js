function loadhome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline=document.createElement('h1');
    headline.textContent="SMN RESTAURANT";
    headline.classList.add('headline'); 

    const image=document.createElement('img');
    image.src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
    image.alt="Delicious Food";
    image.classList.add('restaurant-image');

    const description=document.createElement('p');
    description.textContent="Experience the finest dining with our exquisite menu crafted by top chefs. Enjoy a variety of dishes made from fresh, high-quality ingredients in a cozy and welcoming atmosphere.";
    description.classList.add('description');

    const hours=document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML=`
        <h2>Operating Hours</h2>
        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
        <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
    `;
content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
    content.appendChild(hours);

}
export default loadhome;