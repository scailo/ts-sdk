import { GoodsDispatch, GoodsDispatchAncillaryParameters, GoodsDispatchesItemsList, GoodsDispatchesList, GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest, GoodsDispatchesServiceAutofillRequest, GoodsDispatchesServiceCountReq, GoodsDispatchesServiceCreateRequest, GoodsDispatchesServiceFilterReq, GoodsDispatchesServiceItemCreateRequest, GoodsDispatchesServiceItemUpdateRequest, GoodsDispatchesServicePaginatedItemsResponse, GoodsDispatchesServicePaginationReq, GoodsDispatchesServicePaginationResponse, GoodsDispatchesServiceSearchAllReq, GoodsDispatchesServiceUpdateRequest, GoodsDispatchItem, GoodsDispatchItemHistoryRequest, GoodsDispatchItemProspectiveInfoRequest, GoodsDispatchItemsSearchRequest } from "./goods_dispatches.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
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
         * Create and save as draft
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
         * Update draft
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
         * Send for verification
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
         * Verify
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
         * Approve
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
         * Send For Revision
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
         * Update revision
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
         * Halt
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
         * Discard
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
         * Restore
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
         * Complete
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
         * Repeat
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
         * Add comment
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
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
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
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
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
         * View by ID
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
         * View by UUID
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
         * View only essential components by ID (without logs)
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
         * View only essential components (without logs) that matches the given UUID
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
         * View all records with the given IDs
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
         * View all
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
         * View all with the given entity UUID
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
         * View with pagination
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
         * Other view operations
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
         * View the associated sales invoice ID that is denoted by the identifier in the response for the goods dispatch that is denoted by the identifier in the request
         *
         * @generated from rpc Scailo.GoodsDispatchesService.ViewAssociatedSalesInvoiceID
         */
        readonly viewAssociatedSalesInvoiceID: {
            readonly name: "ViewAssociatedSalesInvoiceID";
            readonly I: typeof Identifier;
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
            readonly I: typeof Identifier;
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
         * View all that match the given search key
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
         * View all that match the given filter criteria
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
         * Count in status
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
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.GoodsDispatchesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof GoodsDispatchesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=goods_dispatches.scailo_connect.d.ts.map