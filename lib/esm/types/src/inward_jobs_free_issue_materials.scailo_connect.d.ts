import { InwardJobFreeIssueMaterial, InwardJobFreeIssueMaterialAncillaryParameters, InwardJobFreeIssueMaterialItem, InwardJobFreeIssueMaterialItemHistoryRequest, InwardJobFreeIssueMaterialItemProspectiveInfoRequest, InwardJobFreeIssueMaterialItemsSearchRequest, InwardJobsFreeIssueMaterialsItemsList, InwardJobsFreeIssueMaterialsList, InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest, InwardJobsFreeIssueMaterialsServiceAutofillRequest, InwardJobsFreeIssueMaterialsServiceCountReq, InwardJobsFreeIssueMaterialsServiceCreateRequest, InwardJobsFreeIssueMaterialsServiceFilterReq, InwardJobsFreeIssueMaterialsServiceItemCreateRequest, InwardJobsFreeIssueMaterialsServiceItemUpdateRequest, InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse, InwardJobsFreeIssueMaterialsServicePaginationReq, InwardJobsFreeIssueMaterialsServicePaginationResponse, InwardJobsFreeIssueMaterialsServiceSearchAllReq, InwardJobsFreeIssueMaterialsServiceUpdateRequest } from "./inward_jobs_free_issue_materials.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each inward job free issue material
 *
 * @generated from service Scailo.InwardJobsFreeIssueMaterialsService
 */
export declare const InwardJobsFreeIssueMaterialsService: {
    readonly typeName: "Scailo.InwardJobsFreeIssueMaterialsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceCreateRequest;
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceCreateRequest;
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceUpdateRequest;
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SendForVerification
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Verify
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Approve
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SendForRevision
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Halt
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Discard
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Marks the record as finalized and fully processed.
         *
         * **Status Transition:** -> `COMPLETED`
         *
         * **Side Effects:**
         * - Locks the record from further modification.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Creates a new record based on an existing one (cloning).
         *
         * This is useful for repeating records or correcting finalized records by starting fresh.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Reopen
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward Job Free Issue Material can be marked as completed
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.AddInwardJobFreeIssueMaterialItem
         */
        readonly addInwardJobFreeIssueMaterialItem: {
            readonly name: "AddInwardJobFreeIssueMaterialItem";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ModifyInwardJobFreeIssueMaterialItem
         */
        readonly modifyInwardJobFreeIssueMaterialItem: {
            readonly name: "ModifyInwardJobFreeIssueMaterialItem";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ApproveInwardJobFreeIssueMaterialItem
         */
        readonly approveInwardJobFreeIssueMaterialItem: {
            readonly name: "ApproveInwardJobFreeIssueMaterialItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DeleteInwardJobFreeIssueMaterialItem
         */
        readonly deleteInwardJobFreeIssueMaterialItem: {
            readonly name: "DeleteInwardJobFreeIssueMaterialItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ReorderInwardJobFreeIssueMaterialItems
         */
        readonly reorderInwardJobFreeIssueMaterialItems: {
            readonly name: "ReorderInwardJobFreeIssueMaterialItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Free Issue Material Item by ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewInwardJobFreeIssueMaterialItemByID
         */
        readonly viewInwardJobFreeIssueMaterialItemByID: {
            readonly name: "ViewInwardJobFreeIssueMaterialItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterialItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job free issue material items for given inward job free issue material ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewApprovedInwardJobFreeIssueMaterialItems
         */
        readonly viewApprovedInwardJobFreeIssueMaterialItems: {
            readonly name: "ViewApprovedInwardJobFreeIssueMaterialItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsFreeIssueMaterialsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job free issue material items for given inward job free issue material ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewUnapprovedInwardJobFreeIssueMaterialItems
         */
        readonly viewUnapprovedInwardJobFreeIssueMaterialItems: {
            readonly name: "ViewUnapprovedInwardJobFreeIssueMaterialItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsFreeIssueMaterialsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the inward job free issue material item
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewInwardJobFreeIssueMaterialItemHistory
         */
        readonly viewInwardJobFreeIssueMaterialItemHistory: {
            readonly name: "ViewInwardJobFreeIssueMaterialItemHistory";
            readonly I: typeof InwardJobFreeIssueMaterialItemHistoryRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job free issue material items for given inward job free issue material ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewPaginatedApprovedInwardJobFreeIssueMaterialItems
         */
        readonly viewPaginatedApprovedInwardJobFreeIssueMaterialItems: {
            readonly name: "ViewPaginatedApprovedInwardJobFreeIssueMaterialItems";
            readonly I: typeof InwardJobFreeIssueMaterialItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job free issue material items for given inward job free issue material ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewPaginatedUnapprovedInwardJobFreeIssueMaterialItems
         */
        readonly viewPaginatedUnapprovedInwardJobFreeIssueMaterialItems: {
            readonly name: "ViewPaginatedUnapprovedInwardJobFreeIssueMaterialItems";
            readonly I: typeof InwardJobFreeIssueMaterialItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through inward job free issue material items with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof InwardJobFreeIssueMaterialItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload items
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof InwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterialAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof InwardJobsFreeIssueMaterialsServicePaginationReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter prospective families for the record represented by the given UUID identifier
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward job free issue material item info for the given family ID and inward job free issue material ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewProspectiveInwardJobFreeIssueMaterialItem
         */
        readonly viewProspectiveInwardJobFreeIssueMaterialItem: {
            readonly name: "ViewProspectiveInwardJobFreeIssueMaterialItem";
            readonly I: typeof InwardJobFreeIssueMaterialItemProspectiveInfoRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download inward job free issue material with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the inward job free issue material with the given IdentifierUUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceSearchAllReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceFilterReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.CountInStatus
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=inward_jobs_free_issue_materials.scailo_connect.d.ts.map