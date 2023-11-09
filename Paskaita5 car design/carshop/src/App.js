import "./App.css";
import Product from "./components/Product/Product";

function App() {
  return (
    <div>
      <Product
        image={
          "https://armandadvertising.com/wp-content/uploads/2019/10/image-135.jpg"
        }
        title={"Ford Boss 429 MUSTANG Grabber 1970"}
        price={`10.00EUR`}
        description={
          "12 unique design \n\nAll pieces are printed on heavyweight 200 gsm art paper \n\nLimited to 50 pieces \n\nOne size: \n11.7x16.5inch / (297x420mm)"
        }
        availability={"10 in stock"}
        category={"Calendars"}
      />
    </div>
  );
}

export default App;
