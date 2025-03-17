import { Product, ProductsList, ProductsServiceCountReq, ProductsServiceCreateRequest, ProductsServiceFilterReq, ProductsServicePaginationReq, ProductsServicePaginationResponse, ProductsServiceSearchAllReq, ProductsServiceSendToStoreRequest, ProductsServiceUpdateRequest } from "./products.scailo_pb.js";
import { ActiveStatus, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, InventoryInteractionsList, InventoryPartitionRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each product
 *
 * @generated from service Scailo.ProductsService
 */
export declare const ProductsService: {
    readonly typeName: "Scailo.ProductsService";
    readonly methods: {
        /**
         * Create (and Send for QC)
         *
         * @generated from rpc Scailo.ProductsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ProductsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send to Store
         *
         * @generated from rpc Scailo.ProductsService.SendToStore
         */
        readonly sendToStore: {
            readonly name: "SendToStore";
            readonly I: typeof ProductsServiceSendToStoreRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update
         *
         * @generated from rpc Scailo.ProductsService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof ProductsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for Rework
         *
         * @generated from rpc Scailo.ProductsService.SendForRework
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
         * @generated from rpc Scailo.ProductsService.SendForQC
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
         * @generated from rpc Scailo.ProductsService.SplitLot
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
         * @generated from rpc Scailo.ProductsService.Partition
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
         * @generated from rpc Scailo.ProductsService.Consume
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
         * @generated from rpc Scailo.ProductsService.Reject
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
         * @generated from rpc Scailo.ProductsService.Scrap
         */
        readonly scrap: {
            readonly name: "Scrap";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.ProductsService.Discard
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
         * @generated from rpc Scailo.ProductsService.CommentAdd
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
         * @generated from rpc Scailo.ProductsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Product;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.ProductsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Product;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.ProductsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Product;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.ProductsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Product;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.ProductsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof ProductsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.ProductsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ProductsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.ProductsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ProductsServicePaginationReq;
            readonly O: typeof ProductsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download QC Report with the given Identifier
         *
         * @generated from rpc Scailo.ProductsService.DownloadQCReportByID
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
         * @generated from rpc Scailo.ProductsService.DownloadQCReportByUUID
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
         * @generated from rpc Scailo.ProductsService.DownloadLabelByID
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
         * @generated from rpc Scailo.ProductsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all inventory interactions for product with the given IdentifierUUID
         *
         * @generated from rpc Scailo.ProductsService.ViewInventoryInteractions
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
         * @generated from rpc Scailo.ProductsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ProductsServiceSearchAllReq;
            readonly O: typeof ProductsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.ProductsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ProductsServiceFilterReq;
            readonly O: typeof ProductsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.ProductsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ProductsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=products.scailo_connect.d.ts.map