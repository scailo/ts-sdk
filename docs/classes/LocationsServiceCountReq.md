[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceCountReq

# Class: LocationsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.LocationsServiceCountReq

## Hierarchy

- `Message`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\>

  ↳ **`LocationsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LocationsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](LocationsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](LocationsServiceCountReq.md#approvedonend)
- [approvedOnStart](LocationsServiceCountReq.md#approvedonstart)
- [approverRoleId](LocationsServiceCountReq.md#approverroleid)
- [code](LocationsServiceCountReq.md#code)
- [creationTimestampEnd](LocationsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LocationsServiceCountReq.md#creationtimestampstart)
- [email](LocationsServiceCountReq.md#email)
- [entityUuid](LocationsServiceCountReq.md#entityuuid)
- [isActive](LocationsServiceCountReq.md#isactive)
- [modificationTimestampEnd](LocationsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LocationsServiceCountReq.md#modificationtimestampstart)
- [name](LocationsServiceCountReq.md#name)
- [phone](LocationsServiceCountReq.md#phone)
- [status](LocationsServiceCountReq.md#status)
- [fields](LocationsServiceCountReq.md#fields)
- [runtime](LocationsServiceCountReq.md#runtime)
- [typeName](LocationsServiceCountReq.md#typename)

### Methods

- [clone](LocationsServiceCountReq.md#clone)
- [equals](LocationsServiceCountReq.md#equals)
- [fromBinary](LocationsServiceCountReq.md#frombinary)
- [fromJson](LocationsServiceCountReq.md#fromjson)
- [fromJsonString](LocationsServiceCountReq.md#fromjsonstring)
- [getType](LocationsServiceCountReq.md#gettype)
- [toBinary](LocationsServiceCountReq.md#tobinary)
- [toJSON](LocationsServiceCountReq.md#tojson)
- [toJson](LocationsServiceCountReq.md#tojson-1)
- [toJsonString](LocationsServiceCountReq.md#tojsonstring)
- [equals](LocationsServiceCountReq.md#equals-1)
- [fromBinary](LocationsServiceCountReq.md#frombinary-1)
- [fromJson](LocationsServiceCountReq.md#fromjson-1)
- [fromJsonString](LocationsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceCountReq**(`data?`): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\> |

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Overrides

Message\&lt;LocationsServiceCountReq\&gt;.constructor

#### Defined in

src/locations.scailo_pb.ts:892

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/locations.scailo_pb.ts:855

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/locations.scailo_pb.ts:848

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/locations.scailo_pb.ts:841

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/locations.scailo_pb.ts:862

___

### code

• **code**: `string` = `""`

The unique code by which the location is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/locations.scailo_pb.ts:876

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/locations.scailo_pb.ts:806

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/locations.scailo_pb.ts:799

___

### email

• **email**: `string` = `""`

The primary email of the location

**`Generated`**

from field: string email = 22;

#### Defined in

src/locations.scailo_pb.ts:883

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/locations.scailo_pb.ts:827

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/locations.scailo_pb.ts:792

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/locations.scailo_pb.ts:820

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/locations.scailo_pb.ts:813

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 20;

#### Defined in

src/locations.scailo_pb.ts:869

___

### phone

• **phone**: `string` = `""`

The primary contact number of the location

**`Generated`**

from field: string phone = 23;

#### Defined in

src/locations.scailo_pb.ts:890

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this location

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/locations.scailo_pb.ts:834

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/locations.scailo_pb.ts:899

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/locations.scailo_pb.ts:897

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceCountReq"``

#### Defined in

src/locations.scailo_pb.ts:898

## Methods

### clone

▸ **clone**(): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

Create a deep copy.

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceCountReq`](LocationsServiceCountReq.md) \| `PlainMessage`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LocationsServiceCountReq`](LocationsServiceCountReq.md) \| `PlainMessage`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\> |
| `b` | `undefined` \| [`LocationsServiceCountReq`](LocationsServiceCountReq.md) \| `PlainMessage`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/locations.scailo_pb.ts:929

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Defined in

src/locations.scailo_pb.ts:917

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Defined in

src/locations.scailo_pb.ts:921

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Defined in

src/locations.scailo_pb.ts:925
