var cache = {}
function importAll(r) {
    r.keys().forEach(function(key){
            cache[r(key).name] = r(key)
        }
    );
}
importAll(require.context('./context/',true, /\.js$/))

module.exports = cache