import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";

const PATH ={
    PAGE1: 'page1',
    PAGE2: 'page2',
    PAGE3: 'page3',
    ERROR: 'error404'
}

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
                        to={PATH.PAGE1}>Page1</NavLink></div>
                    <div><NavLink
                        className={navLinkStyles}
                        to={PATH.PAGE2}>Page2</NavLink></div>
                    <div><NavLink
                        className={navLinkStyles}
                        to={PATH.PAGE3}>Page3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to='page1'/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path={PATH.ERROR} element={<Error404/>}/>
                        <Route path='*' element={<Navigate to={PATH.ERROR}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2025</div>
        </div>
    );
}
