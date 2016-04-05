export const create = makeAction('CREATE')


function makeAction(type){
    return ({dispatch},...args) => dispatch(type,...args)
}