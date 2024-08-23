[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralSettingsUpdateRequest

# Class: GeneralSettingsUpdateRequest

Describes the parameters necessary to update the general settings for the organization

**`Generated`**

from message Scailo.GeneralSettingsUpdateRequest

## Hierarchy

- `Message`\<[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)\>

  ↳ **`GeneralSettingsUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GeneralSettingsUpdateRequest.md#constructor)

### Properties

- [address](GeneralSettingsUpdateRequest.md#address)
- [autoReqVerifyOnExitRecordEntry](GeneralSettingsUpdateRequest.md#autoreqverifyonexitrecordentry)
- [cin](GeneralSettingsUpdateRequest.md#cin)
- [city](GeneralSettingsUpdateRequest.md#city)
- [companyName](GeneralSettingsUpdateRequest.md#companyname)
- [country](GeneralSettingsUpdateRequest.md#country)
- [disableViCreationWithBillDateAfterPoApproval](GeneralSettingsUpdateRequest.md#disablevicreationwithbilldateafterpoapproval)
- [domainName](GeneralSettingsUpdateRequest.md#domainname)
- [email](GeneralSettingsUpdateRequest.md#email)
- [entityUuid](GeneralSettingsUpdateRequest.md#entityuuid)
- [expenseSenderEmail](GeneralSettingsUpdateRequest.md#expensesenderemail)
- [gstin](GeneralSettingsUpdateRequest.md#gstin)
- [pan](GeneralSettingsUpdateRequest.md#pan)
- [phone](GeneralSettingsUpdateRequest.md#phone)
- [pinCode](GeneralSettingsUpdateRequest.md#pincode)
- [purchaseOrderSenderEmail](GeneralSettingsUpdateRequest.md#purchaseordersenderemail)
- [requireMfaForRecordApproval](GeneralSettingsUpdateRequest.md#requiremfaforrecordapproval)
- [salesEnquirySenderEmail](GeneralSettingsUpdateRequest.md#salesenquirysenderemail)
- [salesInvoiceSenderEmail](GeneralSettingsUpdateRequest.md#salesinvoicesenderemail)
- [salesOrderSenderEmail](GeneralSettingsUpdateRequest.md#salesordersenderemail)
- [salesQuotationSenderEmail](GeneralSettingsUpdateRequest.md#salesquotationsenderemail)
- [state](GeneralSettingsUpdateRequest.md#state)
- [vendorInvoiceSenderEmail](GeneralSettingsUpdateRequest.md#vendorinvoicesenderemail)
- [workOrderSenderEmail](GeneralSettingsUpdateRequest.md#workordersenderemail)
- [fields](GeneralSettingsUpdateRequest.md#fields)
- [runtime](GeneralSettingsUpdateRequest.md#runtime)
- [typeName](GeneralSettingsUpdateRequest.md#typename)

### Methods

- [clone](GeneralSettingsUpdateRequest.md#clone)
- [equals](GeneralSettingsUpdateRequest.md#equals)
- [fromBinary](GeneralSettingsUpdateRequest.md#frombinary)
- [fromJson](GeneralSettingsUpdateRequest.md#fromjson)
- [fromJsonString](GeneralSettingsUpdateRequest.md#fromjsonstring)
- [getType](GeneralSettingsUpdateRequest.md#gettype)
- [toBinary](GeneralSettingsUpdateRequest.md#tobinary)
- [toJSON](GeneralSettingsUpdateRequest.md#tojson)
- [toJson](GeneralSettingsUpdateRequest.md#tojson-1)
- [toJsonString](GeneralSettingsUpdateRequest.md#tojsonstring)
- [equals](GeneralSettingsUpdateRequest.md#equals-1)
- [fromBinary](GeneralSettingsUpdateRequest.md#frombinary-1)
- [fromJson](GeneralSettingsUpdateRequest.md#fromjson-1)
- [fromJsonString](GeneralSettingsUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralSettingsUpdateRequest**(`data?`): [`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)\> |

#### Returns

[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

#### Overrides

Message\&lt;GeneralSettingsUpdateRequest\&gt;.constructor

#### Defined in

src/general_settings.scailo_pb.ts:185

## Properties

### address

• **address**: `string` = `""`

The address of the organization

**`Generated`**

from field: string address = 13;

#### Defined in

src/general_settings.scailo_pb.ts:50

___

### autoReqVerifyOnExitRecordEntry

• **autoReqVerifyOnExitRecordEntry**: `boolean` = `false`

Stores if attendances should be automatically sent for verification on exit record

**`Generated`**

from field: bool auto_req_verify_on_exit_record_entry = 72;

#### Defined in

src/general_settings.scailo_pb.ts:183

___

### cin

• **cin**: `string` = `""`

The Company Identification Number

**`Generated`**

from field: string cin = 18;

#### Defined in

src/general_settings.scailo_pb.ts:85

___

### city

• **city**: `string` = `""`

The city of the organization

**`Generated`**

from field: string city = 14;

#### Defined in

src/general_settings.scailo_pb.ts:57

___

### companyName

• **companyName**: `string` = `""`

The name of the organization

**`Generated`**

from field: string company_name = 10;

#### Defined in

src/general_settings.scailo_pb.ts:29

___

### country

• **country**: `string` = `""`

The country of the organization

**`Generated`**

from field: string country = 17;

#### Defined in

src/general_settings.scailo_pb.ts:78

___

### disableViCreationWithBillDateAfterPoApproval

• **disableViCreationWithBillDateAfterPoApproval**: `boolean` = `false`

Stores if vendor invoices should not be created with bill date that is after the approval of a purchase order

**`Generated`**

from field: bool disable_vi_creation_with_bill_date_after_po_approval = 70;

#### Defined in

src/general_settings.scailo_pb.ts:169

___

### domainName

• **domainName**: `string` = `""`

The name of the domain under which this application is run

**`Generated`**

from field: string domain_name = 40;

#### Defined in

src/general_settings.scailo_pb.ts:106

___

### email

• **email**: `string` = `""`

The email of the organization

**`Generated`**

from field: string email = 12;

#### Defined in

src/general_settings.scailo_pb.ts:43

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/general_settings.scailo_pb.ts:22

___

### expenseSenderEmail

• **expenseSenderEmail**: `string` = `""`

The email address from which expenses will be sent

**`Generated`**

from field: string expense_sender_email = 57;

#### Defined in

src/general_settings.scailo_pb.ts:162

___

### gstin

• **gstin**: `string` = `""`

The GSTIN of the organization

**`Generated`**

from field: string gstin = 20;

#### Defined in

src/general_settings.scailo_pb.ts:99

___

### pan

• **pan**: `string` = `""`

The PAN number of the organization

**`Generated`**

from field: string pan = 19;

#### Defined in

src/general_settings.scailo_pb.ts:92

___

### phone

• **phone**: `string` = `""`

The phone number of the organization

**`Generated`**

from field: string phone = 11;

#### Defined in

src/general_settings.scailo_pb.ts:36

___

### pinCode

• **pinCode**: `string` = `""`

The pin code of the organization

**`Generated`**

from field: string pin_code = 16;

#### Defined in

src/general_settings.scailo_pb.ts:71

___

### purchaseOrderSenderEmail

• **purchaseOrderSenderEmail**: `string` = `""`

The email address from which purchase orders will be sent

**`Generated`**

from field: string purchase_order_sender_email = 50;

#### Defined in

src/general_settings.scailo_pb.ts:113

___

### requireMfaForRecordApproval

• **requireMfaForRecordApproval**: `boolean` = `false`

Stores if MFA is required for record approval

**`Generated`**

from field: bool require_mfa_for_record_approval = 71;

#### Defined in

src/general_settings.scailo_pb.ts:176

___

### salesEnquirySenderEmail

• **salesEnquirySenderEmail**: `string` = `""`

The email address from which sales enquiries will be sent

**`Generated`**

from field: string sales_enquiry_sender_email = 51;

#### Defined in

src/general_settings.scailo_pb.ts:120

___

### salesInvoiceSenderEmail

• **salesInvoiceSenderEmail**: `string` = `""`

The email address from which sales invoices will be sent

**`Generated`**

from field: string sales_invoice_sender_email = 53;

#### Defined in

src/general_settings.scailo_pb.ts:134

___

### salesOrderSenderEmail

• **salesOrderSenderEmail**: `string` = `""`

The email address from which sales orders will be sent

**`Generated`**

from field: string sales_order_sender_email = 52;

#### Defined in

src/general_settings.scailo_pb.ts:127

___

### salesQuotationSenderEmail

• **salesQuotationSenderEmail**: `string` = `""`

The email address from which sales quotations will be sent

**`Generated`**

from field: string sales_quotation_sender_email = 54;

#### Defined in

src/general_settings.scailo_pb.ts:141

___

### state

• **state**: `string` = `""`

The state of the organization

**`Generated`**

from field: string state = 15;

#### Defined in

src/general_settings.scailo_pb.ts:64

___

### vendorInvoiceSenderEmail

• **vendorInvoiceSenderEmail**: `string` = `""`

The email address from which vendor invoices will be sent

**`Generated`**

from field: string vendor_invoice_sender_email = 55;

#### Defined in

src/general_settings.scailo_pb.ts:148

___

### workOrderSenderEmail

• **workOrderSenderEmail**: `string` = `""`

The email address from which work orders will be sent

**`Generated`**

from field: string work_order_sender_email = 56;

#### Defined in

src/general_settings.scailo_pb.ts:155

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/general_settings.scailo_pb.ts:192

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/general_settings.scailo_pb.ts:190

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralSettingsUpdateRequest"``

#### Defined in

src/general_settings.scailo_pb.ts:191

## Methods

### clone

▸ **clone**(): [`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

Create a deep copy.

#### Returns

[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md) \| `PlainMessage`\<[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md) \| `PlainMessage`\<[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)\> |
| `b` | `undefined` \| [`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md) \| `PlainMessage`\<[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/general_settings.scailo_pb.ts:231

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

#### Defined in

src/general_settings.scailo_pb.ts:219

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

#### Defined in

src/general_settings.scailo_pb.ts:223

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralSettingsUpdateRequest`](GeneralSettingsUpdateRequest.md)

#### Defined in

src/general_settings.scailo_pb.ts:227
