// users.test.js
const axios = require('axios');
const Users = require('../users');

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}, {name: 'Kumanan'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data.length).toBe(2));
});

test(‘Should throw the Error message if axios return an Error.’, async (done) => {
  const mockErrorMessage = ‘Something went wrong!’;
  axios.post = jest.fn().mockRejectedValue(Promise.reject(new Error(mockErrorMessage)));
  try {
    await request.handleStatusNotification();
  } catch (err) {
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(err.message).toBe(mockErrorMessage);
    done();
  }
});
});