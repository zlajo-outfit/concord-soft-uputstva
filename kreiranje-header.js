import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import Router from 'next/router';
import { useAppContext } from '../context/AppContext';
import Image from 'next/image';
import { Select } from 'antd';
import Link from 'next/link';
import Infomojgrad from '../components/pop-up-modal'
import { Modal } from 'antd';
const cookies = new Cookies();
const { Option } = Select;
export const Header = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { basket } = useAppContext();
  const handleLogout = () => {
    cookies.remove('user', { path: '/' });
    cookies.set('loggedIn', false, { path: '/' });
    Router.push('/');
  };
  const userLogged = props.loggedIn;
  // const handleChangeLoginRegister = (value) => {
  //   console.log('value: ', value);
  // };
  const handleChangeMyProfile = (value) => {
    console.log('value: ', value);
  };
  const [open, setOpen] = useState(false);
  const navToggle = () => {
    setOpen(!open);
  };
  //MODAL
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link href="/">
            <a title="Početna">
              <Image className="header-logo" src="/images/logo.svg" alt="Bauk Cheesecake logo"
                     width={266} height={47}/>
            </a>
          </Link>
          <div className="header-nav">
            <ul>
              <li>
                <Link href="/">
                  <a title="Početna">Početna</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a title="O nama">O nama</a>
                </Link>
              </li>
              <li>
                <Link href="cizkejkovi">
                  <a title="Čizkejkovi">Čizkejkovi</a>
                </Link>
              </li>
              <li>
                <Link href="kontakt">
                  <a title="Kontakt">Kontakt</a>
                </Link>
              </li>
            </ul>
            <button type="button" className="animate__animated animate__backInDown rounded-button header-button" onClick={showModal}>Informacije za Vaš grad</button>
            <div className="header-select-wrapper">
              <div>
                <img className="header-icon-image" src="/images/user.svg" alt="User" />
              </div>
              <Select
                placeholder='Moj nalog'
                bordered={false}
                style={{ width: 120, border: 'none' }}
                onChange={handleChangeMyProfile}
              >
                <Option value='Moj profil'>
                  <Link href='/moj-profil'>
                    <a className='header-select-option'
                       style={{ textDecoration: 'none', color: '#D3A69A' }}>
                      Moj profil
                    </a>
                  </Link>
                </Option>
                <Option value='Narudžbine'>
                  <Link href='/narudzbine'>
                    <a className='header-select-option'
                       style={{ textDecoration: 'none', color: '#D3A69A' }}>
                      Narudžbine
                    </a>
                  </Link>
                </Option>
                <Option value='Fakture'>
                  <Link href='/fakture'>
                    <a className='header-select-option'
                       style={{ textDecoration: 'none', color: '#D3A69A' }}>
                      Fakture
                    </a>
                  </Link>
                </Option>
                <Option value='Povrat'>
                  <Link href='/povrat'>
                    <a className='header-select-option'
                       style={{ textDecoration: 'none', color: '#D3A69A' }}>
                      Povrat
                    </a>
                  </Link>
                </Option>
                <Option value='Izloguj se'>
                  <span className='header-select-option' onClick={handleLogout}>Izloguj se</span>
                </Option>
              </Select>
              <div>
                <a href='/cart' style={{ textDecoration: 'none', color: '#D3A69A' }}>
                  {basket.items?.length || 0}&nbsp;
                  <img className="shopping-cart" src="/images/shopping-cart.svg" alt="Shopping cart"
                          />
                  {/*<span>⅀&nbsp;&nbsp;{basket.total || 0}&nbsp;RSD</span>*/}
                </a>
              </div>
            </div>
          </div>
          <div className="menu-bar">
            <div className="dropbtn" onClick={navToggle}>
              <i className={open ? "fas fa-times" : "fa fa-bars"} aria-hidden="true"/>
            </div>
          </div>
        </div>
        <div className={open ? 'dropdown-content is-active' : 'dropdown-content'}>
          <div className="left-green-semicircle"/>
          <ul className="nav-mobile">
            <li>
              <Link href="/">
                <a title="Početna">Početna</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a title="O nama">O nama</a>
              </Link>
            </li>
            <li>
              <Link href="/cizkejkovi">
                <a title="Čizkejkovi">Čizkejkovi</a>
              </Link>
            </li>
            <li>
              <Link href="/kontakt">
                <a title="Kontakt">Kontakt</a>
              </Link>
            </li>
          </ul>
          <button type="button" className="rounded-button header-button-mobile">SKINI APLIKACIJU
          </button>
          <div className="right-orange-semicircle"/>
        </div>
      </div>
      {/* </div> */}
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Infomojgrad
        visible={props.visible}
        data={props.data}
      >
      </Infomojgrad>
    </header>
  );
};
export default Header;
// import React from 'react';
// import Cookies from 'universal-cookie';
// import Router from 'next/router';
// import { useAppContext } from '../context/AppContext';
// const cookies = new Cookies();
// export const Header = (props) => {
//   const { basket } = useAppContext();
//   const handleLogout = () => {
//     cookies.remove('user', { path: '/' });
//     cookies.set('loggedIn', false, { path: '/' });
//     Router.push('/');
//   };
//   const userLogged = props.loggedIn;
//   return (
//     <header>
//       <div className='container'>
//         <div className='header-wrapper'>
//           <a href='/'>
//             <h1>UNIVERSAL Starter</h1>
//           </a>
//           <div className='right-section'>
//             <a href='/cart'>
//               <span>Cart: {basket.items?.length || 0}</span>
//               <span>⅀&nbsp;&nbsp;{basket.total || 0}&nbsp;RSD</span>
//             </a>
//             {userLogged ? (
//               <div>
//                 <span className='my-account-nav'>My account</span>
//                 <button style={{ margin: '0 10px 0 15px' }} onClick={handleLogout}>
//                   Logout
//                 </button>
//                 <div className='dropdown-my-account'>
//                   <ul>
//                     <li>
//                       <a href='/my-profile'>My profile</a>
//                     </li>
//                     <li>
//                       <a href='/my-orders'>My orders</a>
//                     </li>
//                     <li>
//                       <a href='/my-invoices'>My invoices</a>
//                     </li>
//                     <li>
//                       <a href='/my-refunds'>My refunds</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <a style={{ margin: '0 10px 0 15px' }} href='/sign-in'>
//                   Login
//                 </a>
//                 <a href='/sign-up'>Register</a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;