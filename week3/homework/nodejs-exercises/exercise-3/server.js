const axios = require('axios');

const data = {
  name: 'Name Surname',
  numberOfPeople: 12,
};

axios({
  method: 'post',
  url: 'https://reservation100-sandbox.mxapps.io/api/reservations',
  data,
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => console.log(response.data))
  .catch((error) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  });
