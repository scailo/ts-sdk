import { GoodsReceipt, GoodsReceiptAncillaryParameters, GoodsReceiptItem, GoodsReceiptItemHistoryRequest, GoodsReceiptItemProspectiveInfoRequest, GoodsReceiptItemsSearchRequest, GoodsReceiptsItemsList, GoodsReceiptsList, GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest, GoodsReceiptsServiceAutofillRequest, GoodsReceiptsServiceCountReq, GoodsReceiptsServiceCreateRequest, GoodsReceiptsServiceFilterReq, GoodsReceiptsServiceItemCreateRequest, GoodsReceiptsServiceItemUpdateRequest, GoodsReceiptsServicePaginatedItemsResponse, GoodsReceiptsServicePaginationReq, GoodsReceiptsServicePaginationResponse, GoodsReceiptsServiceSearchAllReq, GoodsReceiptsServiceUpdateRequest } from "./goods_receipts.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifiersList, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithFile, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList } from "./families.scailo_pb.js";
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
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.GoodsReceiptsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof GoodsReceiptsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.GoodsReceiptsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof GoodsReceiptsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.GoodsReceiptsService.SendForVerification
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
         * @generated from rpc Scailo.GoodsReceiptsService.Verify
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
         * @generated from rpc Scailo.GoodsReceiptsService.Approve
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
         * @generated from rpc Scailo.GoodsReceiptsService.SendForRevision
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
         * @generated from rpc Scailo.GoodsReceiptsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof GoodsReceiptsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.GoodsReceiptsService.Halt
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
         * @generated from rpc Scailo.GoodsReceiptsService.Discard
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
         * @generated from rpc Scailo.GoodsReceiptsService.Restore
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
         * @generated from rpc Scailo.GoodsReceiptsService.Complete
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
         * @generated from rpc Scailo.GoodsReceiptsService.Repeat
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
         * @generated from rpc Scailo.GoodsReceiptsService.Reopen
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
         * @generated from rpc Scailo.GoodsReceiptsService.CommentAdd
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
         * @generated from rpc Scailo.GoodsReceiptsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
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
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Receipt can be marked as completed
         *
         * @generated from rpc Scailo.GoodsReceiptsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
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
            readonly O: typeof Identifier;
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
            readonly O: typeof Identifier;
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
            readonly O: typeof Identifier;
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
            readonly O: typeof Identifier;
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
            readonly O: typeof Identifier;
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
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.GoodsReceiptsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof IdentifierUUID;
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
            readonly I: typeof IdentifierWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
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
         * View by UUID
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
         * View all
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
         * View all with the given entity UUID
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
         * View with pagination
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
         * Other view operations
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
         * View the associated vendor invoice ID that is denoted by the identifier in the response for the goods receipt that is denoted by the identifier in the request
         *
         * @generated from rpc Scailo.GoodsReceiptsService.ViewAssociatedVendorInvoiceID
         */
        readonly viewAssociatedVendorInvoiceID: {
            readonly name: "ViewAssociatedVendorInvoiceID";
            readonly I: typeof Identifier;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Receipt has been billed
         *
         * @generated from rpc Scailo.GoodsReceiptsService.IsBilled
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
         * @generated from rpc Scailo.GoodsReceiptsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
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
         * View all that match the given filter criteria
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
         * Count in status
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
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.GoodsReceiptsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof GoodsReceiptsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=goods_receipts.scailo_connect.d.ts.map