// import { ActivatedRoute } from '@angular/router';
// import { Component } from '@angular/core';
// import { inject, TestBed } from '@angular/core/testing';
//
// // Load the implementations that should be tested
// import { About } from './about.component';
//
// describe('About', () => {
//   // provide our implementations or mocks to the dependency injector
//   beforeEach(() => TestBed.configureTestingModule({
//     providers: [
//       // provide a better mock
//       {
//         provide: ActivatedRoute,
//         useValue: {
//           data: {
//             subscribe: (fn) => fn({
//               yourData: 'yolo'
//             })
//           }
//         }
//       },
//       product-list
//     ]
//   }));
//
//   it('should log ngOnInit', inject([product-list], (product-list) => {
//     spyOn(console, 'log');
//     expect(console.log).not.toHaveBeenCalled();
//
//     product-list.ngOnInit();
//     expect(console.log).toHaveBeenCalled();
//   }));
//
// });
