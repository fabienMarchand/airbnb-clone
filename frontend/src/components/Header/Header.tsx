import React from 'react';
import { HiOutlineMenu, HiOutlineGlobeAlt, HiSearch } from 'react-icons/hi';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/HolisBnb.png';

import { useSearchInput } from '../../context/SearchContext';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = () => {
  // const [searchInput, setSearchInput] = useState('');
  const { searchInput, setSearchInput, setIsValidateSearch } = useSearchInput();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleClick = (e: any) => {
    e.preventDefault();

    if (searchInput.length > 0) {
      setSearchInput(searchInput);
      setIsValidateSearch(true);
    } else {
      setSearchInput('');
      setIsValidateSearch(true);
      console.log('empty');
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="" />
        </Link>

        <div className="header__center">
          <input
            type="text"
            placeholder="Search a destination"
            value={searchInput}
            onChange={handleChange}
          />
          <div className="search-button">
            <HiSearch onClick={handleClick} />
          </div>
        </div>

        <div className="header__right">
          <p>Become a host</p>
          <HiOutlineGlobeAlt />
          <HiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
