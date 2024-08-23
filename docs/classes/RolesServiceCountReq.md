[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServiceCountReq

# Class: RolesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.RolesServiceCountReq

## Hierarchy

- `Message`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\>

  ↳ **`RolesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](RolesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](RolesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](RolesServiceCountReq.md#approvedonend)
- [approvedOnStart](RolesServiceCountReq.md#approvedonstart)
- [approverRoleId](RolesServiceCountReq.md#approverroleid)
- [code](RolesServiceCountReq.md#code)
- [completedOnEnd](RolesServiceCountReq.md#completedonend)
- [completedOnStart](RolesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](RolesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](RolesServiceCountReq.md#creationtimestampstart)
- [entityUuid](RolesServiceCountReq.md#entityuuid)
- [isActive](RolesServiceCountReq.md#isactive)
- [modificationTimestampEnd](RolesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](RolesServiceCountReq.md#modificationtimestampstart)
- [name](RolesServiceCountReq.md#name)
- [status](RolesServiceCountReq.md#status)
- [fields](RolesServiceCountReq.md#fields)
- [runtime](RolesServiceCountReq.md#runtime)
- [typeName](RolesServiceCountReq.md#typename)

### Methods

- [clone](RolesServiceCountReq.md#clone)
- [equals](RolesServiceCountReq.md#equals)
- [fromBinary](RolesServiceCountReq.md#frombinary)
- [fromJson](RolesServiceCountReq.md#fromjson)
- [fromJsonString](RolesServiceCountReq.md#fromjsonstring)
- [getType](RolesServiceCountReq.md#gettype)
- [toBinary](RolesServiceCountReq.md#tobinary)
- [toJSON](RolesServiceCountReq.md#tojson)
- [toJson](RolesServiceCountReq.md#tojson-1)
- [toJsonString](RolesServiceCountReq.md#tojsonstring)
- [equals](RolesServiceCountReq.md#equals-1)
- [fromBinary](RolesServiceCountReq.md#frombinary-1)
- [fromJson](RolesServiceCountReq.md#fromjson-1)
- [fromJsonString](RolesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceCountReq**(`data?`): [`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\> |

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Overrides

Message\&lt;RolesServiceCountReq\&gt;.constructor

#### Defined in

src/roles.scailo_pb.ts:1103

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/roles.scailo_pb.ts:1066

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/roles.scailo_pb.ts:1059

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/roles.scailo_pb.ts:1052

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/roles.scailo_pb.ts:1073

___

### code

• **code**: `string` = `""`

The name of the code

**`Generated`**

from field: string code = 21;

#### Defined in

src/roles.scailo_pb.ts:1101

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/roles.scailo_pb.ts:1087

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/roles.scailo_pb.ts:1080

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/roles.scailo_pb.ts:1017

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/roles.scailo_pb.ts:1010

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/roles.scailo_pb.ts:1038

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/roles.scailo_pb.ts:1003

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/roles.scailo_pb.ts:1031

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/roles.scailo_pb.ts:1024

___

### name

• **name**: `string` = `""`

The name of the role

**`Generated`**

from field: string name = 20;

#### Defined in

src/roles.scailo_pb.ts:1094

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this role

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/roles.scailo_pb.ts:1045

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/roles.scailo_pb.ts:1110

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/roles.scailo_pb.ts:1108

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServiceCountReq"``

#### Defined in

src/roles.scailo_pb.ts:1109

## Methods

### clone

▸ **clone**(): [`RolesServiceCountReq`](RolesServiceCountReq.md)

Create a deep copy.

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceCountReq`](RolesServiceCountReq.md) \| `PlainMessage`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`RolesServiceCountReq`](RolesServiceCountReq.md) \| `PlainMessage`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\> |
| `b` | `undefined` \| [`RolesServiceCountReq`](RolesServiceCountReq.md) \| `PlainMessage`\<[`RolesServiceCountReq`](RolesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/roles.scailo_pb.ts:1140

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Defined in

src/roles.scailo_pb.ts:1128

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Defined in

src/roles.scailo_pb.ts:1132

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCountReq`](RolesServiceCountReq.md)

#### Defined in

src/roles.scailo_pb.ts:1136
