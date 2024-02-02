export class ShoppingUser {
    username: string = '';
    email: string = '';
    password: string = '';
    firstName: string = '';
    lastName: string = '';
    gender: string = '';
    isMale: boolean = false;
    isFemale: boolean = false;
    address: string = '';
    phoneNumber: string = '';
  
    constructor(
      username: string = '',
      email: string = '',
      password: string = '',
      firstName: string = '',
      lastName: string = '',
      gender: string = '',
      isMale: boolean = false,
      isFemale: boolean = false,
      address: string = '',
      phoneNumber: string = ''
    ) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.isMale = isMale;
      this.isFemale = isFemale;
      this.address = address;
      this.phoneNumber = phoneNumber;
    }
  }
  