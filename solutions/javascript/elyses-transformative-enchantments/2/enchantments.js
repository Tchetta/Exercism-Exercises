// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map(card => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  console.log(deck);
  const result = deck.reduce((accumulator, card) => {
    if (card === 3)
      accumulator.push(3, 3, 3);
    else
      accumulator.push(card);
    return accumulator;
  }, []);
  console.log(deck);
  return result;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param f 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.slice(4,6);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const mid = deck.length / 2 - 1;
  const middle = deck.slice(1, -1);
  const first = deck.slice(0, 1);
  const second = deck.splice(-1);

  const result = middle.splice(mid, 0, ...second, ...first);
  return middle;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter(card => card == 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  const sorted = deck.sort((a, b) => a - b);
  return sorted;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  const reversed = deck.reverse();
  return reversed;
}
