// The second argument/parameter is expected to be a function

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }


function actionWhenFound(index) {
  console.log(`Waldo found at index ${index}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);