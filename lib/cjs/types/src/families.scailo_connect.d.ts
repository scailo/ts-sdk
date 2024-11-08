import { FamiliesList, FamiliesServiceCountReq, FamiliesServiceCreateRequest, FamiliesServiceFilterReq, FamiliesServicePaginationReq, FamiliesServicePaginationResponse, FamiliesServiceQCGroupCreateRequest, FamiliesServiceSearchAllReq, FamiliesServiceStorageCreateRequest, FamiliesServiceUnitConversionCreateRequest, FamiliesServiceUnitConversionPresenceRequest, FamiliesServiceUpdateRequest, Family, FamilyQCGroup, FamilyQCGroupsList, FamilyStorage, FamilyStoragesList, FamilyTypesList, FamilyUnitConversion, FamilyUnitConversionsList } from "./families.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithFile, IdentifierWithUserComment, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each family
 *
 * @generated from service Scailo.FamiliesService
 */
export declare const FamiliesService: {
    readonly typeName: "Scailo.FamiliesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.FamiliesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof FamiliesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.FamiliesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof FamiliesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.FamiliesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof FamiliesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.FamiliesService.SendForVerification
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
         * @generated from rpc Scailo.FamiliesService.Verify
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
         * @generated from rpc Scailo.FamiliesService.Approve
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
         * @generated from rpc Scailo.FamiliesService.SendForRevision
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
         * @generated from rpc Scailo.FamiliesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof FamiliesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.FamiliesService.Halt
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
         * @generated from rpc Scailo.FamiliesService.Discard
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
         * @generated from rpc Scailo.FamiliesService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.FamiliesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Amend the family and send for revision
         *
         * @generated from rpc Scailo.FamiliesService.Amend
         */
        readonly amend: {
            readonly name: "Amend";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.FamiliesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload items using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.FamiliesService.UploadFamilies
         */
        readonly uploadFamilies: {
            readonly name: "UploadFamilies";
            readonly I: typeof IdentifierWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a storage
         *
         * @generated from rpc Scailo.FamiliesService.AddStorage
         */
        readonly addStorage: {
            readonly name: "AddStorage";
            readonly I: typeof FamiliesServiceStorageCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a storage
         *
         * @generated from rpc Scailo.FamiliesService.ApproveStorage
         */
        readonly approveStorage: {
            readonly name: "ApproveStorage";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a storage
         *
         * @generated from rpc Scailo.FamiliesService.DeleteStorage
         */
        readonly deleteStorage: {
            readonly name: "DeleteStorage";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a storage for the given ID
         *
         * @generated from rpc Scailo.FamiliesService.ViewStorageByID
         */
        readonly viewStorageByID: {
            readonly name: "ViewStorageByID";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyStorage;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all storages for given family ID
         *
         * @generated from rpc Scailo.FamiliesService.ViewStorages
         */
        readonly viewStorages: {
            readonly name: "ViewStorages";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyStoragesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a unit conversion
         *
         * @generated from rpc Scailo.FamiliesService.AddUnitConversion
         */
        readonly addUnitConversion: {
            readonly name: "AddUnitConversion";
            readonly I: typeof FamiliesServiceUnitConversionCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a unit conversion
         *
         * @generated from rpc Scailo.FamiliesService.ApproveUnitConversion
         */
        readonly approveUnitConversion: {
            readonly name: "ApproveUnitConversion";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a unit conversion
         *
         * @generated from rpc Scailo.FamiliesService.DeleteUnitConversion
         */
        readonly deleteUnitConversion: {
            readonly name: "DeleteUnitConversion";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a unit conversion for the given ID
         *
         * @generated from rpc Scailo.FamiliesService.ViewUnitConversionByID
         */
        readonly viewUnitConversionByID: {
            readonly name: "ViewUnitConversionByID";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyUnitConversion;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all unit conversions for given family ID
         *
         * @generated from rpc Scailo.FamiliesService.ViewUnitConversions
         */
        readonly viewUnitConversions: {
            readonly name: "ViewUnitConversions";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyUnitConversionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the unit conversion for the given family ID and the given uom ID
         *
         * @generated from rpc Scailo.FamiliesService.ViewUnitConversionFor
         */
        readonly viewUnitConversionFor: {
            readonly name: "ViewUnitConversionFor";
            readonly I: typeof FamiliesServiceUnitConversionPresenceRequest;
            readonly O: typeof FamilyUnitConversion;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a qc group
         *
         * @generated from rpc Scailo.FamiliesService.AddQCGroup
         */
        readonly addQCGroup: {
            readonly name: "AddQCGroup";
            readonly I: typeof FamiliesServiceQCGroupCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a qc group
         *
         * @generated from rpc Scailo.FamiliesService.ApproveQCGroup
         */
        readonly approveQCGroup: {
            readonly name: "ApproveQCGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a qc group
         *
         * @generated from rpc Scailo.FamiliesService.DeleteQCGroup
         */
        readonly deleteQCGroup: {
            readonly name: "DeleteQCGroup";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a qc group for the given ID
         *
         * @generated from rpc Scailo.FamiliesService.ViewQCGroupByID
         */
        readonly viewQCGroupByID: {
            readonly name: "ViewQCGroupByID";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyQCGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all qc groups for given family ID
         *
         * @generated from rpc Scailo.FamiliesService.ViewQCGroups
         */
        readonly viewQCGroups: {
            readonly name: "ViewQCGroups";
            readonly I: typeof Identifier;
            readonly O: typeof FamilyQCGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.FamiliesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Family;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components of the family (without logs)
         *
         * @generated from rpc Scailo.FamiliesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Family;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components of the family (without logs) that matches the given code
         *
         * @generated from rpc Scailo.FamiliesService.ViewEssentialByCode
         */
        readonly viewEssentialByCode: {
            readonly name: "ViewEssentialByCode";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof Family;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.FamiliesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.FamiliesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.FamiliesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof FamiliesServicePaginationReq;
            readonly O: typeof FamiliesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families with the given IDs
         *
         * @generated from rpc Scailo.FamiliesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families with required quantity greater than 0 from the given family types
         *
         * @generated from rpc Scailo.FamiliesService.ViewAllRequirable
         */
        readonly viewAllRequirable: {
            readonly name: "ViewAllRequirable";
            readonly I: typeof FamilyTypesList;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the amendments made
         *
         * @generated from rpc Scailo.FamiliesService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof FamiliesServiceSearchAllReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.FamiliesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof FamiliesServiceFilterReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for purchase that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForPurchase
         */
        readonly searchForPurchase: {
            readonly name: "SearchForPurchase";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for sale that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForSale
         */
        readonly searchForSale: {
            readonly name: "SearchForSale";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for production that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForProduction
         */
        readonly searchForProduction: {
            readonly name: "SearchForProduction";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for replaceables that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForReplaceables
         */
        readonly searchForReplaceables: {
            readonly name: "SearchForReplaceables";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for equation family that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForEquationFamily
         */
        readonly searchForEquationFamily: {
            readonly name: "SearchForEquationFamily";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for equation replaceable that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForEquationReplaceable
         */
        readonly searchForEquationReplaceable: {
            readonly name: "SearchForEquationReplaceable";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all families for equation sales bundle that match the given search key
         *
         * @generated from rpc Scailo.FamiliesService.SearchForEquationSalesBundle
         */
        readonly searchForEquationSalesBundle: {
            readonly name: "SearchForEquationSalesBundle";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.FamiliesService.CountInStatus
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
         * @generated from rpc Scailo.FamiliesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof FamiliesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=families.scailo_connect.d.ts.map