import Users from '../helpers/data/userData';

const userSelection = () => {
  Users.selectUsers().forEach((item) => {
    $('#user-options').append(`
      <div class="form-check" name ="radioselector">
        <input class="form-check-input" type="radio" name="character" id="${item.image}" value="${item.user}" checked>
        <img class="mr-3 rounded-circle" id="image" src="${item.image}"/></br>
        <label class="form-check-label" for="exampleRadios1">
         <b>${item.user}</b>
        </label>
        `);
  });
};

export default { userSelection };
