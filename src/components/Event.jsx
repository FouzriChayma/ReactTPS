import React, { useState, useEffect } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

const Event = ({ data }) => {
  const [nbTickets, setNbTickets] = useState(data.nbTickets);
  const [nbParticipants, setNbParticipants] = useState(data.nbParticipants);
  const [message, setMessage] = useState('');
  const [liked, setLiked] = useState(false);

  const handleBooking = () => {
    if (nbTickets > 0) {
      setNbParticipants(nbParticipants + 1);
      setNbTickets(nbTickets - 1);
      setMessage('You have booked an event');
      buy(data.id);

      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  const fzetelLike = () => {
    setLiked(!liked);
  };

  return (
    <Card style={{ width: '18rem', marginBottom: '10px' }}>
      <Card.Img 
        variant="top" 
        src={`/images/${nbTickets === 0 ? 'sold_out.png' : data.img}`} 
        alt={data.name} 
        className="event-img" 
      />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>🎟 Price: ${data.price}</Card.Text>
        <Card.Text>🛒 Tickets Available: {nbTickets === 0 ? 'Sold Out' : nbTickets}</Card.Text>
        <Card.Text>👥 Participants: {nbParticipants}</Card.Text>
        <Button variant="primary" onClick={handleBooking} disabled={nbTickets === 0}>
          {nbTickets === 0 ? 'Sold Out' : 'Book an event'}
        </Button>
        <Button variant={liked ? 'danger' : 'secondary'} onClick={fzetelLike} className="mt-2">
          {liked ? 'Dislike' : 'Like'}
        </Button>
        {message && <Alert variant="success" className="mt-2">{message}</Alert>}
      </Card.Body>
    </Card>
  );
};

export default Event;
