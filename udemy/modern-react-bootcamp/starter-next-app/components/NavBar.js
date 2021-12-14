import React from 'react';
import Link from 'next/link';

const styles = {
  display: 'flex',
  backgroundColor: 'grey',
  justifyContent: 'space-around',
  padding: '1rem',
};

export default function NavBar() {
  return (
    <nav style={styles}>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
    </nav>
  );
}
