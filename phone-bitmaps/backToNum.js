let nums = "0007264\n0997266\n0997268\n0997270\n0997272\n0997274"

nums = nums.split("\n");
nums = nums.map(num => parseInt(num));
console.log(nums);