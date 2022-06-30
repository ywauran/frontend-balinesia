/* eslint-disable prettier/prettier */
import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  return <>
  <div onClick={() => navigate(-1)} className="buttonBack max-w-max rounded py-2 pl-4 pr-8 bg-theme1 mb-8 bg-gradient-to-l from-fuchsia-100 via-purple-200 to-pink-300 hover:cursor-pointer">
    <div className="font-bold text-base text-theme3 flex items-center justify-center"> <svg className="w-10" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1z" fillRule="nonzero"/></svg> Back</div>
  </div>
  </>;
};

export default Button;
