import { SalesReturn, SalesReturnItem, SalesReturnItemHistoryRequest, SalesReturnItemProspectiveInfoRequest, SalesReturnItemsSearchRequest, SalesReturnsItemsList, SalesReturnsList, SalesReturnsServiceAlreadyAddedQuantityForSourceRequest, SalesReturnsServiceCountReq, SalesReturnsServiceCreateRequest, SalesReturnsServiceFilterReq, SalesReturnsServiceItemCreateRequest, SalesReturnsServiceItemUpdateRequest, SalesReturnsServicePaginatedItemsResponse, SalesReturnsServicePaginationReq, SalesReturnsServicePaginationResponse, SalesReturnsServiceSearchAllReq, SalesReturnsServiceUpdateRequest } from "./sales_returns.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each sales return
 *
 * @generated from service Scailo.SalesReturnsService
 */
export declare const SalesReturnsService: {
    readonly typeName: "Scailo.SalesReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.SalesReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SalesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.SalesReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SalesReturnsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.SalesReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SalesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.SalesReturnsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify
         *
         * @generated from rpc Scailo.SalesReturnsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve
         *
         * @generated from rpc Scailo.SalesReturnsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send For Revision
         *
         * @generated from rpc Scailo.SalesReturnsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update revision
         *
         * @generated from rpc Scailo.SalesReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesReturnsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.SalesReturnsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.SalesReturnsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore
         *
         * @generated from rpc Scailo.SalesReturnsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.SalesReturnsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.SalesReturnsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.SalesReturnsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * @generated from rpc Scailo.SalesReturnsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Scailo.SalesReturnsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Sales Return can be marked as completed
         *
         * @generated from rpc Scailo.SalesReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a sales return
         *
         * @generated from rpc Scailo.SalesReturnsService.AddSalesReturnItem
         */
        readonly addSalesReturnItem: {
            readonly name: "AddSalesReturnItem";
            readonly I: typeof SalesReturnsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a sales return
         *
         * @generated from rpc Scailo.SalesReturnsService.ModifySalesReturnItem
         */
        readonly modifySalesReturnItem: {
            readonly name: "ModifySalesReturnItem";
            readonly I: typeof SalesReturnsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a sales return
         *
         * @generated from rpc Scailo.SalesReturnsService.ApproveSalesReturnItem
         */
        readonly approveSalesReturnItem: {
            readonly name: "ApproveSalesReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a sales return
         *
         * @generated from rpc Scailo.SalesReturnsService.DeleteSalesReturnItem
         */
        readonly deleteSalesReturnItem: {
            readonly name: "DeleteSalesReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a sales return
         *
         * @generated from rpc Scailo.SalesReturnsService.ReorderSalesReturnItems
         */
        readonly reorderSalesReturnItems: {
            readonly name: "ReorderSalesReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Sales Return Item by ID
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewSalesReturnItemByID
         */
        readonly viewSalesReturnItemByID: {
            readonly name: "ViewSalesReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Sales Return Item by Inventory Hash
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewSalesReturnItemByInventoryHash
         */
        readonly viewSalesReturnItemByInventoryHash: {
            readonly name: "ViewSalesReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof SalesReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales return items for given sales return ID
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewApprovedSalesReturnItems
         */
        readonly viewApprovedSalesReturnItems: {
            readonly name: "ViewApprovedSalesReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales return items for given sales return ID
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewUnapprovedSalesReturnItems
         */
        readonly viewUnapprovedSalesReturnItems: {
            readonly name: "ViewUnapprovedSalesReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the sales return item
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewSalesReturnItemHistory
         */
        readonly viewSalesReturnItemHistory: {
            readonly name: "ViewSalesReturnItemHistory";
            readonly I: typeof SalesReturnItemHistoryRequest;
            readonly O: typeof SalesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales return items for given sales return ID with pagination
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewPaginatedApprovedSalesReturnItems
         */
        readonly viewPaginatedApprovedSalesReturnItems: {
            readonly name: "ViewPaginatedApprovedSalesReturnItems";
            readonly I: typeof SalesReturnItemsSearchRequest;
            readonly O: typeof SalesReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales return items for given sales return ID with pagination
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewPaginatedUnapprovedSalesReturnItems
         */
        readonly viewPaginatedUnapprovedSalesReturnItems: {
            readonly name: "ViewPaginatedUnapprovedSalesReturnItems";
            readonly I: typeof SalesReturnItemsSearchRequest;
            readonly O: typeof SalesReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through sales return items with pagination
         *
         * @generated from rpc Scailo.SalesReturnsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof SalesReturnItemsSearchRequest;
            readonly O: typeof SalesReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesReturnsServicePaginationReq;
            readonly O: typeof SalesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given sales return
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective sales return item info for the given family ID and sales return ID
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewProspectiveSalesReturnItem
         */
        readonly viewProspectiveSalesReturnItem: {
            readonly name: "ViewProspectiveSalesReturnItem";
            readonly I: typeof SalesReturnItemProspectiveInfoRequest;
            readonly O: typeof SalesReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Sales Return has been billed
         *
         * @generated from rpc Scailo.SalesReturnsService.IsBilled
         */
        readonly isBilled: {
            readonly name: "IsBilled";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.SalesReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof SalesReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download sales return with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.SalesReturnsService.DownloadByUUID
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
         * @generated from rpc Scailo.SalesReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SalesReturnsServiceSearchAllReq;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.SalesReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SalesReturnsServiceFilterReq;
            readonly O: typeof SalesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.SalesReturnsService.CountInStatus
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
         * @generated from rpc Scailo.SalesReturnsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SalesReturnsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=sales_returns.scailo_connect.d.ts.map