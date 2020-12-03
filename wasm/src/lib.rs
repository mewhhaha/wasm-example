extern crate wasm_bindgen;

use parse_display::{Display, FromStr};
use wasm_bindgen::prelude::*;

#[wasm_bindgen(js_name = "arrayTransferSingleTest")]
pub fn array_transfer_single_test(_array: Box<[f64]>) {}

#[wasm_bindgen(js_name = "arrayTransferDoubleTest")]
pub fn array_transfer_double_test(array: Box<[f64]>) -> Box<[f64]> {
    array
}

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
        .collect::<Vec<Vec<char>>>();

    let slope = (3, 1);
    count_trees_on_slope(&carta, slope)
}

#[wasm_bindgen(js_name = "advent3Part2")]
pub fn advent_3_part_2(input: String) -> u32 {
    let carta = input
        .lines()
        .map(|line| line.chars().collect())
        .collect::<Vec<Vec<char>>>();

    let slopes = vec![(1, 1), (3, 1), (5, 1), (7, 1), (1, 2)];

    slopes.into_iter().fold(1, |product, slope| {
        product * count_trees_on_slope(&carta, slope)
    })
}
