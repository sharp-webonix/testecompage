import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="HP" title="Hp" />
          <Button onClickHandler={handleClick} value="ACER" title="Acer" />
          {/* <Button onClickHandler={handleClick} value="LENOVO" title="Lenovo" /> */}
          <Button onClickHandler={handleClick} value="ONEPLUS" title="Oneplus" />
          <Button onClickHandler={handleClick} value="SAMSUNG" title="Samsung" />
          {/* <Button onClickHandler={handleClick} value="REALME" title="Realme" /> */}
          {/* <Button onClickHandler={handleClick} value="REDMI" title="Redmi" /> */}
          <Button onClickHandler={handleClick} value="SONY" title="Sony" />
          {/* <Button onClickHandler={handleClick} value="BOAT" title="Boat" /> */}
        </div>
      </div>
    </>
  );
};

export default Recommended;