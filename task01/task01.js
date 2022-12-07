function check() {
    let userSurname = $('#surname').val();
    let userName = $('#name').val();
    let userAge = $('#age').val();
    let userResidence = $('#residence').val();

    if (userSurname && userName && (userAge > 0 && userAge < 100) && userResidence) {
        $('#message').css('visibility', 'hidden');
        $('#AjaxGET').prop('disabled', false);
        $('#AjaxPOST').prop('disabled', false);
    } else {
        $('#message').css('visibility', 'visible');
        $('#AjaxGET').prop('disabled', true);
        $('#AjaxPOST').prop('disabled', true);
    }
}

function validateAge() {
    let userAge = $('#age');

    if (userAge.val() > 0 && userAge.val() < 100) {
        userAge.removeClass("error");
    } else {
        userAge.addClass("error");
        userAge.value = '';
        userAge.focus();
        console.log('Age should be from 1 to 100!');
    }
}

function sendDataByGetMethod() {
    let userData = {
        userSurname: $('#surname').val(),
        userName: $('#name').val(),
        userAge: $('#age').val(),
        userResidence: $('#residence').val()
    };

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: "/userGet?Surname=" + userData.userSurname +
            '&Name=' + userData.userName + '&Age=' + userData.userAge +
            '&Residence=' + userData.userResidence,
        success: function (data) {
            alert('Ajax GET method is completed successfully'),
            console.log(JSON.stringify(data));
        }
    });
}

function sendDataByPostMethod() {
    let userData = {
        userSurname: $('#surname').val(),
        userName: $('#name').val(),
        userAge: $('#age').val(),
        userResidence: $('#residence').val()
    };

    $.ajax({
        type: 'POST',
        data: JSON.stringify(userData),
        contentType: 'application/json',
        url: '/userPost',
        success: function (data) {
            alert('Ajax POST method is completed successfully'),
            console.log(JSON.stringify(data));
        }
    });
}

function clearFields() {
    $('#surname').val('');
    $('#name').val('');
    $('#age').val('');
    $('#residence').val('');
    check();
}

$(document).ready(function () {
    $('#surname').keyup(check);
    $('#name').keyup(check);
    $('#age').keyup(check);
    $('#age').blur(validateAge);
    $('#residence').keyup(check);

    $('#AjaxGET').click(sendDataByGetMethod);
    $('#AjaxPOST').click(sendDataByPostMethod);
    $('#clearFields').click(clearFields);
});