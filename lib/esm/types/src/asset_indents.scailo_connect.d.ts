import { AssetIndent, AssetIndentItem, AssetIndentItemHistoryRequest, AssetIndentItemProspectiveInfoRequest, AssetIndentItemsSearchRequest, AssetIndentsItemsList, AssetIndentsList, AssetIndentsServiceCountReq, AssetIndentsServiceCreateRequest, AssetIndentsServiceFilterReq, AssetIndentsServiceItemCreateRequest, AssetIndentsServiceItemUpdateRequest, AssetIndentsServicePaginatedItemsResponse, AssetIndentsServicePaginationReq, AssetIndentsServicePaginationResponse, AssetIndentsServiceSearchAllReq, AssetIndentsServiceUpdateRequest } from "./asset_indents.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, QuantityResponse, ReorderItemsRequest } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each asset indent
 *
 * @generated from service Scailo.AssetIndentsService
 */
export declare const AssetIndentsService: {
    readonly typeName: "Scailo.AssetIndentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.AssetIndentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof AssetIndentsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.AssetIndentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof AssetIndentsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.AssetIndentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof AssetIndentsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.AssetIndentsService.SendForVerification
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
         * @generated from rpc Scailo.AssetIndentsService.Verify
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
         * @generated from rpc Scailo.AssetIndentsService.Approve
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
         * @generated from rpc Scailo.AssetIndentsService.SendForRevision
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
         * @generated from rpc Scailo.AssetIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof AssetIndentsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.AssetIndentsService.Halt
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
         * @generated from rpc Scailo.AssetIndentsService.Discard
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
         * @generated from rpc Scailo.AssetIndentsService.Restore
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
         * @generated from rpc Scailo.AssetIndentsService.Complete
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
         * @generated from rpc Scailo.AssetIndentsService.Repeat
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
         * @generated from rpc Scailo.AssetIndentsService.Reopen
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
         * @generated from rpc Scailo.AssetIndentsService.CommentAdd
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
         * @generated from rpc Scailo.AssetIndentsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Asset Indent can be marked as completed
         *
         * @generated from rpc Scailo.AssetIndentsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a asset indent
         *
         * @generated from rpc Scailo.AssetIndentsService.AddAssetIndentItem
         */
        readonly addAssetIndentItem: {
            readonly name: "AddAssetIndentItem";
            readonly I: typeof AssetIndentsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a asset indent
         *
         * @generated from rpc Scailo.AssetIndentsService.ModifyAssetIndentItem
         */
        readonly modifyAssetIndentItem: {
            readonly name: "ModifyAssetIndentItem";
            readonly I: typeof AssetIndentsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a asset indent
         *
         * @generated from rpc Scailo.AssetIndentsService.ApproveAssetIndentItem
         */
        readonly approveAssetIndentItem: {
            readonly name: "ApproveAssetIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a asset indent
         *
         * @generated from rpc Scailo.AssetIndentsService.DeleteAssetIndentItem
         */
        readonly deleteAssetIndentItem: {
            readonly name: "DeleteAssetIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a asset indent
         *
         * @generated from rpc Scailo.AssetIndentsService.ReorderAssetIndentItems
         */
        readonly reorderAssetIndentItems: {
            readonly name: "ReorderAssetIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Asset Indent Item by ID
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewAssetIndentItemByID
         */
        readonly viewAssetIndentItemByID: {
            readonly name: "ViewAssetIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof AssetIndentItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved asset indent items for given asset indent ID
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewApprovedAssetIndentItems
         */
        readonly viewApprovedAssetIndentItems: {
            readonly name: "ViewApprovedAssetIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof AssetIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved asset indent items for given asset indent ID
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewUnapprovedAssetIndentItems
         */
        readonly viewUnapprovedAssetIndentItems: {
            readonly name: "ViewUnapprovedAssetIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof AssetIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the asset indent item
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewAssetIndentItemHistory
         */
        readonly viewAssetIndentItemHistory: {
            readonly name: "ViewAssetIndentItemHistory";
            readonly I: typeof AssetIndentItemHistoryRequest;
            readonly O: typeof AssetIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved asset indent items for given asset indent ID with pagination
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewPaginatedApprovedAssetIndentItems
         */
        readonly viewPaginatedApprovedAssetIndentItems: {
            readonly name: "ViewPaginatedApprovedAssetIndentItems";
            readonly I: typeof AssetIndentItemsSearchRequest;
            readonly O: typeof AssetIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved asset indent items for given asset indent ID with pagination
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewPaginatedUnapprovedAssetIndentItems
         */
        readonly viewPaginatedUnapprovedAssetIndentItems: {
            readonly name: "ViewPaginatedUnapprovedAssetIndentItems";
            readonly I: typeof AssetIndentItemsSearchRequest;
            readonly O: typeof AssetIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through asset indent items with pagination
         *
         * @generated from rpc Scailo.AssetIndentsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof AssetIndentItemsSearchRequest;
            readonly O: typeof AssetIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof AssetIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AssetIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof AssetIndentsServicePaginationReq;
            readonly O: typeof AssetIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given asset indent
         *
         * View prospective asset indent item info for the given family ID and asset indent ID
         * rpc ViewProspectiveAssetIndentItem(AssetIndentItemProspectiveInfoRequest) returns (AssetIndentsServiceItemCreateRequest);
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the added quantity for the family with the given request payload
         *
         * @generated from rpc Scailo.AssetIndentsService.ViewAddedQuantityForFamily
         */
        readonly viewAddedQuantityForFamily: {
            readonly name: "ViewAddedQuantityForFamily";
            readonly I: typeof AssetIndentItemProspectiveInfoRequest;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.AssetIndentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof AssetIndentsServiceSearchAllReq;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.AssetIndentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof AssetIndentsServiceFilterReq;
            readonly O: typeof AssetIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.AssetIndentsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given count criteria
         *
         * @generated from rpc Scailo.AssetIndentsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof AssetIndentsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=asset_indents.scailo_connect.d.ts.map