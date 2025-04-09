import { Merchandise, MerchandisesList, MerchandisesServiceCountReq, MerchandisesServiceCreateRequest, MerchandisesServiceFilterReq, MerchandisesServicePaginationReq, MerchandisesServicePaginationResponse, MerchandisesServiceSearchAllReq, MerchandisesServiceSendToStoreRequest, MerchandisesServiceUpdateRequest } from "./merchandises.scailo_pb.js";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, InventoryInteractionsList, InventoryPartitionRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each merchandise
 *
 * @generated from service Scailo.MerchandisesService
 */
export declare const MerchandisesService: {
    readonly typeName: "Scailo.MerchandisesService";
    readonly methods: {
        /**
         * Create (and Send for QC)
         *
         * @generated from rpc Scailo.MerchandisesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof MerchandisesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send to Store
         *
         * @generated from rpc Scailo.MerchandisesService.SendToStore
         */
        readonly sendToStore: {
            readonly name: "SendToStore";
            readonly I: typeof MerchandisesServiceSendToStoreRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.MerchandisesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof MerchandisesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for Rework
         *
         * @generated from rpc Scailo.MerchandisesService.SendForRework
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
         * @generated from rpc Scailo.MerchandisesService.SendForQC
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
         * @generated from rpc Scailo.MerchandisesService.SplitLot
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
         * @generated from rpc Scailo.MerchandisesService.Partition
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
         * @generated from rpc Scailo.MerchandisesService.Consume
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
         * @generated from rpc Scailo.MerchandisesService.Reject
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
         * @generated from rpc Scailo.MerchandisesService.Scrap
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
         * @generated from rpc Scailo.MerchandisesService.ReturnMaterial
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
         * @generated from rpc Scailo.MerchandisesService.Discard
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
         * @generated from rpc Scailo.MerchandisesService.CommentAdd
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
         * @generated from rpc Scailo.MerchandisesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Merchandise;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.MerchandisesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Merchandise;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.MerchandisesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Merchandise;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.MerchandisesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Merchandise;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.MerchandisesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof MerchandisesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.MerchandisesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof MerchandisesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.MerchandisesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof MerchandisesServicePaginationReq;
            readonly O: typeof MerchandisesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download QC Report with the given Identifier
         *
         * @generated from rpc Scailo.MerchandisesService.DownloadQCReportByID
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
         * @generated from rpc Scailo.MerchandisesService.DownloadQCReportByUUID
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
         * @generated from rpc Scailo.MerchandisesService.DownloadLabelByID
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
         * @generated from rpc Scailo.MerchandisesService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all inventory interactions for merchandise with the given IdentifierUUID
         *
         * @generated from rpc Scailo.MerchandisesService.ViewInventoryInteractions
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
         * @generated from rpc Scailo.MerchandisesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof MerchandisesServiceSearchAllReq;
            readonly O: typeof MerchandisesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.MerchandisesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof MerchandisesServiceFilterReq;
            readonly O: typeof MerchandisesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.MerchandisesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof MerchandisesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.MerchandisesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof MerchandisesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file. Imports records as initial stock
         *
         * @generated from rpc Scailo.MerchandisesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=merchandises.scailo_connect.d.ts.map