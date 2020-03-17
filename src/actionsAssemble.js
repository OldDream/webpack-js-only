async function test () {
  console.log(await test1())
  console.log('test------> wait test1')
}

function test1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('test1')
    }, 1000);
  })
}

test()