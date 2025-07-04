import { PurchaseReturn, PurchaseReturnAncillaryParameters, PurchaseReturnItem, PurchaseReturnItemHistoryRequest, PurchaseReturnItemProspectiveInfoRequest, PurchaseReturnItemsSearchRequest, PurchasesReturnsItemsList, PurchasesReturnsList, PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest, PurchasesReturnsServiceCountReq, PurchasesReturnsServiceCreateRequest, PurchasesReturnsServiceFilterReq, PurchasesReturnsServiceItemCreateRequest, PurchasesReturnsServiceItemUpdateRequest, PurchasesReturnsServicePaginatedItemsResponse, PurchasesReturnsServicePaginationReq, PurchasesReturnsServicePaginationResponse, PurchasesReturnsServiceSearchAllReq, PurchasesReturnsServiceUpdateRequest } from "./purchases_returns.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
import { FilterReturnableInventoryForIdentifierUUID, GenericInventoryList, SearchReturnableInventoryForIdentifierUUID } from "./inventory.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each purchase return
 *
 * @generated from service Scailo.PurchasesReturnsService
 */
export declare const PurchasesReturnsService: {
    readonly typeName: "Scailo.PurchasesReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.PurchasesReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PurchasesReturnsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.PurchasesReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PurchasesReturnsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.PurchasesReturnsService.SendForVerification
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
         * @generated from rpc Scailo.PurchasesReturnsService.Verify
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
         * @generated from rpc Scailo.PurchasesReturnsService.Approve
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
         * @generated from rpc Scailo.PurchasesReturnsService.SendForRevision
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
         * @generated from rpc Scailo.PurchasesReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.PurchasesReturnsService.Halt
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
         * @generated from rpc Scailo.PurchasesReturnsService.Discard
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
         * @generated from rpc Scailo.PurchasesReturnsService.Restore
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
         * @generated from rpc Scailo.PurchasesReturnsService.Complete
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
         * @generated from rpc Scailo.PurchasesReturnsService.Repeat
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
         * @generated from rpc Scailo.PurchasesReturnsService.Reopen
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
         * @generated from rpc Scailo.PurchasesReturnsService.CommentAdd
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
         * @generated from rpc Scailo.PurchasesReturnsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Purchase Return can be marked as completed
         *
         * @generated from rpc Scailo.PurchasesReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a magic link
         *
         * @generated from rpc Scailo.PurchasesReturnsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.AddPurchaseReturnItem
         */
        readonly addPurchaseReturnItem: {
            readonly name: "AddPurchaseReturnItem";
            readonly I: typeof PurchasesReturnsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ModifyPurchaseReturnItem
         */
        readonly modifyPurchaseReturnItem: {
            readonly name: "ModifyPurchaseReturnItem";
            readonly I: typeof PurchasesReturnsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ApprovePurchaseReturnItem
         */
        readonly approvePurchaseReturnItem: {
            readonly name: "ApprovePurchaseReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DeletePurchaseReturnItem
         */
        readonly deletePurchaseReturnItem: {
            readonly name: "DeletePurchaseReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ReorderPurchaseReturnItems
         */
        readonly reorderPurchaseReturnItems: {
            readonly name: "ReorderPurchaseReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Return Item by ID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPurchaseReturnItemByID
         */
        readonly viewPurchaseReturnItemByID: {
            readonly name: "ViewPurchaseReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Return Item by Inventory Hash
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPurchaseReturnItemByInventoryHash
         */
        readonly viewPurchaseReturnItemByInventoryHash: {
            readonly name: "ViewPurchaseReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof PurchaseReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase return items for given purchase return ID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewApprovedPurchaseReturnItems
         */
        readonly viewApprovedPurchaseReturnItems: {
            readonly name: "ViewApprovedPurchaseReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase return items for given purchase return ID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewUnapprovedPurchaseReturnItems
         */
        readonly viewUnapprovedPurchaseReturnItems: {
            readonly name: "ViewUnapprovedPurchaseReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the purchase return item
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPurchaseReturnItemHistory
         */
        readonly viewPurchaseReturnItemHistory: {
            readonly name: "ViewPurchaseReturnItemHistory";
            readonly I: typeof PurchaseReturnItemHistoryRequest;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales return items for given sales return ID with pagination
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPaginatedApprovedPurchaseReturnItems
         */
        readonly viewPaginatedApprovedPurchaseReturnItems: {
            readonly name: "ViewPaginatedApprovedPurchaseReturnItems";
            readonly I: typeof PurchaseReturnItemsSearchRequest;
            readonly O: typeof PurchasesReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales return items for given sales return ID with pagination
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPaginatedUnapprovedPurchaseReturnItems
         */
        readonly viewPaginatedUnapprovedPurchaseReturnItems: {
            readonly name: "ViewPaginatedUnapprovedPurchaseReturnItems";
            readonly I: typeof PurchaseReturnItemsSearchRequest;
            readonly O: typeof PurchasesReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through sales return items with pagination
         *
         * @generated from rpc Scailo.PurchasesReturnsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof PurchaseReturnItemsSearchRequest;
            readonly O: typeof PurchasesReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.PurchasesReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseReturnAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesReturnsServicePaginationReq;
            readonly O: typeof PurchasesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.PurchasesReturnsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective purchase return item info for the given family ID and purchase return ID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewProspectivePurchaseReturnItem
         */
        readonly viewProspectivePurchaseReturnItem: {
            readonly name: "ViewProspectivePurchaseReturnItem";
            readonly I: typeof PurchaseReturnItemProspectiveInfoRequest;
            readonly O: typeof PurchasesReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search for returnable inventory
         *
         * @generated from rpc Scailo.PurchasesReturnsService.SearchReturnableInventory
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
         * @generated from rpc Scailo.PurchasesReturnsService.FilterReturnableInventory
         */
        readonly filterReturnableInventory: {
            readonly name: "FilterReturnableInventory";
            readonly I: typeof FilterReturnableInventoryForIdentifierUUID;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Other view operations
         * View the associated debit note information that is denoted by the identifier in the response for the goods dispatch that is denoted by the identifier UUID in the request
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAssociatedDebitNoteInfo
         */
        readonly viewAssociatedDebitNoteInfo: {
            readonly name: "ViewAssociatedDebitNoteInfo";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Purchase Return has been billed
         *
         * @generated from rpc Scailo.PurchasesReturnsService.IsBilled
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
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download purchase return with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the purchase return with the given IdentifierUUID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DownloadLabelByUUID
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
         * @generated from rpc Scailo.PurchasesReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PurchasesReturnsServiceSearchAllReq;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.PurchasesReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PurchasesReturnsServiceFilterReq;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.PurchasesReturnsService.CountInStatus
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
         * @generated from rpc Scailo.PurchasesReturnsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof PurchasesReturnsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof PurchasesReturnsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=purchases_returns.scailo_connect.d.ts.map