// O(N) runtime
function foo(arr) {
    let sum = 0;
    let product = 1;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    console.log(sum + ', ', + product);
}

// O(N ^ 2) Runtime
function printPairs(arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] + ", " + arr[j]);
        }
    }
}

// O(N ^ 2) Runtime
function printUnorderedPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ', ' + arr[j]);
        }
    }
}

class Node {
    public int value;
    public Node left;
    public Node right;

    public int sum(Node node) {
        if (node is null) {
            return 0;
        }
        else {
            return sum(this.left.value) + this.value + sum(this.right.value);
        }
    }

}

let testArr = [1, 2, 3, 4, 5];
foo(testArr);
printPairs(testArr);
printUnorderedPairs(testArr);
