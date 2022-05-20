const {getPreviousNextIds} = require('../../lib/blog.ts')

test('得到前一页和后一页', () => {
    const { nextId, previousId } = getPreviousNextIds('02-install')
    expect(nextId).toEqual('03-md-example')
    expect(previousId).toEqual('01-first-post')
})