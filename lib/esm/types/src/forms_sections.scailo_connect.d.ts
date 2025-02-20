import { FormSection, FormSectionPaginationResp, FormsSectionsList, FormsSectionsServiceCountReq, FormsSectionsServiceCreateRequest, FormsSectionsServiceFilterReq, FormsSectionsServicePaginationReq, FormsSectionsServiceSearchAllReq, FormsSectionsServiceUpdateRequest } from "./forms_sections.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, StandardFile } from "./base.scailo_pb.js";
/**
 *
 * Describes the methods applicable on each form section
 *
 * @generated from service Scailo.FormsSectionsService
 */
export declare const FormsSectionsService: {
    readonly typeName: "Scailo.FormsSectionsService";
    readonly methods: {
        /**
         * Create a form section
         *
         * @generated from rpc Scailo.FormsSectionsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof FormsSectionsServiceCreateRequest;
            readonly O: typeof FormSection;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a form section
         *
         * @generated from rpc Scailo.FormsSectionsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof FormsSectionsServiceUpdateRequest;
            readonly O: typeof FormSection;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard the form section
         *
         * @generated from rpc Scailo.FormsSectionsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the form section
         *
         * @generated from rpc Scailo.FormsSectionsService.Restore
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
         * @generated from rpc Scailo.FormsSectionsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof FormSection;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.FormsSectionsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof FormSection;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all forms sections
         *
         * @generated from rpc Scailo.FormsSectionsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof FormsSectionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all forms sections with the given entity UUID
         *
         * @generated from rpc Scailo.FormsSectionsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof FormsSectionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View forms sections with pagination
         *
         * @generated from rpc Scailo.FormsSectionsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof FormsSectionsServicePaginationReq;
            readonly O: typeof FormSectionPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all forms sections that match the given search key
         *
         * @generated from rpc Scailo.FormsSectionsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof FormsSectionsServiceSearchAllReq;
            readonly O: typeof FormsSectionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.FormsSectionsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof FormsSectionsServiceFilterReq;
            readonly O: typeof FormsSectionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.FormsSectionsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof FormsSectionsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.FormsSectionsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof FormsSectionsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.FormsSectionsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=forms_sections.scailo_connect.d.ts.map