// import Model from './Model';
// import Collection from './Collection';
// import Major from './Major';
// import Gender from './Gender';
// import UserGrade from './UserGrade';
//
// class User extends Model {
//
//     constructor(user) {
//         super(user, [
//             {
//                 key: 'url_key',
//                 value: function () {
//                     return 'user';
//                 }
//             },
//             {key: 'id'},
//             {key: 'first_name',
//                 value: function (itemVal, inputData) {
//                     if (typeof inputData.first_name !== 'undefined' && inputData.first_name !== null) {
//                         return inputData.first_name;
//                     } else if (typeof inputData.firstName !== 'undefined' && inputData.firstName !== null) {
//                         return inputData.firstName;
//                     }
//                 }
//             },
//             {key: 'last_name',
//                 value: function (itemVal, inputData) {
//                     if (typeof inputData.last_name !== 'undefined' && inputData.last_name !== null) {
//                         return inputData.last_name;
//                     } else if (typeof inputData.lastName !== 'undefined' && inputData.lastName !== null) {
//                         return inputData.lastName;
//                     }
//                 }
//             },
//             {key: 'full_name'},
//             {key: 'mobile'},
//             {key: 'nationalCode'},
//             {key: 'email'},
//             {key: 'province'},
//             {key: 'city'},
//             {key: 'school'},
//             {key: 'address'},
//             {key: 'role'},
//             {key: 'photo'},
//             {key: 'completion', default: 0},
//
//             {key: 'created_at'},
//             {key: 'updated_at'},
//
//             {
//                 key: 'major',
//                 relatedModel: Major,
//             },
//             {
//                 key: 'grade',
//                 relatedModel: UserGrade,
//             },
//             {
//                 key: 'gender',
//                 relatedModel: Gender,
//             },
//         ]);
//
//         let that = this;
//         this.apiResource = {
//             fields: [
//                 {
//                     key: 'url_key',
//                     value: function () {
//                         return 'user';
//                     }
//                 },
//                 {key: 'id'},
//                 {
//                     key: 'firstName',
//                     value: function () {
//                         return that.first_name;
//                     }
//                 },
//                 {
//                     key: 'lastName',
//                     value: function () {
//                         return that.last_name;
//                     }
//                 },
//                 {key: 'email'},
//                 {key: 'province'},
//                 {key: 'city'},
//                 {key: 'school'},
//                 {key: 'address'},
//                 {
//                     key: 'updateType',
//                     value: function () {
//                         return 'profile';
//                     }
//                 },
//                 {
//                     key: 'major_id',
//                     value: function () {
//                         return that.major.id;
//                     }
//                 },
//                 {
//                     key: 'gender_id',
//                     value: function () {
//                         return that.gender.id;
//                     }
//                 },
//                 {
//                     key: 'grade_id',
//                     value: function () {
//                         return that.grade.id;
//                     }
//                 }
//             ]
//         };
//
//     }
//
//     convertToValidValue(buffer) {
//         let validatedKeys = [];
//         if (!this.major.isValid()) {
//             validatedKeys.push('major');
//         }
//         if (!this.gender.isValid()) {
//             validatedKeys.push('gender');
//         }
//         if (!this.hasValidNationalCode()) {
//             validatedKeys.push('nationalCode');
//         }
//         if (!this.hasValidMobile()) {
//             validatedKeys.push('mobile');
//         }
//
//         if (typeof buffer !== 'undefined' && buffer) {
//             this.buffer();
//             this.buffer([
//                 {
//                     key: 'major',
//                     value: this.major.convertToValidValue(true),
//                 },
//                 {
//                     key: 'gender',
//                     value: this.gender.convertToValidValue(true),
//                 },
//                 {
//                     key: 'nationalCode',
//                     value: this.convertNationalCodeToValidValue(true),
//                 },
//                 {
//                     key: 'mobile',
//                     value: this.convertMobileToValidValue(true),
//                 }
//             ]);
//         } else {
//             this.major.convertToValidValue();
//             this.gender.convertToValidValue();
//             this.convertNationalCodeToValidValue();
//             this.convertMobileToValidValue();
//         }
//
//
//         return validatedKeys;
//     }
//
//     hasValidData(...data) {
//         for (let i = 0; typeof data[i] !== 'undefined'; i++) {
//             switch (data[i]) {
//                 case 'major':
//                     if (this.hasValidMajor()) {
//                         return false;
//                     }
//                 case 'gender':
//                     if (this.hasValidGender()) {
//                         return false;
//                     }
//                 case 'mobile':
//                     if (this.hasValidMobile()) {
//                         return false;
//                     }
//                 case 'nationalCode':
//                     if (this.hasValidNationalCode()) {
//                         return false;
//                     }
//                 default:
//                     return false;
//             }
//         }
//     }
//
//     hasValidMajor() {
//         return this.major.isValid();
//     }
//
//     hasValidGender() {
//         return this.gender.isValid();
//     }
//
//     hasValidMobile(input) {
//         let mobile = this.mobile;
//         if (typeof input !== 'undefined') {
//             mobile = input;
//         }
//         let patt = /^09\d{9}$/g;
//         return patt.test(mobile);
//     }
//
//     convertMobileToValidValue(buffer) {
//         let validData = this.mobile;
//         if (!this.hasValidMobile()) {
//             if (this.mobile !== null && this.mobile.trim().length < 11) {
//                 validData = this.mobile.trim().padStart(11, '0');
//                 if (!this.hasValidMobile(validData)) {
//                     validData = null;
//                 }
//             } else {
//                 validData = null;
//             }
//         }
//
//         if (typeof buffer !== 'undefined' && buffer) {
//             return validData;
//         } else {
//             this.mobile = validData;
//         }
//     }
//
//     convertNationalCodeToValidValue(buffer) {
//         let validData = this.nationalCode;
//         if (!this.hasValidNationalCode()) {
//             if (this.nationalCode !== null && this.nationalCode.trim().length < 10) {
//                 validData = this.nationalCode.trim().padStart(10, '0');
//                 if (!this.hasValidNationalCode(validData)) {
//                     validData = null;
//                 }
//             } else {
//                 validData = null;
//             }
//         }
//
//         if (typeof buffer !== 'undefined' && buffer) {
//             return validData;
//         } else {
//             this.nationalCode = validData;
//         }
//     }
//
//     hasValidNationalCode(input) {
//         let nationalCode = this.nationalCode;
//         if (typeof input !== 'undefined') {
//             nationalCode = input;
//         }
//         if (!/^\d{10}$/.test(nationalCode))
//             return false;
//
//         let check = parseInt(nationalCode[9]),
//             sum = 0;
//         for (let i = 0; i < 9; ++i) {
//             sum += parseInt(nationalCode[i]) * (10 - i);
//         }
//         sum %= 11;
//
//         return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
//     }
//
//     hasData() {
//         return (this.id !== null);
//     }
//
//     getOrders() {
//         let url = this.actionUrl + '/' + this.id + '/orders';
//         return this.crud.read(url);
//     }
// }
//
// class UserList extends Collection {
//     model() {
//         return User;
//     }
// }
//
// // export default User;
// export {User, UserList};
