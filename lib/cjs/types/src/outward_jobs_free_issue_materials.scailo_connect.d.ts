import { OutwardJobFreeIssueMaterial, OutwardJobFreeIssueMaterialAncillaryParameters, OutwardJobFreeIssueMaterialItem, OutwardJobFreeIssueMaterialItemHistoryRequest, OutwardJobFreeIssueMaterialItemProspectiveInfoRequest, OutwardJobFreeIssueMaterialItemsSearchRequest, OutwardJobsFreeIssueMaterialsItemsList, OutwardJobsFreeIssueMaterialsList, OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest, OutwardJobsFreeIssueMaterialsServiceAutofillRequest, OutwardJobsFreeIssueMaterialsServiceCountReq, OutwardJobsFreeIssueMaterialsServiceCreateRequest, OutwardJobsFreeIssueMaterialsServiceFilterReq, OutwardJobsFreeIssueMaterialsServiceItemCreateRequest, OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest, OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse, OutwardJobsFreeIssueMaterialsServicePaginationReq, OutwardJobsFreeIssueMaterialsServicePaginationResponse, OutwardJobsFreeIssueMaterialsServiceSearchAllReq, OutwardJobsFreeIssueMaterialsServiceUpdateRequest } from "./outward_jobs_free_issue_materials.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each outward job free issue material
 *
 * @generated from service Scailo.OutwardJobsFreeIssueMaterialsService
 */
export declare const OutwardJobsFreeIssueMaterialsService: {
    readonly typeName: "Scailo.OutwardJobsFreeIssueMaterialsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.SendForVerification
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Verify
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Approve
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.SendForRevision
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Halt
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Discard
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Restore
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Complete
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Repeat
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Reopen
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.CommentAdd
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the outward job free issue material
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Outward Job Free Issue Material can be marked as completed
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a outward job free issue material
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.AddOutwardJobFreeIssueMaterialItem
         */
        readonly addOutwardJobFreeIssueMaterialItem: {
            readonly name: "AddOutwardJobFreeIssueMaterialItem";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a outward job free issue material
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ModifyOutwardJobFreeIssueMaterialItem
         */
        readonly modifyOutwardJobFreeIssueMaterialItem: {
            readonly name: "ModifyOutwardJobFreeIssueMaterialItem";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a outward job free issue material
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ApproveOutwardJobFreeIssueMaterialItem
         */
        readonly approveOutwardJobFreeIssueMaterialItem: {
            readonly name: "ApproveOutwardJobFreeIssueMaterialItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a outward job free issue material
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.DeleteOutwardJobFreeIssueMaterialItem
         */
        readonly deleteOutwardJobFreeIssueMaterialItem: {
            readonly name: "DeleteOutwardJobFreeIssueMaterialItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a outward job free issue material
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ReorderOutwardJobFreeIssueMaterialItems
         */
        readonly reorderOutwardJobFreeIssueMaterialItems: {
            readonly name: "ReorderOutwardJobFreeIssueMaterialItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Free Issue Material Item by ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewOutwardJobFreeIssueMaterialItemByID
         */
        readonly viewOutwardJobFreeIssueMaterialItemByID: {
            readonly name: "ViewOutwardJobFreeIssueMaterialItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobFreeIssueMaterialItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Free Issue Material Item by Inventory Hash
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewOutwardJobFreeIssueMaterialItemByInventoryHash
         */
        readonly viewOutwardJobFreeIssueMaterialItemByInventoryHash: {
            readonly name: "ViewOutwardJobFreeIssueMaterialItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof OutwardJobFreeIssueMaterialItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job free issue material items for given outward job free issue material ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewApprovedOutwardJobFreeIssueMaterialItems
         */
        readonly viewApprovedOutwardJobFreeIssueMaterialItems: {
            readonly name: "ViewApprovedOutwardJobFreeIssueMaterialItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsFreeIssueMaterialsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job free issue material items for given outward job free issue material ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewUnapprovedOutwardJobFreeIssueMaterialItems
         */
        readonly viewUnapprovedOutwardJobFreeIssueMaterialItems: {
            readonly name: "ViewUnapprovedOutwardJobFreeIssueMaterialItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsFreeIssueMaterialsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the outward job free issue material item
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewOutwardJobFreeIssueMaterialItemHistory
         */
        readonly viewOutwardJobFreeIssueMaterialItemHistory: {
            readonly name: "ViewOutwardJobFreeIssueMaterialItemHistory";
            readonly I: typeof OutwardJobFreeIssueMaterialItemHistoryRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job free issue material items for given outward job free issue material ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewPaginatedApprovedOutwardJobFreeIssueMaterialItems
         */
        readonly viewPaginatedApprovedOutwardJobFreeIssueMaterialItems: {
            readonly name: "ViewPaginatedApprovedOutwardJobFreeIssueMaterialItems";
            readonly I: typeof OutwardJobFreeIssueMaterialItemsSearchRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job free issue material items for given outward job free issue material ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewPaginatedUnapprovedOutwardJobFreeIssueMaterialItems
         */
        readonly viewPaginatedUnapprovedOutwardJobFreeIssueMaterialItems: {
            readonly name: "ViewPaginatedUnapprovedOutwardJobFreeIssueMaterialItems";
            readonly I: typeof OutwardJobFreeIssueMaterialItemsSearchRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through outward job free issue material items with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof OutwardJobFreeIssueMaterialItemsSearchRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof OutwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobFreeIssueMaterialAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof OutwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServicePaginationReq;
            readonly O: typeof OutwardJobsFreeIssueMaterialsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given outward job free issue material
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward job free issue material item info for the given family ID and outward job free issue material ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewProspectiveOutwardJobFreeIssueMaterialItem
         */
        readonly viewProspectiveOutwardJobFreeIssueMaterialItem: {
            readonly name: "ViewProspectiveOutwardJobFreeIssueMaterialItem";
            readonly I: typeof OutwardJobFreeIssueMaterialItemProspectiveInfoRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Other view operations
         * Download outward job free issue material with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the outward job free issue material with the given IdentifierUUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.DownloadLabelByUUID
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceSearchAllReq;
            readonly O: typeof OutwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceFilterReq;
            readonly O: typeof OutwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.CountInStatus
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof OutwardJobsFreeIssueMaterialsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=outward_jobs_free_issue_materials.scailo_connect.d.ts.map