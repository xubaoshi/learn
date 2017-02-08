require('./bar')()

require.ensure([], function (require) {
    require('./foo')()
})