import { InwardJob, InwardJobAncillaryParameters, InwardJobContact, InwardJobContactsList, InwardJobInwardItem, InwardJobInwardItemHistoryRequest, InwardJobInwardItemProspectiveInfoRequest, InwardJobInwardItemsSearchRequest, InwardJobOutwardItem, InwardJobOutwardItemHistoryRequest, InwardJobOutwardItemProspectiveInfoRequest, InwardJobOutwardItemsSearchRequest, InwardJobsInwardItemsList, InwardJobsList, InwardJobsOutwardItemsList, InwardJobsServiceAutofillRequest, InwardJobsServiceContactCreateRequest, InwardJobsServiceCountReq, InwardJobsServiceCreateRequest, InwardJobsServiceFilterReq, InwardJobsServiceInwardItemCreateRequest, InwardJobsServiceInwardItemUpdateRequest, InwardJobsServiceMultipleInwardItemsCreateRequest, InwardJobsServiceMultipleOutwardItemsCreateRequest, InwardJobsServiceOutwardItemCreateRequest, InwardJobsServiceOutwardItemUpdateRequest, InwardJobsServicePaginatedInwardItemsResponse, InwardJobsServicePaginatedOutwardItemsResponse, InwardJobsServicePaginationReq, InwardJobsServicePaginationResponse, InwardJobsServiceSearchAllReq, InwardJobsServiceUpdateRequest } from "./inward_jobs.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, RepeatWithDeliveryDate, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each inward job
 *
 * @generated from service Scailo.InwardJobsService
 */
export declare const InwardJobsService: {
    readonly typeName: "Scailo.InwardJobsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.InwardJobsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof InwardJobsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.InwardJobsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof InwardJobsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.InwardJobsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof InwardJobsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.InwardJobsService.SendForVerification
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
         * @generated from rpc Scailo.InwardJobsService.Verify
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
         * @generated from rpc Scailo.InwardJobsService.Approve
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
         * @generated from rpc Scailo.InwardJobsService.SendForRevision
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
         * @generated from rpc Scailo.InwardJobsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof InwardJobsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.InwardJobsService.Halt
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
         * @generated from rpc Scailo.InwardJobsService.Discard
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
         * @generated from rpc Scailo.InwardJobsService.Restore
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
         * @generated from rpc Scailo.InwardJobsService.Complete
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
         * @generated from rpc Scailo.InwardJobsService.Repeat
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
         * @generated from rpc Scailo.InwardJobsService.Reopen
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
         * @generated from rpc Scailo.InwardJobsService.CommentAdd
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
         * @generated from rpc Scailo.InwardJobsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the inward job
         *
         * @generated from rpc Scailo.InwardJobsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof InwardJobsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward Job can be marked as completed (is true when all the inward items have been ordered and all the outward items have been received)
         *
         * @generated from rpc Scailo.InwardJobsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward items within an Inward Job have been ordered (through a Sales Order)
         *
         * @generated from rpc Scailo.InwardJobsService.IsOrdered
         */
        readonly isOrdered: {
            readonly name: "IsOrdered";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Outward items within an Inward Job have been received (through Free Issue Material)
         *
         * @generated from rpc Scailo.InwardJobsService.IsReceived
         */
        readonly isReceived: {
            readonly name: "IsReceived";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.AddMultipleInwardJobInwardItems
         */
        readonly addMultipleInwardJobInwardItems: {
            readonly name: "AddMultipleInwardJobInwardItems";
            readonly I: typeof InwardJobsServiceMultipleInwardItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an inward item to a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.AddInwardJobInwardItem
         */
        readonly addInwardJobInwardItem: {
            readonly name: "AddInwardJobInwardItem";
            readonly I: typeof InwardJobsServiceInwardItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an inward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ModifyInwardJobInwardItem
         */
        readonly modifyInwardJobInwardItem: {
            readonly name: "ModifyInwardJobInwardItem";
            readonly I: typeof InwardJobsServiceInwardItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an inward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ApproveInwardJobInwardItem
         */
        readonly approveInwardJobInwardItem: {
            readonly name: "ApproveInwardJobInwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an inward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.DeleteInwardJobInwardItem
         */
        readonly deleteInwardJobInwardItem: {
            readonly name: "DeleteInwardJobInwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ReorderInwardJobInwardItems
         */
        readonly reorderInwardJobInwardItems: {
            readonly name: "ReorderInwardJobInwardItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Inward Item by ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobInwardItemByID
         */
        readonly viewInwardJobInwardItemByID: {
            readonly name: "ViewInwardJobInwardItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobInwardItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job inward items for given inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewApprovedInwardJobInwardItems
         */
        readonly viewApprovedInwardJobInwardItems: {
            readonly name: "ViewApprovedInwardJobInwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job inward items for given inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewUnapprovedInwardJobInwardItems
         */
        readonly viewUnapprovedInwardJobInwardItems: {
            readonly name: "ViewUnapprovedInwardJobInwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the inward job inward item
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobInwardItemHistory
         */
        readonly viewInwardJobInwardItemHistory: {
            readonly name: "ViewInwardJobInwardItemHistory";
            readonly I: typeof InwardJobInwardItemHistoryRequest;
            readonly O: typeof InwardJobsInwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job inward items for given inward job ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.ViewPaginatedApprovedInwardJobInwardItems
         */
        readonly viewPaginatedApprovedInwardJobInwardItems: {
            readonly name: "ViewPaginatedApprovedInwardJobInwardItems";
            readonly I: typeof InwardJobInwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job inward items for given inward job ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.ViewPaginatedUnapprovedInwardJobInwardItems
         */
        readonly viewPaginatedUnapprovedInwardJobInwardItems: {
            readonly name: "ViewPaginatedUnapprovedInwardJobInwardItems";
            readonly I: typeof InwardJobInwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through inward job inward items with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.SearchInwardItemsWithPagination
         */
        readonly searchInwardItemsWithPagination: {
            readonly name: "SearchInwardItemsWithPagination";
            readonly I: typeof InwardJobInwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedInwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload inward items from the filled CSV file
         *
         * @generated from rpc Scailo.InwardJobsService.DownloadInwardItemsCSVTemplate
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
         * @generated from rpc Scailo.InwardJobsService.UploadInwardJobInwardItems
         */
        readonly uploadInwardJobInwardItems: {
            readonly name: "UploadInwardJobInwardItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.AddMultipleInwardJobOutwardItems
         */
        readonly addMultipleInwardJobOutwardItems: {
            readonly name: "AddMultipleInwardJobOutwardItems";
            readonly I: typeof InwardJobsServiceMultipleOutwardItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an outward item to a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.AddInwardJobOutwardItem
         */
        readonly addInwardJobOutwardItem: {
            readonly name: "AddInwardJobOutwardItem";
            readonly I: typeof InwardJobsServiceOutwardItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an outward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ModifyInwardJobOutwardItem
         */
        readonly modifyInwardJobOutwardItem: {
            readonly name: "ModifyInwardJobOutwardItem";
            readonly I: typeof InwardJobsServiceOutwardItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an outward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ApproveInwardJobOutwardItem
         */
        readonly approveInwardJobOutwardItem: {
            readonly name: "ApproveInwardJobOutwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an outward item in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.DeleteInwardJobOutwardItem
         */
        readonly deleteInwardJobOutwardItem: {
            readonly name: "DeleteInwardJobOutwardItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a inward job
         *
         * @generated from rpc Scailo.InwardJobsService.ReorderInwardJobOutwardItems
         */
        readonly reorderInwardJobOutwardItems: {
            readonly name: "ReorderInwardJobOutwardItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Outward Item by ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobOutwardItemByID
         */
        readonly viewInwardJobOutwardItemByID: {
            readonly name: "ViewInwardJobOutwardItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobOutwardItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job outward items for given inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewApprovedInwardJobOutwardItems
         */
        readonly viewApprovedInwardJobOutwardItems: {
            readonly name: "ViewApprovedInwardJobOutwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job outward items for given inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewUnapprovedInwardJobOutwardItems
         */
        readonly viewUnapprovedInwardJobOutwardItems: {
            readonly name: "ViewUnapprovedInwardJobOutwardItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the inward job outward item
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobOutwardItemHistory
         */
        readonly viewInwardJobOutwardItemHistory: {
            readonly name: "ViewInwardJobOutwardItemHistory";
            readonly I: typeof InwardJobOutwardItemHistoryRequest;
            readonly O: typeof InwardJobsOutwardItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job outward items for given inward job ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.ViewPaginatedApprovedInwardJobOutwardItems
         */
        readonly viewPaginatedApprovedInwardJobOutwardItems: {
            readonly name: "ViewPaginatedApprovedInwardJobOutwardItems";
            readonly I: typeof InwardJobOutwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job outward items for given inward job ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.ViewPaginatedUnapprovedInwardJobOutwardItems
         */
        readonly viewPaginatedUnapprovedInwardJobOutwardItems: {
            readonly name: "ViewPaginatedUnapprovedInwardJobOutwardItems";
            readonly I: typeof InwardJobOutwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through inward job outward items with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.SearchOutwardItemsWithPagination
         */
        readonly searchOutwardItemsWithPagination: {
            readonly name: "SearchOutwardItemsWithPagination";
            readonly I: typeof InwardJobOutwardItemsSearchRequest;
            readonly O: typeof InwardJobsServicePaginatedOutwardItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload outward items from the filled CSV file
         *
         * @generated from rpc Scailo.InwardJobsService.DownloadOutwardItemsCSVTemplate
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
         * @generated from rpc Scailo.InwardJobsService.UploadInwardJobOutwardItems
         */
        readonly uploadInwardJobOutwardItems: {
            readonly name: "UploadInwardJobOutwardItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a contact
         *
         * @generated from rpc Scailo.InwardJobsService.AddInwardJobContact
         */
        readonly addInwardJobContact: {
            readonly name: "AddInwardJobContact";
            readonly I: typeof InwardJobsServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a contact
         *
         * @generated from rpc Scailo.InwardJobsService.ApproveInwardJobContact
         */
        readonly approveInwardJobContact: {
            readonly name: "ApproveInwardJobContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a contact
         *
         * @generated from rpc Scailo.InwardJobsService.DeleteInwardJobContact
         */
        readonly deleteInwardJobContact: {
            readonly name: "DeleteInwardJobContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a contact for the given ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobContactByID
         */
        readonly viewInwardJobContactByID: {
            readonly name: "ViewInwardJobContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all contacts for given inward job UUID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewInwardJobContacts
         */
        readonly viewInwardJobContacts: {
            readonly name: "ViewInwardJobContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.InwardJobsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJob;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.InwardJobsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.InwardJobsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.InwardJobsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof InwardJobsServicePaginationReq;
            readonly O: typeof InwardJobsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all sales order IDs that are associated with the given inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewAssociatedSalesOrderIDs
         */
        readonly viewAssociatedSalesOrderIDs: {
            readonly name: "ViewAssociatedSalesOrderIDs";
            readonly I: typeof Identifier;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward items for the given inward job (all families that could be purchased)
         *
         * @generated from rpc Scailo.InwardJobsService.ViewProspectiveInwardFamilies
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
         * @generated from rpc Scailo.InwardJobsService.FilterProspectiveInwardFamilies
         */
        readonly filterProspectiveInwardFamilies: {
            readonly name: "FilterProspectiveInwardFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward job inward item info for the given family ID and inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewProspectiveInwardJobInwardItem
         */
        readonly viewProspectiveInwardJobInwardItem: {
            readonly name: "ViewProspectiveInwardJobInwardItem";
            readonly I: typeof InwardJobInwardItemProspectiveInfoRequest;
            readonly O: typeof InwardJobsServiceInwardItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward items for the given inward job (all families that could be sold)
         *
         * @generated from rpc Scailo.InwardJobsService.ViewProspectiveOutwardFamilies
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
         * @generated from rpc Scailo.InwardJobsService.FilterProspectiveOutwardFamilies
         */
        readonly filterProspectiveOutwardFamilies: {
            readonly name: "FilterProspectiveOutwardFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward job outward item info for the given family ID and inward job ID
         *
         * @generated from rpc Scailo.InwardJobsService.ViewProspectiveInwardJobOutwardItem
         */
        readonly viewProspectiveInwardJobOutwardItem: {
            readonly name: "ViewProspectiveInwardJobOutwardItem";
            readonly I: typeof InwardJobOutwardItemProspectiveInfoRequest;
            readonly O: typeof InwardJobsServiceOutwardItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download inward job with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.InwardJobsService.DownloadByUUID
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
         * @generated from rpc Scailo.InwardJobsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof InwardJobsServiceSearchAllReq;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.InwardJobsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof InwardJobsServiceFilterReq;
            readonly O: typeof InwardJobsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.InwardJobsService.CountInStatus
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
         * @generated from rpc Scailo.InwardJobsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof InwardJobsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=inward_jobs.scailo_connect.d.ts.map