export default function define() {
    if(process.env.NODE_ENV == 'production'){
        console.log('process.env.NODE_ENV is production!')
    }else{
        console.log('process.env.NODE_ENV is development!')
    }
}