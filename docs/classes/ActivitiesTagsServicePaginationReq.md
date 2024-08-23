[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesTagsServicePaginationReq

# Class: ActivitiesTagsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ActivitiesTagsServicePaginationReq

## Hierarchy

- `Message`\<[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)\>

  ↳ **`ActivitiesTagsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesTagsServicePaginationReq.md#constructor)

### Properties

- [count](ActivitiesTagsServicePaginationReq.md#count)
- [isActive](ActivitiesTagsServicePaginationReq.md#isactive)
- [offset](ActivitiesTagsServicePaginationReq.md#offset)
- [sortKey](ActivitiesTagsServicePaginationReq.md#sortkey)
- [sortOrder](ActivitiesTagsServicePaginationReq.md#sortorder)
- [status](ActivitiesTagsServicePaginationReq.md#status)
- [fields](ActivitiesTagsServicePaginationReq.md#fields)
- [runtime](ActivitiesTagsServicePaginationReq.md#runtime)
- [typeName](ActivitiesTagsServicePaginationReq.md#typename)

### Methods

- [clone](ActivitiesTagsServicePaginationReq.md#clone)
- [equals](ActivitiesTagsServicePaginationReq.md#equals)
- [fromBinary](ActivitiesTagsServicePaginationReq.md#frombinary)
- [fromJson](ActivitiesTagsServicePaginationReq.md#fromjson)
- [fromJsonString](ActivitiesTagsServicePaginationReq.md#fromjsonstring)
- [getType](ActivitiesTagsServicePaginationReq.md#gettype)
- [toBinary](ActivitiesTagsServicePaginationReq.md#tobinary)
- [toJSON](ActivitiesTagsServicePaginationReq.md#tojson)
- [toJson](ActivitiesTagsServicePaginationReq.md#tojson-1)
- [toJsonString](ActivitiesTagsServicePaginationReq.md#tojsonstring)
- [equals](ActivitiesTagsServicePaginationReq.md#equals-1)
- [fromBinary](ActivitiesTagsServicePaginationReq.md#frombinary-1)
- [fromJson](ActivitiesTagsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ActivitiesTagsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesTagsServicePaginationReq**(`data?`): [`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)\> |

#### Returns

[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

#### Overrides

Message\&lt;ActivitiesTagsServicePaginationReq\&gt;.constructor

#### Defined in

src/activities_tags.scailo_pb.ts:502

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/activities_tags.scailo_pb.ts:472

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/activities_tags.scailo_pb.ts:465

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/activities_tags.scailo_pb.ts:479

___

### sortKey

• **sortKey**: [`ACTIVITY_TAG_SORT_KEY`](../enums/ACTIVITY_TAG_SORT_KEY.md) = `ACTIVITY_TAG_SORT_KEY.ACTIVITY_TAG_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ACTIVITY_TAG_SORT_KEY sort_key = 5;

#### Defined in

src/activities_tags.scailo_pb.ts:493

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/activities_tags.scailo_pb.ts:486

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this activity tag

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

src/activities_tags.scailo_pb.ts:500

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_tags.scailo_pb.ts:509

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_tags.scailo_pb.ts:507

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesTagsServicePaginationReq"``

#### Defined in

src/activities_tags.scailo_pb.ts:508

## Methods

### clone

▸ **clone**(): [`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md) \| `PlainMessage`\<[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md) \| `PlainMessage`\<[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md) \| `PlainMessage`\<[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_tags.scailo_pb.ts:530

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

#### Defined in

src/activities_tags.scailo_pb.ts:518

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

#### Defined in

src/activities_tags.scailo_pb.ts:522

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServicePaginationReq`](ActivitiesTagsServicePaginationReq.md)

#### Defined in

src/activities_tags.scailo_pb.ts:526
