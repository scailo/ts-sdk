[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceCountReq

# Class: QuotationsRequestsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.QuotationsRequestsServiceCountReq

## Hierarchy

- `Message`\<[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)\>

  ↳ **`QuotationsRequestsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](QuotationsRequestsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](QuotationsRequestsServiceCountReq.md#approvedonend)
- [approvedOnStart](QuotationsRequestsServiceCountReq.md#approvedonstart)
- [approverRoleId](QuotationsRequestsServiceCountReq.md#approverroleid)
- [completedOnEnd](QuotationsRequestsServiceCountReq.md#completedonend)
- [completedOnStart](QuotationsRequestsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](QuotationsRequestsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](QuotationsRequestsServiceCountReq.md#creationtimestampstart)
- [currencyId](QuotationsRequestsServiceCountReq.md#currencyid)
- [entityUuid](QuotationsRequestsServiceCountReq.md#entityuuid)
- [finalRefNumber](QuotationsRequestsServiceCountReq.md#finalrefnumber)
- [isActive](QuotationsRequestsServiceCountReq.md#isactive)
- [modificationTimestampEnd](QuotationsRequestsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](QuotationsRequestsServiceCountReq.md#modificationtimestampstart)
- [purchaseEnquiryId](QuotationsRequestsServiceCountReq.md#purchaseenquiryid)
- [referenceId](QuotationsRequestsServiceCountReq.md#referenceid)
- [status](QuotationsRequestsServiceCountReq.md#status)
- [fields](QuotationsRequestsServiceCountReq.md#fields)
- [runtime](QuotationsRequestsServiceCountReq.md#runtime)
- [typeName](QuotationsRequestsServiceCountReq.md#typename)

### Methods

- [clone](QuotationsRequestsServiceCountReq.md#clone)
- [equals](QuotationsRequestsServiceCountReq.md#equals)
- [fromBinary](QuotationsRequestsServiceCountReq.md#frombinary)
- [fromJson](QuotationsRequestsServiceCountReq.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceCountReq.md#fromjsonstring)
- [getType](QuotationsRequestsServiceCountReq.md#gettype)
- [toBinary](QuotationsRequestsServiceCountReq.md#tobinary)
- [toJSON](QuotationsRequestsServiceCountReq.md#tojson)
- [toJson](QuotationsRequestsServiceCountReq.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceCountReq.md#tojsonstring)
- [equals](QuotationsRequestsServiceCountReq.md#equals-1)
- [fromBinary](QuotationsRequestsServiceCountReq.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceCountReq.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceCountReq**(`data?`): [`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)\> |

#### Returns

[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

#### Overrides

Message\&lt;QuotationsRequestsServiceCountReq\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:1912

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/quotations_requests.scailo_pb.ts:1861

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/quotations_requests.scailo_pb.ts:1854

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/quotations_requests.scailo_pb.ts:1847

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/quotations_requests.scailo_pb.ts:1868

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/quotations_requests.scailo_pb.ts:1882

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/quotations_requests.scailo_pb.ts:1875

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/quotations_requests.scailo_pb.ts:1812

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/quotations_requests.scailo_pb.ts:1805

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

src/quotations_requests.scailo_pb.ts:1910

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/quotations_requests.scailo_pb.ts:1833

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/quotations_requests.scailo_pb.ts:1896

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/quotations_requests.scailo_pb.ts:1798

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/quotations_requests.scailo_pb.ts:1826

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/quotations_requests.scailo_pb.ts:1819

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

The associated purchase enquiry

**`Generated`**

from field: uint64 purchase_enquiry_id = 22;

#### Defined in

src/quotations_requests.scailo_pb.ts:1903

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation request

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/quotations_requests.scailo_pb.ts:1889

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this quotation request

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/quotations_requests.scailo_pb.ts:1840

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:1919

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:1917

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServiceCountReq"``

#### Defined in

src/quotations_requests.scailo_pb.ts:1918

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md) \| `PlainMessage`\<[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md) \| `PlainMessage`\<[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md) \| `PlainMessage`\<[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:1951

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1939

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1943

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceCountReq`](QuotationsRequestsServiceCountReq.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1947
