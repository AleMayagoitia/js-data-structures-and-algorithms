// Javascript .sort()

// it will by default sort on ascending order
// it has an optional param where you can pass a comparator function

// But the .sort() sorts alphabetically, so it won't work on numbers
// i.e. [2,1,12] will get sort to [1,12,2]
// because .sort() turns the values into strings befor comparing
// so you'll need to do [2,1,12].sort((a,b) => a - b)

// Use this when you need a quick way to sort comething without implementing it yourself.
// O(n log n)
