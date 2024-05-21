import React, { useState } from "react";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/Icons";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation({active,setActive}) {
  const {user,loginWithRedirect,isAuthenticated,logout} = useAuth0();

  return (
    <div className="
    flex flex-col justify-between gap-[2rem] z-10
    px-[2rem] py-[1.5rem] w-[314px] h-[100%]
    bg-[rgba(254,254,254,0.78)]
    rounded-2xl
    border-4 border-[#ffffff] backdrop-blue-lg
">
      {/* images */}
      <div className="h-[100px] flex items-center gap-[1rem]">
        <img className="h-[80px] hover:scale-95 hover:shadow-xl transition-all duration-200 ease-in-out w-[80px] rounded-full object-cover bg-[#fef6fa] p-[0.2rem] shadow-lg" src={`${user?.picture ? (user?.picture) : (avatar)}`} alt="avatar" loading="lazy" />
        <div>
          <h2 className="text-[rgba(34,34,96,1)] font-semibold text-xl
          
          ">{user && <p>{user?.given_name} {user?.family_name}</p>}</h2>
          <p className="text-[rgba(34,34,96,0.6)]">Expense Tracker v1</p>
        </div>
      </div>

      {/* menu items */}
      <ul className="flex-1 flex flex-col">
        {menuItems.map((item) => {
          return (
            <li className={`pl-[1rem] custom-grid relative items-center mx-[0.6] my-0 cursor-pointer transition-none duration-200 ease-in
            text-[rgba(34,34,96,0.6)] ${active === item.id ? ("text-[rgba(34,34,96,1)]") : ("")}`} key={item.id}
            onClick={()=>{
                setActive(item.id)
            }}>
              <span className={`${active === item.id ? ("text-[rgba(34,34,96,1)]") : ("")}`}>
                {item.icon}
              </span>
              <span className="">{item.title}</span>
            </li>
          );
        })}
      </ul>

      {/* signuout */}
      <div>
        <li className="list-none">
        {
        !isAuthenticated ? (<button onClick={()=>{
          loginWithRedirect()
        }}>{signout} Login</button>) : (<button onClick={()=>{
          logout()
        }}>{signout} Signout</button>)
        }
        </li>
      </div>
    </div>
  );
}

export default Navigation;
