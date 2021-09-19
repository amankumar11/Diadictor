$('button').click(function(){
    var s2 = $('input').val();
    window.open(`https://www.practo.com/search/doctors?results_type=doctor&q=%5B%7B%22word%22%3A%22diabetologist%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22subspeciality%22%7D%5D&city=${s2}`);
    return false;
});