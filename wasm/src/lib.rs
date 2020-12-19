#![feature(or_patterns)]
#![feature(str_split_once)]
#![feature(iterator_fold_self)]
#![feature(array_map)]

extern crate wasm_bindgen;

use std::{
    collections::{HashMap, HashSet},
    hash::Hash,
    ops::{Add, Mul},
};

use fxhash::{FxHashMap, FxHashSet};
use parse_display::{Display, FromStr};
use wasm_bindgen::prelude::*;

#[wasm_bindgen(js_name = "arrayTransferSingleTest")]
pub fn array_transfer_single_test(_array: Box<[f64]>) {}

#[wasm_bindgen(js_name = "arrayTransferDoubleTest")]
pub fn array_transfer_double_test(array: Box<[f64]>) -> Box<[f64]> {
    array
}

#[wasm_bindgen(js_name = "stringTransferSingleTest")]
pub fn string_transfer_single_test(_input: String) {}

#[wasm_bindgen(js_name = "arrayMapFilterTest")]
pub fn array_map_filter_test(array: Box<[f64]>) -> Box<[f64]> {
    array
        .into_iter()
        .filter_map(|x| {
            if x.sin() > 0.0 {
                Option::Some(*x)
            } else {
                Option::None
            }
        })
        .collect::<Vec<f64>>()
        .into_boxed_slice()
}

fn is_prime(primes: &Vec<u32>, x: u32) -> bool {
    for p in primes.iter() {
        if p * p > x {
            return true;
        }

        if x % p == 0 {
            return false;
        }
    }
    return true;
}

#[wasm_bindgen(js_name = "primesTest")]
pub fn primes_test(prime_n: u32) -> u32 {
    let mut primes: Vec<u32> = vec![2];

    let mut n = primes.len() as u32;
    let mut i = 3;
    while n != prime_n {
        if is_prime(&primes, i) {
            primes.push(i);
            n += 1;
        }

        i += 2;
    }

    *primes.last().unwrap()
}

#[wasm_bindgen(js_name = "arrayReduceTest")]
pub fn array_reduce_test(array: Box<[f64]>) -> f64 {
    array.into_iter().fold(0.0, |sum, x| sum + x)
}

#[wasm_bindgen(js_name = "advent1Part1")]
pub fn advent_1_part_1(array: Box<[u32]>) -> u32 {
    let year = 2020;
    for i in 0..array.len() {
        let x = array[i];
        for j in (i + 1)..array.len() {
            let y = array[j];
            if (x + y) == year {
                return x * y;
            }
        }
    }

    1
}

#[wasm_bindgen(js_name = "advent1Part2")]
pub fn advent_1_part_2(array: Box<[u32]>) -> u32 {
    let year = 2020;
    for i in 0..array.len() {
        let x = array[i];
        for j in (i + 1)..array.len() {
            let y = array[j];
            for k in (j + 1)..array.len() {
                let z = array[k];

                if (x + y + z) == year {
                    return x * y * z;
                }
            }
        }
    }

    1
}

#[derive(Display, FromStr)]
#[display("{low}-{high} {letter}:{password}")]
struct PasswordLine {
    low: usize,
    high: usize,
    letter: char,
    password: String,
}

fn is_valid_password1(
    PasswordLine {
        low,
        high,
        letter,
        password,
    }: PasswordLine,
) -> bool {
    let n = password.chars().filter(|c| *c == letter).count();

    return n >= low && n <= high;
}

#[wasm_bindgen(js_name = "advent2Part1")]
pub fn advent_2_part_1(input: String) -> usize {
    input
        .lines()
        .filter(|line| {
            let password_line = line.parse::<PasswordLine>().expect("!");
            is_valid_password1(password_line)
        })
        .count()
}

fn is_valid_password2(
    PasswordLine {
        low,
        high,
        letter,
        password,
    }: PasswordLine,
) -> bool {
    let chars = password.chars().collect::<Vec<_>>();

    let first = chars[low];
    let second = chars[high];

    (first == letter || second == letter) && first != second
}

#[wasm_bindgen(js_name = "advent2Part2")]
pub fn advent_2_part_2(input: String) -> usize {
    input
        .lines()
        .filter(|line| {
            let password_line = line.parse::<PasswordLine>().expect("!");
            is_valid_password2(password_line)
        })
        .count()
}

fn count_trees_on_slope(carta: &Vec<Vec<char>>, slope: (usize, usize)) -> u32 {
    let height = carta.len();
    let width = carta[0].len();
    let mut coordinates = (0, 0);
    let mut trees = 0;
    while coordinates.1 < height {
        if carta[coordinates.1][coordinates.0 % width] == '#' {
            trees += 1
        }
        coordinates.0 += slope.0;
        coordinates.1 += slope.1;
    }

    trees
}

#[wasm_bindgen(js_name = "advent3Part1")]
pub fn advent_3_part_1(input: String) -> u32 {
    let carta = input
        .lines()
        .map(|line| line.chars().collect())
        .collect::<Vec<Vec<_>>>();

    let slope = (3, 1);
    count_trees_on_slope(&carta, slope)
}

#[wasm_bindgen(js_name = "advent3Part2")]
pub fn advent_3_part_2(input: String) -> u32 {
    let carta = input
        .lines()
        .map(|line| line.chars().collect())
        .collect::<Vec<Vec<_>>>();

    let slopes = vec![(1, 1), (3, 1), (5, 1), (7, 1), (1, 2)];

    slopes.into_iter().fold(1, |product, slope| {
        product * count_trees_on_slope(&carta, slope)
    })
}

fn has_required_passport_fields(passport: &&str) -> bool {
    let number_of_required_fields = 7;
    let number_of_fields = passport
        .split_whitespace()
        .filter(|item| match item.split_once(':') {
            Some(("byr" | "iyr" | "eyr" | "hgt" | "hcl" | "ecl" | "pid", _)) => true,
            _ => false,
        })
        .count();
    number_of_fields == number_of_required_fields
}

#[wasm_bindgen(js_name = "advent4Part1")]
pub fn advent_4_part_1(input: String) -> usize {
    let passports = input.split("\n\n");
    passports.filter(has_required_passport_fields).count()
}

fn valid_height(hgt: &str) -> bool {
    let (number, unit) = hgt.split_at(hgt.len() - 2);
    match (number.parse::<i32>(), unit) {
        (Ok(150..=193), "cm") => true,
        (Ok(59..=76), "in") => true,
        _ => false,
    }
}

fn valid_hair_color(hcl: &str) -> bool {
    let (hash, number) = hcl.split_at(1);

    match (hash, i32::from_str_radix(number, 16)) {
        ("#", Ok(_)) => hcl.len() == 7,
        _ => false,
    }
}

fn valid_eye_color(ecl: &str) -> bool {
    match ecl {
        "amb" | "blu" | "brn" | "gry" | "grn" | "hzl" | "oth" => true,
        _ => false,
    }
}

fn valid_pid(pid: &str) -> bool {
    match pid.parse::<i32>() {
        Ok(_) => pid.len() == 9,
        _ => false,
    }
}

fn is_valid_passport(passport: &&str) -> bool {
    let number_of_required_fields = 7;
    let number_of_valid_fields = passport
        .split_whitespace()
        .filter(|item| match item.split_once(':') {
            Some(("byr", value)) => match value.parse::<i32>() {
                Ok(1920..=2002) => true,
                _ => false,
            },
            Some(("iyr", value)) => match value.parse::<i32>() {
                Ok(2010..=2020) => true,
                _ => false,
            },
            Some(("eyr", value)) => match value.parse::<i32>() {
                Ok(2020..=2030) => true,
                _ => false,
            },
            Some(("hgt", value)) => valid_height(value),
            Some(("hcl", value)) => valid_hair_color(value),
            Some(("ecl", value)) => valid_eye_color(value),
            Some(("pid", value)) => valid_pid(value),
            _ => false,
        })
        .count();
    number_of_valid_fields == number_of_required_fields
}

#[wasm_bindgen(js_name = "advent4Part2")]
pub fn advent_4_part_2(input: String) -> usize {
    let passports = input.split("\n\n");
    passports.filter(is_valid_passport).count()
}

fn calculate_seat_id(binary_seat: u16) -> u16 {
    let row_mask = 0b1111111000;
    let column_mask = 0b0000000111;
    let row = (binary_seat & row_mask) >> 3;
    let column = binary_seat & column_mask;

    row * 8 + column
}

#[wasm_bindgen(js_name = "advent5Part1")]
pub fn advent_5_part_1(input: String) -> u16 {
    let boarding_passes = input.lines();
    boarding_passes
        .map(to_binary)
        .map(calculate_seat_id)
        .max()
        .expect("!")
}

fn to_binary(boarding_pass: &str) -> u16 {
    boarding_pass.chars().fold(0, |binary, c| {
        (binary << 1)
            + match c {
                'B' | 'R' => 1,
                _ => 0,
            }
    })
}

fn estimate_full_sum((min, max): (u16, u16)) -> u16 {
    let below = (min - 1) * min / 2;
    let range = max * (max + 1) / 2;

    range - below
}

#[wasm_bindgen(js_name = "advent5Part2")]
pub fn advent_5_part_2(input: String) -> u16 {
    let boarding_passes = input.lines();
    let mut range = (u16::MAX, 0);
    let missing_one_sum: u16 = boarding_passes
        .map(to_binary)
        .map(|binary| {
            let seat_id = calculate_seat_id(binary);
            range.0 = range.0.min(seat_id);
            range.1 = range.1.max(seat_id);
            seat_id
        })
        .sum();

    estimate_full_sum(range) - missing_one_sum
}

fn count_group(group: &str) -> usize {
    group
        .chars()
        .filter(|c| c.is_alphabetic())
        .collect::<HashSet<_>>()
        .len()
}

fn count_unanimous(group: &str) -> usize {
    group
        .lines()
        .map(|line| line.chars().collect::<HashSet<_>>())
        .fold_first(|a, b| &a & &b)
        .expect("!")
        .len()
}

#[wasm_bindgen(js_name = "advent6Part1")]
pub fn advent_6_part_1(input: String) -> usize {
    input.split("\n\n").map(count_group).sum()
}

#[wasm_bindgen(js_name = "advent6Part2")]
pub fn advent_6_part_2(input: String) -> usize {
    input.split("\n\n").map(count_unanimous).sum()
}

#[wasm_bindgen(js_name = "advent6Part2Bits")]
pub fn advent_6_part_2_bits(mut input: String) -> i32 {
    input.push('\n');

    let mut sum = 0_i32;
    let mut group = -1_i32;
    let mut person = 0_i32;

    input.bytes().fold(b'\n', |prev, b| {
        match (prev, b) {
            (b'\n', b'\n') => {
                sum += group.count_ones() as i32;
                group = -1;
                person = 0
            }
            (_, b'\n') => {
                group = match group {
                    -1 => person,
                    _ => group & person,
                };
                person = 0;
            }
            _ => person |= 1 << (b - b'a'),
        };
        b
    });
    sum
}

#[derive(FromStr, PartialEq)]
#[from_str(regex = "\\d+ (?P<0>\\w+ \\w+) .+")]
struct Name(String);

#[wasm_bindgen(js_name = "advent7Part1")]
pub fn advent_7_part_1(input: String) -> usize {
    let mut lookup: HashMap<String, Vec<&str>> = HashMap::new();

    input.lines().for_each(|line| {
        let (container, contains) = line.split_once(" bags contain ").expect("!");
        contains.split(", ").for_each(|bags| {
            if let Ok(Name(name)) = bags.parse::<Name>() {
                lookup
                    .entry(name)
                    .or_insert(Vec::with_capacity(8))
                    .push(container);
            }
        });
    });

    let mut todo = vec!["shiny gold"];
    let mut colors: HashSet<&str> = HashSet::with_capacity(lookup.len());

    while let Some(color) = todo.pop() {
        if let Some(parents) = lookup.get(color) {
            for parent in parents {
                if !colors.insert(parent) {
                    continue;
                }
                todo.push(parent);
            }
        };
    }

    colors.len()
}

#[derive(FromStr, PartialEq)]
#[from_str(regex = "(?P<n>\\d+) (?P<name>\\w+ \\w+) .+")]
struct Bags {
    n: u32,
    name: String,
}

fn traverse(tree: &HashMap<&str, Vec<Bags>>, node: &str) -> u32 {
    let mut sum = 1;
    if let Some(children) = tree.get(node) {
        for Bags { n, name } in children {
            sum += n * traverse(tree, name);
        }
    }

    sum
}

#[wasm_bindgen(js_name = "advent7Part2")]
pub fn advent_7_part_2(input: String) -> u32 {
    let lookup = input
        .lines()
        .map(|line| {
            let (container, contains) = line.split_once(" bags contain ").expect("!");

            let children: Vec<_> = contains
                .split(", ")
                .filter_map(|bags| bags.parse::<Bags>().ok())
                .collect();
            (container, children)
        })
        .collect();

    traverse(&lookup, "shiny gold") - 1
}

#[derive(FromStr, PartialEq, Clone)]
enum Op {
    #[from_str(regex = "acc \\+?(?P<0>(\\d+|(-\\d+)))")]
    Acc(i32),
    #[from_str(regex = "jmp \\+?(?P<0>(\\d+|(-\\d+)))")]
    Jmp(i32),
    #[from_str(regex = "nop \\+?(?P<0>(\\d+|(-\\d+)))")]
    Nop(i32),
}

enum Finish {
    Loop(i32),
    Exit(i32),
}

fn machine(mut code: Vec<Option<Op>>) -> Finish {
    let mut i: i32 = 0;
    let mut acc = 0;

    while let Some(op) = &code[i as usize] {
        let mv: i32 = match op {
            Op::Acc(x) => {
                acc += x;
                1
            }
            Op::Nop(_) => 1,
            Op::Jmp(n) => *n,
        };
        code[i as usize] = None;
        i += mv;
        if i as usize == code.len() {
            return Finish::Exit(acc);
        }
    }

    Finish::Loop(acc)
}

#[wasm_bindgen(js_name = "advent8Part1")]
pub fn advent_8_part_1(input: String) -> i32 {
    let code: Vec<Option<Op>> = input.lines().map(|line| line.parse::<Op>().ok()).collect();

    match machine(code) {
        Finish::Loop(res) => res,
        _ => panic!("Unexpected finish"),
    }
}

#[wasm_bindgen(js_name = "advent8Part2")]
pub fn advent_8_part_2(input: String) -> i32 {
    let code: Vec<Option<Op>> = input.lines().map(|line| line.parse::<Op>().ok()).collect();

    for i in 0..code.len() {
        let hack = match code[i] {
            Some(Op::Jmp(n)) => Some(Op::Nop(n)),
            Some(Op::Nop(n)) => Some(Op::Jmp(n)),
            _ => continue,
        };

        let mut code_copy = code.clone();
        code_copy[i] = hack;

        if let Finish::Exit(res) = machine(code_copy) {
            return res;
        }
    }

    panic!("Didn't quite work, did it?")
}

fn find_invalid_number(numbers: &Vec<u64>) -> u64 {
    let lookup = numbers.iter().collect::<HashSet<_>>();

    for (i, n) in numbers[25..].iter().enumerate() {
        if numbers[i..i + 25]
            .iter()
            .filter(|m| m < &n)
            .all(|m| !lookup.contains(&(n - m)))
        {
            return *n;
        }
    }

    panic!("You should've found the number by now!")
}

#[wasm_bindgen(js_name = "advent9Part1")]
pub fn advent_9_part_1(input: String) -> u64 {
    let numbers: Vec<u64> = input
        .lines()
        .map(|line| line.parse::<u64>().expect("!"))
        .collect();

    find_invalid_number(&numbers)
}

#[wasm_bindgen(js_name = "advent9Part2")]
pub fn advent_9_part_2(input: String) -> u64 {
    let numbers: Vec<u64> = input
        .lines()
        .map(|line| line.parse::<u64>().expect("!"))
        .collect();
    let invalid_number = find_invalid_number(&numbers);

    for i in 0..numbers.len() {
        let mut acc = 0;
        for j in i..numbers.len() {
            acc += numbers[j];

            if acc == invalid_number {
                let (minimum, maximum) = numbers[i..=j]
                    .into_iter()
                    .fold((u64::MAX, 0_u64), |(minimum, maximum), n| {
                        (minimum.min(*n), maximum.max(*n))
                    });

                return minimum + maximum;
            }
            if acc > invalid_number {
                break;
            }
        }
    }

    panic!("You should've found the range by now!")
}

#[wasm_bindgen(js_name = "advent10Part1")]
pub fn advent_10_part_1(input: String) -> u32 {
    let mut numbers: Vec<u32> = input
        .lines()
        .map(|line| line.parse::<u32>().expect("!"))
        .collect();

    numbers.push(0);
    numbers.sort();

    let mut one_diffs = 0;
    let mut three_diffs = 0;

    numbers
        .iter()
        .skip(1)
        .zip(numbers.iter())
        .for_each(|(x, y)| match x - y {
            1 => one_diffs += 1,
            3 => three_diffs += 1,
            _ => (),
        });

    one_diffs * (three_diffs + 1)
}

fn count_possibilities(i: usize, numbers: &Vec<u64>, memo: &mut Vec<Option<u64>>) -> u64 {
    match memo[i] {
        Some(computed) => computed,
        _ if i == numbers.len() - 1 => 1,
        _ => {
            let curr = &numbers[i];
            let mut acc = 0;
            for j in i + 1..numbers.len().min(i + 4) {
                let next = &numbers[j];
                println!("{} - {} - {}", next, curr, next - curr);
                if next - curr > 3 {
                    break;
                }
                acc += count_possibilities(j, numbers, memo);
            }

            memo[i] = Some(acc);
            acc
        }
    }
}

#[wasm_bindgen(js_name = "advent10Part2")]
pub fn advent_10_part_2(input: String) -> u64 {
    let mut numbers: Vec<u64> = input
        .lines()
        .map(|line| line.parse::<u64>().expect("!"))
        .collect();

    numbers.push(0);
    numbers.sort();

    let mut memo = vec![None; numbers.len()];

    count_possibilities(0, &numbers, &mut memo)
}

#[derive(Hash, Copy, Clone, PartialEq, Eq, Debug)]
enum Seat {
    Vacant,
    Occupied,
}

fn is_seat_occupied(seat: &Option<Seat>) -> bool {
    match seat {
        Some(Seat::Occupied) => true,
        _ => false,
    }
}

const KERNEL_2D: [(isize, isize); 8] = [
    (-1, -1),
    (-1, 0),
    (0, -1),
    (1, 1),
    (1, -1),
    (-1, 1),
    (1, 0),
    (0, 1),
];

fn num_adjacent_seats(width: usize, placements: &Vec<Option<Seat>>, i: usize) -> usize {
    KERNEL_2D
        .iter()
        .filter(|(oy, ox)| {
            let j = i as isize + oy * width as isize + ox;

            match (i % width) as isize + ox {
                x if x < 0 || x >= width as isize || j < 0 || j >= placements.len() as isize => {
                    false
                }
                _ => is_seat_occupied(&placements[j as usize]),
            }
        })
        .count()
}

fn num_seen_seats(width: usize, placements: &Vec<Option<Seat>>, i: usize) -> usize {
    KERNEL_2D
        .iter()
        .filter(|(oy, ox)| {
            let mut cy = *oy;
            let mut cx = *ox;
            loop {
                let j = i as isize + cy * width as isize + cx;

                match (i % width) as isize + cx {
                    x if x < 0
                        || x >= width as isize
                        || j < 0
                        || j >= placements.len() as isize =>
                    {
                        return false
                    }
                    _ => match &placements[j as usize] {
                        None => {
                            cy += oy;
                            cx += ox;
                        }
                        s => return is_seat_occupied(s),
                    },
                }
            }
        })
        .count()
}

fn stabilize_seat_generations<F>(input: String, tolerance: usize, look_at_seats: F) -> u32
where
    F: Fn(usize, &Vec<Option<Seat>>, usize) -> usize,
{
    let width = input.split_once('\n').map_or(0, |(f, _)| f.len());
    let mut placements: Vec<_> = input
        .chars()
        .filter_map(|c| match c {
            'L' => Some(Some(Seat::Vacant)),
            '.' => Some(None),
            _ => None,
        })
        .collect::<Vec<_>>();

    let mut buffer = placements.clone();
    let mut occupied_seats;

    loop {
        let mut changed = false;
        occupied_seats = 0;

        for (i, seat) in placements.iter().enumerate() {
            let num_occupied = look_at_seats(width, &placements, i);

            let updated = match seat {
                Some(Seat::Vacant) if num_occupied == 0 => Some(Seat::Occupied),
                Some(Seat::Occupied) if num_occupied >= tolerance => Some(Seat::Vacant),
                _ => *seat,
            };

            if let Some(Seat::Occupied) = updated {
                occupied_seats += 1;
            }

            if &updated != seat {
                changed = true;
            }

            buffer[i] = updated;
        }

        std::mem::swap(&mut placements, &mut buffer);

        if !changed {
            break;
        }
    }

    occupied_seats
}

#[wasm_bindgen(js_name = "advent11Part1")]
pub fn advent_11_part_1(input: String) -> u32 {
    stabilize_seat_generations(input, 4, num_adjacent_seats)
}

#[wasm_bindgen(js_name = "advent11Part2")]
pub fn advent_11_part_2(input: String) -> u32 {
    stabilize_seat_generations(input, 5, num_seen_seats)
}

#[derive(Copy, Clone)]
struct Point<A> {
    x: A,
    y: A,
}

impl<A: Add<Output = A>> Add for Point<A> {
    type Output = Self;

    fn add(self, other: Self) -> Self {
        Self {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

impl<A: Mul<Output = A>> Mul for Point<A> {
    type Output = Self;

    fn mul(self, other: Self) -> Self {
        Self {
            x: self.x * other.x,
            y: self.y * other.y,
        }
    }
}

impl<A: Mul<Output = A> + Copy> Mul<A> for Point<A> {
    type Output = Self;

    fn mul(self, other: A) -> Self {
        Self {
            x: self.x * other,
            y: self.y * other,
        }
    }
}

#[derive(FromStr, PartialEq, Clone)]
enum Ferry {
    #[display("N{0}")]
    North(i32),
    #[display("S{0}")]
    South(i32),
    #[display("E{0}")]
    East(i32),
    #[display("W{0}")]
    West(i32),
    #[display("L{0}")]
    Left(i32),
    #[display("R{0}")]
    Right(i32),
    #[display("F{0}")]
    Forward(i32),
}

fn modulo(dividend: i32, divisor: i32) -> i32 {
    (dividend % divisor + divisor) % divisor
}

fn manhattan(point: Point<i32>) -> u32 {
    (point.x.abs() + point.y.abs()) as u32
}

#[wasm_bindgen(js_name = "advent12Part1")]
pub fn advent_12_part_1(input: String) -> u32 {
    let instructions = input.lines().map(|line| line.parse::<Ferry>().expect("!"));

    let mut angle = 90;
    let mut position = Point { x: 0, y: 0 };

    instructions.for_each(|instruction| match instruction {
        Ferry::North(d) => {
            position.y += d;
        }
        Ferry::South(d) => {
            position.y -= d;
        }
        Ferry::East(d) => {
            position.x += d;
        }
        Ferry::West(d) => {
            position.x -= d;
        }
        Ferry::Left(d) => angle = modulo(angle - d, 360),
        Ferry::Right(d) => angle = modulo(angle + d, 360),
        Ferry::Forward(d) => match angle {
            0 => position.y += d,
            90 => position.x += d,
            180 => position.y -= d,
            270 => position.x -= d,
            _ => panic!("Non-aligned angle!"),
        },
    });

    manhattan(position)
}

fn swap<A: Copy>(point: &Point<A>) -> Point<A> {
    Point {
        x: point.y,
        y: point.x,
    }
}

fn turn_waypoint(waypoint: &mut Point<i32>, angle: i32) {
    let times = match angle.abs() {
        0 => 0,
        90 => 1,
        180 => 2,
        270 => 3,
        _ => panic!("Non-valid angle"),
    };

    let signs = if angle < 0 {
        Point { x: -1, y: 1 }
    } else {
        Point { x: 1, y: -1 }
    };

    for _ in 0..times {
        *waypoint = swap(waypoint) * signs;
    }
}

#[wasm_bindgen(js_name = "advent12Part2")]
pub fn advent_12_part_2(input: String) -> u32 {
    let instructions = input.lines().map(|line| line.parse::<Ferry>().expect("!"));

    let mut waypoint = Point { x: 10, y: 1 };
    let mut position = Point { x: 0, y: 0 };

    instructions.for_each(|instruction| match instruction {
        Ferry::North(d) => {
            waypoint.y += d;
        }
        Ferry::South(d) => {
            waypoint.y -= d;
        }
        Ferry::East(d) => {
            waypoint.x += d;
        }
        Ferry::West(d) => {
            waypoint.x -= d;
        }
        Ferry::Left(d) => turn_waypoint(&mut waypoint, -d),
        Ferry::Right(d) => turn_waypoint(&mut waypoint, d),
        Ferry::Forward(d) => {
            position = position + waypoint * d;
        }
    });

    manhattan(position)
}

#[wasm_bindgen(js_name = "advent13Part1")]
pub fn advent_13_part_1(input: String) -> u32 {
    let (departure, buses) = input
        .split_once('\n')
        .map(|(raw_departure, raw_schedule)| {
            let departure = raw_departure.parse::<u32>().expect("!");
            let buses = raw_schedule.split(',').filter_map(|c| {
                if c == "x" {
                    None
                } else {
                    Some(c.parse::<u32>().unwrap())
                }
            });
            (departure, buses)
        })
        .expect("!");

    let closest_departure = buses
        .map(|bus| {
            let wait_time = bus - (departure % bus);

            (bus, wait_time)
        })
        .min_by(|x, y| x.1.cmp(&y.1));

    match closest_departure {
        Some((bus, wait_time)) => bus * wait_time,
        None => panic!("There should've been a bus!"),
    }
}

#[wasm_bindgen(js_name = "advent13Part2")]
pub fn advent_13_part_2(input: String) -> u64 {
    let buses = input
        .split_once('\n')
        .map(|(_, raw_schedule)| {
            raw_schedule
                .split(',')
                .enumerate()
                .filter_map(|(offset, str)| str.parse::<u64>().ok().map(|bus| (offset, bus)))
        })
        .expect("!")
        .collect::<Vec<_>>();

    let (_, mut step_size) = buses[0];

    let mut timestamp = 0;

    for (offset, bus) in buses.iter().skip(1) {
        let remainder = (bus - (*offset as u64 % bus)) % bus;
        while timestamp % bus != remainder {
            timestamp += step_size;
        }

        step_size = bus * step_size;
    }

    timestamp
}

#[derive(FromStr, PartialEq)]
enum Init {
    #[display("mask = {0}")]
    Mask(String),
    #[display("mem[{0}] = {1}")]
    Mem(u64, u64),
}

struct BitMask {
    bitset: u64,
    bitwild: u64,
}

fn parse_bitmask(mask: String) -> BitMask {
    let mut bitset = 0;
    let mut bitwild = 0;
    for c in mask.chars() {
        bitset = bitset << 1;
        bitwild = bitwild << 1;
        match c {
            'X' => {
                bitwild = bitwild | 1;
            }
            '1' => {
                bitset = bitset | 1;
            }
            _ => (),
        }
    }

    BitMask { bitset, bitwild }
}

fn apply_bitmask_v1(value: u64, BitMask { bitset, bitwild }: &BitMask) -> u64 {
    bitset | (value & bitwild)
}

#[wasm_bindgen(js_name = "advent14Part1")]
pub fn advent_14_part_1(input: String) -> u64 {
    let mut mem: HashMap<u64, u64> = HashMap::new();
    let mut bitmask = BitMask {
        bitset: 0,
        bitwild: u64::MAX,
    };

    let instructions = input.lines().map(|line| line.parse::<Init>().expect("!"));

    for instruction in instructions {
        match instruction {
            Init::Mask(raw) => {
                bitmask = parse_bitmask(raw);
            }
            Init::Mem(address, value) => {
                let masked_value = apply_bitmask_v1(value, &bitmask);
                mem.insert(address, masked_value);
            }
        }
    }

    mem.values().sum()
}

fn combinations(vec: Vec<u64>) -> Vec<u64> {
    let mut values = vec![];

    for i in 0..vec.len() {
        let v = vec[i];
        for k in 0..values.len() {
            let w = values[k];
            values.push(v + w);
        }
        values.push(v);
    }

    values.sort();
    values.dedup();

    values
}

fn apply_bitmask_v2(
    address: u64,
    BitMask { bitset, bitwild }: &BitMask,
) -> impl Iterator<Item = u64> + '_ {
    let set_value = (bitset | address) & !bitwild;

    let mut numbers = vec![0];
    let mut position = 0;
    let mut bits = *bitwild;
    while bits != 0 {
        if bits & 1 == 1 {
            numbers.push(1 << position);
        }
        position += 1;
        bits = bits >> 1;
    }

    combinations(numbers)
        .into_iter()
        .map(move |n| n | set_value)
}

#[wasm_bindgen(js_name = "advent14Part2")]
pub fn advent_14_part_2(input: String) -> u64 {
    let mut mem = FxHashMap::<u64, u64>::default();
    let mut bitmask = BitMask {
        bitset: 0,
        bitwild: u64::MAX,
    };

    let instructions = input.lines().map(|line| line.parse::<Init>().expect("!"));

    for instruction in instructions {
        match instruction {
            Init::Mask(raw) => {
                bitmask = parse_bitmask(raw);
            }
            Init::Mem(address, value) => {
                let masked_addresses = apply_bitmask_v2(address, &bitmask);
                masked_addresses.for_each(|masked_address| {
                    mem.insert(masked_address, value);
                })
            }
        }
    }

    mem.values().sum()
}

fn play_numbers_game(input: String, until: usize) -> u32 {
    let mut memory: Vec<Option<usize>> = vec![None; until];
    let mut from = 1;

    input.split(',').enumerate().for_each(|(i, word)| {
        let n = word.parse::<usize>().expect("!");
        memory[n] = Some(i);
        from += 1;
    });

    let mut last_spoken = 0;

    for i in from..until {
        let spoken = match memory[last_spoken] {
            None => 0,
            Some(k) => (i - 1) - k,
        };

        memory[last_spoken] = Some(i - 1);
        last_spoken = spoken;
    }

    last_spoken as u32
}

#[wasm_bindgen(js_name = "advent15Part1")]
pub fn advent_15_part_1(input: String) -> u32 {
    play_numbers_game(input, 2020)
}

#[wasm_bindgen(js_name = "advent15Part2")]
pub fn advent_15_part_2(input: String) -> u32 {
    play_numbers_game(input, 30000000)
}

#[derive(Display, FromStr, PartialEq, Debug)]
#[display("{title}: {range_1.0}-{range_1.1} or {range_2.0}-{range_2.1}")]
struct TicketRule {
    title: String,
    #[from_str(default)]
    range_1: (usize, usize),
    #[from_str(default)]
    range_2: (usize, usize),
}

fn parse_ticket(text: &str) -> Vec<usize> {
    text.split(',')
        .map(|n| n.parse::<usize>().expect("!"))
        .collect::<Vec<_>>()
}

fn parse_ticket_translation(input: String) -> (Vec<TicketRule>, Vec<usize>, Vec<Vec<usize>>) {
    match input.split("\n\n").collect::<Vec<_>>()[..] {
        [rules_text, ticket_text, nearby_tickets_text] => (
            rules_text
                .lines()
                .map(|line| line.parse::<TicketRule>().expect(""))
                .collect::<Vec<_>>(),
            ticket_text
                .lines()
                .skip(1)
                .flat_map(parse_ticket)
                .collect::<Vec<_>>(),
            nearby_tickets_text
                .lines()
                .skip(1)
                .map(parse_ticket)
                .collect::<Vec<_>>(),
        ),
        _ => panic!("Faulty input!"),
    }
}

fn validate_number(
    TicketRule {
        range_1, range_2, ..
    }: &TicketRule,
    n: &usize,
) -> bool {
    (*n >= range_1.0 && *n <= range_1.1) || (*n >= range_2.0 && *n <= range_2.1)
}

fn make_valid_numbers_array(rules: &Vec<TicketRule>) -> Vec<bool> {
    let mut valid_numbers = vec![false; 1000];
    rules.iter().for_each(
        |TicketRule {
             range_1, range_2, ..
         }| {
            (range_1.0..=range_1.1).for_each(|n| {
                valid_numbers[n] = true;
            });
            (range_2.0..=range_2.1).for_each(|n| {
                valid_numbers[n] = true;
            });
        },
    );

    valid_numbers
}

#[wasm_bindgen(js_name = "advent16Part1")]
pub fn advent_16_part_1(input: String) -> usize {
    let (rules, _, nearby_tickets) = parse_ticket_translation(input);

    let valid_numbers = make_valid_numbers_array(&rules);

    nearby_tickets
        .into_iter()
        .flatten()
        .filter(|n| !valid_numbers[*n])
        .sum()
}

#[wasm_bindgen(js_name = "advent16Part2")]
pub fn advent_16_part_2(input: String) -> usize {
    let (rules, ticket, nearby_tickets) = parse_ticket_translation(input);
    let valid_numbers = make_valid_numbers_array(&rules);
    let valid_tickets = nearby_tickets
        .into_iter()
        .filter(|ns| ns.iter().all(|n| valid_numbers[*n]))
        .collect::<Vec<_>>();

    let mut candidates: Vec<Vec<usize>> = vec![vec![]; ticket.len()];

    for (i, ticket_rule) in rules.iter().enumerate() {
        for j in 0..valid_tickets[0].len() {
            if (0..valid_tickets.len()).all(|k| validate_number(ticket_rule, &valid_tickets[k][j]))
            {
                candidates[j].push(i);
            }
        }
    }

    let mut product = 1;
    let mut eliminated: Vec<bool> = vec![false; ticket.len()];
    let mut elimination_order: Vec<_> = candidates.into_iter().enumerate().collect();
    elimination_order.sort_by(|(_, a), (_, b)| a.len().cmp(&b.len()));

    for (i, rs) in elimination_order {
        for r in rs {
            if !eliminated[r] {
                eliminated[r] = true;
                let TicketRule { title, .. } = &rules[r];
                if title.starts_with("de") {
                    product *= ticket[i];
                }
                break;
            }
        }
    }

    product
}

fn make_n_kernel(n: usize) -> Vec<Vec<i8>> {
    if n == 1 {
        return vec![vec![-1], vec![0], vec![1]];
    }

    let mut kernel = vec![];
    let smaller_kernel = make_n_kernel(n - 1);
    for i in -1..=1 {
        smaller_kernel.iter().for_each(|vs| {
            let mut with = vs.to_vec();
            with.push(i);
            kernel.push(with);
        })
    }

    kernel
}

fn neighbours_kernel(pos: &Vec<i8>, kernel: &Vec<Vec<i8>>) -> Vec<Vec<i8>> {
    kernel
        .iter()
        .map(|offset| pos.iter().zip(offset.iter()).map(|(a, b)| a + b).collect())
        .collect()
}

fn cube_game_n(dimensions: usize, input: String) -> usize {
    let kernel: Vec<Vec<i8>> = make_n_kernel(dimensions)
        .into_iter()
        .filter(|pos| *pos != vec![0; dimensions])
        .collect();

    let mut cubes: FxHashSet<Vec<i8>> = input
        .lines()
        .enumerate()
        .flat_map(|(y, line)| {
            line.chars().enumerate().filter_map(move |(x, c)| match c {
                '#' => {
                    let mut pos = vec![0; dimensions];
                    pos[0] = x as i8;
                    pos[1] = y as i8;
                    Some(pos)
                }
                _ => None,
            })
        })
        .collect();

    for _ in 0..6 {
        let mut counts: FxHashMap<Vec<i8>, u8> = FxHashMap::default();

        for active in cubes.iter() {
            counts.entry(active.to_vec()).or_insert(0);

            let candidates = neighbours_kernel(active, &kernel);

            candidates.into_iter().for_each(|pos| {
                counts
                    .entry(pos)
                    .and_modify(|i| {
                        *i += 1;
                    })
                    .or_insert(1);
            });
        }

        cubes = counts
            .into_iter()
            .filter_map(|(pos, count)| match (cubes.contains(&pos), count) {
                (true, 2..=3) => Some(pos),
                (true, _) => None,
                (false, 3) => Some(pos),
                _ => None,
            })
            .collect();
    }

    cubes.len()
}

#[wasm_bindgen(js_name = "advent17Part1")]
pub fn advent_17_part_1(input: String) -> usize {
    cube_game_n(3, input)
}

#[wasm_bindgen(js_name = "advent17Part2")]
pub fn advent_17_part_2(input: String) -> usize {
    cube_game_n(4, input)
}

#[derive(Debug, Clone, PartialEq)]
enum Exp {
    Constant(u64),
    Add,
    Mul,
    Par(Box<Vec<Exp>>),
}

fn parse_expression(mut tokens: &[char]) -> (&[char], Exp) {
    let mut result = Vec::new();
    loop {
        let (mut cont, e) = match tokens {
            ['+', rest @ ..] => (rest, Exp::Add),
            ['*', rest @ ..] => (rest, Exp::Mul),
            ['(', rest @ ..] => parse_expression(rest),
            [')', rest @ ..] => return (rest, Exp::Par(Box::new(result))),
            [a, rest @ ..] => {
                let n = a.to_digit(10).expect("Number");
                (rest, Exp::Constant(n as u64))
            }
            [] => return (&[], Exp::Par(Box::new(result))),
        };

        result.push(e);
        std::mem::swap(&mut tokens, &mut cont);
    }
}

fn eval_part_1(e: &Exp) -> u64 {
    match e {
        Exp::Constant(n) => *n,
        Exp::Par(es) => {
            let mut buffer = &es[1..];
            let mut result = eval_part_1(&es[0]);

            loop {
                let left = match buffer {
                    [op @ (Exp::Add | Exp::Mul), a, rest @ ..] => {
                        let n = eval_part_1(a);
                        result = match op {
                            Exp::Add => result + n,
                            _ => result * n,
                        };
                        rest
                    }
                    _ => return result,
                };

                buffer = left;
            }
        }
        _ => panic!("Expected constant or par"),
    }
}

fn eval_part_2<'a>(e: &Exp) -> u64 {
    match e {
        Exp::Constant(n) => *n,
        Exp::Par(es) => {
            let mut buffer = es.to_vec();
            let mut remaining = vec![buffer[0].clone()];
            let mut tokens = &buffer[1..];
            let mut precedence = Exp::Add;

            loop {
                match tokens {
                    [op, b, rest @ ..] if *op == precedence => {
                        let n = eval_part_2(&remaining.pop().unwrap());
                        let m = eval_part_2(b);

                        let x = match op {
                            Exp::Add => n + m,
                            _ => n * m,
                        };
                        remaining.push(Exp::Constant(x));
                        tokens = rest;
                    }
                    [e, rest @ ..] => {
                        remaining.push(e.clone());
                        tokens = rest;
                    }
                    [] if remaining.len() == 1 => {
                        match remaining[0] {
                            Exp::Constant(n) => return n,
                            _ => panic!("Expected constant"),
                        };
                    }
                    [] => {
                        precedence = Exp::Mul;
                        buffer = remaining;
                        remaining = vec![buffer[0].clone()];
                        tokens = &buffer[1..];
                    }
                };
            }
        }
        _ => panic!("Expected constant or par"),
    }
}

#[wasm_bindgen(js_name = "advent18Part1")]
pub fn advent_18_part_1(input: String) -> u64 {
    input
        .lines()
        .map(|line| {
            let chars = &line
                .chars()
                .filter(|c| !c.is_whitespace())
                .collect::<Vec<_>>()[..];
            println!("HEJ");
            parse_expression(&chars).1
        })
        .map(|e| eval_part_1(&e))
        .sum()
}

#[wasm_bindgen(js_name = "advent18Part2")]
pub fn advent_18_part_2(input: String) -> u64 {
    input
        .lines()
        .map(|line| {
            let chars = &line
                .chars()
                .filter(|c| !c.is_whitespace())
                .collect::<Vec<_>>()[..];
            parse_expression(&chars).1
        })
        .map(|e| eval_part_2(&e))
        .sum()
}

#[test]
fn test_part_1() {
    let input = include_str!("./data.txt").to_string();
    let before = std::time::Instant::now();
    let result = advent_18_part_1(input);
    let after = before.elapsed();
    println!("{:?}", after.as_millis());
    assert_eq!(result, 75592527415659)
}

#[test]
fn test_part_2() {
    let input = include_str!("./data.txt").to_string();
    let before = std::time::Instant::now();
    let result = advent_18_part_2(input);
    let after = before.elapsed();
    println!("{:?}", after.as_millis());
    assert_eq!(result, 360029542265462)
}

#[wasm_bindgen(js_name = "advent19Part1")]
pub fn advent_19_part_1(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent19Part2")]
pub fn advent_19_part_2(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent20Part1")]
pub fn advent_20_part_1(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent20Part2")]
pub fn advent_20_part_2(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent21Part1")]
pub fn advent_21_part_1(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent21Part2")]
pub fn advent_21_part_2(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent22Part1")]
pub fn advent_22_part_1(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent22Part2")]
pub fn advent_22_part_2(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent23Part1")]
pub fn advent_23_part_1(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent23Part2")]
pub fn advent_23_part_2(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent24Part1")]
pub fn advent_24_part_1(input: String) -> u32 {
    println!("{}", input);
    1
}
#[wasm_bindgen(js_name = "advent24Part2")]
pub fn advent_24_part_2(input: String) -> u32 {
    println!("{}", input);
    1
}
