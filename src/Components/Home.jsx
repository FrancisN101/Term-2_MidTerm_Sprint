
import Header from "./Header";
import diner from '../images/diner.png';
 
function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container-home">
          <div className="home-cover-box"></div>
          <div className="home-desc-box">
            <section>
              <div className="home-top-box">
                <h1 className="home-title">
                Step into the heart of African hospitality at Ngozi's Kitchen, 
                where every meal is a celebration. Join us for moments filled with joy, laughter, 
                and the irresistible Big Gary Chicken Sandwich—crafted to perfection with love and 
                tradition. Savor the authentic taste of Africa, right here with us.
                  <br /> 
                </h1>
                <div className="location">
                  We can be found at 2737 Kipling Avenue Etobicoke, Ontario.
                </div>
                <div className="schedule">
                  <div>
                    <span className="underline">Our Hours of Operation</span>
                    <br /> Monday-Friday: 11am-11pm <br /> Sat: 10am-10pm <br /> Sun:
                    Closed
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="home-bottom-box">
                <div>
                  <img className="home-image" src={diner} alt="" />
                </div>
                <div className="home-paragraph">
                Since 1998, Ngozi's Kitchen has been a culinary gem, delighting customers with authentic 
                African flavors for over 20 years. Conveniently located at 2737 Kipling Avenue Etobicoke, it's the 
                perfect spot for hungry families and food enthusiasts alike. With a rich history and a menu that features 
                beloved dishes like Pounded Yam with Egusi Soup and the classic Jollof Rice, Ngozi's Kitchen offers a 
                taste of Africa that will leave you coming back for more. Join us for a dining experience filled with 
                tradition, warmth, and unforgettable flavors!
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
 
export default Home;
 