function getZodiac (str) {  
var pattern = /([0-9]+)\/([0-9]+)\/([0-9]+)/g;
var dateofbirth = pattern.exec(str);
var day = parseInt(dateofbirth[1]);
var month = parseInt(dateofbirth[2]);
  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    return 'Ma Kết';
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return 'Bảo Bình';
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return 'Song Ngư';
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return 'Bạch Dương';
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return 'Kim Ngưu';
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return 'Song Tử';
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return 'Cự Giải';
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return 'Sử Tử';
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return 'Xử Nữ';
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return 'Thiên Bình';
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return 'Thần Nông';
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return 'Nhân Mã';
  } 
  }
module.exports.getZodiac = getZodiac  