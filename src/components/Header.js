import React from 'react'

const Header = ({ toggleModal, nbOfContacts }) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3>Contact List ({nbOfContacts})</h3>
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-square'></i> Add New Contact
            </button>
        </div>
    </header>
  )
}

export default Header

// import React from "react";
// import HighlightIcon from '@mui/icons-material/Highlight';


// function Header() {
//   return (
//     <header>
//       <h1>
//         <HighlightIcon />
//         Contact List
//       </h1>
//     </header>
//   );
// }

// export default Header;