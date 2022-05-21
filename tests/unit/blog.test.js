const {getPreviousNextIds, getMetaInfo} = require('../../lib/blog.ts')

test('通过id得到前一页和后一页', () => {
    const { nextId, previousId } = getPreviousNextIds('02-install')
    expect(nextId.id).toEqual('03-md-example')
    expect(previousId.id).toEqual('01-first-post')
})

test('测试边界情况，第一页的id的前一页为空', () => {
    const { nextId, previousId } = getPreviousNextIds('01-first-post')
    expect(nextId.id).toEqual('02-install')
    expect(previousId.id).toEqual('')
})


test('得到该id的metaInfo', () => {
    const { title, description } = getMetaInfo('02-install')
    expect(title).toEqual('How To Set Up NextPortfolio')
    expect(description).toEqual('A tutorial about building your website with Next-Portfolio')
})

test('空id的metaInfo也为空', () => {
    const { id, description } = getMetaInfo('')
    expect(id).toEqual('')
    expect(description).toEqual(undefined)
})