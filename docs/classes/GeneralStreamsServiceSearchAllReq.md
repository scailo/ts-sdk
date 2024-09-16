[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsServiceSearchAllReq

# Class: GeneralStreamsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.GeneralStreamsServiceSearchAllReq

## Hierarchy

- `Message`\<[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)\>

  ↳ **`GeneralStreamsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsServiceSearchAllReq.md#constructor)

### Properties

- [count](GeneralStreamsServiceSearchAllReq.md#count)
- [entityUuid](GeneralStreamsServiceSearchAllReq.md#entityuuid)
- [internalSubscriberUserId](GeneralStreamsServiceSearchAllReq.md#internalsubscriberuserid)
- [isActive](GeneralStreamsServiceSearchAllReq.md#isactive)
- [offset](GeneralStreamsServiceSearchAllReq.md#offset)
- [searchKey](GeneralStreamsServiceSearchAllReq.md#searchkey)
- [sortKey](GeneralStreamsServiceSearchAllReq.md#sortkey)
- [sortOrder](GeneralStreamsServiceSearchAllReq.md#sortorder)
- [status](GeneralStreamsServiceSearchAllReq.md#status)
- [fields](GeneralStreamsServiceSearchAllReq.md#fields)
- [runtime](GeneralStreamsServiceSearchAllReq.md#runtime)
- [typeName](GeneralStreamsServiceSearchAllReq.md#typename)

### Methods

- [clone](GeneralStreamsServiceSearchAllReq.md#clone)
- [equals](GeneralStreamsServiceSearchAllReq.md#equals)
- [fromBinary](GeneralStreamsServiceSearchAllReq.md#frombinary)
- [fromJson](GeneralStreamsServiceSearchAllReq.md#fromjson)
- [fromJsonString](GeneralStreamsServiceSearchAllReq.md#fromjsonstring)
- [getType](GeneralStreamsServiceSearchAllReq.md#gettype)
- [toBinary](GeneralStreamsServiceSearchAllReq.md#tobinary)
- [toJSON](GeneralStreamsServiceSearchAllReq.md#tojson)
- [toJson](GeneralStreamsServiceSearchAllReq.md#tojson-1)
- [toJsonString](GeneralStreamsServiceSearchAllReq.md#tojsonstring)
- [equals](GeneralStreamsServiceSearchAllReq.md#equals-1)
- [fromBinary](GeneralStreamsServiceSearchAllReq.md#frombinary-1)
- [fromJson](GeneralStreamsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](GeneralStreamsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsServiceSearchAllReq**(`data?`): [`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)\> |

#### Returns

[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

#### Overrides

Message\&lt;GeneralStreamsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:1110

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/generalstreams.scailo_pb.ts:1059

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/generalstreams.scailo_pb.ts:1087

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

src/generalstreams.scailo_pb.ts:1108

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:1052

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/generalstreams.scailo_pb.ts:1066

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/generalstreams.scailo_pb.ts:1101

___

### sortKey

• **sortKey**: [`GENERAL_STREAM_SORT_KEY`](../enums/GENERAL_STREAM_SORT_KEY.md) = `GENERAL_STREAM_SORT_KEY.GENERAL_STREAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.GENERAL_STREAM_SORT_KEY sort_key = 5;

#### Defined in

src/generalstreams.scailo_pb.ts:1080

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/generalstreams.scailo_pb.ts:1073

___

### status

• **status**: [`GENERAL_STREAM_LIFECYCLE`](../enums/GENERAL_STREAM_LIFECYCLE.md) = `GENERAL_STREAM_LIFECYCLE.GENERAL_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 10;

#### Defined in

src/generalstreams.scailo_pb.ts:1094

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:1117

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:1115

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsServiceSearchAllReq"``

#### Defined in

src/generalstreams.scailo_pb.ts:1116

## Methods

### clone

▸ **clone**(): [`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:1141

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1129

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1133

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServiceSearchAllReq`](GeneralStreamsServiceSearchAllReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1137
