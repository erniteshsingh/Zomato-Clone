import axios from "axios";
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./ProductSlice";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsStart());

    const res = await axios.get(
      "http://localhost:3000/api/products/getAllProducts/",
      { withCredentials: true }
    );

    console.log(res.data.products);
    dispatch(fetchProductsSuccess(res.data.products));
  } catch (error) {
    console.log(error);
    dispatch(
      fetchProductsFailure(
        error.response?.data?.message || "Failed to fetch products"
      )
    );
  }
};
