import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const useCrud = (url) => {
  const isDismount = useRef(true);

  const [state, setstate] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const fetchData = (method = "get") => {
    useEffect(() => {
      return () => {
        isDismount.current = false;
      };
    }, []);

    useEffect(() => {
      setstate({
        loading: true,
        data: null,
        error: null,
      });

      axios({ method, url })
        .then((json) => {
          if (isDismount.current) {
            setstate({
              loading: false,
              data: json.data,
              error: null,
            });
          }
        })
        .catch(() => {
          setstate({ ...state, error: "No se encontraron los resultados" });
        });
    }, [url, method]);

    return state;
  };

  const postData = (method = "post", data, parameter = "") => {
    axios({ method, url: url + parameter, data });
  };

  return { fetchData, postData };
};
