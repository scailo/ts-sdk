[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesGroupsServiceSearchAllReq

# Class: ActivitiesGroupsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ActivitiesGroupsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)\>

  ↳ **`ActivitiesGroupsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesGroupsServiceSearchAllReq.md#constructor)

### Properties

- [count](ActivitiesGroupsServiceSearchAllReq.md#count)
- [entityUuid](ActivitiesGroupsServiceSearchAllReq.md#entityuuid)
- [isActive](ActivitiesGroupsServiceSearchAllReq.md#isactive)
- [offset](ActivitiesGroupsServiceSearchAllReq.md#offset)
- [parentActivityGroupId](ActivitiesGroupsServiceSearchAllReq.md#parentactivitygroupid)
- [searchKey](ActivitiesGroupsServiceSearchAllReq.md#searchkey)
- [sortKey](ActivitiesGroupsServiceSearchAllReq.md#sortkey)
- [sortOrder](ActivitiesGroupsServiceSearchAllReq.md#sortorder)
- [status](ActivitiesGroupsServiceSearchAllReq.md#status)
- [fields](ActivitiesGroupsServiceSearchAllReq.md#fields)
- [runtime](ActivitiesGroupsServiceSearchAllReq.md#runtime)
- [typeName](ActivitiesGroupsServiceSearchAllReq.md#typename)

### Methods

- [clone](ActivitiesGroupsServiceSearchAllReq.md#clone)
- [equals](ActivitiesGroupsServiceSearchAllReq.md#equals)
- [fromBinary](ActivitiesGroupsServiceSearchAllReq.md#frombinary)
- [fromJson](ActivitiesGroupsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ActivitiesGroupsServiceSearchAllReq.md#fromjsonstring)
- [getType](ActivitiesGroupsServiceSearchAllReq.md#gettype)
- [toBinary](ActivitiesGroupsServiceSearchAllReq.md#tobinary)
- [toJSON](ActivitiesGroupsServiceSearchAllReq.md#tojson)
- [toJson](ActivitiesGroupsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ActivitiesGroupsServiceSearchAllReq.md#tojsonstring)
- [equals](ActivitiesGroupsServiceSearchAllReq.md#equals-1)
- [fromBinary](ActivitiesGroupsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ActivitiesGroupsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ActivitiesGroupsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesGroupsServiceSearchAllReq**(`data?`): [`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)\> |

#### Returns

[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ActivitiesGroupsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/activities_groups.scailo_pb.ts:1029

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/activities_groups.scailo_pb.ts:978

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/activities_groups.scailo_pb.ts:1006

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/activities_groups.scailo_pb.ts:971

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/activities_groups.scailo_pb.ts:985

___

### parentActivityGroupId

• **parentActivityGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity group (0, if the first activity group that is being created is a leaf activity group)

**`Generated`**

from field: uint64 parent_activity_group_id = 22;

#### Defined in

src/activities_groups.scailo_pb.ts:1027

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/activities_groups.scailo_pb.ts:1020

___

### sortKey

• **sortKey**: [`ACTIVITY_GROUP_SORT_KEY`](../enums/ACTIVITY_GROUP_SORT_KEY.md) = `ACTIVITY_GROUP_SORT_KEY.ACTIVITY_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ACTIVITY_GROUP_SORT_KEY sort_key = 5;

#### Defined in

src/activities_groups.scailo_pb.ts:999

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/activities_groups.scailo_pb.ts:992

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/activities_groups.scailo_pb.ts:1013

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_groups.scailo_pb.ts:1036

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_groups.scailo_pb.ts:1034

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesGroupsServiceSearchAllReq"``

#### Defined in

src/activities_groups.scailo_pb.ts:1035

## Methods

### clone

▸ **clone**(): [`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_groups.scailo_pb.ts:1060

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

#### Defined in

src/activities_groups.scailo_pb.ts:1048

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

#### Defined in

src/activities_groups.scailo_pb.ts:1052

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServiceSearchAllReq`](ActivitiesGroupsServiceSearchAllReq.md)

#### Defined in

src/activities_groups.scailo_pb.ts:1056
