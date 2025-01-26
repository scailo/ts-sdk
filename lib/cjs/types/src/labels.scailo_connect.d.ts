import { Label, LabelPaginationResp, LabelsList, LabelsServiceCountReq, LabelsServiceCreateRequest, LabelsServiceFilterReq, LabelsServicePaginationReq, LabelsServiceSearchAllReq, LabelsServiceUpdateRequest } from "./labels.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, BooleanResponse, CountResponse, Empty, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, StandardFile } from "./base.scailo_pb.js";
/**
 *
 * Describes the methods applicable on each label
 *
 * @generated from service Scailo.LabelsService
 */
export declare const LabelsService: {
    readonly typeName: "Scailo.LabelsService";
    readonly methods: {
        /**
         * Create a label
         *
         * @generated from rpc Scailo.LabelsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof LabelsServiceCreateRequest;
            readonly O: typeof Label;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a label
         *
         * @generated from rpc Scailo.LabelsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof LabelsServiceUpdateRequest;
            readonly O: typeof Label;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard the label
         *
         * @generated from rpc Scailo.LabelsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the label
         *
         * @generated from rpc Scailo.LabelsService.Restore
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
         * @generated from rpc Scailo.LabelsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Label;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all labels
         *
         * @generated from rpc Scailo.LabelsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof LabelsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all labels with the given entity UUID
         *
         * @generated from rpc Scailo.LabelsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof LabelsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View labels with pagination
         *
         * @generated from rpc Scailo.LabelsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof LabelsServicePaginationReq;
            readonly O: typeof LabelPaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if the user has permission to modify an label
         *
         * @generated from rpc Scailo.LabelsService.CheckModifyPermission
         */
        readonly checkModifyPermission: {
            readonly name: "CheckModifyPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if the user has permission to add an label
         *
         * @generated from rpc Scailo.LabelsService.CheckAddPermission
         */
        readonly checkAddPermission: {
            readonly name: "CheckAddPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all labels that match the given search key
         *
         * @generated from rpc Scailo.LabelsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof LabelsServiceSearchAllReq;
            readonly O: typeof LabelsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.LabelsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof LabelsServiceFilterReq;
            readonly O: typeof LabelsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.LabelsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof LabelsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.LabelsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof LabelsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.LabelsService.Import
         */
        readonly import: {
            readonly name: "Import";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=labels.scailo_connect.d.ts.map