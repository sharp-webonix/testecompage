import Input from "../../components/Input";
import './Category.css';

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Laptop"
          title="Laptop"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Phone"
          title="Phone"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Television"
          title="Television"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Accessories"
          title="Accessories"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;