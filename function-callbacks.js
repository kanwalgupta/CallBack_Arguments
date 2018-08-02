// The second argument/parameter is expected to be a function

  function findWaldo(arr, found) {
    arr.forEach(function(item) {
      if (item === "Waldo") {
        found(arr.indexOf(item));
      }
    });
  }



function actionWhenFound(index) {
  console.log(`Waldo found at index ${index}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);