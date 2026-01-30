this.fromGlobalContext = 'fromGlobalContext';

const context = () => {
    
    function printThisFunction() {
        console.log(this);
        
    }

    const printThisArrowFunction = () => {
        console.log(this);
    }

    const foo = 'bar';

    return {
        printThisFunction,
        printThisArrowFunction,
        foo
    };

}