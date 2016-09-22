const Zodiac = require('../src/Zodiac')
var assert = require('assert');
describe('Zodiac', function() {
  describe('#getZodiac()', function() {
it('15/1/1990 - bạn thuộc cung Ma Kết', function() {
                assert.equal('Ma Kết', Zodiac.getZodiac('15/1/1990'))
    });
it('15/2/1990 - bạn thuộc cung Bảo Bình', function() {
                assert.equal('Bảo Bình', Zodiac.getZodiac('15/2/1990'))
    });
it('15/3/1991 - bạn thuộc cung Song Ngư', function() {
                assert.equal('Song Ngư', Zodiac.getZodiac('15/3/1991'))
    });
it('15/4/1991 - bạn thuộc cung Bạch Dương', function() {
                assert.equal('Bạch Dương', Zodiac.getZodiac('15/4/1991'))
    });
it('15/5/1992 - bạn thuộc cung Kim Ngưu', function() {
                assert.equal('Kim Ngưu', Zodiac.getZodiac('15/5/1992'))
    });
it('15/6/1992 - bạn thuộc cung Song Tử', function() {
                assert.equal('Song Tử', Zodiac.getZodiac('15/6/1992'))
    });
it('15/7/1993 - bạn thuộc cung Cự Giải', function() {
                assert.equal('Cự Giải', Zodiac.getZodiac('15/7/1993'))
    });
it('15/8/1993 - bạn thuộc cung Sử Tử', function() {
                assert.equal('Sử Tử', Zodiac.getZodiac('15/8/1993'))
    });
it('15/9/1994 - bạn thuộc cung Xử Nữ', function() {
                assert.equal('Xử Nữ', Zodiac.getZodiac('15/9/1994'))
    });
it('15/10/1994 - bạn thuộc cung Thiên Bình', function() {
                assert.equal('Thiên Bình', Zodiac.getZodiac('15/10/1994'))
    });
it('15/11/1995 - bạn thuộc cung Thần Nông', function() {
                assert.equal('Thần Nông', Zodiac.getZodiac('15/11/1995'))
    });
it('15/12/1996 - bạn thuộc cung Nhân Mã', function() {
                assert.equal('Nhân Mã', Zodiac.getZodiac('15/12/1996'))
    });
  });
});