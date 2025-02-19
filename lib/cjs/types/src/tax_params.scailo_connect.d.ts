import { TaxParam, TaxParamsList, TaxParamsServiceCountReq, TaxParamsServiceCreateRequest, TaxParamsServiceFilterReq, TaxParamsServicePaginationReq, TaxParamsServicePaginationResponse, TaxParamsServiceSearchAllReq, TaxParamsServiceUpdateRequest } from "./tax_params.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each tax param
 *
 * @generated from service Scailo.TaxParamsService
 */
export declare const TaxParamsService: {
    readonly typeName: "Scailo.TaxParamsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.TaxParamsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TaxParamsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.TaxParamsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof TaxParamsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.TaxParamsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof TaxParamsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.TaxParamsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify
         *
         * @generated from rpc Scailo.TaxParamsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve
         *
         * @generated from rpc Scailo.TaxParamsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send For Revision
         *
         * @generated from rpc Scailo.TaxParamsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update revision
         *
         * @generated from rpc Scailo.TaxParamsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof TaxParamsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.TaxParamsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.TaxParamsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore
         *
         * @generated from rpc Scailo.TaxParamsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.TaxParamsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.TaxParamsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof TaxParam;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.TaxParamsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TaxParam;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.TaxParamsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof TaxParamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.TaxParamsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TaxParamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.TaxParamsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof TaxParamsServicePaginationReq;
            readonly O: typeof TaxParamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.TaxParamsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof TaxParamsServiceSearchAllReq;
            readonly O: typeof TaxParamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.TaxParamsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof TaxParamsServiceFilterReq;
            readonly O: typeof TaxParamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.TaxParamsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.TaxParamsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof TaxParamsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.TaxParamsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof TaxParamsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.TaxParamsService.Import
         */
        readonly import: {
            readonly name: "Import";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=tax_params.scailo_connect.d.ts.map