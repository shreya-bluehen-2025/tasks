/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const values = [numbers[0], numbers[numbers.length - 1]];
    return numbers.length === 0 ? [] : values;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const values = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return values;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const value = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.substring(1) : amount
    );
    const money = value.map((new_amount: string): number =>
        isNaN(parseInt(new_amount)) ? 0 : parseInt(new_amount)
    );
    return money;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    const array = shout.map((loud: string): string =>
        loud[loud.length - 1] === "!" ? loud.toUpperCase() : loud
    );
    return array;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word: string): boolean => word.length < 4);
    const numbered = short.map((): number => 1);
    const short_nums = numbered.reduce(
        (current: number, num: number) => current + num,
        0
    );
    return short_nums;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colored = colors.every(
        (color: string): boolean =>
            color === "red" ||
            color === "blue" ||
            color === "green" ||
            color === ""
    );
    return colored;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const total = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const news = addends.join("+");
    return news === "" ? "0=0" : total.toString() + "=" + news;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const first = values.findIndex((value: number): boolean => value < 0);
    const total = values.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const before = values.slice(0, first);
    const before_neg = before.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const more = [...values];
    more.splice(first + 1, 0, before_neg);
    const push = [...values];
    push.push(total);
    return first !== -1 ? more : push;
}
