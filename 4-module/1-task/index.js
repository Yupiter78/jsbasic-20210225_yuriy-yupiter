function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  friends.map(({firstName, lastName}) => `${firstName} ${lastName}`)
  .forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
  });

  return ul;
}
