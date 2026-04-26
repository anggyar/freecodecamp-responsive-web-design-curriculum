function truncateString(string, number) {
  const stringLength = string.length;

  const truncated = string.slice(0, number);

  if (stringLength > number) {
    return truncated + "...";
  } else if (stringLength <= number) {
    return truncated;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length,
  ),
);
