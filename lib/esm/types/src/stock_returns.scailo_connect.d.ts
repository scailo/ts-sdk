import { StockReturn, StockReturnItem, StockReturnItemHistoryRequest, StockReturnItemProspectiveInfoRequest, StockReturnItemsSearchRequest, StockReturnsItemsList, StockReturnsList, StockReturnsServiceAlreadyAddedQuantityForSourceRequest, StockReturnsServiceCountReq, StockReturnsServiceCreateRequest, StockReturnsServiceFilterReq, StockReturnsServiceItemCreateRequest, StockReturnsServiceItemUpdateRequest, StockReturnsServicePaginatedItemsResponse, StockReturnsServicePaginationReq, StockReturnsServicePaginationResponse, StockReturnsServiceSearchAllReq, StockReturnsServiceUpdateRequest } from "./stock_returns.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest, SimpleSearchReq } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each stock return
 *
 * @generated from service Scailo.StockReturnsService
 */
export declare const StockReturnsService: {
    readonly typeName: "Scailo.StockReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.StockReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof StockReturnsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.StockReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof StockReturnsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.StockReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof StockReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.StockReturnsService.SendForVerification
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
         * @generated from rpc Scailo.StockReturnsService.Verify
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
         * @generated from rpc Scailo.StockReturnsService.Approve
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
         * @generated from rpc Scailo.StockReturnsService.SendForRevision
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
         * @generated from rpc Scailo.StockReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof StockReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.StockReturnsService.Halt
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
         * @generated from rpc Scailo.StockReturnsService.Discard
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
         * @generated from rpc Scailo.StockReturnsService.Restore
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
         * @generated from rpc Scailo.StockReturnsService.Complete
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
         * @generated from rpc Scailo.StockReturnsService.Repeat
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
         * @generated from rpc Scailo.StockReturnsService.Reopen
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
         * @generated from rpc Scailo.StockReturnsService.CommentAdd
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
         * @generated from rpc Scailo.StockReturnsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Stock Return can be marked as completed
         *
         * @generated from rpc Scailo.StockReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a stock return
         *
         * @generated from rpc Scailo.StockReturnsService.AddStockReturnItem
         */
        readonly addStockReturnItem: {
            readonly name: "AddStockReturnItem";
            readonly I: typeof StockReturnsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a stock return
         *
         * @generated from rpc Scailo.StockReturnsService.ModifyStockReturnItem
         */
        readonly modifyStockReturnItem: {
            readonly name: "ModifyStockReturnItem";
            readonly I: typeof StockReturnsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a stock return
         *
         * @generated from rpc Scailo.StockReturnsService.ApproveStockReturnItem
         */
        readonly approveStockReturnItem: {
            readonly name: "ApproveStockReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a stock return
         *
         * @generated from rpc Scailo.StockReturnsService.DeleteStockReturnItem
         */
        readonly deleteStockReturnItem: {
            readonly name: "DeleteStockReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a stock return
         *
         * @generated from rpc Scailo.StockReturnsService.ReorderStockReturnItems
         */
        readonly reorderStockReturnItems: {
            readonly name: "ReorderStockReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Return Item by ID
         *
         * @generated from rpc Scailo.StockReturnsService.ViewStockReturnItemByID
         */
        readonly viewStockReturnItemByID: {
            readonly name: "ViewStockReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Return Item by Inventory Hash
         *
         * @generated from rpc Scailo.StockReturnsService.ViewStockReturnItemByInventoryHash
         */
        readonly viewStockReturnItemByInventoryHash: {
            readonly name: "ViewStockReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof StockReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock return items for given stock return ID
         *
         * @generated from rpc Scailo.StockReturnsService.ViewApprovedStockReturnItems
         */
        readonly viewApprovedStockReturnItems: {
            readonly name: "ViewApprovedStockReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock return items for given stock return ID
         *
         * @generated from rpc Scailo.StockReturnsService.ViewUnapprovedStockReturnItems
         */
        readonly viewUnapprovedStockReturnItems: {
            readonly name: "ViewUnapprovedStockReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the stock return item
         *
         * @generated from rpc Scailo.StockReturnsService.ViewStockReturnItemHistory
         */
        readonly viewStockReturnItemHistory: {
            readonly name: "ViewStockReturnItemHistory";
            readonly I: typeof StockReturnItemHistoryRequest;
            readonly O: typeof StockReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock return items for given stock return ID with pagination
         *
         * @generated from rpc Scailo.StockReturnsService.ViewPaginatedApprovedStockReturnItems
         */
        readonly viewPaginatedApprovedStockReturnItems: {
            readonly name: "ViewPaginatedApprovedStockReturnItems";
            readonly I: typeof StockReturnItemsSearchRequest;
            readonly O: typeof StockReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock return items for given stock return ID with pagination
         *
         * @generated from rpc Scailo.StockReturnsService.ViewPaginatedUnapprovedStockReturnItems
         */
        readonly viewPaginatedUnapprovedStockReturnItems: {
            readonly name: "ViewPaginatedUnapprovedStockReturnItems";
            readonly I: typeof StockReturnItemsSearchRequest;
            readonly O: typeof StockReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through stock return items with pagination
         *
         * @generated from rpc Scailo.StockReturnsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof StockReturnItemsSearchRequest;
            readonly O: typeof StockReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.StockReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.StockReturnsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.StockReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.StockReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.StockReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof StockReturnsServicePaginationReq;
            readonly O: typeof StockReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given stock return
         *
         * @generated from rpc Scailo.StockReturnsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.StockReturnsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective stock return item info for the given family ID and stock return ID
         *
         * @generated from rpc Scailo.StockReturnsService.ViewProspectiveStockReturnItem
         */
        readonly viewProspectiveStockReturnItem: {
            readonly name: "ViewProspectiveStockReturnItem";
            readonly I: typeof StockReturnItemProspectiveInfoRequest;
            readonly O: typeof StockReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.StockReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof StockReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.StockReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof StockReturnsServiceSearchAllReq;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.StockReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof StockReturnsServiceFilterReq;
            readonly O: typeof StockReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.StockReturnsService.CountInStatus
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
         * @generated from rpc Scailo.StockReturnsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof StockReturnsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=stock_returns.scailo_connect.d.ts.map