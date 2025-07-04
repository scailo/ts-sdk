[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralSettings

# Class: GeneralSettings

Describes the available general settings

**`Generated`**

from message Scailo.GeneralSettings

## Hierarchy

- `Message`\<[`GeneralSettings`](GeneralSettings.md)\>

  ↳ **`GeneralSettings`**

## Table of contents

### Constructors

- [constructor](GeneralSettings.md#constructor)

### Properties

- [address](GeneralSettings.md#address)
- [authlessAccessDomain](GeneralSettings.md#authlessaccessdomain)
- [autoReqVerifyOnExitRecordEntry](GeneralSettings.md#autoreqverifyonexitrecordentry)
- [cin](GeneralSettings.md#cin)
- [city](GeneralSettings.md#city)
- [companyName](GeneralSettings.md#companyname)
- [country](GeneralSettings.md#country)
- [disableViCreationWithBillDateAfterPoApproval](GeneralSettings.md#disablevicreationwithbilldateafterpoapproval)
- [domainName](GeneralSettings.md#domainname)
- [email](GeneralSettings.md#email)
- [entityUuid](GeneralSettings.md#entityuuid)
- [expenseSenderEmail](GeneralSettings.md#expensesenderemail)
- [gstin](GeneralSettings.md#gstin)
- [licensedTo](GeneralSettings.md#licensedto)
- [metadata](GeneralSettings.md#metadata)
- [pan](GeneralSettings.md#pan)
- [phone](GeneralSettings.md#phone)
- [pinCode](GeneralSettings.md#pincode)
- [purchaseOrderSenderEmail](GeneralSettings.md#purchaseordersenderemail)
- [requireMfaForRecordApproval](GeneralSettings.md#requiremfaforrecordapproval)
- [salesEnquirySenderEmail](GeneralSettings.md#salesenquirysenderemail)
- [salesInvoiceSenderEmail](GeneralSettings.md#salesinvoicesenderemail)
- [salesOrderSenderEmail](GeneralSettings.md#salesordersenderemail)
- [salesQuotationSenderEmail](GeneralSettings.md#salesquotationsenderemail)
- [state](GeneralSettings.md#state)
- [vendorInvoiceSenderEmail](GeneralSettings.md#vendorinvoicesenderemail)
- [workOrderSenderEmail](GeneralSettings.md#workordersenderemail)
- [fields](GeneralSettings.md#fields)
- [runtime](GeneralSettings.md#runtime)
- [typeName](GeneralSettings.md#typename)

### Methods

- [clone](GeneralSettings.md#clone)
- [equals](GeneralSettings.md#equals)
- [fromBinary](GeneralSettings.md#frombinary)
- [fromJson](GeneralSettings.md#fromjson)
- [fromJsonString](GeneralSettings.md#fromjsonstring)
- [getType](GeneralSettings.md#gettype)
- [toBinary](GeneralSettings.md#tobinary)
- [toJSON](GeneralSettings.md#tojson)
- [toJson](GeneralSettings.md#tojson-1)
- [toJsonString](GeneralSettings.md#tojsonstring)
- [equals](GeneralSettings.md#equals-1)
- [fromBinary](GeneralSettings.md#frombinary-1)
- [fromJson](GeneralSettings.md#fromjson-1)
- [fromJsonString](GeneralSettings.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralSettings**(`data?`): [`GeneralSettings`](GeneralSettings.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralSettings`](GeneralSettings.md)\> |

#### Returns

[`GeneralSettings`](GeneralSettings.md)

#### Overrides

Message\&lt;GeneralSettings\&gt;.constructor

#### Defined in

src/general_settings.scailo_pb.ts:440

## Properties

### address

• **address**: `string` = `""`

The address of the organization

**`Generated`**

from field: string address = 13;

#### Defined in

src/general_settings.scailo_pb.ts:291

___

### authlessAccessDomain

• **authlessAccessDomain**: `string` = `""`

The name of the domain using which users can access records without logging in

**`Generated`**

from field: string authless_access_domain = 41;

#### Defined in

src/general_settings.scailo_pb.ts:354

___

### autoReqVerifyOnExitRecordEntry

• **autoReqVerifyOnExitRecordEntry**: `boolean` = `false`

Stores if attendances should be automatically sent for verification on exit record

**`Generated`**

from field: bool auto_req_verify_on_exit_record_entry = 72;

#### Defined in

src/general_settings.scailo_pb.ts:431

___

### cin

• **cin**: `string` = `""`

The Company Identification Number

**`Generated`**

from field: string cin = 18;

#### Defined in

src/general_settings.scailo_pb.ts:326

___

### city

• **city**: `string` = `""`

The city of the organization

**`Generated`**

from field: string city = 14;

#### Defined in

src/general_settings.scailo_pb.ts:298

___

### companyName

• **companyName**: `string` = `""`

The name of the organization

**`Generated`**

from field: string company_name = 10;

#### Defined in

src/general_settings.scailo_pb.ts:270

___

### country

• **country**: `string` = `""`

The country of the organization

**`Generated`**

from field: string country = 17;

#### Defined in

src/general_settings.scailo_pb.ts:319

___

### disableViCreationWithBillDateAfterPoApproval

• **disableViCreationWithBillDateAfterPoApproval**: `boolean` = `false`

Stores if vendor invoices should not be created with bill date that is after the approval of a purchase order

**`Generated`**

from field: bool disable_vi_creation_with_bill_date_after_po_approval = 70;

#### Defined in

src/general_settings.scailo_pb.ts:417

___

### domainName

• **domainName**: `string` = `""`

The name of the domain under which this application is run

**`Generated`**

from field: string domain_name = 40;

#### Defined in

src/general_settings.scailo_pb.ts:347

___

### email

• **email**: `string` = `""`

The email of the organization

**`Generated`**

from field: string email = 12;

#### Defined in

src/general_settings.scailo_pb.ts:284

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/general_settings.scailo_pb.ts:256

___

### expenseSenderEmail

• **expenseSenderEmail**: `string` = `""`

The email address from which expenses will be sent

**`Generated`**

from field: string expense_sender_email = 57;

#### Defined in

src/general_settings.scailo_pb.ts:410

___

### gstin

• **gstin**: `string` = `""`

The GSTIN of the organization

**`Generated`**

from field: string gstin = 20;

#### Defined in

src/general_settings.scailo_pb.ts:340

___

### licensedTo

• **licensedTo**: `string` = `""`

Stores the name of the organization that holds the license

**`Generated`**

from field: string licensed_to = 100;

#### Defined in

src/general_settings.scailo_pb.ts:438

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales order

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/general_settings.scailo_pb.ts:263

___

### pan

• **pan**: `string` = `""`

The PAN number of the organization

**`Generated`**

from field: string pan = 19;

#### Defined in

src/general_settings.scailo_pb.ts:333

___

### phone

• **phone**: `string` = `""`

The phone number of the organization

**`Generated`**

from field: string phone = 11;

#### Defined in

src/general_settings.scailo_pb.ts:277

___

### pinCode

• **pinCode**: `string` = `""`

The pin code of the organization

**`Generated`**

from field: string pin_code = 16;

#### Defined in

src/general_settings.scailo_pb.ts:312

___

### purchaseOrderSenderEmail

• **purchaseOrderSenderEmail**: `string` = `""`

The email address from which purchase orders will be sent

**`Generated`**

from field: string purchase_order_sender_email = 50;

#### Defined in

src/general_settings.scailo_pb.ts:361

___

### requireMfaForRecordApproval

• **requireMfaForRecordApproval**: `boolean` = `false`

Stores if MFA is required for record approval

**`Generated`**

from field: bool require_mfa_for_record_approval = 71;

#### Defined in

src/general_settings.scailo_pb.ts:424

___

### salesEnquirySenderEmail

• **salesEnquirySenderEmail**: `string` = `""`

The email address from which sales enquiries will be sent

**`Generated`**

from field: string sales_enquiry_sender_email = 51;

#### Defined in

src/general_settings.scailo_pb.ts:368

___

### salesInvoiceSenderEmail

• **salesInvoiceSenderEmail**: `string` = `""`

The email address from which sales invoices will be sent

**`Generated`**

from field: string sales_invoice_sender_email = 53;

#### Defined in

src/general_settings.scailo_pb.ts:382

___

### salesOrderSenderEmail

• **salesOrderSenderEmail**: `string` = `""`

The email address from which sales orders will be sent

**`Generated`**

from field: string sales_order_sender_email = 52;

#### Defined in

src/general_settings.scailo_pb.ts:375

___

### salesQuotationSenderEmail

• **salesQuotationSenderEmail**: `string` = `""`

The email address from which sales quotations will be sent

**`Generated`**

from field: string sales_quotation_sender_email = 54;

#### Defined in

src/general_settings.scailo_pb.ts:389

___

### state

• **state**: `string` = `""`

The state of the organization

**`Generated`**

from field: string state = 15;

#### Defined in

src/general_settings.scailo_pb.ts:305

___

### vendorInvoiceSenderEmail

• **vendorInvoiceSenderEmail**: `string` = `""`

The email address from which vendor invoices will be sent

**`Generated`**

from field: string vendor_invoice_sender_email = 55;

#### Defined in

src/general_settings.scailo_pb.ts:396

___

### workOrderSenderEmail

• **workOrderSenderEmail**: `string` = `""`

The email address from which work orders will be sent

**`Generated`**

from field: string work_order_sender_email = 56;

#### Defined in

src/general_settings.scailo_pb.ts:403

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/general_settings.scailo_pb.ts:447

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/general_settings.scailo_pb.ts:445

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralSettings"``

#### Defined in

src/general_settings.scailo_pb.ts:446

## Methods

### clone

▸ **clone**(): [`GeneralSettings`](GeneralSettings.md)

Create a deep copy.

#### Returns

[`GeneralSettings`](GeneralSettings.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralSettings`](GeneralSettings.md) \| `PlainMessage`\<[`GeneralSettings`](GeneralSettings.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralSettings`](GeneralSettings.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralSettings`](GeneralSettings.md)\>

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
| `a` | `undefined` \| [`GeneralSettings`](GeneralSettings.md) \| `PlainMessage`\<[`GeneralSettings`](GeneralSettings.md)\> |
| `b` | `undefined` \| [`GeneralSettings`](GeneralSettings.md) \| `PlainMessage`\<[`GeneralSettings`](GeneralSettings.md)\> |

#### Returns

`boolean`

#### Defined in

src/general_settings.scailo_pb.ts:489

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralSettings`](GeneralSettings.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralSettings`](GeneralSettings.md)

#### Defined in

src/general_settings.scailo_pb.ts:477

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralSettings`](GeneralSettings.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralSettings`](GeneralSettings.md)

#### Defined in

src/general_settings.scailo_pb.ts:481

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralSettings`](GeneralSettings.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralSettings`](GeneralSettings.md)

#### Defined in

src/general_settings.scailo_pb.ts:485
