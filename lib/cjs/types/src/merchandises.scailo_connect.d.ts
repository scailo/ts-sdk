import { Merchandise, MerchandisesList, MerchandisesServiceCountReq, MerchandisesServiceCreateRequest, MerchandisesServiceFilterReq, MerchandisesServicePaginationReq, MerchandisesServicePaginationResponse, MerchandisesServiceSearchAllReq, MerchandisesServiceSendToStoreRequest, MerchandisesServiceUpdateRequest } from "./merchandises.scailo_pb.js";
import { ActiveStatus, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, InventoryInteractionsList, InventoryPartitionRequest, PriceResponse, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each merchandise
 *
 * @generated from service Scailo.MerchandisesService
 */
export declare const MerchandisesService: {
    readonly typeName: "Scailo.MerchandisesService";
    readonly methods: {
        /**
         * Create (and Send for QC)
         *
         * @generated from rpc Scailo.MerchandisesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof MerchandisesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send to Store
         *
         * @generated from rpc Scailo.MerchandisesService.SendToStore
         */
        readonly sendToStore: {
            readonly name: "SendToStore";
            readonly I: typeof MerchandisesServiceSendToStoreRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.MerchandisesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof MerchandisesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for Rework
         *
         * @generated from rpc Scailo.MerchandisesService.SendForRework
         */
        readonly sendForRework: {
            readonly name: "SendForRework";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for QC
         *
         * @generated from rpc Scailo.MerchandisesService.SendForQC
         */
        readonly sendForQC: {
            readonly name: "SendForQC";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Split into unit quantities
         *
         * @generated from rpc Scailo.MerchandisesService.SplitLot
         */
        readonly splitLot: {
            readonly name: "SplitLot";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a partition from the parent lot (and returns the identifier of the new partition)
         *
         * @generated from rpc Scailo.MerchandisesService.Partition
         */
        readonly partition: {
            readonly name: "Partition";
            readonly I: typeof InventoryPartitionRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Consume
         *
         * @generated from rpc Scailo.MerchandisesService.Consume
         */
        readonly consume: {
            readonly name: "Consume";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reject
         *
         * @generated from rpc Scailo.MerchandisesService.Reject
         */
        readonly reject: {
            readonly name: "Reject";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Scrap
         *
         * @generated from rpc Scailo.MerchandisesService.Scrap
         */
        readonly scrap: {
            readonly name: "Scrap";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Return
         *
         * @generated from rpc Scailo.MerchandisesService.ReturnMaterial
         */
        readonly returnMaterial: {
            readonly name: "ReturnMaterial";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.MerchandisesService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Adds an audit comment to the record's history without changing its current lifecycle status.
         *
         * @generated from rpc Scailo.MerchandisesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Attaches a specified folder directly to a record without requiring a full revision workflow.
         *
         * This is a convenience API designed to bypass the traditional multi-step modification lifecycle
         * (e.g., creating a revision, updating data, submitting for verification, and awaiting approval).
         * It allows for the immediate, single-step association of a vault folder.
         *
         * **Side Effects & Lifecycle:**
         * * The overall status of the record remains unchanged.
         * * The record's modification timestamp is automatically updated to the current time.
         * * An entry is appended to the record's audit log tracking this attachment.
         *
         * @generated from rpc Scailo.MerchandisesService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.MerchandisesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.MerchandisesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Merchandise;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.MerchandisesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Merchandise;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.MerchandisesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Merchandise;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.MerchandisesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Merchandise;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.MerchandisesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof MerchandisesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given UUIDs
         *
         * @generated from rpc Scailo.MerchandisesService.ViewFromUUIDs
         */
        readonly viewFromUUIDs: {
            readonly name: "ViewFromUUIDs";
            readonly I: typeof IdentifierUUIDsList;
            readonly O: typeof MerchandisesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.MerchandisesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof MerchandisesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.MerchandisesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof MerchandisesServicePaginationReq;
            readonly O: typeof MerchandisesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the unit price at which the inventory item was purchased (the corresponding vendor invoice price)
         *
         * @generated from rpc Scailo.MerchandisesService.ViewVendorInvoiceUnitPrice
         */
        readonly viewVendorInvoiceUnitPrice: {
            readonly name: "ViewVendorInvoiceUnitPrice";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PriceResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download QC Report with the given Identifier
         *
         * @generated from rpc Scailo.MerchandisesService.DownloadQCReportByID
         */
        readonly downloadQCReportByID: {
            readonly name: "DownloadQCReportByID";
            readonly I: typeof Identifier;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download QC Report with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.MerchandisesService.DownloadQCReportByUUID
         */
        readonly downloadQCReportByUUID: {
            readonly name: "DownloadQCReportByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download Label for the given Identifier
         *
         * @generated from rpc Scailo.MerchandisesService.DownloadLabelByID
         */
        readonly downloadLabelByID: {
            readonly name: "DownloadLabelByID";
            readonly I: typeof Identifier;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download Label for the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.MerchandisesService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all inventory interactions for merchandise with the given IdentifierUUID
         *
         * @generated from rpc Scailo.MerchandisesService.ViewInventoryInteractions
         */
        readonly viewInventoryInteractions: {
            readonly name: "ViewInventoryInteractions";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InventoryInteractionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.MerchandisesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof MerchandisesServiceSearchAllReq;
            readonly O: typeof MerchandisesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.MerchandisesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof MerchandisesServiceFilterReq;
            readonly O: typeof MerchandisesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total count of records matching the given complex filter criteria.
         *
         * @generated from rpc Scailo.MerchandisesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof MerchandisesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request
         *
         * @generated from rpc Scailo.MerchandisesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof MerchandisesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload records
         *
         * @generated from rpc Scailo.MerchandisesService.DownloadImportTemplate
         */
        readonly downloadImportTemplate: {
            readonly name: "DownloadImportTemplate";
            readonly I: typeof Empty;
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
         * @generated from rpc Scailo.MerchandisesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=merchandises.scailo_connect.d.ts.map