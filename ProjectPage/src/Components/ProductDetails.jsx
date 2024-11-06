import React from "react";
import styles from "./Header.module.css";

const ProductDetails = () => {
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productDetails}>
          <div className={styles.headingText}>
            <h1 className={styles.h1text}>YOUR FEET DESERVE THE BEST</h1>
          </div>

          <div className={styles.content}>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>

          <div className={styles.buttonDiv}>
            <button className={styles.shopNow}>Shop Now</button>
            <button className={styles.Category}>Category</button>
          </div>
        </div>

        <div className={styles.product}>
          <img
            className={styles.shoeImage}
            src="https://s3-alpha-sig.figma.com/img/ccd9/e7f6/9d4cbfcf331c69b8e21db35d2e158410?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1vM0-wSYxiUvNGrdAHnAOp~TZTCRcg9dOBE7n~4pPAwGMnPc2OUjm6Aq1T9f5xHK5WiIhjCurhPB-BPKiJu~Jqqpdlj41D77aeX7MeCVR35WEKUbfXydXN7tnw8vTP1WiYJzQ~~pz5JdBWhLxr2TcAFI8KN4CWVc7rraAGzazVsGbkyR~wkIepaE5miWInv8RUY~--6ek3~G2SOvVz-gd3c57XALDjkyHm~9dic7ibgjz48EmGtLNhWrBaPETAl4rlSVi1yXlunr2h1lbXoeSdgmRO5m51sKWjYWBlnpjc1pkPzp5u0eL8Vw8cQXdt4QNPqG6Erj2SCB2ImindtJw__"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
