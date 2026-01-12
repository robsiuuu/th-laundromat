import "./../styles/Home.css";

function Home() {
  return (
    <div className="container">

      <h1>Welcome to T&H Laundromat</h1>
      <p>Large Washers: 22 Quarters = $5.50</p>
      <p>Medium Washers: 18 Quarters = $4.50</p>
      <p>Small Washers: 11 Quarters = $2.75</p>
      
      <div className="small-container">
        <div className="img-container">
          <img src="/thlaundromat.png" alt="Laundromat" />
        </div>
        <h2>Hours:</h2>
        <p>Monday - Sunday: 7:00 AM - 8:00 PM</p>
        <p>Last wash: 7:30 PM</p>
        <h2>Location: </h2>
        <p>3107 Summit Ave, Greensboro, NC 27405</p>
        <h2>Why us?</h2>
        <p>At T&H Laundromat, we offer FREE dry with WASH. </p>
        <p>
          (Meaning you have to wash at T&H Laundromat to get the free dry. NOT
          BRINGING WASHED CLOTHES FROM HOME OR OTHER LAUNDROMAT AND DRY HERE!)
        </p>
      </div>
    </div>
  );
}

export default Home;
