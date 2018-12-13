import {AbstractControl, AsyncValidatorFn, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';

import { RxwebValidators,ReactiveFormConfig  } from '../../../packages/reactive-form-validators';

(function() {
  describe('RxwebValidators', () => {
    beforeEach(() => {
      ReactiveFormConfig.set({
        "validationMessage": {
          "url": "Please enter proper url format",
        }
      });
    });

    describe('url', () => {

	      it('should not error on an empty string.',
        () => { 
          expect(RxwebValidators.url()(new FormControl(''))).toBeNull();
        });
	
      it('should not error on null.',
        () => { 
          expect(RxwebValidators.url()(new FormControl(null))).toBeNull();
        });
	
      it('should not error on undefined.',
        () => { 
          expect(RxwebValidators.url()(new FormControl(undefined))).toBeNull(); 
        });

      it("Should not error, If you want to apply conditional validation on 'QA Website Url' or 'Customer Website Url', then you need to add 'Admin Website Url' input as 'https://google.co.in'",
        () => { 
          expect(RxwebValidators.url()(new FormControl('https://stackoverflow.com/'))).toBeNull(); 
        });


      it("Should error, If you want to apply conditional validation on 'QA Website Url' or 'Customer Website Url', then you need to add 'Admin Website Url' input as 'https://google.co.in'",
        () => { 
          expect(RxwebValidators.url()(new FormControl('https:/@/stackoverflow.com/'))).toEqual({'url':{ message: 'Please enter proper url format', refValues: [ 'https:/@/stackoverflow.com/' ] } }); 
        });

      it("Should not error, Conditional Expression with type 'function'",
         () => {
          let formBuilder = new FormBuilder();
          let formGroup = formBuilder.group({
'adminWebsiteUrl':['https://google.co.in'],
            'qaWebsiteUrl':'https://www.google.com/'
          });
          expect(RxwebValidators.url({conditionalExpression:(x,y) => x.adminWebsiteUrl == "https://google.co.in" })(formGroup.controls.qaWebsiteUrl)).toBeNull()
        });

      it("Should not error, Conditional Expression with type 'function'",
         () => {
          let formBuilder = new FormBuilder();
          let formGroup = formBuilder.group({
'adminWebsiteUrl':['https://www.npmjs.com/'],
            'qaWebsiteUrl':'https:/@/www.google.com/'
          });
          expect(RxwebValidators.url({conditionalExpression:(x,y) => x.adminWebsiteUrl == "https://google.co.in" })(formGroup.controls.qaWebsiteUrl)).toBeNull()
        });


      it("Should error, Conditional Expression with type 'function'",
         () => {
          let formBuilder = new FormBuilder();
          let formGroup = formBuilder.group({
			'adminWebsiteUrl':['https://google.co.in'],
            'qaWebsiteUrl':'https:/#/www'
          });
          expect(RxwebValidators.url({conditionalExpression:(x,y) => x.adminWebsiteUrl == "https://google.co.in" })(formGroup.controls.qaWebsiteUrl)).toEqual({'url':{ message: 'Please enter proper url format', refValues: [ 'https:/#/www' ] } }); 
        });

      it("Should not error, Conditional Expression with type 'string'",
         () => {
          let formBuilder = new FormBuilder();
          let formGroup = formBuilder.group({
'adminWebsiteUrl':['https://google.co.in'],
            'customerWebsiteUrl':'https://angular.io/'
          });
          expect(RxwebValidators.url({conditionalExpression:'x => x.adminWebsiteUrl == "https://google.co.in"' })(formGroup.controls.customerWebsiteUrl)).toBeNull()
        });

      it("Should not error, Conditional Expression with type 'string'",
         () => {
          let formBuilder = new FormBuilder();
          let formGroup = formBuilder.group({
'adminWebsiteUrl':['https://github.com/'],
            'customerWebsiteUrl':'https:/@/angular.io/'
          });
          expect(RxwebValidators.url({conditionalExpression:'x => x.adminWebsiteUrl == "https://google.co.in"' })(formGroup.controls.customerWebsiteUrl)).toBeNull()
        });


      it("Should error, Conditional Expression with type 'string'",
         () => {
          let formBuilder = new FormBuilder();
          let formGroup = formBuilder.group({
			'adminWebsiteUrl':['https://google.co.in'],
            'customerWebsiteUrl':'https:/#/angular.io/'
          });
          expect(RxwebValidators.url({conditionalExpression:'x => x.adminWebsiteUrl == "https://google.co.in"' })(formGroup.controls.customerWebsiteUrl)).toEqual({'url':{ message: 'Please enter proper url format', refValues: [ 'https:/#/angular.io/' ] } }); 
        });


      it("Should error, Shows Custom Validation Message.",
        () => { 
          expect(RxwebValidators.url({message:'{{0}} Is not the correct url pattern.'})(new FormControl('https:/@/stackblitz.com/'))).toEqual({'url':{ message: 'https:/@/stackblitz.com/ Is not the correct url pattern.', refValues: [ 'https:/@/stackblitz.com/' ] } }); 
        });



	//end
    });
  });
})();

