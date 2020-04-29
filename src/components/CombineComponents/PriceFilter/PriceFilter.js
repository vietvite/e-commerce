import React from "react";
import PriceInput from "../../BaseComponents/PriceInput/PriceInput";
import style from "./PriceFilter.module.scss";

class PriceFilter extends React.Component {
  render() {
    return (
      <div className={style.priceFilter}>
        <div className={style.title}>Lọc giá</div>
        <div className={style.priceFilterInput}>
          <PriceInput name="priceFrom" innerText="₫ TỪ" />
          <span>-</span>
          <PriceInput name="priceTo" innerText="₫ ĐẾN" />
        </div>
      </div>
    );
  }
}
export default PriceFilter;
