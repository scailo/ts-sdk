import { Associate, AssociatePaginationResp, AssociatesList, AssociatesServiceCountReq, AssociatesServiceCreateRequest, AssociatesServiceFilterReq, AssociatesServiceImportRequest, AssociatesServicePaginationReq, AssociatesServiceSearchAllReq, AssociatesServiceUpdateRequest } from "./associates.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, BooleanResponse, BytesResponse, CountResponse, Empty, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, StandardFile } from "./base.scailo_pb.js";
/**
 *
 * Describes the methods applicable on each associate
 *
 * @generated from service Scailo.AssociatesService
 */
export declare const AssociatesService: {
    readonly typeName: "Scailo.AssociatesService";
    readonly methods: {
        /**
         * Import associates
         *
         * @generated from rpc Scailo.AssociatesService.ImportFromReq
         */
        readonly importFromReq: {
            readonly name: "ImportFromReq";
            readonly I: typeof AssociatesServiceImportRequest;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a associate
         *
         * @generated from rpc Scailo.AssociatesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof AssociatesServiceCreateRequest;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a associate
         *
         * @generated from rpc Scailo.AssociatesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof AssociatesServiceUpdateRequest;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard the associate
         *
         * @generated from rpc Scailo.AssociatesService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore the associate
         *
         * @generated from rpc Scailo.AssociatesService.Restore
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
         * @generated from rpc Scailo.AssociatesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.AssociatesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download Associate by ID as a vCard
         *
         * @generated from rpc Scailo.AssociatesService.DownloadVCard
         */
        readonly downloadVCard: {
            readonly name: "DownloadVCard";
            readonly I: typeof Identifier;
            readonly O: typeof BytesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all associates
         *
         * @generated from rpc Scailo.AssociatesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all associates with the given entity UUID
         *
         * @generated from rpc Scailo.AssociatesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View associates with pagination
         *
         * @generated from rpc Scailo.AssociatesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof AssociatesServicePaginationReq;
            readonly O: typeof AssociatePaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if the user has permission to modify an associate
         *
         * @generated from rpc Scailo.AssociatesService.CheckModifyPermission
         */
        readonly checkModifyPermission: {
            readonly name: "CheckModifyPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if the user has permission to add an associate
         *
         * @generated from rpc Scailo.AssociatesService.CheckAddPermission
         */
        readonly checkAddPermission: {
            readonly name: "CheckAddPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all associates that match the given search key
         *
         * @generated from rpc Scailo.AssociatesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof AssociatesServiceSearchAllReq;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.AssociatesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof AssociatesServiceFilterReq;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given count criteria
         *
         * @generated from rpc Scailo.AssociatesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof AssociatesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.AssociatesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof AssociatesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.AssociatesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=associates.scailo_connect.d.ts.map