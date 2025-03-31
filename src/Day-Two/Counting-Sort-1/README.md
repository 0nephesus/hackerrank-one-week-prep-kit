# Comparison Sorting and Counting Sort

## Comparison Sorting

Quicksort typically exhibits a running time of *O(n log n)*. A natural question arises: can we achieve even faster sorting? In general, it's not possible to surpass this time complexity when using comparison-based sorting algorithms.

Most sorting algorithms operate by comparing elements to determine their order. These are known as **comparison sorts**. A fundamental limitation of comparison sorts is that they cannot beat *O(n log n)* in the worst-case scenario. This limit arises because *n log n* represents the minimum number of comparisons required to ascertain the correct placement of each element within the sorted sequence. For a more in-depth understanding of this topic, refer to the [sorting algorithm notes (PDF)](link-to-pdf-if-available).

## Alternative Sorting: Counting Sort

An alternative sorting technique, known as **counting sort**, sidesteps the need for direct element comparisons. Instead, it leverages an auxiliary integer array. The indices of this array correspond to the range of values present in the input array. Each time a particular value appears in the input array, the counter at the corresponding index in the auxiliary array is incremented. After processing the entire input, we iterate through the auxiliary array. For every non-zero value at an index, we output the index value that many times.

## Example

Consider an input array where all values fall within the range [0, 3]. We initialize an auxiliary array of zeros with a size of 4: `[0, 0, 0, 0]`. Let's trace the counting process with the following example:

| i   | arr[i] | result      |
| --- | ------ | ----------- |
| 0   | 1      | [0, 1, 0, 0] |
| 1   | 1      | [0, 2, 0, 0] |
| 2   | 3      | [0, 2, 0, 1] |
| 3   | 2      | [0, 2, 1, 1] |
| 4   | 1      | [0, 3, 1, 1] |

In this example, the frequency array ends up as `[0, 3, 1, 1]`. These frequency values can reconstruct the original sorted array as: `[1, 1, 1, 2, 3]`.

**Note:** For the purpose of this exercise, you are always expected to return a frequency array with 100 elements, even if the range of values is smaller than 100. The above example only demonstrates the first 4 elements.

## Challenge

**Objective:**
Given a list of integers, compute and return the frequency of each value in an array of integers.

## Function Description

**`countingSort(arr)`**

*   **Parameters:**
    *   `arr[n]`: an array of integers
*   **Returns:**
    *   `int[100]`: a frequency array

## Input Format

1.  The first line contains a single integer, *n*, representing the number of elements in the array *arr*.
2.  Each subsequent line contains an integer *arr[i]* where *0 <= arr[i] < 100*.

## Constraints

*   *1 <= n <= 1000000*
*   *0 <= arr[i] < 100*

## Sample Input
```
100
63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33
```
## Sample Output
```
0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2
```
## Explanation

Each output value represents the number of times the index appeared in the input array *arr*.