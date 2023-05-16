//Zadaca 1

for (let i=0; i<=20; i++) {
    let message;
    if (i % 2===0) {
        message = i + 'is even';
    } else {
        message = i + 'is odd';
    }
    console.log(message);
}

// Zadaca 2
function proverka(number) {
    if (number % 2 === 0) {
      console.log(number + ' is even');
    } else {
      console.log(number + ' is odd');
    }
  }
  
  proverka(4);
  proverka(7); 
  
//Zadaca 3
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let result = i * j;
      console.log(i + ' * ' + j + ' = ' + result);
    }
  }
//Zadaca 4
for (let score = 60; score <= 100; score++) {
    let grade;
    
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
    
    console.log('For ' + score + ', you got a ' + grade + '.');
  }  
  
//Zadaca 5
for (let i = 1; i <= 5; i++) {
    let line = '#'.repeat(i);
    console.log(line);
  }
  