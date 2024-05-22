// Show Password
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');
  
    togglePasswordButton.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
    });
  });
  
  // Otomatis "@gmail.com"
  var emailInput = document.getElementById('email');
  
  emailInput.addEventListener('blur', function (event) {
    var inputValue = emailInput.value.trim();
  
    if (!inputValue.endsWith('@gmail.com')) {
      emailInput.value = inputValue + '@gmail.com';
    }
  });
  
  emailInput.addEventListener('focus', function (event) {
    var inputValue = emailInput.value.trim();
  
    if (inputValue.endsWith('@gmail.com')) {
      emailInput.value = inputValue.slice(0, -10);
    }
  });


// Validation Login
$(document).ready(function () {
  $('#loginForm').submit(function (event) {
    event.preventDefault();

    var email = $('#email').val();
    var password = $('#password').val();

    if (!email) {
      $('#requiredEmail').removeClass('d-none');
    } else {
      $('#requiredEmail').addClass('d-none');
    }
    if (!password) {
      $('#requiredPassword').removeClass('d-none');
    } else {
      $('#requiredPassword').addClass('d-none');
    }

    if (email === 'khikmal@gmail.com' && password === '12345') {
      $('#loginBerhasil').attr('data-bs-toggle', 'modal').attr('data-bs-target', '#loginBerhasil');
      $('#loginBerhasil').modal('show');
      setTimeout(function () {
        window.location.href = 'file:///D:/_Tugas%20Kuliah/WebFun/FORMATIF/assets/captcha.html';
      }, 3000);
    } else if (email !== '' && password !== '') {
      $('#loginGagal').attr('data-bs-toggle', 'modal').attr('data-bs-target', '#loginGagal');
      $('#loginGagal').modal('show');
    }
  });
});
$('[data-modal-hide]').click(function () {
  var modalId = $(this).data('modal-hide');
  $('#' + modalId).addClass('hidden');
  $('#bg-notification').addClass('hidden');
});
