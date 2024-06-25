function combineAndsum(...numbers){
    return new Promise((resolve,reject)=>{
        const numbersarray = [...numbers]
        const result = numbersarray.reduce((one,total)=>one+total,0)
        resolve({numbersarray,result})

        reject('something Wrong')
    })
}

combineAndsum(10,20,30,40,50).then((res)=>{console.log(res)}).catch(msg => console.log(msg))