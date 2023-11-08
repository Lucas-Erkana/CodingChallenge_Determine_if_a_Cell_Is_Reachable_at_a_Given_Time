# Determine if a Cell Is Reachable at a Given Time

## Problem Description
You are given four integers `sx`, `sy`, `fx`, `fy`, and a non-negative integer `t`.

In an infinite 2D grid, you start at the cell `(sx, sy)`. Each second, you must move to any of its adjacent cells.

Return `true` if you can reach cell `(fx, fy)` after exactly `t` seconds, or `false` otherwise.

A cell's adjacent cells are the 8 cells around it that share at least one corner with it. You can visit the same cell several times.


## Example 1:

![example1](https://github.com/Lucas-Erkana/CodingChallenge_Determine_if_a_Cell_Is_Reachable_at_a_Given_Time/assets/41428579/b20097cf-5389-4278-bcfa-87796952d0e3)


**Input:**
```
sx = 2, sy = 4, fx = 7, fy = 7, t = 6
```

**Output:**
```
true
```

**Explanation:**
Starting at cell (2, 4), we can reach cell (7, 7) in exactly 6 seconds by moving through the adjacent cells.

## Example 2:
![example2](https://github.com/Lucas-Erkana/CodingChallenge_Determine_if_a_Cell_Is_Reachable_at_a_Given_Time/assets/41428579/f644ad4e-611d-4489-a45a-b3318840f714)


**Input:**
```
sx = 3, sy = 1, fx = 7, fy = 3, t = 3
```

**Output:**
```
false
```

**Explanation:**
Starting at cell (3, 1), it takes at least 4 seconds to reach cell (7, 3) by moving through the adjacent cells. Hence, we cannot reach cell (7, 3) within the third second.

---

## Constraints

- `1 <= sx, sy, fx, fy <= 10^9`
- `0 <= t <= 10^9`

---
