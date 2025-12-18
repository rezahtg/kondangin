import axios from 'axios';

const timeout = 30000000;
const SECRET_KEY = '1n1adalah5ecretk3y';

export function APIService() {
  const getUserComments = (page) => {
    return new Promise((resolve, reject) => {
      axios('https://shalmakevin-wedding.herokuapp.com/comments/getComments', {
        method: 'post',
        data: { page },
        timeout,
      }).then(
        (result) => {
          resolve(result.data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  const addUserComments = (name, message) => {
    return new Promise((resolve, reject) => {
      axios('https://shalmakevin-wedding.herokuapp.com/comments/addComment', {
        method: 'post',
        data: { name, message },
        timeout,
      }).then(
        (result) => {
          resolve(result.data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  const getPaymentLink = (itemName, amount) => {
    console.log(itemName, amount);
    return new Promise((resolve, reject) => {
      axios('https://shalmakevin-wedding.herokuapp.com/pay', {
        method: 'post',
        data: { item_name: itemName, amount: parseInt(amount) },
        timeout,
      }).then(
        (result) => {
          resolve(result.data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  return { getUserComments, addUserComments, getPaymentLink };
}
