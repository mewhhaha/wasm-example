#![feature(or_patterns)]
#![feature(str_split_once)]
#![feature(iterator_fold_self)]

extern crate wasm_bindgen;

use std::collections::HashSet;

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
        .fold(Option::None, |prev, line| {
            let set: HashSet<_> = line.chars().collect();
            Some(match prev {
                None => set,
                Some(existing) => set.intersection(&existing).cloned().collect(),
            })
        })
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
