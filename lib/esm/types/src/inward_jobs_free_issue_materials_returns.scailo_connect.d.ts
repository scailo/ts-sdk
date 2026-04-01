import { InwardJobFreeIssueMaterialReturn, InwardJobFreeIssueMaterialReturnAncillaryParameters, InwardJobFreeIssueMaterialReturnItem, InwardJobFreeIssueMaterialReturnItemHistoryRequest, InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest, InwardJobFreeIssueMaterialReturnItemsSearchRequest, InwardJobsFreeIssueMaterialsReturnsItemsList, InwardJobsFreeIssueMaterialsReturnsList, InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest, InwardJobsFreeIssueMaterialsReturnsServiceCountReq, InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest, InwardJobsFreeIssueMaterialsReturnsServiceFilterReq, InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest, InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest, InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse, InwardJobsFreeIssueMaterialsReturnsServicePaginationReq, InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse, InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq, InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest } from "./inward_jobs_free_issue_materials_returns.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
import { FilterReturnableInventoryForIdentifierUUID, GenericInventoryList, SearchReturnableInventoryForIdentifierUUID } from "./inventory.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each inward job free issue material return
 *
 * @generated from service Scailo.InwardJobsFreeIssueMaterialsReturnsService
 */
export declare const InwardJobsFreeIssueMaterialsReturnsService: {
    readonly typeName: "Scailo.InwardJobsFreeIssueMaterialsReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SendForVerification
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Verify
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Approve
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SendForRevision
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Halt
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Discard
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Restore
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Complete
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Repeat
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Reopen
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.CommentAdd
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SendEmail
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward Job Free Issue Material Return can be marked as completed
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.AddInwardJobFreeIssueMaterialReturnItem
         */
        readonly addInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "AddInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ModifyInwardJobFreeIssueMaterialReturnItem
         */
        readonly modifyInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ModifyInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ApproveInwardJobFreeIssueMaterialReturnItem
         */
        readonly approveInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ApproveInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DeleteInwardJobFreeIssueMaterialReturnItem
         */
        readonly deleteInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "DeleteInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ReorderInwardJobFreeIssueMaterialReturnItems
         */
        readonly reorderInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ReorderInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Free Issue Material Return Item by ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewInwardJobFreeIssueMaterialReturnItemByID
         */
        readonly viewInwardJobFreeIssueMaterialReturnItemByID: {
            readonly name: "ViewInwardJobFreeIssueMaterialReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterialReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Free Issue Material Return Item by Inventory Hash
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewInwardJobFreeIssueMaterialReturnItemByInventoryHash
         */
        readonly viewInwardJobFreeIssueMaterialReturnItemByInventoryHash: {
            readonly name: "ViewInwardJobFreeIssueMaterialReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof InwardJobFreeIssueMaterialReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job free issue material return items for given inward job free issue material return ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewApprovedInwardJobFreeIssueMaterialReturnItems
         */
        readonly viewApprovedInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewApprovedInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job free issue material return items for given inward job free issue material return ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewUnapprovedInwardJobFreeIssueMaterialReturnItems
         */
        readonly viewUnapprovedInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewUnapprovedInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the inward job free issue material return item
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewInwardJobFreeIssueMaterialReturnItemHistory
         */
        readonly viewInwardJobFreeIssueMaterialReturnItemHistory: {
            readonly name: "ViewInwardJobFreeIssueMaterialReturnItemHistory";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemHistoryRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job free issue material return items for given inward job free issue material return ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewPaginatedApprovedInwardJobFreeIssueMaterialReturnItems
         */
        readonly viewPaginatedApprovedInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewPaginatedApprovedInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job free issue material return items for given inward job free issue material return ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewPaginatedUnapprovedInwardJobFreeIssueMaterialReturnItems
         */
        readonly viewPaginatedUnapprovedInwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewPaginatedUnapprovedInwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through inward job free issue material return items with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof InwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterialReturnAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given inward job free issue material return
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward job free issue material return item info for the given family ID and inward job free issue material return ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewProspectiveInwardJobFreeIssueMaterialReturnItem
         */
        readonly viewProspectiveInwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ViewProspectiveInwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search for returnable inventory
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SearchReturnableInventory
         */
        readonly searchReturnableInventory: {
            readonly name: "SearchReturnableInventory";
            readonly I: typeof SearchReturnableInventoryForIdentifierUUID;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter returnable inventory
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.FilterReturnableInventory
         */
        readonly filterReturnableInventory: {
            readonly name: "FilterReturnableInventory";
            readonly I: typeof FilterReturnableInventoryForIdentifierUUID;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download inward job free issue material return with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the inward job free issue material return with the given IdentifierUUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DownloadLabelByUUID
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.CountInStatus
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsReturnsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof InwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=inward_jobs_free_issue_materials_returns.scailo_connect.d.ts.map