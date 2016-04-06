export const create = makeAction('CREATE')
export const edit = makeAction('EDIT')
export const update = makeAction('UPDATE')
export const deleteT = makeAction('DELETET')

function makeAction(type){
    return ({dispatch},...args) => dispatch(type,...args)
}
