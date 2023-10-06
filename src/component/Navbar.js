import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList =['여성','남성','아동','SALE'];
  const navigate = useNavigate();
  const goToLogin=()=>{
    navigate('/login');
  }
const search=(e)=>{
  // console.log("key press");
  if(e.key === "Enter"){  //enter에 만 반응한다
    let keyword = e.target.value;  //input 안의 값을 불러온다
    navigate(`/?q=${keyword}`);    // 그 값으로 url을 바꿔 준다
  }
}
  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        {authenticate ? (
          <div onClick={()=>setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        ):(
          <div onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        )}       
      </div>
      <div className="nav-section">
        <Link to="/">
          <img width={80} src="/local.png" alt="가게이미지" />
        </Link>       
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu,index)=>(
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyPress={search} />
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;
