interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  occupation: string;
  friends: number[];
}

export function ageSort(users: User[]): User[] {
  return users.sort((a, b) => (a.age < b.age ? -1 : a.age > b.age ? 1 : 0));
}

export function oddEvenSort(arr: number[]): number[] {
  return arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) {
      return -1;
    } else if (a % 2 === 0 && b % 2 === 1) {
      return 1;
    } else if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  });
}

export function validAnagrams(s: string, t: string): boolean {
  const [sArr, tArr] = [s.split(""), t.split("")];
  return sArr.sort().join("") === tArr.sort().join("");
}

export function reverseBaseSort(arr: number[]): number[] {
  return arr.sort((a, b) => {
    if (String(a).length > String(b).length) {
      return -1;
    } else if (String(a).length < String(b).length) {
      return 1;
    } else if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  });
}

export function frequencySort(arr) {
  // Your code here
}
