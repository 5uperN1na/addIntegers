function addTwoDigits(n: any): number {
    //create a variable that will turn integer into an array of characters
    let nums = n.toString().split ('');

    //parsing integers then adding the values and returning
    return nums.reduce((a: string, b: string) => {
        // return parseInt(a) + parseInt(b);

        return parseInt(nums[0]) + parseInt(nums[1]);
    });

}

console.log(addTwoDigits(29));