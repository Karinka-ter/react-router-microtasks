import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Abibas} from "./components/pages/Abibas.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";
import {Modal} from "./components/Modal/Modal.tsx";

const PATH ={
    PAGE1: 'adidas',
    PAGE2: 'puma',
    PAGE3: 'abibas',
    ERROR: 'error404'
} as const

export const App = () => {

    const navLinkStyles = ({isActive}:{ isActive: boolean }) => {
        return isActive ? styles.activeNavLink : styles.navLink;
    }

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink
                        className={navLinkStyles}
                        to={PATH.PAGE1}>Adidas</NavLink></div>
                    <div><NavLink
                        className={navLinkStyles}
                        to={PATH.PAGE2}>Puma</NavLink></div>
                    <div><NavLink
                        className={navLinkStyles}
                        to={PATH.PAGE3}>Abibas</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path='/:modal/:id' element={<Modal/>}/>


                        <Route path={'*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2025</div>
        </div>
    );
}
