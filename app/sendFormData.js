function sendFormData(formData) {
  console.log("sendFormData func!")

  this.button.setAttribute("disabled", "disabled");
  for (let field of this.fields) {
    field.setAttribute("disabled", "disabled");
  }

  let response = fetch ("./send-mail.php", {
    method: 'POST',
    body: formData
  });

  if (response.ok) {
    let result = response.json();

    // снимает блокировку с полей и формы
    setTimeout(() => {
      this.button.removeAttribute("disabled");
      for (let field of this.fields) {
        field.removeAttribute("disabled", "disabled");
      }
    }, 1500)

    // очищает поля формы
    setTimeout(() => {
      Form.resetForm();
    }, 1500)

    // меняет текст на кнопке на Sent
    setTimeout(() => {
      this.button.innerHTML = `${result.message}`;
    }, 1500)

    // возвращает текст на кнопке
    setTimeout(() => {
      this.button.innerHTML = "Submit";
    }, 4500)
  } else {
    // снимает блокировку с полей и формы
    setTimeout(() => {
      this.button.removeAttribute("disabled");
      for (let field of this.fields) {
        field.removeAttribute("disabled", "disabled");
      }
    }, 1500)

    setTimeout(() => {
      this.formResponceBox.innerHTML = "Oops! Something went wrong. Try again.";
      this.formResponceBox.classList.add("active");
    }, 1500);

    setTimeout(() => {
      this.formResponceBox.innerHTML = "";
      this.formResponceBox.classList.add("active");
    }, 4500);
  }
}
