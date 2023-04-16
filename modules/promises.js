let isAfter6AM = true
let haveSoap = true
let haveClothes = true

const wakeUp = () => {
  return new Promise((resolve, reject) => {
    if (isAfter6AM) {
      setTimeout(() => {
        resolve("I am awake!")
      }, 2000)
    } else {
      reject("Waking Failure: I am snoozing!")
    }
  })
}

const takeShower = (awakeStatus) => {
  console.log(awakeStatus)
  return new Promise((resolve, reject) => {
    if (haveSoap) {
      setTimeout(() => {
        resolve("I am clean!")
      }, 5000)
    } else {
      reject("Shower Failure: I smell badly!")
    }
  })
}

const getDressed = (cleanStatus) => {
  console.log(cleanStatus)
  return new Promise((resolve, reject) => {
    if (haveClothes) {
      setTimeout(() => {
        resolve("I am dressed!")
      }, 3000)
    } else {
      reject("Dressing Failure: Clothes are dirty!")
    }
  })
}
