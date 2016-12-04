(function(){
    var getChildrenTextContent = function (children){

    }

    Vue.component('anchored-heading',{
        render :function(createItem) {
            var headingId = getChildrenTextContent(this.$slots.default)
        }
    })
})();