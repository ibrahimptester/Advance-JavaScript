/*
  
const myPromise = new Promise((resolve, reject) => {
  const success = false;
  if(success){ 
    resolve("Operation Success")
  }
  else{
    reject("Operation Failed")
  }
})

myPromise.then((message) => {
  console.log(message)
}
).catch((err) => {
  console.error(err)
}
) */
console.log("Promise has Started, Please wait.....")
const testPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve("Operation Successful!")
      }
      else {
        reject("Operation Failed!")
      }
    }, 3000)
  })
  
}
  

testPromise().then((message) => {
  console.log(message)
}
).catch((err) => {
  console.error(err)
}
).finally(() => {
  console.log("Promise Ended")
})

