import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/image/image-decorators-extended.module";
import { ImageTemplateDrivenValidationDirectivesExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/image/image-validation-directives-extended.module";
import { ImageTemplateDrivenValidationDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/image/image-validation-decorators-extended.module";
import { ImageValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/image/image-validators-extended.module";
import { IMAGE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/image/image.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { IMAGE_ROUTING } from "src/app/components/form-validation/image/image.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [IMAGE_ROUTING ,ImageDecoratorsExtendedModule , ImageValidatorsExtendedModule ,ImageTemplateDrivenValidationDirectivesExtendedModule, ImageTemplateDrivenValidationDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: IMAGE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ImageModule { }

