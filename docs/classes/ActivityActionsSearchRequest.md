[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityActionsSearchRequest

# Class: ActivityActionsSearchRequest

Describes the request payload to retrieve actions.

**`Generated`**

from message Scailo.ActivityActionsSearchRequest

## Hierarchy

- `Message`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\>

  ↳ **`ActivityActionsSearchRequest`**

## Table of contents

### Constructors

- [constructor](ActivityActionsSearchRequest.md#constructor)

### Properties

- [actionCodeId](ActivityActionsSearchRequest.md#actioncodeid)
- [activityId](ActivityActionsSearchRequest.md#activityid)
- [count](ActivityActionsSearchRequest.md#count)
- [employeeId](ActivityActionsSearchRequest.md#employeeid)
- [entityUuid](ActivityActionsSearchRequest.md#entityuuid)
- [isActive](ActivityActionsSearchRequest.md#isactive)
- [offset](ActivityActionsSearchRequest.md#offset)
- [searchKey](ActivityActionsSearchRequest.md#searchkey)
- [sortKey](ActivityActionsSearchRequest.md#sortkey)
- [sortOrder](ActivityActionsSearchRequest.md#sortorder)
- [fields](ActivityActionsSearchRequest.md#fields)
- [runtime](ActivityActionsSearchRequest.md#runtime)
- [typeName](ActivityActionsSearchRequest.md#typename)

### Methods

- [clone](ActivityActionsSearchRequest.md#clone)
- [equals](ActivityActionsSearchRequest.md#equals)
- [fromBinary](ActivityActionsSearchRequest.md#frombinary)
- [fromJson](ActivityActionsSearchRequest.md#fromjson)
- [fromJsonString](ActivityActionsSearchRequest.md#fromjsonstring)
- [getType](ActivityActionsSearchRequest.md#gettype)
- [toBinary](ActivityActionsSearchRequest.md#tobinary)
- [toJSON](ActivityActionsSearchRequest.md#tojson)
- [toJson](ActivityActionsSearchRequest.md#tojson-1)
- [toJsonString](ActivityActionsSearchRequest.md#tojsonstring)
- [equals](ActivityActionsSearchRequest.md#equals-1)
- [fromBinary](ActivityActionsSearchRequest.md#frombinary-1)
- [fromJson](ActivityActionsSearchRequest.md#fromjson-1)
- [fromJsonString](ActivityActionsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityActionsSearchRequest**(`data?`): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\> |

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Overrides

Message\&lt;ActivityActionsSearchRequest\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2142

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Stores the action code ID

**`Generated`**

from field: uint64 action_code_id = 23;

#### Defined in

src/activities.scailo_pb.ts:2133

___

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

The ID of the activity

**`Generated`**

from field: uint64 activity_id = 20;

#### Defined in

src/activities.scailo_pb.ts:2126

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/activities.scailo_pb.ts:2084

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the optional employee ID

**`Generated`**

from field: uint64 employee_id = 9;

#### Defined in

src/activities.scailo_pb.ts:2119

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/activities.scailo_pb.ts:2112

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/activities.scailo_pb.ts:2077

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/activities.scailo_pb.ts:2091

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/activities.scailo_pb.ts:2140

___

### sortKey

• **sortKey**: [`ACTIVITY_ACTION_SORT_KEY`](../enums/ACTIVITY_ACTION_SORT_KEY.md) = `ACTIVITY_ACTION_SORT_KEY.ACTIVITY_ACTION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ACTIVITY_ACTION_SORT_KEY sort_key = 5;

#### Defined in

src/activities.scailo_pb.ts:2105

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/activities.scailo_pb.ts:2098

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2149

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2147

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityActionsSearchRequest"``

#### Defined in

src/activities.scailo_pb.ts:2148

## Methods

### clone

▸ **clone**(): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

Create a deep copy.

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md) \| `PlainMessage`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\>

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
| `a` | `undefined` \| [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md) \| `PlainMessage`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\> |
| `b` | `undefined` \| [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md) \| `PlainMessage`\<[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2174

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2162

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2166

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionsSearchRequest`](ActivityActionsSearchRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2170
