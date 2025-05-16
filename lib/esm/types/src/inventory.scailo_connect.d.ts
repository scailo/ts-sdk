import { ConsolidatedInventoryStatistics, GenericInventory, GenericInventoryList, InventoryHashSearchReq, InventoryServiceFamilyQuantityReq, IssuableInventorySearchReq, ReturnableInventorySearchReq } from "./inventory.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { Identifier, QuantityResponse, SimpleSearchReq } from "./base.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on inventory
 *
 * @generated from service Scailo.InventoryService
 */
export declare const InventoryService: {
    readonly typeName: "Scailo.InventoryService";
    readonly methods: {
        /**
         * View inventory item by hash
         *
         * @generated from rpc Scailo.InventoryService.ViewByHash
         */
        readonly viewByHash: {
            readonly name: "ViewByHash";
            readonly I: typeof InventoryHashSearchReq;
            readonly O: typeof GenericInventory;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View inventory item by short URL
         *
         * @generated from rpc Scailo.InventoryService.ViewByShortURL
         */
        readonly viewByShortURL: {
            readonly name: "ViewByShortURL";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof GenericInventory;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View issuable inventory
         *
         * @generated from rpc Scailo.InventoryService.ViewIssuable
         */
        readonly viewIssuable: {
            readonly name: "ViewIssuable";
            readonly I: typeof IssuableInventorySearchReq;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View issued inventory for a Goods Dispatch represented by the Identifier
         *
         * @generated from rpc Scailo.InventoryService.ViewIssuedForGoodsDispatch
         */
        readonly viewIssuedForGoodsDispatch: {
            readonly name: "ViewIssuedForGoodsDispatch";
            readonly I: typeof Identifier;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View issued inventory for an Outward Job Free Issue Material represented by the Identifier
         *
         * @generated from rpc Scailo.InventoryService.ViewIssuedForOutwardJobFreeIssueMaterial
         */
        readonly viewIssuedForOutwardJobFreeIssueMaterial: {
            readonly name: "ViewIssuedForOutwardJobFreeIssueMaterial";
            readonly I: typeof Identifier;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View admitted inventory from a Goods Receipt represented by the Identifier
         *
         * @generated from rpc Scailo.InventoryService.ViewAdmittedFromGoodsReceipt
         */
        readonly viewAdmittedFromGoodsReceipt: {
            readonly name: "ViewAdmittedFromGoodsReceipt";
            readonly I: typeof Identifier;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View admitted inventory from an Inward Job Free Issue Material represented by the Identifier
         *
         * @generated from rpc Scailo.InventoryService.ViewAdmittedFromInwardJobFreeIssueMaterial
         */
        readonly viewAdmittedFromInwardJobFreeIssueMaterial: {
            readonly name: "ViewAdmittedFromInwardJobFreeIssueMaterial";
            readonly I: typeof Identifier;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View admitted inventory from a Production Plan represented by the Identifier
         *
         * @generated from rpc Scailo.InventoryService.ViewAdmittedFromProductionPlan
         */
        readonly viewAdmittedFromProductionPlan: {
            readonly name: "ViewAdmittedFromProductionPlan";
            readonly I: typeof Identifier;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View inventory that is returnable from a purchase order
         *
         * @generated from rpc Scailo.InventoryService.ViewReturnableForPurchaseOrder
         * @deprecated
         */
        readonly viewReturnableForPurchaseOrder: {
            readonly name: "ViewReturnableForPurchaseOrder";
            readonly I: typeof ReturnableInventorySearchReq;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View inventory that is returnable from an inward job
         *
         * @generated from rpc Scailo.InventoryService.ViewReturnableForInwardJob
         * @deprecated
         */
        readonly viewReturnableForInwardJob: {
            readonly name: "ViewReturnableForInwardJob";
            readonly I: typeof ReturnableInventorySearchReq;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View inventory that is returnable from a stock issuance
         *
         * @generated from rpc Scailo.InventoryService.ViewReturnableForStockIssuance
         * @deprecated
         */
        readonly viewReturnableForStockIssuance: {
            readonly name: "ViewReturnableForStockIssuance";
            readonly I: typeof ReturnableInventorySearchReq;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View inventory that is returnable from a sales order
         *
         * @generated from rpc Scailo.InventoryService.ViewReturnableForSalesOrder
         * @deprecated
         */
        readonly viewReturnableForSalesOrder: {
            readonly name: "ViewReturnableForSalesOrder";
            readonly I: typeof ReturnableInventorySearchReq;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View inventory that is returnable from an outward job
         *
         * @generated from rpc Scailo.InventoryService.ViewReturnableForOutwardJob
         * @deprecated
         */
        readonly viewReturnableForOutwardJob: {
            readonly name: "ViewReturnableForOutwardJob";
            readonly I: typeof ReturnableInventorySearchReq;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View quantity remaining of the family in the given status
         *
         * @generated from rpc Scailo.InventoryService.ViewQuantityRemaining
         */
        readonly viewQuantityRemaining: {
            readonly name: "ViewQuantityRemaining";
            readonly I: typeof InventoryServiceFamilyQuantityReq;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Quantity of inventory items of the family with the given Identifier that are being manufactured
         *
         * @generated from rpc Scailo.InventoryService.CountWorkInProgress
         */
        readonly countWorkInProgress: {
            readonly name: "CountWorkInProgress";
            readonly I: typeof Identifier;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Quantity of inventory items of the family with the given Identifier that have been indented
         *
         * @generated from rpc Scailo.InventoryService.CountIndented
         */
        readonly countIndented: {
            readonly name: "CountIndented";
            readonly I: typeof Identifier;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Quantity of inventory items of the family with the given Identifier that have been ordered
         *
         * @generated from rpc Scailo.InventoryService.CountOrdered
         */
        readonly countOrdered: {
            readonly name: "CountOrdered";
            readonly I: typeof Identifier;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View base demand quantity of the family with the given Identifier
         *
         * @generated from rpc Scailo.InventoryService.ViewBaseDemandQuantity
         */
        readonly viewBaseDemandQuantity: {
            readonly name: "ViewBaseDemandQuantity";
            readonly I: typeof Identifier;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View adjusted demand quantity of the family with the given Identifier
         *
         * @generated from rpc Scailo.InventoryService.ViewAdjustedDemandQuantity
         */
        readonly viewAdjustedDemandQuantity: {
            readonly name: "ViewAdjustedDemandQuantity";
            readonly I: typeof Identifier;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View required quantity of the family with the given Identifier
         *
         * @generated from rpc Scailo.InventoryService.ViewRequiredQuantity
         */
        readonly viewRequiredQuantity: {
            readonly name: "ViewRequiredQuantity";
            readonly I: typeof Identifier;
            readonly O: typeof QuantityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View consolidated inventory statistics
         *
         * @generated from rpc Scailo.InventoryService.ViewConsolidatedStatistics
         */
        readonly viewConsolidatedStatistics: {
            readonly name: "ViewConsolidatedStatistics";
            readonly I: typeof Identifier;
            readonly O: typeof ConsolidatedInventoryStatistics;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View inventory placed in storage represented by the Identifier
         *
         * @generated from rpc Scailo.InventoryService.ViewInStorage
         */
        readonly viewInStorage: {
            readonly name: "ViewInStorage";
            readonly I: typeof Identifier;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=inventory.scailo_connect.d.ts.map