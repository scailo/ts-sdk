import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EmployeeMetadata } from "./base.scailo_pb.js";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
/**
 *
 * Describes the data structure of general settings on the platform
 *
 * @generated from message Scailo.GeneralSettings
 */
export declare class GeneralSettings extends Message<GeneralSettings> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
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
     * The name of the domain using which users can access records without logging in
     *
     * @generated from field: string authless_access_domain = 41;
     */
    authlessAccessDomain: string;
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
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 200;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<GeneralSettings>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralSettings";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralSettings;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralSettings;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralSettings;
    static equals(a: GeneralSettings | PlainMessage<GeneralSettings> | undefined, b: GeneralSettings | PlainMessage<GeneralSettings> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure during creation of a general settings
 *
 * @generated from message Scailo.GeneralSettingsServiceCreateRequest
 */
export declare class GeneralSettingsServiceCreateRequest extends Message<GeneralSettingsServiceCreateRequest> {
    /**
     *
     * @optional
     *
     * @description The globally unique identifier for the Organization or Business Entity.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
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
     * The name of the domain using which users can access records without logging in
     *
     * @generated from field: string authless_access_domain = 41;
     */
    authlessAccessDomain: string;
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
     * Stores the base64 encoded logo of the organization
     *
     * @generated from field: string logo = 80;
     */
    logo: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 200;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<GeneralSettingsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GeneralSettingsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneralSettingsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneralSettingsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneralSettingsServiceCreateRequest;
    static equals(a: GeneralSettingsServiceCreateRequest | PlainMessage<GeneralSettingsServiceCreateRequest> | undefined, b: GeneralSettingsServiceCreateRequest | PlainMessage<GeneralSettingsServiceCreateRequest> | undefined): boolean;
}
//# sourceMappingURL=general_settings.scailo_pb.d.ts.map