import Users from '../helpers/data/messageData';

const userSelection = () => {
  Users.getMessages().forEach((item) => {
    $('#settings-container').append(`
      <div class="form-check">
        <input class="form-check-input" type="radio" name="character" id="${item.id}-radio" value="${item.user}" checked>
        <img class="mr-3 rounded-circle" src="${item.image}"/></br>
        <label class="form-check-label" for="exampleRadios1">
         <b>${item.user}</b>
        </label>
      `);
  });
};

export default { userSelection };
