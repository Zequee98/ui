import axios from 'axios';

export const SEND_FORM = 'SEND_FORM';

export const sendContact = (contact) => {
  return {
    type: SEND_FORM,
    payload: axios.post('/api/contact/', contact)
      .then((json) => {
        return {
          report: json.data,
        };
      })
  };
};
