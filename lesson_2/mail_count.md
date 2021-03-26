##### LS215 Computational Thinking and Problem Solving > String and Text Processing

---

## Mail Count

### Problem

The objective of this practice problem is to build a function that parses a string of email data. The function takes an argument that contains the data, parses it, then produces two basic statistics about the email:

* The number of email messages found in the string
* The date range of the email messages

The email messages string has the following characteristics:

The email messages string has the following characteristics:

- The string contains multiple email messages separated by the delimiter string `##||##`.
- Each email message has five parts. The delimiter string `#/#` separates the parts.
- The five parts are:
  - Sender
  - Subject
  - Date
  - Recipient
  - Body
- All five parts occur in the sequence shown above.

---

### Examples / Test Cases

Examples

You can work with this [sample data](https://dbdwvr6p7sskw.cloudfront.net/210/files/email_data_v2.js).  

The sample data file is a JavaScript program snippet that defines a variable named `emailData`. The value of `emailData` is the data you will use for this practice problem. To avoid editor issues (some editors have problems with very long lines), we recommend that you include this file in your HTML, with a `script` element prior to the `script` element that contains your code:  

```html
<script src="//dbdwvr6p7sskw.cloudfront.net/210/files/email_data_v2.js"></script>
<script>
  // your code here
</script>
```

See the [Preparations chapter](https://launchschool.com/books/javascript/read/preparations#runningjavascript) in the JavaScript book if you need a refresher on using JavaScript from a browser.  

You can download the file and host it locally if you wish.  

```javascript
function mailCount(emailData) {
  // ...
}

mailCount(emailData);

// console output

Count of Email: 5
Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
```

---

### Data Structure

**Input**

* A string representing a grouping of email messages.

**Output**

* Logs the total number of email messages to the console.
* Logs the date range of the email messages to the console.

---

### Algorithm

**Abstractions:**

* Split the input string into an array of different strings, each one representing an email message.
* Count the number of messages in the array.
* Extract the dates from the messages into an array, sort them from earliest to latest, and then extract the first and last dates in the array.
* Format the dates.
* Log the results to the console.

**Functions/Methods:**

* Use regex to split the messages on the `##||##` delimiter.
* Use the `match` method with the regex argument `/\b\d\d\-\d\d-\d\d\d\d\b/g` to extract all the dates from the input string to an array.
* Create a `formatDate` function.

**Implementation Steps:**

* Declare a `messageCount` variable and initialize it with the value returned from calling the `split('##||##')` method on the `emailData` and then the `length` property on the resulting array.
* Declare a `dates` variable and initialize it with the value returned from calling `match(/\b\d\d-\d\d-\d\d\d\d\b/g)` on the original input string, then call the `sort()` method.
* Declare an `earliestDate()` variable and intiailize it with the value retuned by `dates[0]`.
* Declare a `latestDate()` variable and initialize it with the value returned by `dates[dates.length - 1]`.
* Format the date.

---

### Code

```javascript
function mailCount(emailData) {
  let messageCount = emailData.split('##||##').length;
  let dates = emailData.match(/\b\d\d-\d\d-\d\d\d\d\b/g);

  let sortedDates = dates.sort(compareDates);


  let earliestDate = formatDate(sortedDates[0]);
  let latestDate = formatDate(sortedDates[sortedDates.length - 1]);

  console.log(`Count of Email: ${messageCount}`);
  console.log(`Date Range: ${earliestDate} - ${latestDate}`);
}

function compareDates(date1, date2) {
  let year1 = Number(date1.slice(6));
  let year2 = Number(date2.slice(6));
  let month1 = Number(date1.slice(0, 2));
  let month2 = Number(date2.slice(0, 2));
  let day1 = Number(date1.slice(3, 5));
  let day2 = Number(date2.slice(3, 5));

  if (year1 > year2) {
    return 1;
  } else if (year1 < year2) {
    return -1;
  } else if (month1 > month2) {
    return 1;
  } else if (month1 < month2) {
    return -1;
  } else if (day1 > day2) {
    return 1;
  } else if (day1 < day2) {
    return -1;
  } else {
    return 0;
  }
}

function formatDate(date) {
  let dateObject = new Date(date);
  return dateObject.toDateString();
}
```

---

### LS Solution

##### Logic and Structure

The text we provide can be a bit intimidating because of the large character count. The logic, however, is straightforward.  

Start by breaking the text into an array of email messages using the `##||##` delimiter.  

Next, break each email into its five parts using the `#/#` delimiter, then store the data in an `emails` object that uses each part as a property. You can now perform some list processing to determine the oldest and most recent dates.  

The email message count is easy to get: it's the length of the message array. Determining the date range might be more difficult. One approach is to sort the date values from lowest to highest; the first and last values of the sorted dates provide the date range. However, the challenge is sorting the data meaningfully. Just sorting the Strings may yield unexpected results.

##### Hint: Comparing Dates

We can convert each string date to a `Date` object and then sort the Date objects. To convert the strings to dates, you need to parse the string somehow. Our email messages contain dates in this format: `Date: 07-12-2016`. We need to extract the month, day, and year from this string, then use them to build a Date object.  

##### Solution

```javascript
function mailCount(emailData) {
  let emails = emailData.split('##||##');
  let count = emails.length;
  let emailDates = emails.map(email => email.split('#/#')[2]);
  
  console.log('Count of Email: ' + count);
  console.log('Date Range: ' + displayableDateRange(emailDates));
}

function displayableDateRange(dates) {
  let dateObjects = getDateObjects(dates);
  dateObjects.sort((a, b) => a.valueOf() - b.valueOf());
  return dateObjects[0].toDateString() + ' - ' + dateObjects[dateObjects.length - 1].toDateString();
}

function getDateObjects(dates) {
  return dates.map(date => {
    let dateElements = date.split(' ')[1].split('-');
    let month = parseInt(dateElements[0], 10) - 1;
    let day = parseInt(dateElements[1], 10);
    let year = parseInt(dateElements[2], 10);
    return new Date(year, month, day);
  });
}
```



