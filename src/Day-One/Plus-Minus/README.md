# Plus-Minus Problem

## Description

Given an array of integers, this program calculates the ratios of its elements that are positive, negative, and zero. The decimal value of each fraction is printed on a new line, formatted to six decimal places.

**Note:** This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with an absolute error of up to 10<sup>-4</sup> are acceptable.

## Example

For an array with 5 elements, two positive, two negative, and one zero, the ratios are:

-   Positive: 2/5 = 0.4
-   Negative: 2/5 = 0.4
-   Zero: 1/5 = 0.2

The results are printed as:
```
0.400000
0.400000
0.200000
```
## Function Description

The `plusMinus` function is designed to solve this problem.

`plusMinus` has the following parameter(s):

-   `int arr[n]`: an array of integers

### Print

Print the ratios of positive, negative, and zero values in the array. Each value should be printed on a separate line with six digits after the decimal. The function should not return a value.

## Input Format

-   The first line contains an integer, `n`, the size of the array.
-   The second line contains `n` space-separated integers that describe `arr`.

## Constraints

-   0 < n < 100
- -100 <= arr[i] <= 100

## Output Format

Print the following three lines, each to six decimals:

-   proportion of positive values
-   proportion of negative values
-   proportion of zeros

## Sample Input
```
STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```
## Sample Output
```
0.500000
0.333333
0.166667
```
## Explanation

There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.

-   The proportions of occurrence are:
    -   positive: 3/6 = 0.500000
    -   negative: 2/6 = 0.333333
    -   zeros: 1/6 = 0.166667