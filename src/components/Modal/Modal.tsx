import {useParams} from "react-router-dom";
import {adidasArr} from "../pages/Adidas.tsx";
import s from './modalstyle.module.css'
import {Error404} from "../pages/Error404.tsx";
import {pumaArr, TypeItem} from "../pages/Puma.tsx";

type ModalObjectType = {
    adidas: TypeItem[];
    puma: TypeItem[];
};
type BrandKey = keyof ModalObjectType;

const modalObject:ModalObjectType  = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Modal = () => {
    const {modal,id} = useParams<{ modal?: BrandKey; id?: string }>()
    const paramsId = Number(id)
    const model = modal? modalObject[modal].find(m => m.id===paramsId): null




    return(
       <>
           {modal?(
               <div className={s.boxWrapper}>
                   <h3>{model?.name}</h3>
                   <img className={s.picture} alt={'modal'} src={model?.picture}/>
                   <p>{model?.price}</p>
                   <p>{model?.collection}</p>
               </div>
           ):(
              <Error404/>
           )}
       </>

    )
};



