[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationRequest

# Class: QuotationRequest

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.QuotationRequest

## Hierarchy

- `Message`\<[`QuotationRequest`](QuotationRequest.md)\>

  ↳ **`QuotationRequest`**

## Table of contents

### Constructors

- [constructor](QuotationRequest.md#constructor)

### Properties

- [approvalMetadata](QuotationRequest.md#approvalmetadata)
- [completedOn](QuotationRequest.md#completedon)
- [currencyId](QuotationRequest.md#currencyid)
- [description](QuotationRequest.md#description)
- [entityUuid](QuotationRequest.md#entityuuid)
- [finalRefNumber](QuotationRequest.md#finalrefnumber)
- [formData](QuotationRequest.md#formdata)
- [lastDate](QuotationRequest.md#lastdate)
- [list](QuotationRequest.md#list)
- [logs](QuotationRequest.md#logs)
- [metadata](QuotationRequest.md#metadata)
- [priority](QuotationRequest.md#priority)
- [purchaseEnquiryId](QuotationRequest.md#purchaseenquiryid)
- [referenceId](QuotationRequest.md#referenceid)
- [renewalPeriod](QuotationRequest.md#renewalperiod)
- [status](QuotationRequest.md#status)
- [vaultFolderId](QuotationRequest.md#vaultfolderid)
- [fields](QuotationRequest.md#fields)
- [runtime](QuotationRequest.md#runtime)
- [typeName](QuotationRequest.md#typename)

### Methods

- [clone](QuotationRequest.md#clone)
- [equals](QuotationRequest.md#equals)
- [fromBinary](QuotationRequest.md#frombinary)
- [fromJson](QuotationRequest.md#fromjson)
- [fromJsonString](QuotationRequest.md#fromjsonstring)
- [getType](QuotationRequest.md#gettype)
- [toBinary](QuotationRequest.md#tobinary)
- [toJSON](QuotationRequest.md#tojson)
- [toJson](QuotationRequest.md#tojson-1)
- [toJsonString](QuotationRequest.md#tojsonstring)
- [equals](QuotationRequest.md#equals-1)
- [fromBinary](QuotationRequest.md#frombinary-1)
- [fromJson](QuotationRequest.md#fromjson-1)
- [fromJsonString](QuotationRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationRequest**(`data?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationRequest`](QuotationRequest.md)\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Overrides

Message\&lt;QuotationRequest\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:698

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/quotations_requests.scailo_pb.ts:598

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this quotation request was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

src/quotations_requests.scailo_pb.ts:619

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

src/quotations_requests.scailo_pb.ts:661

___

### description

• **description**: `string` = `""`

The description of the quotation request

**`Generated`**

from field: string description = 17;

#### Defined in

src/quotations_requests.scailo_pb.ts:682

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/quotations_requests.scailo_pb.ts:584

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

src/quotations_requests.scailo_pb.ts:640

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/quotations_requests.scailo_pb.ts:696

___

### lastDate

• **lastDate**: `string` = `""`

The date until which quotations responses can be sent

**`Generated`**

from field: string last_date = 13;

#### Defined in

src/quotations_requests.scailo_pb.ts:654

___

### list

• **list**: [`QuotationRequestItem`](QuotationRequestItem.md)[] = `[]`

The list of associated quotation request items

**`Generated`**

from field: repeated Scailo.QuotationRequestItem list = 20;

#### Defined in

src/quotations_requests.scailo_pb.ts:689

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this quotation request

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/quotations_requests.scailo_pb.ts:612

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this quotation request

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/quotations_requests.scailo_pb.ts:591

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 16;

#### Defined in

src/quotations_requests.scailo_pb.ts:675

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

The associated purchase enquiry

**`Generated`**

from field: uint64 purchase_enquiry_id = 12;

#### Defined in

src/quotations_requests.scailo_pb.ts:647

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation request

**`Generated`**

from field: string reference_id = 10;

#### Defined in

src/quotations_requests.scailo_pb.ts:633

___

### renewalPeriod

• **renewalPeriod**: `bigint` = `protoInt64.zero`

The number of days until which the quotation request is valid

**`Generated`**

from field: uint64 renewal_period = 15;

#### Defined in

src/quotations_requests.scailo_pb.ts:668

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this quotation request

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/quotations_requests.scailo_pb.ts:605

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/quotations_requests.scailo_pb.ts:626

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:705

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:703

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationRequest"``

#### Defined in

src/quotations_requests.scailo_pb.ts:704

## Methods

### clone

▸ **clone**(): [`QuotationRequest`](QuotationRequest.md)

Create a deep copy.

#### Returns

[`QuotationRequest`](QuotationRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationRequest`](QuotationRequest.md) \| `PlainMessage`\<[`QuotationRequest`](QuotationRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationRequest`](QuotationRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationRequest`](QuotationRequest.md)\>

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
| `a` | `undefined` \| [`QuotationRequest`](QuotationRequest.md) \| `PlainMessage`\<[`QuotationRequest`](QuotationRequest.md)\> |
| `b` | `undefined` \| [`QuotationRequest`](QuotationRequest.md) \| `PlainMessage`\<[`QuotationRequest`](QuotationRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:737

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:725

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:729

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:733
