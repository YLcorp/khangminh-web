import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu/MobileMenu";
import BrandName from "/public/images/brand-name.png";
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const { carts } = props;

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    href="/home"
                  >
                    <Image src={props.Logo} alt="logo" />
                    <Image
                      src={BrandName}
                      className="brand-name"
                      alt="brand-name"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/">
                        Trang chủ
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/about">
                        Giới thiệu
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/service">Dịch vụ</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/project">
                        Công trình
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/blog">
                        Tin tức
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/contact">
                        Liên hệ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <i
                          className={`fi ti-search ${
                            menuActive ? "ti-close" : "fi "
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="fi ti-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="mini-cart">
                    <button
                      className="cart-toggle-btn"
                      onClick={() => setcartState(!cartActive)}
                    >
                      {" "}
                      <i className="fi flaticon-shopping-cart"></i>{" "}
                      <span className="cart-count">{carts.length}</span>
                    </button>
                    <div
                      className={`mini-cart-content ${
                        cartActive ? "mini-cart-content-toggle" : ""
                      }`}
                    >
                      <button
                        className="mini-cart-close"
                        onClick={() => setcartState(!cartActive)}
                      >
                        <i className="ti-close"></i>
                      </button>
                      <div className="mini-cart-items">
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <div className="mini-cart-item clearfix" key={crt}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <img src={catItem.proImg} alt="icon" />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{catItem.title} </p>
                                <span className="mini-cart-item-price">
                                  ${catItem.price} x {catItem.qty}
                                </span>
                                <span className="mini-cart-item-quantity">
                                  <button
                                    onClick={() =>
                                      props.removeFromCart(catItem.id)
                                    }
                                    className="btn btn-sm btn-danger"
                                  >
                                    <i className="ti-close"></i>
                                  </button>{" "}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Subtotal: <span> ${totalPrice(carts)}</span>
                        </span>
                        <div className="mini-btn">
                          <Link href="/checkout" className="view-cart-btn s1">
                            Checkout
                          </Link>
                          <Link href="/cart" className="view-cart-btn">
                            View Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, { removeFromCart })(Header);
