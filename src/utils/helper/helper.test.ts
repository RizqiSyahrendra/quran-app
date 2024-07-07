import { convertNumToArabic, parseChapterNumber, parseJuzNumber } from '@/utils/helper';

describe('utils/helper', () => {

  it('convertNumToArabic', () => {
    let one = convertNumToArabic('1');
    let seventeen = convertNumToArabic('17');
    let twenty = convertNumToArabic('20');

    expect(one).toEqual('١');
    expect(seventeen).toEqual('١٧');
    expect(twenty).toEqual('٢٠');
  });

  it('parseChapterNumber', () => {
    let one = parseChapterNumber('1');
    let seventeen = parseChapterNumber('17');
    let twenty = parseChapterNumber('20');

    expect(one).toEqual(1);
    expect(seventeen).toEqual(17);
    expect(twenty).toEqual(20);
  });

  it('parseJuzNumber', () => {
    let one = parseJuzNumber('1');
    let seventeen = parseJuzNumber('17');
    let minusOne = parseJuzNumber('-1');
    let zero = parseJuzNumber('0');
    let oneHundred = parseJuzNumber('100');

    expect(one).toEqual(1);
    expect(seventeen).toEqual(17);
    expect(minusOne).toEqual(1);
    expect(zero).toEqual(1);
    expect(oneHundred).toEqual(1);
  });

});