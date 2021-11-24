import React, {createContext, useContext, useState} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Login from "../pages/login";
import NotFound from "../pages/notFound";
import {fakeAuthProvider, authProvider} from './auth'
import Menu from "../components/menu";
import ListIncident from "../pages/incident/list";
import ReplyIncident from "../pages/incident/reply";
import PostList from "../pages/post/list";
import PostCreate from "../pages/post/create";
import styled from "styled-components";

let AuthContext = createContext({})

export function useAuth() {
    return useContext(AuthContext);
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    >header {
       &+* {
          flex: 1 0;
       }
    }
    @media (min-width: 1025px) {
        flex-direction: row;
    }
`

function AuthProvider({children}) {
    let [user, setUser] = useState(false);

    /*let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };*/
    let signin = (newUser, callback) => {
        console.log(newUser)
        return authProvider.signin(newUser.username, newUser.password, callback);
    };

    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = {user, signin, signout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function RequireAuth({children}) {
    let auth = useAuth();
    let location = useLocation();
    localStorage.getItem('token')
    if (!localStorage.getItem('token')) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{from: location}}/>;
    }

    return <Wrapper>
        <Menu/>
        {children}
    </Wrapper>;
}


const RoutesComponent = () => {
    return <AuthProvider>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path='/incidente' element={<RequireAuth>
                <ListIncident/>
            </RequireAuth>}/>
            <Route path='/incidente/:protocol' element={<RequireAuth>
                <ReplyIncident/>
            </RequireAuth>}/>
            <Route path='/publicacao' element={<RequireAuth>
                <PostList/>
            </RequireAuth>}/>
            <Route path='/publicacao/nova' element={<RequireAuth>
                <PostCreate/>
            </RequireAuth>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </AuthProvider>
}

export default RoutesComponent