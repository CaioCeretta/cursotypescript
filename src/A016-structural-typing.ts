type User = { username: string; password: string };

type verifyUserFn = (user: User, sentValues: User) => boolean;

const verifyUser: verifyUserFn = (user, sentValues) => {
  return user.username === sentValues.username && user.password === sentValues.password;
};

const bdUser = { username: 'Caio', password: '123456' };
const sentUser = { username: 'Caio', password: '123456', permissions: '1' };
const loggedUser = verifyUser(bdUser, sentUser);

console.log(loggedUser);
