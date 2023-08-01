import React from "react";

const NavBar = () => {
  return (
    <>
      <nav
      style={{
        backgroundColor: "#ffecee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: 0,
            height: '6rem',
          }}
        >
          <li
            style={{
              margin: '0 1rem',
              fontWeight: 'bold',
              color: 'black',
              letterSpacing: '0.1rem',
              textTransform: 'uppercase',
              listStyle: 'none',
            }}
          >
            Me importas
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
