import {useParams} from "react-router-dom";
import {adidasArr} from "../pages/Adidas.tsx";
import s from './modalstyle.module.css'
import {Error404} from "../pages/Error404.tsx";

type Props = {
};

export const Modal = ({}: Props) => {
    const params = useParams()
    const paramsId = Number(params.id)
    const modal = adidasArr.find(m => m.id===paramsId);
    return(
       <>
           {modal?(
               <div className={s.boxWrapper}>
                   <h3>{modal?.name}</h3>
                   <img className={s.picture} alt={'modal'} src={modal?.picture}/>
                   <p>{modal?.price}</p>
                   <p>{modal?.collection}</p>
               </div>
           ):(
              <Error404/>
           )}
       </>

    )
};



