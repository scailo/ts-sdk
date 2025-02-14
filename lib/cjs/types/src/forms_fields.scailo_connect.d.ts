import { FormField, FormFieldPaginationResp, FormsFieldsList, FormsFieldsServiceCountReq, FormsFieldsServiceCreateRequest, FormsFieldsServiceFilterReq, FormsFieldsServicePaginationReq, FormsFieldsServiceSearchAllReq, FormsFieldsServiceUpdateRequest } from "./forms_fields.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, StandardFile } from "./base.scailo_pb.js";
/**
 *
 * Describes the methods applicable on each form field
 *
 * @generated from service Scailo.FormsFieldsService
 */
export declare const FormsFieldsService: {
    readonly typeName: "Scailo.FormsFieldsService";
    readonly methods: {
        /**
         * Create a form field
         *
         * @generated from rpc Scailo.FormsFieldsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof FormsFieldsServiceCreateRequest;
            readonly O: typeof FormField;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a form field
         *
         * @generated from rpc Scailo.FormsFieldsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof FormsFieldsServiceUpdateRequest;
            readonly O: typeof FormField;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard the form field
         *
         * @generated from rpc Scailo.FormsFieldsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the form field
         *
         * @generated from rpc Scailo.FormsFieldsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.FormsFieldsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof FormField;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.FormsFieldsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof FormField;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all forms fields
         *
         * @generated from rpc Scailo.FormsFieldsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof FormsFieldsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all forms fields with the given entity UUID
         *
         * @generated from rpc Scailo.FormsFieldsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof FormsFieldsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View forms fields with pagination
         *
         * @generated from rpc Scailo.FormsFieldsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof FormsFieldsServicePaginationReq;
            readonly O: typeof FormFieldPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all forms fields that match the given search key
         *
         * @generated from rpc Scailo.FormsFieldsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof FormsFieldsServiceSearchAllReq;
            readonly O: typeof FormsFieldsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.FormsFieldsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof FormsFieldsServiceFilterReq;
            readonly O: typeof FormsFieldsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.FormsFieldsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof FormsFieldsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.FormsFieldsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof FormsFieldsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.FormsFieldsService.Import
         */
        readonly import: {
            readonly name: "Import";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=forms_fields.scailo_connect.d.ts.map