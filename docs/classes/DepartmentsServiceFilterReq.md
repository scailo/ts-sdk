[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceFilterReq

# Class: DepartmentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.DepartmentsServiceFilterReq

## Hierarchy

- `Message`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\>

  ↳ **`DepartmentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](DepartmentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](DepartmentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](DepartmentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](DepartmentsServiceFilterReq.md#approverroleid)
- [code](DepartmentsServiceFilterReq.md#code)
- [completedOnEnd](DepartmentsServiceFilterReq.md#completedonend)
- [completedOnStart](DepartmentsServiceFilterReq.md#completedonstart)
- [count](DepartmentsServiceFilterReq.md#count)
- [creationTimestampEnd](DepartmentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](DepartmentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](DepartmentsServiceFilterReq.md#entityuuid)
- [headUserId](DepartmentsServiceFilterReq.md#headuserid)
- [isActive](DepartmentsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](DepartmentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](DepartmentsServiceFilterReq.md#modificationtimestampstart)
- [name](DepartmentsServiceFilterReq.md#name)
- [offset](DepartmentsServiceFilterReq.md#offset)
- [sortKey](DepartmentsServiceFilterReq.md#sortkey)
- [sortOrder](DepartmentsServiceFilterReq.md#sortorder)
- [status](DepartmentsServiceFilterReq.md#status)
- [fields](DepartmentsServiceFilterReq.md#fields)
- [runtime](DepartmentsServiceFilterReq.md#runtime)
- [typeName](DepartmentsServiceFilterReq.md#typename)

### Methods

- [clone](DepartmentsServiceFilterReq.md#clone)
- [equals](DepartmentsServiceFilterReq.md#equals)
- [fromBinary](DepartmentsServiceFilterReq.md#frombinary)
- [fromJson](DepartmentsServiceFilterReq.md#fromjson)
- [fromJsonString](DepartmentsServiceFilterReq.md#fromjsonstring)
- [getType](DepartmentsServiceFilterReq.md#gettype)
- [toBinary](DepartmentsServiceFilterReq.md#tobinary)
- [toJSON](DepartmentsServiceFilterReq.md#tojson)
- [toJson](DepartmentsServiceFilterReq.md#tojson-1)
- [toJsonString](DepartmentsServiceFilterReq.md#tojsonstring)
- [equals](DepartmentsServiceFilterReq.md#equals-1)
- [fromBinary](DepartmentsServiceFilterReq.md#frombinary-1)
- [fromJson](DepartmentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](DepartmentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceFilterReq**(`data?`): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\> |

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Overrides

Message\&lt;DepartmentsServiceFilterReq\&gt;.constructor

#### Defined in

src/departments.scailo_pb.ts:748

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/departments.scailo_pb.ts:704

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/departments.scailo_pb.ts:697

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/departments.scailo_pb.ts:690

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/departments.scailo_pb.ts:711

___

### code

• **code**: `string` = `""`

The code of the department

**`Generated`**

from field: string code = 21;

#### Defined in

src/departments.scailo_pb.ts:739

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/departments.scailo_pb.ts:725

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/departments.scailo_pb.ts:718

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/departments.scailo_pb.ts:620

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/departments.scailo_pb.ts:655

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/departments.scailo_pb.ts:648

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/departments.scailo_pb.ts:676

___

### headUserId

• **headUserId**: `bigint` = `protoInt64.zero`

The user ID of the head

**`Generated`**

from field: uint64 head_user_id = 22;

#### Defined in

src/departments.scailo_pb.ts:746

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/departments.scailo_pb.ts:613

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/departments.scailo_pb.ts:669

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/departments.scailo_pb.ts:662

___

### name

• **name**: `string` = `""`

The name of the department

**`Generated`**

from field: string name = 20;

#### Defined in

src/departments.scailo_pb.ts:732

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/departments.scailo_pb.ts:627

___

### sortKey

• **sortKey**: [`DEPARTMENT_SORT_KEY`](../enums/DEPARTMENT_SORT_KEY.md) = `DEPARTMENT_SORT_KEY.DEPARTMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.DEPARTMENT_SORT_KEY sort_key = 5;

#### Defined in

src/departments.scailo_pb.ts:641

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/departments.scailo_pb.ts:634

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this department

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/departments.scailo_pb.ts:683

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/departments.scailo_pb.ts:755

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/departments.scailo_pb.ts:753

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServiceFilterReq"``

#### Defined in

src/departments.scailo_pb.ts:754

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md) \| `PlainMessage`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md) \| `PlainMessage`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md) \| `PlainMessage`\<[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/departments.scailo_pb.ts:790

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Defined in

src/departments.scailo_pb.ts:778

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Defined in

src/departments.scailo_pb.ts:782

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceFilterReq`](DepartmentsServiceFilterReq.md)

#### Defined in

src/departments.scailo_pb.ts:786
