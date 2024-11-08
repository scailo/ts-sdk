import { StockIssuance, StockIssuanceItem, StockIssuanceItemHistoryRequest, StockIssuanceItemProspectiveInfoRequest, StockIssuanceItemsSearchRequest, StockIssuancesItemsList, StockIssuancesList, StockIssuancesServiceAlreadyAddedQuantityForSourceRequest, StockIssuancesServiceAutofillRequest, StockIssuancesServiceCountReq, StockIssuancesServiceCreateRequest, StockIssuancesServiceFilterReq, StockIssuancesServiceItemCreateRequest, StockIssuancesServiceItemUpdateRequest, StockIssuancesServicePaginatedItemsResponse, StockIssuancesServicePaginationReq, StockIssuancesServicePaginationResponse, StockIssuancesServiceSearchAllReq, StockIssuancesServiceUpdateRequest } from "./stock_issuances.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each stock issuance
 *
 * @generated from service Scailo.StockIssuancesService
 */
export declare const StockIssuancesService: {
    readonly typeName: "Scailo.StockIssuancesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.StockIssuancesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof StockIssuancesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.StockIssuancesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof StockIssuancesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.StockIssuancesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof StockIssuancesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.StockIssuancesService.SendForVerification
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
         * @generated from rpc Scailo.StockIssuancesService.Verify
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
         * @generated from rpc Scailo.StockIssuancesService.Approve
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
         * @generated from rpc Scailo.StockIssuancesService.SendForRevision
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
         * @generated from rpc Scailo.StockIssuancesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof StockIssuancesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.StockIssuancesService.Halt
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
         * @generated from rpc Scailo.StockIssuancesService.Discard
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
         * @generated from rpc Scailo.StockIssuancesService.Restore
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
         * @generated from rpc Scailo.StockIssuancesService.Complete
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
         * @generated from rpc Scailo.StockIssuancesService.Repeat
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
         * @generated from rpc Scailo.StockIssuancesService.Reopen
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
         * @generated from rpc Scailo.StockIssuancesService.CommentAdd
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
         * @generated from rpc Scailo.StockIssuancesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the stock issuance
         *
         * @generated from rpc Scailo.StockIssuancesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof StockIssuancesServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Stock Issuance can be marked as completed
         *
         * @generated from rpc Scailo.StockIssuancesService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a stock issuance
         *
         * @generated from rpc Scailo.StockIssuancesService.AddStockIssuanceItem
         */
        readonly addStockIssuanceItem: {
            readonly name: "AddStockIssuanceItem";
            readonly I: typeof StockIssuancesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a stock issuance
         *
         * @generated from rpc Scailo.StockIssuancesService.ModifyStockIssuanceItem
         */
        readonly modifyStockIssuanceItem: {
            readonly name: "ModifyStockIssuanceItem";
            readonly I: typeof StockIssuancesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a stock issuance
         *
         * @generated from rpc Scailo.StockIssuancesService.ApproveStockIssuanceItem
         */
        readonly approveStockIssuanceItem: {
            readonly name: "ApproveStockIssuanceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a stock issuance
         *
         * @generated from rpc Scailo.StockIssuancesService.DeleteStockIssuanceItem
         */
        readonly deleteStockIssuanceItem: {
            readonly name: "DeleteStockIssuanceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a stock issuance
         *
         * @generated from rpc Scailo.StockIssuancesService.ReorderStockIssuanceItems
         */
        readonly reorderStockIssuanceItems: {
            readonly name: "ReorderStockIssuanceItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Issuance Item by ID
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewStockIssuanceItemByID
         */
        readonly viewStockIssuanceItemByID: {
            readonly name: "ViewStockIssuanceItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockIssuanceItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Issuance Item by Inventory Hash
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewStockIssuanceItemByInventoryHash
         */
        readonly viewStockIssuanceItemByInventoryHash: {
            readonly name: "ViewStockIssuanceItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof StockIssuanceItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock issuance items for given stock issuance ID
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewApprovedStockIssuanceItems
         */
        readonly viewApprovedStockIssuanceItems: {
            readonly name: "ViewApprovedStockIssuanceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockIssuancesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock issuance items for given stock issuance ID
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewUnapprovedStockIssuanceItems
         */
        readonly viewUnapprovedStockIssuanceItems: {
            readonly name: "ViewUnapprovedStockIssuanceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockIssuancesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the stock issuance item
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewStockIssuanceItemHistory
         */
        readonly viewStockIssuanceItemHistory: {
            readonly name: "ViewStockIssuanceItemHistory";
            readonly I: typeof StockIssuanceItemHistoryRequest;
            readonly O: typeof StockIssuancesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock issuance items for given stock issuance ID with pagination
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewPaginatedApprovedStockIssuanceItems
         */
        readonly viewPaginatedApprovedStockIssuanceItems: {
            readonly name: "ViewPaginatedApprovedStockIssuanceItems";
            readonly I: typeof StockIssuanceItemsSearchRequest;
            readonly O: typeof StockIssuancesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock issuance items for given stock issuance ID with pagination
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewPaginatedUnapprovedStockIssuanceItems
         */
        readonly viewPaginatedUnapprovedStockIssuanceItems: {
            readonly name: "ViewPaginatedUnapprovedStockIssuanceItems";
            readonly I: typeof StockIssuanceItemsSearchRequest;
            readonly O: typeof StockIssuancesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through stock issuance items with pagination
         *
         * @generated from rpc Scailo.StockIssuancesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof StockIssuanceItemsSearchRequest;
            readonly O: typeof StockIssuancesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockIssuance;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof StockIssuancesServicePaginationReq;
            readonly O: typeof StockIssuancesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given stock issuance
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective stock issuance item info for the given family ID and stock issuance ID
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewProspectiveStockIssuanceItem
         */
        readonly viewProspectiveStockIssuanceItem: {
            readonly name: "ViewProspectiveStockIssuanceItem";
            readonly I: typeof StockIssuanceItemProspectiveInfoRequest;
            readonly O: typeof StockIssuancesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.StockIssuancesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof StockIssuancesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the stock issuance with the given IdentifierUUID
         *
         * @generated from rpc Scailo.StockIssuancesService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.StockIssuancesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof StockIssuancesServiceSearchAllReq;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.StockIssuancesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof StockIssuancesServiceFilterReq;
            readonly O: typeof StockIssuancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.StockIssuancesService.CountInStatus
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
         * @generated from rpc Scailo.StockIssuancesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof StockIssuancesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=stock_issuances.scailo_connect.d.ts.map