
import Header from "./Header";
import MenuOpt from "./MenuOpt";
 
function Menu() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container-menu">
          <div className="menu-cover-box"></div>
          <div className="menu-option-box">
            <MenuOpt
              title="Meatpie"
              desc="Golden, flaky pastry filled with seasoned ground beef, potatoes, and carrots.
              Served warm with a side of tangy tomato dipping sauce and a fresh garden salad."
            />
            <MenuOpt
              title="Egusi Soup"
              desc="Rich and flavorful soup made with ground melon seeds, tender pieces of meat, and leafy greens. 
              Served hot with your choice of pounded yam, fufu, or rice, and a side of spicy pepper sauce."
            />
            <MenuOpt
              title="Jollof Rice"
              desc="Vibrant and savory rice dish cooked in a rich tomato sauce, infused with aromatic spices, and mixed 
              with tender vegetables. Served with juicy grilled chicken and a side of fried plantains."
            />
 
            <MenuOpt
              title="Egg Roll"
              desc="Deliciously crispy pastry filled with a perfectly boiled egg and seasoned ground meat. 
              Served with a side of spicy dipping sauce and a fresh cucumber salad."
            />
            <MenuOpt
              title="Chin Chin"
              desc="Crunchy, sweet bite-sized pastries made from fried dough, lightly dusted with sugar. 
              Perfect for snacking, these delightful treats are served with a side of refreshing ginger drink."
            />
            <MenuOpt
              title="Akara"
              desc="Golden-brown, crispy bean fritters made from black-eyed peas and infused with a hint of spicy peppers. 
              Served hot with a side of tangy tomato sauce and fresh papaya slices"
            />
            <MenuOpt
              title="Moi Moi"
              desc="Delicious steamed bean pudding made from blended black-eyed peas, onions, and spices. 
              Wrapped in leaves or foil for cooking, Moi Moi is enjoyed hot as a savory and nutritious side dish or snack."
            />
            <MenuOpt
              title="Samosa"
              desc="Triangular pastry filled with spiced potatoes, peas, and savory minced meat. 
              Deep-fried to crispy perfection and served with a zesty tamarind chutney for dipping"
            />
            <MenuOpt
              title="Puff Puff"
              desc="Light and fluffy dough balls, deep-fried to a golden perfection and dusted with powdered sugar. 
              These irresistible sweet treats are served warm with a side of rich chocolate sauce for dipping"
            />
          </div>
        </div>
      </main>
    </>
  );
}
 
export default Menu;
 