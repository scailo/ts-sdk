import { OutwardJob, OutwardJobAncillaryParameters, OutwardJobContact, OutwardJobContactsList, OutwardJobInwardInventoryMatchList, OutwardJobInwardItem, OutwardJobInwardItemHistoryRequest, OutwardJobInwardItemProspectiveInfoRequest, OutwardJobInwardItemsSearchRequest, OutwardJobOutwardInventoryMatchList, OutwardJobOutwardItem, OutwardJobOutwardItemHistoryRequest, OutwardJobOutwardItemProspectiveInfoRequest, OutwardJobOutwardItemsSearchRequest, OutwardJobsInwardItemsList, OutwardJobsList, OutwardJobsOutwardItemsList, OutwardJobsServiceAutofillRequest, OutwardJobsServiceContactCreateRequest, OutwardJobsServiceCountReq, OutwardJobsServiceCreateRequest, OutwardJobsServiceFilterReq, OutwardJobsServiceInwardItemCreateRequest, OutwardJobsServiceInwardItemUpdateRequest, OutwardJobsServiceMultipleInwardItemsCreateRequest, OutwardJobsServiceMultipleOutwardItemsCreateRequest, OutwardJobsServiceOutwardItemCreateRequest, OutwardJobsServiceOutwardItemUpdateRequest, OutwardJobsServicePaginatedInwardItemsResponse, OutwardJobsServicePaginatedOutwardItemsResponse, OutwardJobsServicePaginationReq, OutwardJobsServicePaginationResponse, OutwardJobsServiceSearchAllReq, OutwardJobsServiceUpdateRequest } from "./outward_jobs.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, RepeatWithDeliveryDate, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each outward job
 *
 * @generated from service Scailo.OutwardJobsService
 */
export declare const OutwardJobsService: {
    readonly typeName: "Scailo.OutwardJobsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.OutwardJobsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof OutwardJobsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.OutwardJobsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof OutwardJobsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.OutwardJobsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof OutwardJobsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.OutwardJobsService.SendForVerification
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
         * @generated from rpc Scailo.OutwardJobsService.Verify
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
         * @generated from rpc Scailo.OutwardJobsService.Approve
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
         * @generated from rpc Scailo.OutwardJobsService.SendForRevision
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
         * @generated from rpc Scailo.OutwardJobsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof OutwardJobsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.OutwardJobsService.Halt
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
         * @generated from rpc Scailo.OutwardJobsService.Discard
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
         * @generated from rpc Scailo.OutwardJobsService.Restore
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
         * @generated from rpc Scailo.OutwardJobsService.Complete
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
         * @generated from rpc Scailo.OutwardJobsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof RepeatWithDeliveryDate;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.OutwardJobsService.Reopen
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
         * @generated from rpc Scailo.OutwardJobsService.CommentAdd
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
         * @generated from rpc Scailo.OutwardJobsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof OutwardJobsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a magic link
         *
         * @generated from rpc Scailo.OutwardJobsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Outward Job can be marked as completed (is true when all the inward items have been ordered and all the outward items have been dispatched)
         *
         * @generated from rpc Scailo.OutwardJobsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward items within an Outward Job have been ordered (through a Purchase Order)
         *
         * @generated from rpc Scailo.OutwardJobsService.IsOrdered
         */
        readonly isOrdered: {
            readonly name: "IsOrdered";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Outward items within an Outward Job have been dispatched (through Free Issue Material)
         *
         * @generated from rpc Scailo.OutwardJobsService.IsDispatched
         */
        readonly isDispatched: {
            readonly name: "IsDispatched";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.AddMultipleOutwardJobInwardItems
         */
        readonly addMultipleOutwardJobInwardItems: {
            readonly name: "AddMultipleOutwardJobInwardItems";
            readonly I: typeof OutwardJobsServiceMultipleInwardItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an inward item to a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.AddOutwardJobInwardItem
         */
        readonly addOutwardJobInwardItem: {
            readonly name: "AddOutwardJobInwardItem";
            readonly I: typeof OutwardJobsServiceInwardItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an inward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ModifyOutwardJobInwardItem
         */
        readonly modifyOutwardJobInwardItem: {
            readonly name: "ModifyOutwardJobInwardItem";
            readonly I: typeof OutwardJobsServiceInwardItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an inward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ApproveOutwardJobInwardItem
         */
        readonly approveOutwardJobInwardItem: {
            readonly name: "ApproveOutwardJobInwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an inward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.DeleteOutwardJobInwardItem
         */
        readonly deleteOutwardJobInwardItem: {
            readonly name: "DeleteOutwardJobInwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ReorderOutwardJobInwardItems
         */
        readonly reorderOutwardJobInwardItems: {
            readonly name: "ReorderOutwardJobInwardItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Inward Item by ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobInwardItemByID
         */
        readonly viewOutwardJobInwardItemByID: {
            readonly name: "ViewOutwardJobInwardItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobInwardItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job inward items for given outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewApprovedOutwardJobInwardItems
         */
        readonly viewApprovedOutwardJobInwardItems: {
            readonly name: "ViewApprovedOutwardJobInwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job inward items for given outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewUnapprovedOutwardJobInwardItems
         */
        readonly viewUnapprovedOutwardJobInwardItems: {
            readonly name: "ViewUnapprovedOutwardJobInwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the outward job inward item
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobInwardItemHistory
         */
        readonly viewOutwardJobInwardItemHistory: {
            readonly name: "ViewOutwardJobInwardItemHistory";
            readonly I: typeof OutwardJobInwardItemHistoryRequest;
            readonly O: typeof OutwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job inward items for given outward job ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewPaginatedApprovedOutwardJobInwardItems
         */
        readonly viewPaginatedApprovedOutwardJobInwardItems: {
            readonly name: "ViewPaginatedApprovedOutwardJobInwardItems";
            readonly I: typeof OutwardJobInwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job inward items for given outward job ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewPaginatedUnapprovedOutwardJobInwardItems
         */
        readonly viewPaginatedUnapprovedOutwardJobInwardItems: {
            readonly name: "ViewPaginatedUnapprovedOutwardJobInwardItems";
            readonly I: typeof OutwardJobInwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through outward job inward items with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.SearchInwardItemsWithPagination
         */
        readonly searchInwardItemsWithPagination: {
            readonly name: "SearchInwardItemsWithPagination";
            readonly I: typeof OutwardJobInwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload inward items from the filled CSV file
         *
         * @generated from rpc Scailo.OutwardJobsService.DownloadInwardItemsCSVTemplate
         */
        readonly downloadInwardItemsCSVTemplate: {
            readonly name: "DownloadInwardItemsCSVTemplate";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload inward items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.OutwardJobsService.UploadOutwardJobInwardItems
         */
        readonly uploadOutwardJobInwardItems: {
            readonly name: "UploadOutwardJobInwardItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.AddMultipleOutwardJobOutwardItems
         */
        readonly addMultipleOutwardJobOutwardItems: {
            readonly name: "AddMultipleOutwardJobOutwardItems";
            readonly I: typeof OutwardJobsServiceMultipleOutwardItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an outward item to a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.AddOutwardJobOutwardItem
         */
        readonly addOutwardJobOutwardItem: {
            readonly name: "AddOutwardJobOutwardItem";
            readonly I: typeof OutwardJobsServiceOutwardItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an outward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ModifyOutwardJobOutwardItem
         */
        readonly modifyOutwardJobOutwardItem: {
            readonly name: "ModifyOutwardJobOutwardItem";
            readonly I: typeof OutwardJobsServiceOutwardItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an outward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ApproveOutwardJobOutwardItem
         */
        readonly approveOutwardJobOutwardItem: {
            readonly name: "ApproveOutwardJobOutwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an outward item in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.DeleteOutwardJobOutwardItem
         */
        readonly deleteOutwardJobOutwardItem: {
            readonly name: "DeleteOutwardJobOutwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ReorderOutwardJobOutwardItems
         */
        readonly reorderOutwardJobOutwardItems: {
            readonly name: "ReorderOutwardJobOutwardItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Outward Item by ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobOutwardItemByID
         */
        readonly viewOutwardJobOutwardItemByID: {
            readonly name: "ViewOutwardJobOutwardItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobOutwardItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job outward items for given outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewApprovedOutwardJobOutwardItems
         */
        readonly viewApprovedOutwardJobOutwardItems: {
            readonly name: "ViewApprovedOutwardJobOutwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job outward items for given outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewUnapprovedOutwardJobOutwardItems
         */
        readonly viewUnapprovedOutwardJobOutwardItems: {
            readonly name: "ViewUnapprovedOutwardJobOutwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the outward job outward item
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobOutwardItemHistory
         */
        readonly viewOutwardJobOutwardItemHistory: {
            readonly name: "ViewOutwardJobOutwardItemHistory";
            readonly I: typeof OutwardJobOutwardItemHistoryRequest;
            readonly O: typeof OutwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job outward items for given outward job ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewPaginatedApprovedOutwardJobOutwardItems
         */
        readonly viewPaginatedApprovedOutwardJobOutwardItems: {
            readonly name: "ViewPaginatedApprovedOutwardJobOutwardItems";
            readonly I: typeof OutwardJobOutwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job outward items for given outward job ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewPaginatedUnapprovedOutwardJobOutwardItems
         */
        readonly viewPaginatedUnapprovedOutwardJobOutwardItems: {
            readonly name: "ViewPaginatedUnapprovedOutwardJobOutwardItems";
            readonly I: typeof OutwardJobOutwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through outward job outward items with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.SearchOutwardItemsWithPagination
         */
        readonly searchOutwardItemsWithPagination: {
            readonly name: "SearchOutwardItemsWithPagination";
            readonly I: typeof OutwardJobOutwardItemsSearchRequest;
            readonly O: typeof OutwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload outward items from the filled CSV file
         *
         * @generated from rpc Scailo.OutwardJobsService.DownloadOutwardItemsCSVTemplate
         */
        readonly downloadOutwardItemsCSVTemplate: {
            readonly name: "DownloadOutwardItemsCSVTemplate";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload outward items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.OutwardJobsService.UploadOutwardJobOutwardItems
         */
        readonly uploadOutwardJobOutwardItems: {
            readonly name: "UploadOutwardJobOutwardItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a contact
         *
         * @generated from rpc Scailo.OutwardJobsService.AddOutwardJobContact
         */
        readonly addOutwardJobContact: {
            readonly name: "AddOutwardJobContact";
            readonly I: typeof OutwardJobsServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a contact
         *
         * @generated from rpc Scailo.OutwardJobsService.ApproveOutwardJobContact
         */
        readonly approveOutwardJobContact: {
            readonly name: "ApproveOutwardJobContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a contact
         *
         * @generated from rpc Scailo.OutwardJobsService.DeleteOutwardJobContact
         */
        readonly deleteOutwardJobContact: {
            readonly name: "DeleteOutwardJobContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a contact for the given ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobContactByID
         */
        readonly viewOutwardJobContactByID: {
            readonly name: "ViewOutwardJobContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all contacts for given outward job UUID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardJobContacts
         */
        readonly viewOutwardJobContacts: {
            readonly name: "ViewOutwardJobContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof OutwardJobsServicePaginationReq;
            readonly O: typeof OutwardJobsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all purchase order IDs that are associated with the given outward job UUID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewAssociatedPurchaseOrderIDs
         */
        readonly viewAssociatedPurchaseOrderIDs: {
            readonly name: "ViewAssociatedPurchaseOrderIDs";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward items for the given outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewProspectiveInwardFamilies
         */
        readonly viewProspectiveInwardFamilies: {
            readonly name: "ViewProspectiveInwardFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter prospective inward families for the record represented by the given UUID identifier
         *
         * @generated from rpc Scailo.OutwardJobsService.FilterProspectiveInwardFamilies
         */
        readonly filterProspectiveInwardFamilies: {
            readonly name: "FilterProspectiveInwardFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward job inward item info for the given family ID and outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewProspectiveOutwardJobInwardItem
         */
        readonly viewProspectiveOutwardJobInwardItem: {
            readonly name: "ViewProspectiveOutwardJobInwardItem";
            readonly I: typeof OutwardJobInwardItemProspectiveInfoRequest;
            readonly O: typeof OutwardJobsServiceInwardItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Inventory Match of all the inward families of the given outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewInwardInventoryMatch
         */
        readonly viewInwardInventoryMatch: {
            readonly name: "ViewInwardInventoryMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobInwardInventoryMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward items for the given outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewProspectiveOutwardFamilies
         */
        readonly viewProspectiveOutwardFamilies: {
            readonly name: "ViewProspectiveOutwardFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter prospective outward families for the record represented by the given UUID identifier
         *
         * @generated from rpc Scailo.OutwardJobsService.FilterProspectiveOutwardFamilies
         */
        readonly filterProspectiveOutwardFamilies: {
            readonly name: "FilterProspectiveOutwardFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward job outward item info for the given family ID and outward job ID
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewProspectiveOutwardJobOutwardItem
         */
        readonly viewProspectiveOutwardJobOutwardItem: {
            readonly name: "ViewProspectiveOutwardJobOutwardItem";
            readonly I: typeof OutwardJobOutwardItemProspectiveInfoRequest;
            readonly O: typeof OutwardJobsServiceOutwardItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Inventory Match of all the outward families of the given outward job
         *
         * @generated from rpc Scailo.OutwardJobsService.ViewOutwardInventoryMatch
         */
        readonly viewOutwardInventoryMatch: {
            readonly name: "ViewOutwardInventoryMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobOutwardInventoryMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.OutwardJobsService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download outward job with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.OutwardJobsService.DownloadByUUID
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
         * @generated from rpc Scailo.OutwardJobsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof OutwardJobsServiceSearchAllReq;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.OutwardJobsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof OutwardJobsServiceFilterReq;
            readonly O: typeof OutwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.OutwardJobsService.CountInStatus
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
         * @generated from rpc Scailo.OutwardJobsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof OutwardJobsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.OutwardJobsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof OutwardJobsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=outward_jobs.scailo_connect.d.ts.map