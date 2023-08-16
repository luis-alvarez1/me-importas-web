import React from "react";

const Navinci = () => {
  return (
    <>
      <nav
      style={{
        backgroundColor: "#012161",
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
              color: 'white',
              letterSpacing: '0.1rem',
              textTransform: 'uppercase',
              listStyle: 'none',
            }}
            
          >
            Registrar: pendiente
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navinci;
