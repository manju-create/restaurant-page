function loadmenu() {
   const content=document.getElementById("content");
   content.innerHTML="";
    
   const headline=document.createElement("h1");
    headline.textContent="Our Menu";
   
    const menuitems=[
        {name:"Margherita Pizza",
        description:"Classic pizza with fresh tomatoes, mozzarella cheese, and basil.",
        price:"$12.99"  
    },
        {name:"Caesar Salad",
        description:"Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
        price:"$8.99"  
    },
        {name:"Grilled Salmon",
        description:"Fresh salmon fillet grilled to perfection, served with seasonal vegetables.",
        price:"$18.99"  
    },
        {name:"Chocolate Lava Cake",
        description:"Warm chocolate cake with a gooey center, served with vanilla ice cream.",
        price:"$6.99"  
    }
   ];
    const menucontainer=document.createElement("div");
    menucontainer.classList.add("menu-container");

    menuitems.forEach(item=>{
        const menuitem=document.createElement("div");
        menuitem.classList.add("menu-item");

        menuitem.innerHTML=`
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <span class="price">${item.price}</span>
        `;
        menucontainer.appendChild(menuitem);
    });
    
    content.appendChild(headline);
    content.appendChild(menucontainer);

}
export default loadmenu;