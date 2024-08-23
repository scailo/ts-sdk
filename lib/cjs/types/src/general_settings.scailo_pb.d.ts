import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EmployeeMetadata } from "./base.scailo_pb.js";
/**
 *
 * Describes the parameters necessary to update the general settings for the organization
 *
 * @generated from message Scailo.GeneralSettingsUpdateRequest
 */
export declare class GeneralSettingsUpdateRequest extends Message<GeneralSettingsUpdateRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * The name of the organization
     *
     * @generated from field: string company_name = 10;
     */
    companyName: string;
    /**
     * The phone number of the organization
     *
     * @generated from field: string phone = 11;
     */
    phone: string;
    /**
     * The email of the organization
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The address of the organization
     *
     * @generated from field: string address = 13;
     */
    address: string;
    /**
     * The city of the organization
     *
     * @generated from field: string city = 14;
     */
    city: string;
    /**
     * The state of the organization
     *
     * @generated from field: string state = 15;
     */
    state: string;
    /**
     * The pin code of the organization
     *
     * @generated from field: string pin_code = 16;
     */
    pinCode: string;
    /**
     * The country of the organization
     *
     * @generated from field: string country = 17;
     */
    country: string;
    /**
     * The Company Identification Number
     *
     * @generated from field: string cin = 18;
     */
    cin: string;
    /**
     * The PAN number of the organization
     *
     * @generated from field: string pan = 19;
     */
    pan: string;
    /**
     * The GSTIN of the organization
     *
     * @generated from field: string gstin = 20;
     */
    gstin: string;
    /**
     * The name of the domain under which this application is run
     *
     * @generated from field: string domain_name = 40;
     */
    domainName: string;
    /**
     * The email address from which purchase orders will be sent
     *
     * @generated from field: string purchase_order_sender_email = 50;
     */
    purchaseOrderSenderEmail: string;
    /**
     * The email address from which sales enquiries will be sent
     *
     * @generated from field: string sales_enquiry_sender_email = 51;
     */
    salesEnquirySenderEmail: string;
    /**
     * The email address from which sales orders will be sent
     *
     * @generated from field: string sales_order_sender_email = 52;
     */
    salesOrderSenderEmail: string;
    /**
     * The email address from which sales invoices will be sent
     *
     * @generated from field: string sales_invoice_sender_email = 53;
     */
    salesInvoiceSenderEmail: string;
    /**
     * The email address from which sales quotations will be sent
     *
     * @generated from field: string sales_quotation_sender_email = 54;
     */
    salesQuotationSenderEmail: string;
    /**
     * The email address from which vendor invoices will be sent
     *
     * @generated from field: string vendor_invoice_sender_email = 55;
     */
    vendorInvoiceSenderEmail: string;
    /**
     * The email address from which work orders will be sent
     *
     * @generated from field: string work_order_sender_email = 56;
     */
    workOrderSenderEmail: string;
    /**
     * The email address from which expenses will be sent
     *
     * @generated from field: string expense_sender_email = 57;
     */
    expenseSenderEmail: string;
    /**
     * Stores if vendor invoices should not be created with bill date that is after the approval of a purchase order
     *
     * @generated from field: bool disable_vi_creation_with_bill_date_after_po_approval = 70;
     */
    disableViCreationWithBillDateAfterPoApproval: boolean;
    /**
     * Stores if MFA is required for record approval
     *
     * @generated from field: bool require_mfa_for_record_approval = 71;
     */
    requireMfaForRecordApproval: boolean;
    /**
     * Stores if attendances should be automatically sent for verification on exit record
     *
     * @generated from field: bool auto_req_verify_on_exit_record_entry = 72;
     */
    autoReqVerifyOnExitRecordEntry: boolean;
    constructor(data?: PartialMessage<GeneralSettingsUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralSettingsUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralSettingsUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralSettingsUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralSettingsUpdateRequest;
    static equals(a: GeneralSettingsUpdateRequest | PlainMessage<GeneralSettingsUpdateRequest> | undefined, b: GeneralSettingsUpdateRequest | PlainMessage<GeneralSettingsUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the available general settings
 *
 * @generated from message Scailo.GeneralSettings
 */
export declare class GeneralSettings extends Message<GeneralSettings> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this sales order
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The name of the organization
     *
     * @generated from field: string company_name = 10;
     */
    companyName: string;
    /**
     * The phone number of the organization
     *
     * @generated from field: string phone = 11;
     */
    phone: string;
    /**
     * The email of the organization
     *
     * @generated from field: string email = 12;
     */
    email: string;
    /**
     * The address of the organization
     *
     * @generated from field: string address = 13;
     */
    address: string;
    /**
     * The city of the organization
     *
     * @generated from field: string city = 14;
     */
    city: string;
    /**
     * The state of the organization
     *
     * @generated from field: string state = 15;
     */
    state: string;
    /**
     * The pin code of the organization
     *
     * @generated from field: string pin_code = 16;
     */
    pinCode: string;
    /**
     * The country of the organization
     *
     * @generated from field: string country = 17;
     */
    country: string;
    /**
     * The Company Identification Number
     *
     * @generated from field: string cin = 18;
     */
    cin: string;
    /**
     * The PAN number of the organization
     *
     * @generated from field: string pan = 19;
     */
    pan: string;
    /**
     * The GSTIN of the organization
     *
     * @generated from field: string gstin = 20;
     */
    gstin: string;
    /**
     * The name of the domain under which this application is run
     *
     * @generated from field: string domain_name = 40;
     */
    domainName: string;
    /**
     * The email address from which purchase orders will be sent
     *
     * @generated from field: string purchase_order_sender_email = 50;
     */
    purchaseOrderSenderEmail: string;
    /**
     * The email address from which sales enquiries will be sent
     *
     * @generated from field: string sales_enquiry_sender_email = 51;
     */
    salesEnquirySenderEmail: string;
    /**
     * The email address from which sales orders will be sent
     *
     * @generated from field: string sales_order_sender_email = 52;
     */
    salesOrderSenderEmail: string;
    /**
     * The email address from which sales invoices will be sent
     *
     * @generated from field: string sales_invoice_sender_email = 53;
     */
    salesInvoiceSenderEmail: string;
    /**
     * The email address from which sales quotations will be sent
     *
     * @generated from field: string sales_quotation_sender_email = 54;
     */
    salesQuotationSenderEmail: string;
    /**
     * The email address from which vendor invoices will be sent
     *
     * @generated from field: string vendor_invoice_sender_email = 55;
     */
    vendorInvoiceSenderEmail: string;
    /**
     * The email address from which work orders will be sent
     *
     * @generated from field: string work_order_sender_email = 56;
     */
    workOrderSenderEmail: string;
    /**
     * The email address from which expenses will be sent
     *
     * @generated from field: string expense_sender_email = 57;
     */
    expenseSenderEmail: string;
    /**
     * Stores if vendor invoices should not be created with bill date that is after the approval of a purchase order
     *
     * @generated from field: bool disable_vi_creation_with_bill_date_after_po_approval = 70;
     */
    disableViCreationWithBillDateAfterPoApproval: boolean;
    /**
     * Stores if MFA is required for record approval
     *
     * @generated from field: bool require_mfa_for_record_approval = 71;
     */
    requireMfaForRecordApproval: boolean;
    /**
     * Stores if attendances should be automatically sent for verification on exit record
     *
     * @generated from field: bool auto_req_verify_on_exit_record_entry = 72;
     */
    autoReqVerifyOnExitRecordEntry: boolean;
    /**
     * Stores the name of the organization that holds the license
     *
     * @generated from field: string licensed_to = 100;
     */
    licensedTo: string;
    constructor(data?: PartialMessage<GeneralSettings>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralSettings";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralSettings;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralSettings;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralSettings;
    static equals(a: GeneralSettings | PlainMessage<GeneralSettings> | undefined, b: GeneralSettings | PlainMessage<GeneralSettings> | undefined): boolean;
}
//# sourceMappingURL=general_settings.scailo_pb.d.ts.map