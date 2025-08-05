import { Link } from "react-router-dom";

const Home = ({ user }) => {
  
  
  return (
    <>
      <div className="home-container">
        <div className="button-container">
          {user ? (
            <Link to="/buy-tickets">
              <button className="buy-ticket">Buy Ticket</button>
            </Link>
          ) : (
            <Link to="/sign-up">
              <button className="buy-ticket">Buy Ticket</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
