---
title: Advent Of Code 2023 - Solving Puzzles in Rust
date: 2023-12-01
tags:
  - rust
layout: single
draft: false
---
![Cover](AAA_Meta/attachments/aoc2023/cover.png)


Welcome to [Advent of Code 2023](https://adventofcode.com/)! This event is designed by Eric Wastl, packed with daily coding challenges that put your problem-solving skills to the test.

## What is Advent of Code?

Advent of Code is an Advent calendar of small programming puzzles suitable for various skill sets and levels. These puzzles can be solved in any programming language of your choice, making it an ideal platform for enthusiasts learning new languages!

I'll be documenting my solutions using Rust. Each day, I'll try to get the next two stars and share my approach, code snippets, and explanations in detail. Feel free to follow along and explore the solutions on my [GitHub repository for Advent Of Code 2023](https://github.com/daviddiener/AdventOfCode2023). Dive in, explore the code, and feel free to suggest improvements or alternative approaches.

Happy coding! 🎄✨

## Days of the Challenge
<ul>
<li><a href="https://adventofcode.com/2023/day/1">AOC Day 01 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_01.rs">My solution in GitHub for day 01</a></li>
<li><a href="https://adventofcode.com/2023/day/2">AOC Day 02 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_02.rs">My solution in GitHub for day 02</a></li>
<li><a href="https://adventofcode.com/2023/day/3">AOC Day 03 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_03.rs">My solution in GitHub for day 03</a></li>
<li><a href="https://adventofcode.com/2023/day/4">AOC Day 04 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_04.rs">My solution in GitHub for day 04</a></li>
<li><a href="https://adventofcode.com/2023/day/5">AOC Day 05 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_05.rs">My solution in GitHub for day 05</a></li>
<li><a href="https://adventofcode.com/2023/day/6">AOC Day 06 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_06.rs">My solution in GitHub for day 06</a></li>
<li><a href="https://adventofcode.com/2023/day/7">AOC Day 07 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_07.rs">My solution in GitHub for day 07</a></li>
<li><a href="https://adventofcode.com/2023/day/8">AOC Day 08 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_08.rs">My solution in GitHub for day 08</a></li>
<li><a href="https://adventofcode.com/2023/day/9">AOC Day 09 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_09.rs">My solution in GitHub for day 09</a></li>
<li><a href="https://adventofcode.com/2023/day/10">AOC Day 10 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_10.rs">My solution in GitHub for day 10</a></li>
<li><a href="https://adventofcode.com/2023/day/11">AOC Day 11 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_11.rs">My solution in GitHub for day 11</a></li>
<li><a href="https://adventofcode.com/2023/day/12">AOC Day 12 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_12.rs">My solution in GitHub for day 12</a></li>
<li><a href="https://adventofcode.com/2023/day/13">AOC Day 13 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_13.rs">My solution in GitHub for day 13</a></li>
<li><a href="https://adventofcode.com/2023/day/14">AOC Day 14 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_14.rs">My solution in GitHub for day 14</a></li>
<li><a href="https://adventofcode.com/2023/day/15">AOC Day 15 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_15.rs">My solution in GitHub for day 15</a></li>
<li><a href="https://adventofcode.com/2023/day/16">AOC Day 16 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_16.rs">My solution in GitHub for day 16</a></li>
<li><a href="https://adventofcode.com/2023/day/17">AOC Day 17 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_17.rs">My solution in GitHub for day 17</a></li>
<li><a href="https://adventofcode.com/2023/day/18">AOC Day 18 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_18.rs">My solution in GitHub for day 18</a></li>
<li><a href="https://adventofcode.com/2023/day/19">AOC Day 19 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_19.rs">My solution in GitHub for day 19</a></li>
<li><a href="https://adventofcode.com/2023/day/20">AOC Day 20 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_20.rs">My solution in GitHub for day 20</a></li>
<li><a href="https://adventofcode.com/2023/day/21">AOC Day 21 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_21.rs">My solution in GitHub for day 21</a></li>
<li><a href="https://adventofcode.com/2023/day/22">AOC Day 22 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_22.rs">My solution in GitHub for day 22</a></li>
<li><a href="https://adventofcode.com/2023/day/23">AOC Day 23 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_23.rs">My solution in GitHub for day 23</a></li>
<li><a href="https://adventofcode.com/2023/day/24">AOC Day 24 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_24.rs">My solution in GitHub for day 24</a></li>
<li><a href="https://adventofcode.com/2023/day/25">AOC Day 25 task description</a> | <a href="https://github.com/daviddiener/AdventOfCode2023/blob/master/src/days/day_25.rs">My solution in GitHub for day 25</a></li>
</ul>

