const removeMessage = (e) => {
  const messageId = e.target.closest('li').id;
  $(`#${messageId}`).remove();
};

export default { removeMessage };
