import { useEffect, useState } from "react";

export default function withLoader(Component, fetchFn) {
  return (props) => {
    const [list, setList] = useState(null);

    useEffect(() => {
      fetchFn().then((res) => setList(res));
    }, []);

    if (!list) {
      return "Carregando...";
    }

    return <Component {...props} list={list} />;
  };
}
