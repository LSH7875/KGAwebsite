async function getUser(){
    try{
        const res = await axios.get('/')
        const user = res.data;
        console.log(user);
        
    } catch(err){

    }
}