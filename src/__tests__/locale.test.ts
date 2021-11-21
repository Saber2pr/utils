import { locale } from '../'

describe('Locale', () => {
  it('i18n', () => {
    const strings = {
      zh: {
        ok: '确定',
        cancel: '取消',
      },
      en: {
        ok: 'Ok',
        cancel: 'Cancel',
      },
    }
    const i18n = locale.create(strings)
    expect(i18n.format('cancel')).toEqual(strings.zh.cancel)
    expect(i18n.format('ok')).toEqual(strings.zh.ok)
    i18n.setLocal('en')
    expect(i18n.format('cancel')).toEqual(strings.en.cancel)
    expect(i18n.format('ok')).toEqual(strings.en.ok)
    i18n.setLocal('zh')
    expect(i18n.format('cancel')).toEqual(strings.zh.cancel)
    expect(i18n.format('ok')).toEqual(strings.zh.ok)
  })
})
