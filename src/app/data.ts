import { Injectable } from '@angular/core';

@Injectable()
export class fullCountry {
  getcountrydata() {
    return [
      {
        id: '0',
        country: 'USA',
        state: ['NC', 'SL', 'AL'],
        city: [
          ['NC1', 'NC2', 'NC3'],
          ['SL1', 'SL2', 'SL3'],
          ['AL1', 'AL2', 'AL3'],
        ],
      },
      {
        id: '1',
        country: 'IND',
        state: ['TS', 'AP', 'MP'],
        city: [
          ['TS1', 'TS2', 'TS3'],
          ['AP1', 'AP2', 'AP3'],
          ['MP1', 'MP2', 'MP3'],
        ],
      },
    ];
  }

  getcountry() {
    return Promise.resolve(this.getcountrydata());
  }
}

// @Injectable()
// export class onlyCountry {
//   getonlycountrydata() {
//     return [
//       {
//         country: 'USA',
//       },
//       {
//         country: 'IND',
//       },
//     ];
//   }
//   getonlycountry() {
//     return Promise.resolve(this.getonlycountrydata());
//   }
// }

// @Injectable()
// export class state {
//   getstateUSAdata() {
//     return [
//       {
//         id: '1',
//         state: 'NC',
//       },
//       {
//         id: '2',
//         state: 'SL',
//       },
//       {
//         id: '3',
//         state: 'AL',
//       },
//     ];
//   }
//   getstateINDdata() {
//     return [
//       {
//         id: '1',
//         state: 'TS',
//       },
//       {
//         id: '2',
//         state: 'AP',
//       },
//       {
//         id: '3',
//         state: 'MP',
//       },
//     ];
//   }

//   getUSAstate() {
//     return Promise.resolve(this.getstateUSAdata());
//   }

//   getINDstate() {
//     return Promise.resolve(this.getstateINDdata());
//   }
// }

// @Injectable()
// export class city {
//   getNCcitydata() {
//     return [
//       {
//         id: '1',
//         state: 'NC1',
//       },
//       {
//         id: '2',
//         state: 'NC2',
//       },
//       {
//         id: '3',
//         state: 'NC3',
//       },
//     ];
//   }

//   getNCcity() {
//     return Promise.resolve(this.getNCcitydata());
//   }
//   getSLcitydata() {
//     return [
//       {
//         id: '1',
//         state: 'SL1',
//       },
//       {
//         id: '2',
//         state: 'SL2',
//       },
//       {
//         id: '3',
//         state: 'SL3',
//       },
//     ];
//   }

//   getSLcity() {
//     return Promise.resolve(this.getSLcitydata());
//   }
//   getALcitydata() {
//     return [
//       {
//         id: '1',
//         state: 'AL1',
//       },
//       {
//         id: '2',
//         state: 'AL2',
//       },
//       {
//         id: '3',
//         state: 'AL3',
//       },
//     ];
//   }

//   getALcity() {
//     return Promise.resolve(this.getALcitydata());
//   }
//   getTScitydata() {
//     return [
//       {
//         id: '1',
//         state: 'TS1',
//       },
//       {
//         id: '2',
//         state: 'TS2',
//       },
//       {
//         id: '3',
//         state: 'TS3',
//       },
//     ];
//   }
//   getTScity() {
//     return Promise.resolve(this.getTScitydata());
//   }
//   getAPcitydata() {
//     return [
//       {
//         id: '1',
//         state: 'AP1',
//       },
//       {
//         id: '2',
//         state: 'AP2',
//       },
//       {
//         id: '3',
//         state: 'AP3',
//       },
//     ];
//   }
//   getAPcity() {
//     return Promise.resolve(this.getAPcitydata());
//   }
//   getMPcitydata() {
//     return [
//       {
//         id: '1',
//         state: 'MP1',
//       },
//       {
//         id: '2',
//         state: 'MP2',
//       },
//       {
//         id: '3',
//         state: 'MP3',
//       },
//     ];
//   }
//   getMPcity() {
//     return Promise.resolve(this.getMPcitydata());
//   }
// }
