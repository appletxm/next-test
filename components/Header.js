import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

// const class Header {
//   render() {
//     return (
//       <div>
//         <Link href="/">
//           <a style={linkStyle}>Home</a>
//         </Link>
//         <Link href="/About">
//           <a style={linkStyle}>About</a>
//         </Link>
//         <Link href="/Help">
//           <a style={linkStyle}>Help</a>
//         </Link>
//       </div>
//     );
//   }
// }

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/About">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/Help">
      <a style={linkStyle}>Help</a>
    </Link>
  </div>
);

export default Header