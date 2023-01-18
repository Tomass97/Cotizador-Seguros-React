import { useContext } from "react";
import CotizadorContext, { CotizadorProvider } from "../context/CotizadorProvider";

const useCotizador = () => {
    return useContext(CotizadorContext)
}

export default useCotizador