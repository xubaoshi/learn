(function(){

    var getChildrenTextContent = function (children){
        return children.map(function(node){
            return node.children ? getChildrenTextContent(node.children) : node.text
        }).join('')
    }

    Vue.component('anchored-heading',{
        render :function(createItem) {
            var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g,'-')
            .replace(/(^\-|\-$)/g,'')

            return createItem(
                'h' + this.level,
                [
                    createItem('a',{
                        attrs:{
                            name:headingId,
                            href:'#' + headingId
                        }
                    },this.$slots.default)
                ]
            )
        },
        props:{
            level:{
                type:Number,
                required:true
            }
        }
    })

    new Vue({
        el:'#app'
    })
})();