import { GoodsDispatch, GoodsDispatchAncillaryParameters, GoodsDispatchesItemsList, GoodsDispatchesList, GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest, GoodsDispatchesServiceAutofillRequest, GoodsDispatchesServiceCountReq, GoodsDispatchesServiceCreateRequest, GoodsDispatchesServiceFilterReq, GoodsDispatchesServiceItemCreateRequest, GoodsDispatchesServiceItemUpdateRequest, GoodsDispatchesServiceMultipleItemsCreateRequest, GoodsDispatchesServicePaginatedItemsResponse, GoodsDispatchesServicePaginationReq, GoodsDispatchesServicePaginationResponse, GoodsDispatchesServiceSearchAllReq, GoodsDispatchesServiceUpdateRequest, GoodsDispatchItem, GoodsDispatchItemHistoryRequest, GoodsDispatchItemProspectiveInfoRequest, GoodsDispatchItemsSearchRequest } from "./goods_dispatches.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each goods dispatch
 *
 * @generated from service Scailo.GoodsDispatchesService
 */
export declare const GoodsDispatchesService: {
    readonly typeName: "Scailo.GoodsDispatchesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.GoodsDispatchesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof GoodsDispatchesServiceCreateRequest;
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
         * @generated from rpc Scailo.GoodsDispatchesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof GoodsDispatchesServiceCreateRequest;
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
         * @generated from rpc Scailo.GoodsDispatchesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof GoodsDispatchesServiceUpdateRequest;
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
         * @generated from rpc Scailo.GoodsDispatchesService.SendForVerification
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
         * @generated from rpc Scailo.GoodsDispatchesService.Verify
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
         * @generated from rpc Scailo.GoodsDispatchesService.Approve
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
         * @generated from rpc Scailo.GoodsDispatchesService.SendForRevision
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
         * @generated from rpc Scailo.GoodsDispatchesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof GoodsDispatchesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.GoodsDispatchesService.Halt
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
         * @generated from rpc Scailo.GoodsDispatchesService.Discard
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
         * @generated from rpc Scailo.GoodsDispatchesService.Restore
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
         * @generated from rpc Scailo.GoodsDispatchesService.Complete
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
         * @generated from rpc Scailo.GoodsDispatchesService.Repeat
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
         * @generated from rpc Scailo.GoodsDispatchesService.Reopen
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
         * @generated from rpc Scailo.GoodsDispatchesService.CommentAdd
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
         * @generated from rpc Scailo.GoodsDispatchesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the goods dispatch
         *
         * @generated from rpc Scailo.GoodsDispatchesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof GoodsDispatchesServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Dispatch can be marked as completed
         *
         * @generated from rpc Scailo.GoodsDispatchesService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a goods dispatch
         *
         * @generated from rpc Scailo.GoodsDispatchesService.AddMultipleGoodsDispatchItems
         */
        readonly addMultipleGoodsDispatchItems: {
            readonly name: "AddMultipleGoodsDispatchItems";
            readonly I: typeof GoodsDispatchesServiceMultipleItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a goods dispatch
         *
         * @generated from rpc Scailo.GoodsDispatchesService.AddGoodsDispatchItem
         */
        readonly addGoodsDispatchItem: {
            readonly name: "AddGoodsDispatchItem";
            readonly I: typeof GoodsDispatchesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a goods dispatch
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ModifyGoodsDispatchItem
         */
        readonly modifyGoodsDispatchItem: {
            readonly name: "ModifyGoodsDispatchItem";
            readonly I: typeof GoodsDispatchesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a goods dispatch
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ApproveGoodsDispatchItem
         */
        readonly approveGoodsDispatchItem: {
            readonly name: "ApproveGoodsDispatchItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a goods dispatch
         *
         * @generated from rpc Scailo.GoodsDispatchesService.DeleteGoodsDispatchItem
         */
        readonly deleteGoodsDispatchItem: {
            readonly name: "DeleteGoodsDispatchItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a goods dispatch
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ReorderGoodsDispatchItems
         */
        readonly reorderGoodsDispatchItems: {
            readonly name: "ReorderGoodsDispatchItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Goods Dispatch Item by ID
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewGoodsDispatchItemByID
         */
        readonly viewGoodsDispatchItemByID: {
            readonly name: "ViewGoodsDispatchItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsDispatchItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Goods Dispatch Item by Inventory Hash
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewGoodsDispatchItemByInventoryHash
         */
        readonly viewGoodsDispatchItemByInventoryHash: {
            readonly name: "ViewGoodsDispatchItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof GoodsDispatchItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved goods dispatch items for given goods dispatch ID
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewApprovedGoodsDispatchItems
         */
        readonly viewApprovedGoodsDispatchItems: {
            readonly name: "ViewApprovedGoodsDispatchItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsDispatchesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved goods dispatch items for given goods dispatch ID
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewUnapprovedGoodsDispatchItems
         */
        readonly viewUnapprovedGoodsDispatchItems: {
            readonly name: "ViewUnapprovedGoodsDispatchItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsDispatchesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the goods dispatch item
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewGoodsDispatchItemHistory
         */
        readonly viewGoodsDispatchItemHistory: {
            readonly name: "ViewGoodsDispatchItemHistory";
            readonly I: typeof GoodsDispatchItemHistoryRequest;
            readonly O: typeof GoodsDispatchesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved goods dispatch items for given goods dispatch ID with pagination
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewPaginatedApprovedGoodsDispatchItems
         */
        readonly viewPaginatedApprovedGoodsDispatchItems: {
            readonly name: "ViewPaginatedApprovedGoodsDispatchItems";
            readonly I: typeof GoodsDispatchItemsSearchRequest;
            readonly O: typeof GoodsDispatchesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved goods dispatch items for given goods dispatch ID with pagination
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewPaginatedUnapprovedGoodsDispatchItems
         */
        readonly viewPaginatedUnapprovedGoodsDispatchItems: {
            readonly name: "ViewPaginatedUnapprovedGoodsDispatchItems";
            readonly I: typeof GoodsDispatchItemsSearchRequest;
            readonly O: typeof GoodsDispatchesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through goods dispatch items with pagination
         *
         * @generated from rpc Scailo.GoodsDispatchesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof GoodsDispatchItemsSearchRequest;
            readonly O: typeof GoodsDispatchesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.GoodsDispatchesService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.GoodsDispatchesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsDispatch;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsDispatch;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof GoodsDispatch;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsDispatch;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsDispatch;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsDispatchAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof GoodsDispatchesServicePaginationReq;
            readonly O: typeof GoodsDispatchesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given goods dispatch
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.GoodsDispatchesService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective goods dispatch item info for the given family ID and goods dispatch ID
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewProspectiveGoodsDispatchItem
         */
        readonly viewProspectiveGoodsDispatchItem: {
            readonly name: "ViewProspectiveGoodsDispatchItem";
            readonly I: typeof GoodsDispatchItemProspectiveInfoRequest;
            readonly O: typeof GoodsDispatchesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.GoodsDispatchesService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download goods dispatch with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.GoodsDispatchesService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the goods dispatch with the given IdentifierUUID
         *
         * @generated from rpc Scailo.GoodsDispatchesService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the associated sales invoice information that is denoted by the identifier in the response for the goods dispatch that is denoted by the identifier UUID in the request
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewAssociatedSalesInvoiceInfo
         */
        readonly viewAssociatedSalesInvoiceInfo: {
            readonly name: "ViewAssociatedSalesInvoiceInfo";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Dispatch has been billed
         *
         * @generated from rpc Scailo.GoodsDispatchesService.IsBilled
         */
        readonly isBilled: {
            readonly name: "IsBilled";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof GoodsDispatchesServiceSearchAllReq;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof GoodsDispatchesServiceFilterReq;
            readonly O: typeof GoodsDispatchesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.GoodsDispatchesService.CountInStatus
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
         * @generated from rpc Scailo.GoodsDispatchesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof GoodsDispatchesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.GoodsDispatchesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof GoodsDispatchesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=goods_dispatches.scailo_connect.d.ts.map