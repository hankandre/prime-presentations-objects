export const classes = `function Person() {
  this.setFullName = function () {
    return this.fullName = 
      this.firstName + 
      ' ' + 
      this.lastName;
  }
  
  this.getName = function() {
    return this.fullName;
  }
}

var hank = new MyNewPrototype();
hank.firstName = 'Hank';
hank.lastName = 'Andre'
hank.setFullName();
console.log(hank.getName());`;
