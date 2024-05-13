// AgentReviews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import agentReviewsData from './Reviewdata';
import './AgentReviews.css';

const AgentReviews = ({ match }) => {
  const [agentReviews, setAgentReviews] = useState([]);

  useEffect(() => {
    const fetchAgentReviews = async () => {
      const agentReviews = agentReviewsData.filter((review) => review.agent_id === parseInt(match.params.id, 10));
      setAgentReviews(agentReviews);
    };

    fetchAgentReviews();
  }, [match.params.id]);

  return (
    <div className='agent-reviews'>
      <h1 className='title'>Agent Reviews</h1>
      <ul className='review-list'>
        {agentReviews.map((review) => (
          <li key={review.id}>
            <p className="name">{review.name}</p>
            <p className="role">{review.role}</p>
            <p className="review-text">{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentReviews;

//use this when calling api pls
// useEffect(() => {
//     const fetchAgentReviews = async () => {
//       try {
//         const response = await axios.get(`/api/agent-reviews?agent_id=${match.params.id}`);
//         setAgentReviews(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchAgentReviews();
//   }, [match.params.id]);
// copy and paste this into the userEffect function there 
