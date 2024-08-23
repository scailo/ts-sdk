[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServiceFilterReq

# Class: ShiftsGroupsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ShiftsGroupsServiceFilterReq

## Hierarchy

- `Message`\<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\>

  ↳ **`ShiftsGroupsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ShiftsGroupsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ShiftsGroupsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ShiftsGroupsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ShiftsGroupsServiceFilterReq.md#approverroleid)
- [code](ShiftsGroupsServiceFilterReq.md#code)
- [completedOnEnd](ShiftsGroupsServiceFilterReq.md#completedonend)
- [completedOnStart](ShiftsGroupsServiceFilterReq.md#completedonstart)
- [count](ShiftsGroupsServiceFilterReq.md#count)
- [creationTimestampEnd](ShiftsGroupsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ShiftsGroupsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ShiftsGroupsServiceFilterReq.md#entityuuid)
- [isActive](ShiftsGroupsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](ShiftsGroupsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ShiftsGroupsServiceFilterReq.md#modificationtimestampstart)
- [name](ShiftsGroupsServiceFilterReq.md#name)
- [offset](ShiftsGroupsServiceFilterReq.md#offset)
- [sortKey](ShiftsGroupsServiceFilterReq.md#sortkey)
- [sortOrder](ShiftsGroupsServiceFilterReq.md#sortorder)
- [status](ShiftsGroupsServiceFilterReq.md#status)
- [fields](ShiftsGroupsServiceFilterReq.md#fields)
- [runtime](ShiftsGroupsServiceFilterReq.md#runtime)
- [typeName](ShiftsGroupsServiceFilterReq.md#typename)

### Methods

- [clone](ShiftsGroupsServiceFilterReq.md#clone)
- [equals](ShiftsGroupsServiceFilterReq.md#equals)
- [fromBinary](ShiftsGroupsServiceFilterReq.md#frombinary)
- [fromJson](ShiftsGroupsServiceFilterReq.md#fromjson)
- [fromJsonString](ShiftsGroupsServiceFilterReq.md#fromjsonstring)
- [getType](ShiftsGroupsServiceFilterReq.md#gettype)
- [toBinary](ShiftsGroupsServiceFilterReq.md#tobinary)
- [toJSON](ShiftsGroupsServiceFilterReq.md#tojson)
- [toJson](ShiftsGroupsServiceFilterReq.md#tojson-1)
- [toJsonString](ShiftsGroupsServiceFilterReq.md#tojsonstring)
- [equals](ShiftsGroupsServiceFilterReq.md#equals-1)
- [fromBinary](ShiftsGroupsServiceFilterReq.md#frombinary-1)
- [fromJson](ShiftsGroupsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServiceFilterReq**(`data?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\> |

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Overrides

Message\&lt;ShiftsGroupsServiceFilterReq\&gt;.constructor

#### Defined in

src/shifts_groups.scailo_pb.ts:1029

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/shifts_groups.scailo_pb.ts:992

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/shifts_groups.scailo_pb.ts:985

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/shifts_groups.scailo_pb.ts:978

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/shifts_groups.scailo_pb.ts:999

___

### code

• **code**: `string` = `""`

The shift group code

**`Generated`**

from field: string code = 21;

#### Defined in

src/shifts_groups.scailo_pb.ts:1027

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/shifts_groups.scailo_pb.ts:1013

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/shifts_groups.scailo_pb.ts:1006

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/shifts_groups.scailo_pb.ts:908

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/shifts_groups.scailo_pb.ts:943

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/shifts_groups.scailo_pb.ts:936

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/shifts_groups.scailo_pb.ts:964

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/shifts_groups.scailo_pb.ts:901

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/shifts_groups.scailo_pb.ts:957

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/shifts_groups.scailo_pb.ts:950

___

### name

• **name**: `string` = `""`

The name of the shift group

**`Generated`**

from field: string name = 20;

#### Defined in

src/shifts_groups.scailo_pb.ts:1020

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/shifts_groups.scailo_pb.ts:915

___

### sortKey

• **sortKey**: [`SHIFT_GROUP_SORT_KEY`](../enums/SHIFT_GROUP_SORT_KEY.md) = `SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SHIFT_GROUP_SORT_KEY sort_key = 5;

#### Defined in

src/shifts_groups.scailo_pb.ts:929

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/shifts_groups.scailo_pb.ts:922

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this shift group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/shifts_groups.scailo_pb.ts:971

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/shifts_groups.scailo_pb.ts:1036

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/shifts_groups.scailo_pb.ts:1034

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsGroupsServiceFilterReq"``

#### Defined in

src/shifts_groups.scailo_pb.ts:1035

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md) \| `PlainMessage`\<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md) \| `PlainMessage`\<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md) \| `PlainMessage`\<[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/shifts_groups.scailo_pb.ts:1070

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Defined in

src/shifts_groups.scailo_pb.ts:1058

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Defined in

src/shifts_groups.scailo_pb.ts:1062

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceFilterReq`](ShiftsGroupsServiceFilterReq.md)

#### Defined in

src/shifts_groups.scailo_pb.ts:1066
