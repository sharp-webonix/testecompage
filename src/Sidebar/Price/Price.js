import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
       
        <Input
          handleChange={handleChange}
          value ={990}
          title="Below 10000"
          name="test2"
        />
         <Input
          handleChange={handleChange}
          value ={11000}
          title="10000-20000"
          name="test2"
        />
        
        <Input
          handleChange={handleChange}
          value ={24990}
          title="20000-30000"
          name="test2"
        />
        

        <Input
          handleChange={handleChange}
          value={34990}
          title="30000-50000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={54900}
          title="50000-80000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={94990}
          title="Over 80000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;