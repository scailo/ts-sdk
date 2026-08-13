import { Vendor, VendorItem, VendorItemHistoryRequest, VendorItemsList, VendorItemsSearchRequest, VendorsList, VendorsServiceCountReq, VendorsServiceCreateRequest, VendorsServiceFilterReq, VendorsServiceItemCreateRequest, VendorsServiceItemUpdateRequest, VendorsServicePaginatedItemsResponse, VendorsServicePaginatedRequiredItemsResponse, VendorsServicePaginatedUsersResponse, VendorsServicePaginationReq, VendorsServicePaginationResponse, VendorsServiceSearchAllReq, VendorsServiceUpdateRequest, VendorsServiceUserCreateRequest, VendorUser, VendorUsersList, VendorUsersSearchRequest } from "./vendors.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithUserComment, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
/**
 *
 * The VendorsService manages the full lifecycle of vendor records.
 * It provides standard CRUD operations alongside a robust state machine for
 * verification, manager approval, and completion.
 *
 * @generated from service Scailo.VendorsService
 */
export declare const VendorsService: {
    readonly typeName: "Scailo.VendorsService";
    readonly methods: {
        /**
         * Creates a new record and immediately moves it to the verification workflow.
         *
         * This method validates all required fields.
         * The record is created with a `STANDARD_LIFECYCLE_STATUS.PREVERIFY` status.
         *
         * **Side Effects:**
         * - Generates a unique system UUID.
         * - Records an audit log for the "Create" action.
         * - May trigger automated verification workflows.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If validation rules fail (e.g., negative quantity, invalid timestamps).
         *
         * @generated from rpc Scailo.VendorsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof VendorsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Saves a new record as a draft without triggering side effects.
         *
         * Use this method when you have incomplete information but wish to persist
         * the record for later completion. The record remains in a `DRAFT` state.
         *
         * **Note:** Some strict validation rules may be relaxed in the backend for drafts compared to `Create`.
         *
         * **Side Effects:**
         * - Generates a unique system UUID.
         * - Records an audit log for the "Draft" action.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If critical system fields are missing.
         *
         * @generated from rpc Scailo.VendorsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof VendorsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates an existing record that is currently in `DRAFT` status.
         *
         * This method allows modification of all primary attributes while the record is not yet verified.
         *
         * **Errors:**
         * - `FAILED_PRECONDITION`: If the record is not in a `DRAFT` state.
         * - `NOT_FOUND`: If the provided ID does not exist.
         *
         * @generated from rpc Scailo.VendorsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof VendorsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Submits a record in `DRAFT` or `REVISION` status for verification.
         *
         * This triggers the first stage of the approval workflow.
         *
         * **Status Transition:** -> `PREVERIFY`
         *
         * **Side Effects:**
         * - Notifies designated verifiers or approvers.
         * - Locks certain fields from being updated without returning to `REVISION`.
         *
         * @generated from rpc Scailo.VendorsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Marks a record as verified, signaling that it is ready for final approval.
         *
         * **Status Transition:** -> `VERIFIED`
         *
         * **Side Effects:**
         * - Records the verifying user and timestamp in the audit logs.
         *
         * @generated from rpc Scailo.VendorsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Officially approves the record.
         *
         * **Status Transition:** -> `STANDING`
         *
         * **Side Effects:**
         * - Finalizes the `final_ref_number`.
         * - Records the approver's identity and timestamp.
         *
         * @generated from rpc Scailo.VendorsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Sends the record back to the creator for corrections.
         *
         * Use this if details are incorrect or supporting documents (in the vault) are missing.
         *
         * **Status Transition:** -> `REVISION`
         *
         * **Side Effects:**
         * - Notifies the record creator that changes are required.
         *
         * @generated from rpc Scailo.VendorsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates a record that has been sent back for `REVISION`.
         *
         * **Side Effects:**
         * - Re-validates the updated fields.
         *
         * @generated from rpc Scailo.VendorsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof VendorsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.VendorsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently cancels the record.
         *
         * Records in this state are typically ignored.
         *
         * **Status Transition:** -> `DISCARDED`
         *
         * @generated from rpc Scailo.VendorsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restores a previously `DISCARDED` or `HALTED` record.
         *
         * **Side Effects:**
         * - Moves the record back to `PREVERIFY` and sends for verification.
         *
         * @generated from rpc Scailo.VendorsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Adds an audit comment to the record's history without changing its current lifecycle status.
         *
         * @generated from rpc Scailo.VendorsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Triggers an automated email notification related to the record.
         *
         * **Side Effects:**
         * - Dispatches a structured email to the designated recipients based on the provided attributes.
         * - Appends an entry to the system communication logs for auditing purposes.
         *
         * @generated from rpc Scailo.VendorsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
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
         * @generated from rpc Scailo.VendorsService.AttachVaultFolder
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
         * @generated from rpc Scailo.VendorsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Associates a new catalog item with an existing vendor profile.
         *
         * **Side Effects:**
         * - Validates item constraints including price deviation limits, tax groups, and order quantities.
         * - Depending on system configurations, may place the new vendor item association into a pending approval state.
         *
         * @generated from rpc Scailo.VendorsService.AddVendorItem
         */
        readonly addVendorItem: {
            readonly name: "AddVendorItem";
            readonly I: typeof VendorsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates the configurations and metadata of an existing vendor item association.
         *
         * **Side Effects:**
         * - Modifies unit pricing, catalog mappings, or order constraints.
         * - May trigger a re-approval workflow or audit flag depending on the severity of the modifications.
         *
         * @generated from rpc Scailo.VendorsService.ModifyVendorItem
         */
        readonly modifyVendorItem: {
            readonly name: "ModifyVendorItem";
            readonly I: typeof VendorsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending vendor item record, finalizing its availability within the purchasing catalog.
         *
         * **Side Effects:**
         * - Activates the item mapping for downstream procurement and ordering workflows.
         * - Appends the required approval metadata and audit comment to the record history.
         *
         * @generated from rpc Scailo.VendorsService.ApproveVendorItem
         */
        readonly approveVendorItem: {
            readonly name: "ApproveVendorItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates an item association from a vendor profile.
         *
         * **Side Effects:**
         * - Revokes catalog visibility and prevents future orders for this specific item configuration.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.VendorsService.DeleteVendorItem
         */
        readonly deleteVendorItem: {
            readonly name: "DeleteVendorItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete, granular details of a specific vendor item by its internal sequence ID.
         *
         * This is a read-only operation that fetches full metadata, pricing configurations, quantity constraints, and approval histories.
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorItemByID
         */
        readonly viewVendorItemByID: {
            readonly name: "ViewVendorItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists active, approved item associations for a specific vendor using pagination controls.
         *
         * This read-only query is optimized for catalog browsing and procurement, returning only items that are fully authorized and available for ordering.
         *
         * @generated from rpc Scailo.VendorsService.ViewPaginatedApprovedVendorItems
         */
        readonly viewPaginatedApprovedVendorItems: {
            readonly name: "ViewPaginatedApprovedVendorItems";
            readonly I: typeof VendorItemsSearchRequest;
            readonly O: typeof VendorsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved item associations for a specific vendor using pagination controls.
         *
         * This read-only query is optimized for administrative and managerial workflows to easily identify records requiring review or authorization.
         *
         * @generated from rpc Scailo.VendorsService.ViewPaginatedUnapprovedVendorItems
         */
        readonly viewPaginatedUnapprovedVendorItems: {
            readonly name: "ViewPaginatedUnapprovedVendorItems";
            readonly I: typeof VendorItemsSearchRequest;
            readonly O: typeof VendorsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the historical audit trail and lifecycle changes of a specific vendor item record.
         *
         * This read-only operation aggregates the chronological evolution of the item, allowing tracking of price shifts, limit updates, and approval state changes.
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorItemHistory
         */
        readonly viewVendorItemHistory: {
            readonly name: "ViewVendorItemHistory";
            readonly I: typeof VendorItemHistoryRequest;
            readonly O: typeof VendorItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches through vendor item records using filters, status flags, and pagination tokens.
         *
         * This read-only query is optimized for administrative data grids, supporting complex lookups, multi-attribute filtering, and explicit windowing parameters (count and offset).
         *
         * @generated from rpc Scailo.VendorsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof VendorItemsSearchRequest;
            readonly O: typeof VendorsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches through vendor items that have explicitly requested operational quantities, utilizing filters and pagination.
         *
         * This read-only query pairs the base vendor item entities alongside their operational demand metadata to facilitate targeted inventory and requisition views.
         *
         * @generated from rpc Scailo.VendorsService.SearchRequiredItemsWithPagination
         */
        readonly searchRequiredItemsWithPagination: {
            readonly name: "SearchRequiredItemsWithPagination";
            readonly I: typeof VendorItemsSearchRequest;
            readonly O: typeof VendorsServicePaginatedRequiredItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the underlying file or document payload associated with a specific entity
         * using its universally unique identifier (UUID).
         *
         * This endpoint is designed for versatile resource retrieval and is commonly utilized
         * to facilitate direct, secure, or public-facing downloads. By relying on an obscure
         * UUID rather than predictable internal sequential IDs, it ensures that external
         * download links remain unguessable and safe for broad distribution.
         *
         * @generated from rpc Scailo.VendorsService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a standardized CSV template used for batch uploading vendor items.
         *
         * This read-only operation provides a boilerplate file containing the expected column headers and formatting guidelines required by the system's ingestion engine.
         *
         * @generated from rpc Scailo.VendorsService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Processes a batch ingestion of vendor items via a provided CSV file payload.
         *
         * **Side Effects:**
         * - Parses the uploaded file and attempts to bulk-create item associations.
         * - Validates each row against strict uniqueness constraints; actively rejects the payload and returns an error state if duplicate identifiers are detected (e.g., family code and UOM code must be unique).
         *
         * @generated from rpc Scailo.VendorsService.UploadVendorItems
         */
        readonly uploadVendorItems: {
            readonly name: "UploadVendorItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Associates a new personnel user with an existing vendor.
         *
         * **Side Effects:**
         * - Validates the structural relationship between the vendor and user.
         * - Depending on system configurations, may place the new vendor user association into a pending approval state.
         *
         * @generated from rpc Scailo.VendorsService.AddVendorUser
         */
        readonly addVendorUser: {
            readonly name: "AddVendorUser";
            readonly I: typeof VendorsServiceUserCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending vendor user record, finalizing their access and mapping to the vendor account.
         *
         * **Side Effects:**
         * - Activates the user mapping within the vendor scope.
         * - Appends the required approval metadata and audit comment to the record history.
         *
         * @generated from rpc Scailo.VendorsService.ApproveVendorUser
         */
        readonly approveVendorUser: {
            readonly name: "ApproveVendorUser";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates a user association from a vendor profile.
         *
         * **Side Effects:**
         * - Revokes vendor-specific context, tenancy permissions, and data access linked to this user.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.VendorsService.DeleteVendorUser
         */
        readonly deleteVendorUser: {
            readonly name: "DeleteVendorUser";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete, granular details of a specific vendor user by its internal sequence ID.
         *
         * This is a read-only operation that fetches full metadata, user contexts, and approval histories.
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorUserByID
         */
        readonly viewVendorUserByID: {
            readonly name: "ViewVendorUserByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorUser;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all user associations mapped to a given vendor unique internal identifier.
         *
         * This read-only query aggregates and returns the collection of personnel assigned to the vendor entity.
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorUsers
         */
        readonly viewVendorUsers: {
            readonly name: "ViewVendorUsers";
            readonly I: typeof Identifier;
            readonly O: typeof VendorUsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches through vendor user records using filters, status flags, and pagination tokens.
         *
         * This read-only query is optimized for administrative data grids, supporting complex lookups,
         * multi-tenant isolation, and explicit windowing parameters (count and offset).
         *
         * @generated from rpc Scailo.VendorsService.SearchVendorUsersWithPagination
         */
        readonly searchVendorUsersWithPagination: {
            readonly name: "SearchVendorUsersWithPagination";
            readonly I: typeof VendorUsersSearchRequest;
            readonly O: typeof VendorsServicePaginatedUsersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.VendorsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Vendor;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.VendorsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Vendor;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record via the assigned internal code. In case duplicates are found, this method retrieves the latest record.
         *
         * **Note:** High-volume compliance data, audit records, and system logs are excluded from the response payload.
         *
         * **Errors:**
         * - `NOT_FOUND`: If the provided internal code does not exist.
         *
         * @generated from rpc Scailo.VendorsService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof Vendor;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.VendorsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Vendor;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.VendorsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Vendor;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a vendor record using their primary email address, omitting compliance logs and non-essential metadata.
         *
         * This operation is tailored for fast, low-overhead lookups where only core profile traits and basic identification keys are required.
         *
         * @generated from rpc Scailo.VendorsService.ViewEssentialByEmail
         */
        readonly viewEssentialByEmail: {
            readonly name: "ViewEssentialByEmail";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof Vendor;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a vendor record using their primary phone number, omitting compliance logs and non-essential metadata.
         *
         * This operation is tailored for fast, low-overhead lookups where only core profile traits and basic identification keys are required.
         *
         * @generated from rpc Scailo.VendorsService.ViewEssentialByPhone
         */
        readonly viewEssentialByPhone: {
            readonly name: "ViewEssentialByPhone";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof Vendor;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.VendorsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.VendorsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.VendorsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.VendorsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof VendorsServicePaginationReq;
            readonly O: typeof VendorsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a comprehensive list of all vendor profiles associated with a specific family.
         *
         * This read-only query aggregates the entire supply chain footprint for a given item family.
         * It intentionally returns all associated vendors regardless of their current lifecycle state—meaning
         * both fully approved suppliers and those still pending authorization or review are included in the response.
         * This is primarily utilized by procurement administrators and catalog managers to audit supplier mappings,
         * assess sourcing redundancy, and track pending vendor linkages before they are finalized.
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorsForFamily
         */
        readonly viewVendorsForFamily: {
            readonly name: "ViewVendorsForFamily";
            readonly I: typeof Identifier;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the underlying file or document payload associated with a specific entity
         * using its universally unique identifier (UUID).
         *
         * This endpoint is designed for versatile resource retrieval and is commonly utilized
         * to facilitate direct, secure, or public-facing downloads. By relying on an obscure
         * UUID rather than predictable internal sequential IDs, it ensures that external
         * download links remain unguessable and safe for broad distribution.
         *
         * @generated from rpc Scailo.VendorsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.VendorsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof VendorsServiceSearchAllReq;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.VendorsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof VendorsServiceFilterReq;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.VendorsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total count of records matching the given complex filter criteria.
         *
         * @generated from rpc Scailo.VendorsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof VendorsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.VendorsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof VendorsServiceFilterReq;
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
         * @generated from rpc Scailo.VendorsService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=vendors.scailo_connect.d.ts.map