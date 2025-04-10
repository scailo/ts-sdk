import { Infrastructure, InfrastructuresList, InfrastructuresServiceCountReq, InfrastructuresServiceCreateRequest, InfrastructuresServiceFilterReq, InfrastructuresServicePaginationReq, InfrastructuresServicePaginationResponse, InfrastructuresServiceSearchAllReq, InfrastructuresServiceSendToStoreRequest, InfrastructuresServiceUpdateRequest } from "./infrastructures.scailo_pb.js";
import { ActiveStatus, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, InventoryInteractionsList, InventoryPartitionRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each infrastructure
 *
 * @generated from service Scailo.InfrastructuresService
 */
export declare const InfrastructuresService: {
    readonly typeName: "Scailo.InfrastructuresService";
    readonly methods: {
        /**
         * Create (and Send for QC)
         *
         * @generated from rpc Scailo.InfrastructuresService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof InfrastructuresServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send to Store
         *
         * @generated from rpc Scailo.InfrastructuresService.SendToStore
         */
        readonly sendToStore: {
            readonly name: "SendToStore";
            readonly I: typeof InfrastructuresServiceSendToStoreRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.InfrastructuresService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof InfrastructuresServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for Rework
         *
         * @generated from rpc Scailo.InfrastructuresService.SendForRework
         */
        readonly sendForRework: {
            readonly name: "SendForRework";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for QC
         *
         * @generated from rpc Scailo.InfrastructuresService.SendForQC
         */
        readonly sendForQC: {
            readonly name: "SendForQC";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Split into unit quantities
         *
         * @generated from rpc Scailo.InfrastructuresService.SplitLot
         */
        readonly splitLot: {
            readonly name: "SplitLot";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a partition from the parent lot (and returns the identifier of the new partition)
         *
         * @generated from rpc Scailo.InfrastructuresService.Partition
         */
        readonly partition: {
            readonly name: "Partition";
            readonly I: typeof InventoryPartitionRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Consume
         *
         * @generated from rpc Scailo.InfrastructuresService.Consume
         */
        readonly consume: {
            readonly name: "Consume";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reject
         *
         * @generated from rpc Scailo.InfrastructuresService.Reject
         */
        readonly reject: {
            readonly name: "Reject";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Scrap
         *
         * @generated from rpc Scailo.InfrastructuresService.Scrap
         */
        readonly scrap: {
            readonly name: "Scrap";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Return
         *
         * @generated from rpc Scailo.InfrastructuresService.ReturnMaterial
         */
        readonly returnMaterial: {
            readonly name: "ReturnMaterial";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.InfrastructuresService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * @generated from rpc Scailo.InfrastructuresService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.InfrastructuresService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Infrastructure;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.InfrastructuresService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Infrastructure;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.InfrastructuresService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Infrastructure;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.InfrastructuresService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Infrastructure;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.InfrastructuresService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof InfrastructuresList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.InfrastructuresService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof InfrastructuresList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.InfrastructuresService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof InfrastructuresServicePaginationReq;
            readonly O: typeof InfrastructuresServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download QC Report with the given Identifier
         *
         * @generated from rpc Scailo.InfrastructuresService.DownloadQCReportByID
         */
        readonly downloadQCReportByID: {
            readonly name: "DownloadQCReportByID";
            readonly I: typeof Identifier;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download QC Report with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.InfrastructuresService.DownloadQCReportByUUID
         */
        readonly downloadQCReportByUUID: {
            readonly name: "DownloadQCReportByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download Label for the given Identifier
         *
         * @generated from rpc Scailo.InfrastructuresService.DownloadLabelByID
         */
        readonly downloadLabelByID: {
            readonly name: "DownloadLabelByID";
            readonly I: typeof Identifier;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download Label for the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.InfrastructuresService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all inventory interactions for infrastructure with the given IdentifierUUID
         *
         * @generated from rpc Scailo.InfrastructuresService.ViewInventoryInteractions
         */
        readonly viewInventoryInteractions: {
            readonly name: "ViewInventoryInteractions";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InventoryInteractionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.InfrastructuresService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof InfrastructuresServiceSearchAllReq;
            readonly O: typeof InfrastructuresList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.InfrastructuresService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof InfrastructuresServiceFilterReq;
            readonly O: typeof InfrastructuresList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.InfrastructuresService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof InfrastructuresServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request
         *
         * @generated from rpc Scailo.InfrastructuresService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof InfrastructuresServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload records
         *
         * @generated from rpc Scailo.InfrastructuresService.DownloadImportTemplate
         */
        readonly downloadImportTemplate: {
            readonly name: "DownloadImportTemplate";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file. Imports records as initial stock
         *
         * @generated from rpc Scailo.InfrastructuresService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=infrastructures.scailo_connect.d.ts.map