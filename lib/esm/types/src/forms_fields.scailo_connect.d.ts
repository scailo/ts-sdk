import { FormField, FormFieldPaginationResp, FormsFieldsList, FormsFieldsServiceCountReq, FormsFieldsServiceCreateRequest, FormsFieldsServiceFilterReq, FormsFieldsServicePaginationReq, FormsFieldsServiceSearchAllReq, FormsFieldsServiceUpdateRequest } from "./forms_fields.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
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
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
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
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
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
         * Retrieves a single record via the assigned internal code.
         *
         * **Note:** High-volume compliance data, audit records, and system logs are excluded from the response payload.
         *
         * **Errors:**
         * - `NOT_FOUND`: If the provided internal code does not exist.
         *
         * @generated from rpc Scailo.FormsFieldsService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FormField;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.FormsFieldsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof FormField;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.FormsFieldsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof FormField;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.FormsFieldsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof FormsFieldsList;
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
         * Performs a high-granularity search based on multiple specific field filters.
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
         * Returns the total count of records matching the given complex filter criteria.
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
         * Bulk imports records from a provided CSV file.
         * Behavior:
         * - Deduplication: Skips entries where the `code` already exists in the system.
         * - Atomicity: This is an "all-or-nothing" operation; if any part of the
         *   import fails, no changes are committed.
         * - Idempotency: Multiple calls with the same CSV result in the same state.
         * Returns a list of UUIDs for all successfully processed or existing records.
         *
         * @generated from rpc Scailo.FormsFieldsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=forms_fields.scailo_connect.d.ts.map