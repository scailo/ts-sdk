import { Label, LabelPaginationResp, LabelsList, LabelsServiceCountReq, LabelsServiceCreateRequest, LabelsServiceFilterReq, LabelsServicePaginationReq, LabelsServiceSearchAllReq, LabelsServiceUpdateRequest } from "./labels.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, BooleanResponse, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, StandardFile } from "./base.scailo_pb.js";
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
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
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
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.LabelsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Label;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.LabelsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Label;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.LabelsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Label;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.LabelsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof LabelsList;
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
         * Performs a high-granularity search based on multiple specific field filters.
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
         * Returns the total count of records matching the given complex filter criteria.
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
         * Bulk imports records from a provided CSV file.
         * Behavior:
         * - Deduplication: Skips entries where the `code` already exists in the system.
         * - Atomicity: This is an "all-or-nothing" operation; if any part of the
         *   import fails, no changes are committed.
         * - Idempotency: Multiple calls with the same CSV result in the same state.
         * Returns a list of UUIDs for all successfully processed or existing records.
         *
         * @generated from rpc Scailo.LabelsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=labels.scailo_connect.d.ts.map