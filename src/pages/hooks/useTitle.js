import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
      document.title = `${title} | Toy Emporium`;
    },[title])
}
export default useTitle;