import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logoutservice } from '../../service/logout.service';
import { LOG_OUT } from '../../actions/types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as nav from '../navbar/navitems';
import * as navuser from '../navbar/navitemuser';
import { Menubar } from 'primereact/menubar';
import {Button} from 'primereact/button';
import { push } from 'connected-react-router';



const Navbar = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const navigatePage=(url)=>{
        dispatch(push(url));
    };


    const getMenuObject=(menu)=>{
       
        let menuObj={};

        menuObj.label=menu.label;

        if(menu.items){
             menuObj.items=menu.items.map(curitem=>{
                return getMenuObject(curitem);
            });  
        }
        if(menu.icon){
            menuObj.icon=menu.icon;
        }
        if(menu.url){
            menuObj.command=()=>{
               navigatePage(menu.url);
            }
        }
       
        return menuObj;
    }

    const navigationMenu=nav.navitems.map(menuItem=>{
        return getMenuObject(menuItem);
    })

   //коли авторизований користувач.Менюбар поділений,що саме відображати для авторизованих і для решти.
    const navigationMenuUser=navuser.navitemuser.map(menuItem=>{
        return getMenuObject(menuItem);
    })


    const logout = () => {
        logoutservice.logout();
        dispatch({ type: LOG_OUT });
        history.push('/');
    };
     const {isAuth, user } = useSelector(res => res.auth);

    return (
        !isAuth ?
        <Menubar style={{backgroundColor:'#ede9f2'}} model={navigationMenu} />
        :
        <Menubar style={{backgroundColor:'#ede9f2'}} model={navigationMenuUser}
        end={<Button label={user.name} onClick={logout} icon="pi pi-power-off" style={{backgroundColor:'#f27cc9'}}/>}
         />
       
    )

}

export default Navbar;
