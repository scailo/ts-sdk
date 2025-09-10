import { OutwardJobFreeIssueMaterialReturn, OutwardJobFreeIssueMaterialReturnAncillaryParameters, OutwardJobFreeIssueMaterialReturnItem, OutwardJobFreeIssueMaterialReturnItemHistoryRequest, OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest, OutwardJobFreeIssueMaterialReturnItemsSearchRequest, OutwardJobsFreeIssueMaterialsReturnsItemsList, OutwardJobsFreeIssueMaterialsReturnsList, OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest, OutwardJobsFreeIssueMaterialsReturnsServiceCountReq, OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest, OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq, OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest, OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest, OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse, OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq, OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse, OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq, OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest } from "./outward_jobs_free_issue_materials_returns.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
import { FilterReturnableInventoryForIdentifierUUID, GenericInventoryList, SearchReturnableInventoryForIdentifierUUID } from "./inventory.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each outward job free issue material return
 *
 * @generated from service Scailo.OutwardJobsFreeIssueMaterialsReturnsService
 */
export declare const OutwardJobsFreeIssueMaterialsReturnsService: {
    readonly typeName: "Scailo.OutwardJobsFreeIssueMaterialsReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SendForVerification
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Verify
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Approve
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SendForRevision
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Halt
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Discard
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Restore
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Complete
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Repeat
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Reopen
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.CommentAdd
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a magic link
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Outward Job Free Issue Material Return can be marked as completed
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.AddOutwardJobFreeIssueMaterialReturnItem
         */
        readonly addOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "AddOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ModifyOutwardJobFreeIssueMaterialReturnItem
         */
        readonly modifyOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ModifyOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ApproveOutwardJobFreeIssueMaterialReturnItem
         */
        readonly approveOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ApproveOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DeleteOutwardJobFreeIssueMaterialReturnItem
         */
        readonly deleteOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "DeleteOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ReorderOutwardJobFreeIssueMaterialReturnItems
         */
        readonly reorderOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ReorderOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Free Issue Material Return Item by ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewOutwardJobFreeIssueMaterialReturnItemByID
         */
        readonly viewOutwardJobFreeIssueMaterialReturnItemByID: {
            readonly name: "ViewOutwardJobFreeIssueMaterialReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobFreeIssueMaterialReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Free Issue Material Return Item by Inventory Hash
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewOutwardJobFreeIssueMaterialReturnItemByInventoryHash
         */
        readonly viewOutwardJobFreeIssueMaterialReturnItemByInventoryHash: {
            readonly name: "ViewOutwardJobFreeIssueMaterialReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof OutwardJobFreeIssueMaterialReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job free issue material return items for given outward job free issue material return ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewApprovedOutwardJobFreeIssueMaterialReturnItems
         */
        readonly viewApprovedOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewApprovedOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job free issue material return items for given outward job free issue material return ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewUnapprovedOutwardJobFreeIssueMaterialReturnItems
         */
        readonly viewUnapprovedOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewUnapprovedOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the outward job free issue material return item
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewOutwardJobFreeIssueMaterialReturnItemHistory
         */
        readonly viewOutwardJobFreeIssueMaterialReturnItemHistory: {
            readonly name: "ViewOutwardJobFreeIssueMaterialReturnItemHistory";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemHistoryRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job free issue material return items for given outward job free issue material return ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewPaginatedApprovedOutwardJobFreeIssueMaterialReturnItems
         */
        readonly viewPaginatedApprovedOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewPaginatedApprovedOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job free issue material return items for given outward job free issue material return ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewPaginatedUnapprovedOutwardJobFreeIssueMaterialReturnItems
         */
        readonly viewPaginatedUnapprovedOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewPaginatedUnapprovedOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through outward job free issue material return items with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobFreeIssueMaterialReturnAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward job free issue material return item info for the given family ID and outward job free issue material return ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewProspectiveOutwardJobFreeIssueMaterialReturnItem
         */
        readonly viewProspectiveOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ViewProspectiveOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search for returnable inventory
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SearchReturnableInventory
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.FilterReturnableInventory
         */
        readonly filterReturnableInventory: {
            readonly name: "FilterReturnableInventory";
            readonly I: typeof FilterReturnableInventoryForIdentifierUUID;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download outward job free issue material return with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the outward job free issue material return with the given IdentifierUUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.CountInStatus
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=outward_jobs_free_issue_materials_returns.scailo_connect.d.ts.map