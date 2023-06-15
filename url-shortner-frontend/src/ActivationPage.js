import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ActivationPage = () => {
  const { token } = useParams();

  useEffect(() => {
    const activateAccount = async () => {
      try {
        // Send activation token to the backend API
        await axios.get(`/api/activate/${token}`);

        // Display success message to the user
        alert('Account activated successfully');
      } catch (error) {
        // Display error message to the user
        alert('Activation failed');
      }
    };

    activateAccount();
  }, [token]);

  return <h1>Activating Account...</h1>;
};

export default ActivationPage;
