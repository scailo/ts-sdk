import { FormFieldDatumHistoryRequest, FormFieldDatumList } from "./forms_fields_data.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each form
 *
 * @generated from service Scailo.FormsFieldsDataService
 */
export declare const FormsFieldsDataService: {
    readonly typeName: "Scailo.FormsFieldsDataService";
    readonly methods: {
        /**
         * View the historical values of the given form data
         *
         * @generated from rpc Scailo.FormsFieldsDataService.ViewFormFieldDataHistory
         */
        readonly viewFormFieldDataHistory: {
            readonly name: "ViewFormFieldDataHistory";
            readonly I: typeof FormFieldDatumHistoryRequest;
            readonly O: typeof FormFieldDatumList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=forms_fields_data.scailo_connect.d.ts.map