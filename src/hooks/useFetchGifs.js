import { useEffect, useState } from "react";
import {getGift} from '../helpers/getGift'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    laoding: true,
  });

  useEffect(() => {
    getGift(category)
      .then((imgs) =>
        setState({
        data: imgs,
        laoding: false,
      })
    );
  }, [category]);

  return state;
};
