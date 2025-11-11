function loadmenu() {
   const content=document.getElementById("content");
   content.innerHTML="";
    
   const headline=document.createElement("h1");
    headline.textContent="Our Menu";
   
    const menuitems=[
        {name:"Margherita Pizza",
        description:"Classic pizza with fresh tomatoes, mozzarella cheese, and basil.",
        price:"$12.99"  ,
        image: 'https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387'
    },
        {name:"Caesar Salad",
        description:"Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
        price:"$8.99"  ,
        image:'https://images.unsplash.com/photo-1605291535065-e1d52d2b264a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870'
    },
        {name:"Grilled Salmon",
        description:"Fresh salmon fillet grilled to perfection, served with seasonal vegetables.",
        price:"$18.99"  ,
        image:'https://plus.unsplash.com/premium_photo-1723478417559-2349252a3dda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=766'
    },
        {name:"Chocolate Lava Cake",
        description:"Warm chocolate cake with a gooey center, served with vanilla ice cream.",
        price:"$6.99"  ,
        image:'https://plus.unsplash.com/premium_photo-1716152282009-3ee413548e46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870'
    }
   ];
    const menucontainer=document.createElement("div");
    menucontainer.classList.add("menu-container");

    menuitems.forEach(item=>{
        const menuitem=document.createElement("div");
        menuitem.classList.add("menu-item");

           menuitem.innerHTML = `
            <div class="menu-item-content">
                
                <div class="menu-item-text">
                    <h3>${item.name} <span class="price">${item.price}</span></h3>
                    <p>${item.description}</p>
                </div>
                <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            </div>
        `;
        menucontainer.appendChild(menuitem);
    });
    
    content.appendChild(headline);
    content.appendChild(menucontainer);

}
export default loadmenu;