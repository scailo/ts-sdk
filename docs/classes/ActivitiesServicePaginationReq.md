[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServicePaginationReq

# Class: ActivitiesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ActivitiesServicePaginationReq

## Hierarchy

- `Message`\<[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)\>

  ↳ **`ActivitiesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesServicePaginationReq.md#constructor)

### Properties

- [count](ActivitiesServicePaginationReq.md#count)
- [isActive](ActivitiesServicePaginationReq.md#isactive)
- [offset](ActivitiesServicePaginationReq.md#offset)
- [sortKey](ActivitiesServicePaginationReq.md#sortkey)
- [sortOrder](ActivitiesServicePaginationReq.md#sortorder)
- [status](ActivitiesServicePaginationReq.md#status)
- [fields](ActivitiesServicePaginationReq.md#fields)
- [runtime](ActivitiesServicePaginationReq.md#runtime)
- [typeName](ActivitiesServicePaginationReq.md#typename)

### Methods

- [clone](ActivitiesServicePaginationReq.md#clone)
- [equals](ActivitiesServicePaginationReq.md#equals)
- [fromBinary](ActivitiesServicePaginationReq.md#frombinary)
- [fromJson](ActivitiesServicePaginationReq.md#fromjson)
- [fromJsonString](ActivitiesServicePaginationReq.md#fromjsonstring)
- [getType](ActivitiesServicePaginationReq.md#gettype)
- [toBinary](ActivitiesServicePaginationReq.md#tobinary)
- [toJSON](ActivitiesServicePaginationReq.md#tojson)
- [toJson](ActivitiesServicePaginationReq.md#tojson-1)
- [toJsonString](ActivitiesServicePaginationReq.md#tojsonstring)
- [equals](ActivitiesServicePaginationReq.md#equals-1)
- [fromBinary](ActivitiesServicePaginationReq.md#frombinary-1)
- [fromJson](ActivitiesServicePaginationReq.md#fromjson-1)
- [fromJsonString](ActivitiesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServicePaginationReq**(`data?`): [`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)\> |

#### Returns

[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

#### Overrides

Message\&lt;ActivitiesServicePaginationReq\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:899

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/activities.scailo_pb.ts:869

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/activities.scailo_pb.ts:862

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/activities.scailo_pb.ts:876

___

### sortKey

• **sortKey**: [`ACTIVITY_SORT_KEY`](../enums/ACTIVITY_SORT_KEY.md) = `ACTIVITY_SORT_KEY.ACTIVITY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ACTIVITY_SORT_KEY sort_key = 5;

#### Defined in

src/activities.scailo_pb.ts:890

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/activities.scailo_pb.ts:883

___

### status

• **status**: [`ACTIVITY_LIFECYCLE`](../enums/ACTIVITY_LIFECYCLE.md) = `ACTIVITY_LIFECYCLE.ACTIVITY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this activity

**`Generated`**

from field: Scailo.ACTIVITY_LIFECYCLE status = 6;

#### Defined in

src/activities.scailo_pb.ts:897

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:906

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:904

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServicePaginationReq"``

#### Defined in

src/activities.scailo_pb.ts:905

## Methods

### clone

▸ **clone**(): [`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md) \| `PlainMessage`\<[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md) \| `PlainMessage`\<[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md) \| `PlainMessage`\<[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:927

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

#### Defined in

src/activities.scailo_pb.ts:915

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

#### Defined in

src/activities.scailo_pb.ts:919

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServicePaginationReq`](ActivitiesServicePaginationReq.md)

#### Defined in

src/activities.scailo_pb.ts:923
