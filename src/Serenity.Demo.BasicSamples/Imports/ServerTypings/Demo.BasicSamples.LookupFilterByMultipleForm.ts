﻿namespace Serenity.Demo.BasicSamples {
    export interface LookupFilterByMultipleForm {
        ProductName: StringEditor;
        ProductImage: ImageUploadEditor;
        Discontinued: BooleanEditor;
        SupplierID: LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: StringEditor;
        UnitPrice: DecimalEditor;
        UnitsInStock: IntegerEditor;
        UnitsOnOrder: IntegerEditor;
        ReorderLevel: IntegerEditor;
    }

    export class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.LookupFilterByMultiple';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LookupFilterByMultipleForm.init)  {
                LookupFilterByMultipleForm.init = true;

                var s = Serenity;
                var w0 = StringEditor;
                var w1 = ImageUploadEditor;
                var w2 = BooleanEditor;
                var w3 = LookupEditor;
                var w4 = ProduceSeafoodCategoryEditor;
                var w5 = DecimalEditor;
                var w6 = IntegerEditor;

                Q.initFormType(LookupFilterByMultipleForm, [
                    'ProductName', w0,
                    'ProductImage', w1,
                    'Discontinued', w2,
                    'SupplierID', w3,
                    'CategoryID', w4,
                    'QuantityPerUnit', w0,
                    'UnitPrice', w5,
                    'UnitsInStock', w6,
                    'UnitsOnOrder', w6,
                    'ReorderLevel', w6
                ]);
            }
        }
    }
}
