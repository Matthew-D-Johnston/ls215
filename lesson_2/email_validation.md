##### LS215 Computational Thinking and Problem Solving > String and Text Processing

---

## Email Validation

### Problem

Implement a function that checks whether an email address is valid. An email address has two parts: A "local part" and a "domain part." An `@` sign separates the two parts: `local-part@domain-part`. The local part is the name of the mailbox; this is usually a username. The domain part is the domain name (e.g., gmail.com, yahoo.com.ph, or myCompanyName.com). The domain name contains a server name (sometimes called the mail server name) and a top-level domain (`.com`, `.ph`, etc.).  

For this practice problem, use the following criteria to determine whether an email address is valid:

* There must be one `@` sign.
* The local part must contain one or more letters (`A` - `Z`, `a` - `z`) and/or digits (`0` - `9`). It may not contain any other characters.
* The domain part must contain two or more components with a single dot (`.`) between each component. Each component must contain one or more letters (`A` - `Z`, `a` - `z`) only.  

To keep things simple, you don't need to check whether the domain part or top-level domain is "real" or "official".  

Note: don't use this criteria for real email validation logic in your programs. We are using greatly simplified criteria to let you concentrate on the fundamentals of JavaScript, and not on the specifics of email addresses.  

---

### Examples / Test Cases

```javascript
function isValidEmail(email) {
  // ...
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false
```

---

### Data Structure

**Input**

* A string representation of an email address.

**Output**

* A boolean value indicating whether or not the input string represents a valid email address.

---

### Algorithm

**Abstractions:**

* A regex should be used to identify whether or not we are dealing with a valid email address.
* We can use the `match` method with the regex to identify if the email address is valid.
* We return the value that is returned by a `Boolean` method call on our result from the `match` method.

---

### Code

```javascript
function isValidEmail(email) {
  let regex = /^[a-z0-9]+@[a-z]+(\.[a-z]+)+$/gi;
  return Boolean(email.match(regex));
}
```

---

### LS Solution

##### Logic and Structure

The logic is straightforward: you just have to check whether the email address matches a regex. You can use `String.prototype.match` or `RegExp.prototype.test`. Try to compose the regex yourself without peeking at the answer, but feel free to use the Regex book as an aid. You may also refer to the hint below.  

##### Hint: Breaking Down the Regex Pattern

One way to construct the regex, is to think about each of the three main components of the email address as separate patterns, then combine the patterns into one pattern that matches the entire address.

1. The local part contains letters and numbers. The `+` regex pattern may be useful here.
2. The `@` sign is just an `@` sign: you don't need anything fancy.
3. The domain part contains two or more components separated by dots (`.`); each component has one or more letters. You may need to use grouping parentheses for this.  

##### Solution

```javascript
function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}
```

##### Discussion

Here are the components of the regex we used:

1. The entire regex must match starting at the beginning: `^`
2. The local part has letters or numbers only: `[a-z0-9]+`
3. The `@` sign comes next: `@`
4. The email server name contains one or more components; each component contains letters followed by a single dot: `([a-z]+\.)+`. Notice the use of grouping parentheses here to treat both `[a-z]` and `\.` as a single pattern, and that we apply `+` to that pattern as a whole.
5. The top-level domain: `[a-z]+`
6. The entire regex must match up to the end: `$`
7. And finally, we apply the `i` modifier so that the regex is case-insensitive.



