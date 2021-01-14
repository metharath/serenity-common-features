﻿namespace Serenity.Demo.Northwind {
    export interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: DateEditor;
        RequiredDate: DateEditor;
        EmployeeID: LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: DateEditor;
        ShipVia: LookupEditor;
        Freight: DecimalEditor;
        ShipName: StringEditor;
        ShipAddress: StringEditor;
        ShipCity: StringEditor;
        ShipRegion: StringEditor;
        ShipPostalCode: StringEditor;
        ShipCountry: StringEditor;
    }

    export class OrderForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Order';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderForm.init)  {
                OrderForm.init = true;

                var s = Serenity;
                var w0 = CustomerEditor;
                var w1 = DateEditor;
                var w2 = LookupEditor;
                var w3 = OrderDetailsEditor;
                var w4 = DecimalEditor;
                var w5 = StringEditor;

                Q.initFormType(OrderForm, [
                    'CustomerID', w0,
                    'OrderDate', w1,
                    'RequiredDate', w1,
                    'EmployeeID', w2,
                    'DetailList', w3,
                    'ShippedDate', w1,
                    'ShipVia', w2,
                    'Freight', w4,
                    'ShipName', w5,
                    'ShipAddress', w5,
                    'ShipCity', w5,
                    'ShipRegion', w5,
                    'ShipPostalCode', w5,
                    'ShipCountry', w5
                ]);
            }
        }
    }
}
