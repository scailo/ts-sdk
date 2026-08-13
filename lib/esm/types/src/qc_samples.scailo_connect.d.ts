import { QCSample, QCSampleAncillaryParameters, QCSampleParameter, QCSampleParameterHistoryList, QCSampleParameterHistoryRequest, QCSampleParametersList, QCSampleParametersSearchRequest, QCSamplesCountStatistics, QCSamplesList, QCSamplesServiceCountReq, QCSamplesServiceCreateRequest, QCSamplesServiceFilterReq, QCSamplesServicePaginatedParametersResponse, QCSamplesServicePaginationReq, QCSamplesServicePaginationResponse, QCSamplesServiceParameterUpdateRequest, QCSamplesServiceParameterUpdateRequestsList, QCSamplesServiceSearchAllReq, QCSamplesServiceUpdateRequest, QCSamplesWithMetadataList } from "./qc_samples.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each qc sample
 *
 * @generated from service Scailo.QCSamplesService
 */
export declare const QCSamplesService: {
    readonly typeName: "Scailo.QCSamplesService";
    readonly methods: {
        /**
         * Create
         *
         * @generated from rpc Scailo.QCSamplesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof QCSamplesServiceCreateRequest;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.QCSamplesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof QCSamplesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Finish
         *
         * @generated from rpc Scailo.QCSamplesService.Finish
         */
        readonly finish: {
            readonly name: "Finish";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Accept
         *
         * @generated from rpc Scailo.QCSamplesService.Accept
         */
        readonly accept: {
            readonly name: "Accept";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Accept With Deviation
         *
         * @generated from rpc Scailo.QCSamplesService.AcceptWithDeviation
         */
        readonly acceptWithDeviation: {
            readonly name: "AcceptWithDeviation";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reject
         *
         * @generated from rpc Scailo.QCSamplesService.Reject
         */
        readonly reject: {
            readonly name: "Reject";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Cancel
         *
         * @generated from rpc Scailo.QCSamplesService.Cancel
         */
        readonly cancel: {
            readonly name: "Cancel";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopens a finalized or closed record for further modifications.
         *
         * **Status Transition:** -> `REVISION`
         *
         * **Side Effects:**
         * - Unlocks the record to allow edits.
         * - Logs the required user comment into the audit trail for compliance tracking.
         *
         * @generated from rpc Scailo.QCSamplesService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Adds an audit comment to the record's history without changing its current lifecycle status.
         *
         * @generated from rpc Scailo.QCSamplesService.CommentAdd
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
         * @generated from rpc Scailo.QCSamplesService.SendEmail
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
         * @generated from rpc Scailo.QCSamplesService.AttachVaultFolder
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
         * @generated from rpc Scailo.QCSamplesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a parameter in a qc sample
         *
         * @generated from rpc Scailo.QCSamplesService.UpdateParameter
         */
        readonly updateParameter: {
            readonly name: "UpdateParameter";
            readonly I: typeof QCSamplesServiceParameterUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update a list of parameters in a qc sample
         *
         * @generated from rpc Scailo.QCSamplesService.UpdateParameters
         */
        readonly updateParameters: {
            readonly name: "UpdateParameters";
            readonly I: typeof QCSamplesServiceParameterUpdateRequestsList;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View QCSample Parameter by ID
         *
         * @generated from rpc Scailo.QCSamplesService.ViewParameterByID
         */
        readonly viewParameterByID: {
            readonly name: "ViewParameterByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCSampleParameter;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all parameters for given qc sample UUID
         *
         * @generated from rpc Scailo.QCSamplesService.ViewParameters
         */
        readonly viewParameters: {
            readonly name: "ViewParameters";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSampleParametersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the qc sample parameter
         *
         * @generated from rpc Scailo.QCSamplesService.ViewParameterHistory
         */
        readonly viewParameterHistory: {
            readonly name: "ViewParameterHistory";
            readonly I: typeof QCSampleParameterHistoryRequest;
            readonly O: typeof QCSampleParameterHistoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View qc sample parameters for given qc sample ID with pagination
         *
         * @generated from rpc Scailo.QCSamplesService.ViewPaginatedParameters
         */
        readonly viewPaginatedParameters: {
            readonly name: "ViewPaginatedParameters";
            readonly I: typeof QCSampleParametersSearchRequest;
            readonly O: typeof QCSamplesServicePaginatedParametersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through qc sample parameters with pagination
         *
         * @generated from rpc Scailo.QCSamplesService.SearchParametersWithPagination
         */
        readonly searchParametersWithPagination: {
            readonly name: "SearchParametersWithPagination";
            readonly I: typeof QCSampleParametersSearchRequest;
            readonly O: typeof QCSamplesServicePaginatedParametersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of parameters in each qc sample represented by the given identifier UUID
         *
         * @generated from rpc Scailo.QCSamplesService.DownloadParametersAsCSV
         */
        readonly downloadParametersAsCSV: {
            readonly name: "DownloadParametersAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.QCSamplesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCSample;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.QCSamplesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSample;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.QCSamplesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof QCSample;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.QCSamplesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSample;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.QCSamplesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof QCSamplesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.QCSamplesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSampleAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.QCSamplesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof QCSamplesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.QCSamplesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSamplesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.QCSamplesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof QCSamplesServicePaginationReq;
            readonly O: typeof QCSamplesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Evaluates the download eligibility of a specific record using its universally unique identifier (UUID).
         *
         * This endpoint serves as a lightweight precursor to the actual file retrieval process. It verifies
         * whether the target record supports file extraction by checking if a custom download function has
         * been implemented for the underlying asset. By utilizing this check, client applications can
         * preemptively determine file availability and dynamically adjust user interface elements
         * (e.g., enabling or disabling a download button) without initiating a full, potentially heavy
         * download request.
         *
         * @generated from rpc Scailo.QCSamplesService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
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
         * @generated from rpc Scailo.QCSamplesService.DownloadByUUID
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
         * @generated from rpc Scailo.QCSamplesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof QCSamplesServiceSearchAllReq;
            readonly O: typeof QCSamplesWithMetadataList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.QCSamplesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof QCSamplesServiceFilterReq;
            readonly O: typeof QCSamplesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total count of records matching the given complex filter criteria.
         *
         * @generated from rpc Scailo.QCSamplesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof QCSamplesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all the qc samples in various statuses for the inventory item with the given UUID
         *
         * @generated from rpc Scailo.QCSamplesService.CountsForInventoryItem
         */
        readonly countsForInventoryItem: {
            readonly name: "CountsForInventoryItem";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof QCSamplesCountStatistics;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.QCSamplesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof QCSamplesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=qc_samples.scailo_connect.d.ts.map