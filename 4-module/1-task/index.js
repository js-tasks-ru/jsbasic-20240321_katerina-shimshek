function makeFriendsList(friends) {
  let list = document.createElement('ul');

  for (let friend of friends) {
    let li = document.createElement('li');

    li.textContent = `${friend.firstName} ${friend.lastName}`;
    list.appendChild(li);
  }

  return list;
}
