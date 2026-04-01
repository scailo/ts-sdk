import { GoodsReceipt, GoodsReceiptAncillaryParameters, GoodsReceiptItem, GoodsReceiptItemHistoryRequest, GoodsReceiptItemProspectiveInfoRequest, GoodsReceiptItemsSearchRequest, GoodsReceiptsItemsList, GoodsReceiptsList, GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest, GoodsReceiptsServiceAutofillRequest, GoodsReceiptsServiceCountReq, GoodsReceiptsServiceCreateRequest, GoodsReceiptsServiceFilterReq, GoodsReceiptsServiceItemCreateRequest, GoodsReceiptsServiceItemUpdateRequest, GoodsReceiptsServiceMultipleItemsCreateRequest, GoodsReceiptsServicePaginatedItemsResponse, GoodsReceiptsServicePaginationReq, GoodsReceiptsServicePaginationResponse, GoodsReceiptsServiceSearchAllReq, GoodsReceiptsServiceUpdateRequest } from "./goods_receipts.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each goods receipt
 *
 * @generated from service Scailo.GoodsReceiptsService
 */
export declare const GoodsReceiptsService: {
    readonly typeName: "Scailo.GoodsReceiptsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.GoodsReceiptsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof GoodsReceiptsServiceCreateRequest;
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
         * @generated from rpc Scailo.GoodsReceiptsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof GoodsReceiptsServiceCreateRequest;
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
         * @generated from rpc Scailo.GoodsReceiptsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof GoodsReceiptsServiceUpdateRequest;
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
         * @generated from rpc Scailo.GoodsReceiptsService.SendForVerification
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
         * @generated from rpc Scailo.GoodsReceiptsService.Verify
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
         * @generated from rpc Scailo.GoodsReceiptsService.Approve
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
         * @generated from rpc Scailo.GoodsReceiptsService.SendForRevision
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
         * @generated from rpc Scailo.GoodsReceiptsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof GoodsReceiptsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.GoodsReceiptsService.Halt
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
         * @generated from rpc Scailo.GoodsReceiptsService.Discard
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
         * @generated from rpc Scailo.GoodsReceiptsService.Restore
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
         * @generated from rpc Scailo.GoodsReceiptsService.Complete
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
         * @generated from rpc Scailo.GoodsReceiptsService.Repeat
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
         * @generated from rpc Scailo.GoodsReceiptsService.Reopen
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
         * @generated from rpc Scailo.GoodsReceiptsService.CommentAdd
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
         * @generated from rpc Scailo.GoodsReceiptsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the goods receipt
         *
         * @generated from rpc Scailo.GoodsReceiptsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof GoodsReceiptsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Receipt can be marked as completed
         *
         * @generated from rpc Scailo.GoodsReceiptsService.IsCompletable
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
         * @generated from rpc Scailo.GoodsReceiptsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a goods receipt
         *
         * @generated from rpc Scailo.GoodsReceiptsService.AddMultipleGoodsReceiptItems
         */
        readonly addMultipleGoodsReceiptItems: {
            readonly name: "AddMultipleGoodsReceiptItems";
            readonly I: typeof GoodsReceiptsServiceMultipleItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a goods receipt
         *
         * @generated from rpc Scailo.GoodsReceiptsService.AddGoodsReceiptItem
         */
        readonly addGoodsReceiptItem: {
            readonly name: "AddGoodsReceiptItem";
            readonly I: typeof GoodsReceiptsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a goods receipt
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ModifyGoodsReceiptItem
         */
        readonly modifyGoodsReceiptItem: {
            readonly name: "ModifyGoodsReceiptItem";
            readonly I: typeof GoodsReceiptsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a goods receipt
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ApproveGoodsReceiptItem
         */
        readonly approveGoodsReceiptItem: {
            readonly name: "ApproveGoodsReceiptItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a goods receipt
         *
         * @generated from rpc Scailo.GoodsReceiptsService.DeleteGoodsReceiptItem
         */
        readonly deleteGoodsReceiptItem: {
            readonly name: "DeleteGoodsReceiptItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a goods receipt
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ReorderGoodsReceiptItems
         */
        readonly reorderGoodsReceiptItems: {
            readonly name: "ReorderGoodsReceiptItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Goods Receipt Item by ID
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewGoodsReceiptItemByID
         */
        readonly viewGoodsReceiptItemByID: {
            readonly name: "ViewGoodsReceiptItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsReceiptItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved goods receipt items for given goods receipt ID
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewApprovedGoodsReceiptItems
         */
        readonly viewApprovedGoodsReceiptItems: {
            readonly name: "ViewApprovedGoodsReceiptItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsReceiptsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved goods receipt items for given goods receipt ID
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewUnapprovedGoodsReceiptItems
         */
        readonly viewUnapprovedGoodsReceiptItems: {
            readonly name: "ViewUnapprovedGoodsReceiptItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof GoodsReceiptsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the goods receipt item
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewGoodsReceiptItemHistory
         */
        readonly viewGoodsReceiptItemHistory: {
            readonly name: "ViewGoodsReceiptItemHistory";
            readonly I: typeof GoodsReceiptItemHistoryRequest;
            readonly O: typeof GoodsReceiptsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved goods receipt items for given goods receipt ID with pagination
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewPaginatedApprovedGoodsReceiptItems
         */
        readonly viewPaginatedApprovedGoodsReceiptItems: {
            readonly name: "ViewPaginatedApprovedGoodsReceiptItems";
            readonly I: typeof GoodsReceiptItemsSearchRequest;
            readonly O: typeof GoodsReceiptsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved goods receipt items for given goods receipt ID with pagination
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewPaginatedUnapprovedGoodsReceiptItems
         */
        readonly viewPaginatedUnapprovedGoodsReceiptItems: {
            readonly name: "ViewPaginatedUnapprovedGoodsReceiptItems";
            readonly I: typeof GoodsReceiptItemsSearchRequest;
            readonly O: typeof GoodsReceiptsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through goods receipt items with pagination
         *
         * @generated from rpc Scailo.GoodsReceiptsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof GoodsReceiptItemsSearchRequest;
            readonly O: typeof GoodsReceiptsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.GoodsReceiptsService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.UploadGoodsReceiptItems
         */
        readonly uploadGoodsReceiptItems: {
            readonly name: "UploadGoodsReceiptItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsReceipt;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsReceipt;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof GoodsReceipt;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof GoodsReceipt;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsReceipt;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsReceiptAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof GoodsReceiptsServicePaginationReq;
            readonly O: typeof GoodsReceiptsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given goods receipt
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.GoodsReceiptsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective goods receipt item info for the given family ID and goods receipt ID
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewProspectiveGoodsReceiptItem
         */
        readonly viewProspectiveGoodsReceiptItem: {
            readonly name: "ViewProspectiveGoodsReceiptItem";
            readonly I: typeof GoodsReceiptItemProspectiveInfoRequest;
            readonly O: typeof GoodsReceiptsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.GoodsReceiptsService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download goods receipt with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.GoodsReceiptsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the goods receipt with the given IdentifierUUID
         *
         * @generated from rpc Scailo.GoodsReceiptsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the associated vendor invoice information that is denoted by the identifier in the response for the goods receipt that is denoted by the identifier UUID in the request
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewAssociatedVendorInvoiceInfo
         */
        readonly viewAssociatedVendorInvoiceInfo: {
            readonly name: "ViewAssociatedVendorInvoiceInfo";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Receipt has been billed
         *
         * @generated from rpc Scailo.GoodsReceiptsService.IsBilled
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
         * @generated from rpc Scailo.GoodsReceiptsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof GoodsReceiptsServiceSearchAllReq;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof GoodsReceiptsServiceFilterReq;
            readonly O: typeof GoodsReceiptsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.GoodsReceiptsService.CountInStatus
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
         * @generated from rpc Scailo.GoodsReceiptsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof GoodsReceiptsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.GoodsReceiptsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof GoodsReceiptsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=goods_receipts.scailo_connect.d.ts.map