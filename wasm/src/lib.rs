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
#[display("{min}-{max} {letter}:{password}")]
struct PasswordLine {
    min: usize,
    max: usize,
    letter: char,
    password: String,
}

fn is_valid_password1(
    PasswordLine {
        min,
        max,
        letter,
        password,
    }: PasswordLine,
) -> bool {
    let mut sum = 0;
    password.chars().for_each(|c| {
        if c == letter {
            sum += 1;
        }
    });

    return sum >= min && sum <= max;
}

#[wasm_bindgen(js_name = "advent2Part1")]
pub fn two_first_advent(input: String) -> u32 {
    input.lines().fold(0, |sum, line| {
        let password_line = line.parse::<PasswordLine>().unwrap();
        sum + is_valid_password1(password_line) as u32
    })
}

fn is_valid_password2(
    PasswordLine {
        min,
        max,
        letter,
        password,
    }: PasswordLine,
) -> bool {
    let chars = password.chars().collect::<Vec<_>>();

    let first = chars[min];
    let second = chars[max];

    (first == letter || second == letter) && first != second
}

#[wasm_bindgen(js_name = "advent2Part2")]
pub fn two_second_advent(input: String) -> u32 {
    input.lines().fold(0, |sum, line| {
        let password_line = line.parse::<PasswordLine>().unwrap();
        sum + is_valid_password2(password_line) as u32
    })
}
