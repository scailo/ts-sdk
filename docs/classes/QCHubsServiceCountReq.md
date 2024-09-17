[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCHubsServiceCountReq

# Class: QCHubsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.QCHubsServiceCountReq

## Hierarchy

- `Message`\<[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)\>

  ↳ **`QCHubsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](QCHubsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](QCHubsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](QCHubsServiceCountReq.md#approvedonend)
- [approvedOnStart](QCHubsServiceCountReq.md#approvedonstart)
- [approverRoleId](QCHubsServiceCountReq.md#approverroleid)
- [code](QCHubsServiceCountReq.md#code)
- [creationTimestampEnd](QCHubsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](QCHubsServiceCountReq.md#creationtimestampstart)
- [entityUuid](QCHubsServiceCountReq.md#entityuuid)
- [isActive](QCHubsServiceCountReq.md#isactive)
- [locationId](QCHubsServiceCountReq.md#locationid)
- [modificationTimestampEnd](QCHubsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](QCHubsServiceCountReq.md#modificationtimestampstart)
- [name](QCHubsServiceCountReq.md#name)
- [status](QCHubsServiceCountReq.md#status)
- [fields](QCHubsServiceCountReq.md#fields)
- [runtime](QCHubsServiceCountReq.md#runtime)
- [typeName](QCHubsServiceCountReq.md#typename)

### Methods

- [clone](QCHubsServiceCountReq.md#clone)
- [equals](QCHubsServiceCountReq.md#equals)
- [fromBinary](QCHubsServiceCountReq.md#frombinary)
- [fromJson](QCHubsServiceCountReq.md#fromjson)
- [fromJsonString](QCHubsServiceCountReq.md#fromjsonstring)
- [getType](QCHubsServiceCountReq.md#gettype)
- [toBinary](QCHubsServiceCountReq.md#tobinary)
- [toJSON](QCHubsServiceCountReq.md#tojson)
- [toJson](QCHubsServiceCountReq.md#tojson-1)
- [toJsonString](QCHubsServiceCountReq.md#tojsonstring)
- [equals](QCHubsServiceCountReq.md#equals-1)
- [fromBinary](QCHubsServiceCountReq.md#frombinary-1)
- [fromJson](QCHubsServiceCountReq.md#fromjson-1)
- [fromJsonString](QCHubsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCHubsServiceCountReq**(`data?`): [`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)\> |

#### Returns

[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

#### Overrides

Message\&lt;QCHubsServiceCountReq\&gt;.constructor

#### Defined in

src/qc_hubs.scailo_pb.ts:876

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/qc_hubs.scailo_pb.ts:846

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/qc_hubs.scailo_pb.ts:839

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/qc_hubs.scailo_pb.ts:832

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/qc_hubs.scailo_pb.ts:853

___

### code

• **code**: `string` = `""`

The unique code by which the qc hub is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/qc_hubs.scailo_pb.ts:867

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/qc_hubs.scailo_pb.ts:797

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/qc_hubs.scailo_pb.ts:790

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/qc_hubs.scailo_pb.ts:818

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/qc_hubs.scailo_pb.ts:783

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 22;

#### Defined in

src/qc_hubs.scailo_pb.ts:874

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/qc_hubs.scailo_pb.ts:811

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/qc_hubs.scailo_pb.ts:804

___

### name

• **name**: `string` = `""`

The name of the qc hub

**`Generated`**

from field: string name = 20;

#### Defined in

src/qc_hubs.scailo_pb.ts:860

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this qc hub

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/qc_hubs.scailo_pb.ts:825

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_hubs.scailo_pb.ts:883

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_hubs.scailo_pb.ts:881

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCHubsServiceCountReq"``

#### Defined in

src/qc_hubs.scailo_pb.ts:882

## Methods

### clone

▸ **clone**(): [`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

Create a deep copy.

#### Returns

[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCHubsServiceCountReq`](QCHubsServiceCountReq.md) \| `PlainMessage`\<[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`QCHubsServiceCountReq`](QCHubsServiceCountReq.md) \| `PlainMessage`\<[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)\> |
| `b` | `undefined` \| [`QCHubsServiceCountReq`](QCHubsServiceCountReq.md) \| `PlainMessage`\<[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_hubs.scailo_pb.ts:912

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

#### Defined in

src/qc_hubs.scailo_pb.ts:900

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

#### Defined in

src/qc_hubs.scailo_pb.ts:904

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHubsServiceCountReq`](QCHubsServiceCountReq.md)

#### Defined in

src/qc_hubs.scailo_pb.ts:908
