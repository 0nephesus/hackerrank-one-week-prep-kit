# Diagonal Difference

## Problem Statement

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

## Example

Consider the following square matrix:
```
1 2 3
4 5 6
9 8 9
```
*   **Left-to-right diagonal:** `1 + 5 + 9 = 15`
*   **Right-to-left diagonal:** `3 + 5 + 9 = 17`
*   **Absolute difference:** `|15 - 17| = 2`

## Function Description

Complete the `diagonalDifference` function in the editor.

`diagonalDifference` has the following parameter(s):

*   `int arr[n][m]`: an array of integers

**Returns**

*   `int`: the absolute diagonal difference

## Input Format

The first line contains a single integer, `n`, the number of rows and columns in the square matrix `arr`.
Each of the next `n` lines describes a row, `arr[i]`, and consists of `n` space-separated integers `arr[i][j]`.

## Constraints

*   `-100 <= arr[i][j] <= 100`

## Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

## Sample Input
```
3
11 2 4
4 5 6
10 8 -12
```
## Sample Output
```
15
```
## Explanation

### Primary Diagonal

The primary diagonal is:
```
11
   5
     -12
```
Sum across the primary diagonal: `11 + 5 - 12 = 4`

### Secondary Diagonal

The secondary diagonal is:
```
    4
   5
10
```
Sum across the secondary diagonal: `4 + 5 + 10 = 19`

### Difference

Difference: `|4 - 19| = 15`

**Note:** `|x|` is the absolute value of `x`.