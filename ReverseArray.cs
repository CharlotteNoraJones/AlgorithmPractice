static int[] reverseIntArr(int[] nums) {
    // Reverses the order of a array of ints
    for (int i = 0; i < nums.Length / 2; i++) {
        nums[i] = nums[i] + nums[nums.Length - i - 1];
        nums[nums.Length - i - 1] = nums[i] - nums[nums.Length - i - 1];
        nums[i] = nums[i] - nums[nums.Length - i - 1];
    }

    return nums;
}

int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9};
Console.WriteLine(string.Join(", ", reverseIntArr(nums)));
