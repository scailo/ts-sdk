import { StockAudit, StockAuditItem, StockAuditItemHistoryRequest, StockAuditItemProspectiveInfoRequest, StockAuditItemsSearchRequest, StockAuditsItemsList, StockAuditsList, StockAuditsServiceCountReq, StockAuditsServiceCreateRequest, StockAuditsServiceFilterReq, StockAuditsServiceItemCreateRequest, StockAuditsServiceItemUpdateRequest, StockAuditsServicePaginatedItemsResponse, StockAuditsServicePaginationReq, StockAuditsServicePaginationResponse, StockAuditsServiceSearchAllReq, StockAuditsServiceUpdateRequest } from "./stock_audits.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each stock audit
 *
 * @generated from service Scailo.StockAuditsService
 */
export declare const StockAuditsService: {
    readonly typeName: "Scailo.StockAuditsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.StockAuditsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof StockAuditsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.StockAuditsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof StockAuditsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.StockAuditsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof StockAuditsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.StockAuditsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify
         *
         * @generated from rpc Scailo.StockAuditsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve
         *
         * @generated from rpc Scailo.StockAuditsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send For Revision
         *
         * @generated from rpc Scailo.StockAuditsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update revision
         *
         * @generated from rpc Scailo.StockAuditsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof StockAuditsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.StockAuditsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.StockAuditsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore
         *
         * @generated from rpc Scailo.StockAuditsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.StockAuditsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.StockAuditsService.Repeat
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
         * @generated from rpc Scailo.StockAuditsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * @generated from rpc Scailo.StockAuditsService.CommentAdd
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
         * @generated from rpc Scailo.StockAuditsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Stock Audit can be marked as completed
         *
         * @generated from rpc Scailo.StockAuditsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.AddStockAuditItem
         */
        readonly addStockAuditItem: {
            readonly name: "AddStockAuditItem";
            readonly I: typeof StockAuditsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.ModifyStockAuditItem
         */
        readonly modifyStockAuditItem: {
            readonly name: "ModifyStockAuditItem";
            readonly I: typeof StockAuditsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.ApproveStockAuditItem
         */
        readonly approveStockAuditItem: {
            readonly name: "ApproveStockAuditItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.DeleteStockAuditItem
         */
        readonly deleteStockAuditItem: {
            readonly name: "DeleteStockAuditItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.ReorderStockAuditItems
         */
        readonly reorderStockAuditItems: {
            readonly name: "ReorderStockAuditItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Audit Item by ID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewStockAuditItemByID
         */
        readonly viewStockAuditItemByID: {
            readonly name: "ViewStockAuditItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockAuditItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Audit Item by Inventory Hash
         *
         * @generated from rpc Scailo.StockAuditsService.ViewStockAuditItemByInventoryHash
         */
        readonly viewStockAuditItemByInventoryHash: {
            readonly name: "ViewStockAuditItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof StockAuditItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock audit items for given stock audit ID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewApprovedStockAuditItems
         */
        readonly viewApprovedStockAuditItems: {
            readonly name: "ViewApprovedStockAuditItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockAuditsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock audit items for given stock audit ID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewUnapprovedStockAuditItems
         */
        readonly viewUnapprovedStockAuditItems: {
            readonly name: "ViewUnapprovedStockAuditItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockAuditsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the stock audit item
         *
         * @generated from rpc Scailo.StockAuditsService.ViewStockAuditItemHistory
         */
        readonly viewStockAuditItemHistory: {
            readonly name: "ViewStockAuditItemHistory";
            readonly I: typeof StockAuditItemHistoryRequest;
            readonly O: typeof StockAuditsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock audit items for given stock audit ID with pagination
         *
         * @generated from rpc Scailo.StockAuditsService.ViewPaginatedApprovedStockAuditItems
         */
        readonly viewPaginatedApprovedStockAuditItems: {
            readonly name: "ViewPaginatedApprovedStockAuditItems";
            readonly I: typeof StockAuditItemsSearchRequest;
            readonly O: typeof StockAuditsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock audit items for given stock audit ID with pagination
         *
         * @generated from rpc Scailo.StockAuditsService.ViewPaginatedUnapprovedStockAuditItems
         */
        readonly viewPaginatedUnapprovedStockAuditItems: {
            readonly name: "ViewPaginatedUnapprovedStockAuditItems";
            readonly I: typeof StockAuditItemsSearchRequest;
            readonly O: typeof StockAuditsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through stock audit items with pagination
         *
         * @generated from rpc Scailo.StockAuditsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof StockAuditItemsSearchRequest;
            readonly O: typeof StockAuditsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.StockAuditsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.StockAuditsService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.StockAuditsService.UploadStockAuditItems
         */
        readonly uploadStockAuditItems: {
            readonly name: "UploadStockAuditItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.StockAuditsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.StockAuditsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.StockAuditsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.StockAuditsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.StockAuditsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof StockAuditsServicePaginationReq;
            readonly O: typeof StockAuditsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.StockAuditsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective stock audit item info for the given family ID and stock audit ID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewProspectiveStockAuditItem
         */
        readonly viewProspectiveStockAuditItem: {
            readonly name: "ViewProspectiveStockAuditItem";
            readonly I: typeof StockAuditItemProspectiveInfoRequest;
            readonly O: typeof StockAuditsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the stock audit with the given IdentifierUUID
         *
         * @generated from rpc Scailo.StockAuditsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download stock audit with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.StockAuditsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.StockAuditsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof StockAuditsServiceSearchAllReq;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.StockAuditsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof StockAuditsServiceFilterReq;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.StockAuditsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.StockAuditsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof StockAuditsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.StockAuditsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof StockAuditsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=stock_audits.scailo_connect.d.ts.map