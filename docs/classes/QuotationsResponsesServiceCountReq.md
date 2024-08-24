[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceCountReq

# Class: QuotationsResponsesServiceCountReq

Describes the base response payload of a count search

**`Generated`**

from message Scailo.QuotationsResponsesServiceCountReq

## Hierarchy

- `Message`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\>

  ↳ **`QuotationsResponsesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](QuotationsResponsesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](QuotationsResponsesServiceCountReq.md#approvedonend)
- [approvedOnStart](QuotationsResponsesServiceCountReq.md#approvedonstart)
- [approverRoleId](QuotationsResponsesServiceCountReq.md#approverroleid)
- [completedOnEnd](QuotationsResponsesServiceCountReq.md#completedonend)
- [completedOnStart](QuotationsResponsesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](QuotationsResponsesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](QuotationsResponsesServiceCountReq.md#creationtimestampstart)
- [currencyId](QuotationsResponsesServiceCountReq.md#currencyid)
- [entityUuid](QuotationsResponsesServiceCountReq.md#entityuuid)
- [finalRefNumber](QuotationsResponsesServiceCountReq.md#finalrefnumber)
- [isActive](QuotationsResponsesServiceCountReq.md#isactive)
- [modificationTimestampEnd](QuotationsResponsesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](QuotationsResponsesServiceCountReq.md#modificationtimestampstart)
- [quotationRequestId](QuotationsResponsesServiceCountReq.md#quotationrequestid)
- [referenceId](QuotationsResponsesServiceCountReq.md#referenceid)
- [status](QuotationsResponsesServiceCountReq.md#status)
- [vendorId](QuotationsResponsesServiceCountReq.md#vendorid)
- [fields](QuotationsResponsesServiceCountReq.md#fields)
- [runtime](QuotationsResponsesServiceCountReq.md#runtime)
- [typeName](QuotationsResponsesServiceCountReq.md#typename)

### Methods

- [clone](QuotationsResponsesServiceCountReq.md#clone)
- [equals](QuotationsResponsesServiceCountReq.md#equals)
- [fromBinary](QuotationsResponsesServiceCountReq.md#frombinary)
- [fromJson](QuotationsResponsesServiceCountReq.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceCountReq.md#fromjsonstring)
- [getType](QuotationsResponsesServiceCountReq.md#gettype)
- [toBinary](QuotationsResponsesServiceCountReq.md#tobinary)
- [toJSON](QuotationsResponsesServiceCountReq.md#tojson)
- [toJson](QuotationsResponsesServiceCountReq.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceCountReq.md#tojsonstring)
- [equals](QuotationsResponsesServiceCountReq.md#equals-1)
- [fromBinary](QuotationsResponsesServiceCountReq.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceCountReq.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceCountReq**(`data?`): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\> |

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Overrides

Message\&lt;QuotationsResponsesServiceCountReq\&gt;.constructor

#### Defined in

src/quotations_responses.scailo_pb.ts:1925

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/quotations_responses.scailo_pb.ts:1867

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/quotations_responses.scailo_pb.ts:1860

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/quotations_responses.scailo_pb.ts:1853

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/quotations_responses.scailo_pb.ts:1874

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/quotations_responses.scailo_pb.ts:1888

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/quotations_responses.scailo_pb.ts:1881

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/quotations_responses.scailo_pb.ts:1818

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/quotations_responses.scailo_pb.ts:1811

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

src/quotations_responses.scailo_pb.ts:1916

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/quotations_responses.scailo_pb.ts:1839

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/quotations_responses.scailo_pb.ts:1902

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/quotations_responses.scailo_pb.ts:1804

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/quotations_responses.scailo_pb.ts:1832

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/quotations_responses.scailo_pb.ts:1825

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

The associated quotation request

**`Generated`**

from field: uint64 quotation_request_id = 22;

#### Defined in

src/quotations_responses.scailo_pb.ts:1909

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the quotation response

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/quotations_responses.scailo_pb.ts:1895

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this quotation response

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/quotations_responses.scailo_pb.ts:1846

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 40;

#### Defined in

src/quotations_responses.scailo_pb.ts:1923

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_responses.scailo_pb.ts:1932

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_responses.scailo_pb.ts:1930

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesServiceCountReq"``

#### Defined in

src/quotations_responses.scailo_pb.ts:1931

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_responses.scailo_pb.ts:1965

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1953

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1957

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceCountReq`](QuotationsResponsesServiceCountReq.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1961
