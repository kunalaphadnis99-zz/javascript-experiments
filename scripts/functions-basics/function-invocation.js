var func1 = function () {
    console.log("in referenced function");
};

var func2 = () => {
    console.log("in arrow function");
};

function func3() {
    console.log("in hoisted function");
}

func1();
func2();
func3();