import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function Footer(){
  return(
    <footer
    className="h-16 bg-gray-700 w-full bottom-0 flex items-center justify-center">
      <div className="justify-items-start p-3">
        <Button size="lg"
        className="container mx-auto flex justify-center py-3 px-3 my-6 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
        >
          View Ehren's Resume
        </Button>
      </div>

    </footer>
  );

}

export default Footer;
