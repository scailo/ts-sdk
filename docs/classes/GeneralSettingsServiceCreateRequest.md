[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralSettingsServiceCreateRequest

# Class: GeneralSettingsServiceCreateRequest

Describes the necessary data structure during creation of a general settings

**`Generated`**

from message Scailo.GeneralSettingsServiceCreateRequest

## Hierarchy

- `Message`\<[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)\>

  ↳ **`GeneralSettingsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](GeneralSettingsServiceCreateRequest.md#constructor)

### Properties

- [address](GeneralSettingsServiceCreateRequest.md#address)
- [authlessAccessDomain](GeneralSettingsServiceCreateRequest.md#authlessaccessdomain)
- [autoReqVerifyOnExitRecordEntry](GeneralSettingsServiceCreateRequest.md#autoreqverifyonexitrecordentry)
- [cin](GeneralSettingsServiceCreateRequest.md#cin)
- [city](GeneralSettingsServiceCreateRequest.md#city)
- [companyName](GeneralSettingsServiceCreateRequest.md#companyname)
- [country](GeneralSettingsServiceCreateRequest.md#country)
- [disableViCreationWithBillDateAfterPoApproval](GeneralSettingsServiceCreateRequest.md#disablevicreationwithbilldateafterpoapproval)
- [domainName](GeneralSettingsServiceCreateRequest.md#domainname)
- [email](GeneralSettingsServiceCreateRequest.md#email)
- [entityUuid](GeneralSettingsServiceCreateRequest.md#entityuuid)
- [expenseSenderEmail](GeneralSettingsServiceCreateRequest.md#expensesenderemail)
- [formData](GeneralSettingsServiceCreateRequest.md#formdata)
- [gstin](GeneralSettingsServiceCreateRequest.md#gstin)
- [logo](GeneralSettingsServiceCreateRequest.md#logo)
- [pan](GeneralSettingsServiceCreateRequest.md#pan)
- [phone](GeneralSettingsServiceCreateRequest.md#phone)
- [pinCode](GeneralSettingsServiceCreateRequest.md#pincode)
- [purchaseOrderSenderEmail](GeneralSettingsServiceCreateRequest.md#purchaseordersenderemail)
- [requireMfaForRecordApproval](GeneralSettingsServiceCreateRequest.md#requiremfaforrecordapproval)
- [salesEnquirySenderEmail](GeneralSettingsServiceCreateRequest.md#salesenquirysenderemail)
- [salesInvoiceSenderEmail](GeneralSettingsServiceCreateRequest.md#salesinvoicesenderemail)
- [salesOrderSenderEmail](GeneralSettingsServiceCreateRequest.md#salesordersenderemail)
- [salesQuotationSenderEmail](GeneralSettingsServiceCreateRequest.md#salesquotationsenderemail)
- [state](GeneralSettingsServiceCreateRequest.md#state)
- [vendorInvoiceSenderEmail](GeneralSettingsServiceCreateRequest.md#vendorinvoicesenderemail)
- [workOrderSenderEmail](GeneralSettingsServiceCreateRequest.md#workordersenderemail)
- [fields](GeneralSettingsServiceCreateRequest.md#fields)
- [runtime](GeneralSettingsServiceCreateRequest.md#runtime)
- [typeName](GeneralSettingsServiceCreateRequest.md#typename)

### Methods

- [clone](GeneralSettingsServiceCreateRequest.md#clone)
- [equals](GeneralSettingsServiceCreateRequest.md#equals)
- [fromBinary](GeneralSettingsServiceCreateRequest.md#frombinary)
- [fromJson](GeneralSettingsServiceCreateRequest.md#fromjson)
- [fromJsonString](GeneralSettingsServiceCreateRequest.md#fromjsonstring)
- [getType](GeneralSettingsServiceCreateRequest.md#gettype)
- [toBinary](GeneralSettingsServiceCreateRequest.md#tobinary)
- [toJSON](GeneralSettingsServiceCreateRequest.md#tojson)
- [toJson](GeneralSettingsServiceCreateRequest.md#tojson-1)
- [toJsonString](GeneralSettingsServiceCreateRequest.md#tojsonstring)
- [equals](GeneralSettingsServiceCreateRequest.md#equals-1)
- [fromBinary](GeneralSettingsServiceCreateRequest.md#frombinary-1)
- [fromJson](GeneralSettingsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](GeneralSettingsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralSettingsServiceCreateRequest**(`data?`): [`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)\> |

#### Returns

[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

#### Overrides

Message\&lt;GeneralSettingsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/general_settings.scailo_pb.ts:477](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L477)

## Properties

### address

• **address**: `string` = `""`

The address of the organization

**`Generated`**

from field: string address = 13;

#### Defined in

[src/general_settings.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L321)

___

### authlessAccessDomain

• **authlessAccessDomain**: `string` = `""`

The name of the domain using which users can access records without logging in

**`Generated`**

from field: string authless_access_domain = 41;

#### Defined in

[src/general_settings.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L384)

___

### autoReqVerifyOnExitRecordEntry

• **autoReqVerifyOnExitRecordEntry**: `boolean` = `false`

Stores if attendances should be automatically sent for verification on exit record

**`Generated`**

from field: bool auto_req_verify_on_exit_record_entry = 72;

#### Defined in

[src/general_settings.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L461)

___

### cin

• **cin**: `string` = `""`

The Company Identification Number

**`Generated`**

from field: string cin = 18;

#### Defined in

[src/general_settings.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L356)

___

### city

• **city**: `string` = `""`

The city of the organization

**`Generated`**

from field: string city = 14;

#### Defined in

[src/general_settings.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L328)

___

### companyName

• **companyName**: `string` = `""`

The name of the organization

**`Generated`**

from field: string company_name = 10;

#### Defined in

[src/general_settings.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L300)

___

### country

• **country**: `string` = `""`

The country of the organization

**`Generated`**

from field: string country = 17;

#### Defined in

[src/general_settings.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L349)

___

### disableViCreationWithBillDateAfterPoApproval

• **disableViCreationWithBillDateAfterPoApproval**: `boolean` = `false`

Stores if vendor invoices should not be created with bill date that is after the approval of a purchase order

**`Generated`**

from field: bool disable_vi_creation_with_bill_date_after_po_approval = 70;

#### Defined in

[src/general_settings.scailo_pb.ts:447](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L447)

___

### domainName

• **domainName**: `string` = `""`

The name of the domain under which this application is run

**`Generated`**

from field: string domain_name = 40;

#### Defined in

[src/general_settings.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L377)

___

### email

• **email**: `string` = `""`

The email of the organization

**`Generated`**

from field: string email = 12;

#### Defined in

[src/general_settings.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L314)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/general_settings.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L293)

___

### expenseSenderEmail

• **expenseSenderEmail**: `string` = `""`

The email address from which expenses will be sent

**`Generated`**

from field: string expense_sender_email = 57;

#### Defined in

[src/general_settings.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L440)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 200;

#### Defined in

[src/general_settings.scailo_pb.ts:475](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L475)

___

### gstin

• **gstin**: `string` = `""`

The GSTIN of the organization

**`Generated`**

from field: string gstin = 20;

#### Defined in

[src/general_settings.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L370)

___

### logo

• **logo**: `string` = `""`

Stores the base64 encoded logo of the organization

**`Generated`**

from field: string logo = 80;

#### Defined in

[src/general_settings.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L468)

___

### pan

• **pan**: `string` = `""`

The PAN number of the organization

**`Generated`**

from field: string pan = 19;

#### Defined in

[src/general_settings.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L363)

___

### phone

• **phone**: `string` = `""`

The phone number of the organization

**`Generated`**

from field: string phone = 11;

#### Defined in

[src/general_settings.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L307)

___

### pinCode

• **pinCode**: `string` = `""`

The pin code of the organization

**`Generated`**

from field: string pin_code = 16;

#### Defined in

[src/general_settings.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L342)

___

### purchaseOrderSenderEmail

• **purchaseOrderSenderEmail**: `string` = `""`

The email address from which purchase orders will be sent

**`Generated`**

from field: string purchase_order_sender_email = 50;

#### Defined in

[src/general_settings.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L391)

___

### requireMfaForRecordApproval

• **requireMfaForRecordApproval**: `boolean` = `false`

Stores if MFA is required for record approval

**`Generated`**

from field: bool require_mfa_for_record_approval = 71;

#### Defined in

[src/general_settings.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L454)

___

### salesEnquirySenderEmail

• **salesEnquirySenderEmail**: `string` = `""`

The email address from which sales enquiries will be sent

**`Generated`**

from field: string sales_enquiry_sender_email = 51;

#### Defined in

[src/general_settings.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L398)

___

### salesInvoiceSenderEmail

• **salesInvoiceSenderEmail**: `string` = `""`

The email address from which sales invoices will be sent

**`Generated`**

from field: string sales_invoice_sender_email = 53;

#### Defined in

[src/general_settings.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L412)

___

### salesOrderSenderEmail

• **salesOrderSenderEmail**: `string` = `""`

The email address from which sales orders will be sent

**`Generated`**

from field: string sales_order_sender_email = 52;

#### Defined in

[src/general_settings.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L405)

___

### salesQuotationSenderEmail

• **salesQuotationSenderEmail**: `string` = `""`

The email address from which sales quotations will be sent

**`Generated`**

from field: string sales_quotation_sender_email = 54;

#### Defined in

[src/general_settings.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L419)

___

### state

• **state**: `string` = `""`

The state of the organization

**`Generated`**

from field: string state = 15;

#### Defined in

[src/general_settings.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L335)

___

### vendorInvoiceSenderEmail

• **vendorInvoiceSenderEmail**: `string` = `""`

The email address from which vendor invoices will be sent

**`Generated`**

from field: string vendor_invoice_sender_email = 55;

#### Defined in

[src/general_settings.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L426)

___

### workOrderSenderEmail

• **workOrderSenderEmail**: `string` = `""`

The email address from which work orders will be sent

**`Generated`**

from field: string work_order_sender_email = 56;

#### Defined in

[src/general_settings.scailo_pb.ts:433](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L433)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/general_settings.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L484)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/general_settings.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L482)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralSettingsServiceCreateRequest"``

#### Defined in

[src/general_settings.scailo_pb.ts:483](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L483)

## Methods

### clone

▸ **clone**(): [`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md) \| `PlainMessage`\<[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md) \| `PlainMessage`\<[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md) \| `PlainMessage`\<[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/general_settings.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L526)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

#### Defined in

[src/general_settings.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L514)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

#### Defined in

[src/general_settings.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L518)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralSettingsServiceCreateRequest`](GeneralSettingsServiceCreateRequest.md)

#### Defined in

[src/general_settings.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/general_settings.scailo_pb.ts#L522)
