[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServicePaginationReq

# Class: ClientStreamsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ClientStreamsServicePaginationReq

## Hierarchy

- `Message`\<[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)\>

  ↳ **`ClientStreamsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServicePaginationReq.md#constructor)

### Properties

- [count](ClientStreamsServicePaginationReq.md#count)
- [isActive](ClientStreamsServicePaginationReq.md#isactive)
- [offset](ClientStreamsServicePaginationReq.md#offset)
- [sortKey](ClientStreamsServicePaginationReq.md#sortkey)
- [sortOrder](ClientStreamsServicePaginationReq.md#sortorder)
- [status](ClientStreamsServicePaginationReq.md#status)
- [fields](ClientStreamsServicePaginationReq.md#fields)
- [runtime](ClientStreamsServicePaginationReq.md#runtime)
- [typeName](ClientStreamsServicePaginationReq.md#typename)

### Methods

- [clone](ClientStreamsServicePaginationReq.md#clone)
- [equals](ClientStreamsServicePaginationReq.md#equals)
- [fromBinary](ClientStreamsServicePaginationReq.md#frombinary)
- [fromJson](ClientStreamsServicePaginationReq.md#fromjson)
- [fromJsonString](ClientStreamsServicePaginationReq.md#fromjsonstring)
- [getType](ClientStreamsServicePaginationReq.md#gettype)
- [toBinary](ClientStreamsServicePaginationReq.md#tobinary)
- [toJSON](ClientStreamsServicePaginationReq.md#tojson)
- [toJson](ClientStreamsServicePaginationReq.md#tojson-1)
- [toJsonString](ClientStreamsServicePaginationReq.md#tojsonstring)
- [equals](ClientStreamsServicePaginationReq.md#equals-1)
- [fromBinary](ClientStreamsServicePaginationReq.md#frombinary-1)
- [fromJson](ClientStreamsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ClientStreamsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServicePaginationReq**(`data?`): [`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)\> |

#### Returns

[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

#### Overrides

Message\&lt;ClientStreamsServicePaginationReq\&gt;.constructor

#### Defined in

src/client_streams.scailo_pb.ts:812

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/client_streams.scailo_pb.ts:782

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/client_streams.scailo_pb.ts:775

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/client_streams.scailo_pb.ts:789

___

### sortKey

• **sortKey**: [`CLIENT_STREAM_SORT_KEY`](../enums/CLIENT_STREAM_SORT_KEY.md) = `CLIENT_STREAM_SORT_KEY.CLIENT_STREAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.CLIENT_STREAM_SORT_KEY sort_key = 5;

#### Defined in

src/client_streams.scailo_pb.ts:803

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/client_streams.scailo_pb.ts:796

___

### status

• **status**: [`CLIENT_STREAM_LIFECYCLE`](../enums/CLIENT_STREAM_LIFECYCLE.md) = `CLIENT_STREAM_LIFECYCLE.CLIENT_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this client stream

**`Generated`**

from field: Scailo.CLIENT_STREAM_LIFECYCLE status = 6;

#### Defined in

src/client_streams.scailo_pb.ts:810

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/client_streams.scailo_pb.ts:819

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/client_streams.scailo_pb.ts:817

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServicePaginationReq"``

#### Defined in

src/client_streams.scailo_pb.ts:818

## Methods

### clone

▸ **clone**(): [`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md) \| `PlainMessage`\<[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md) \| `PlainMessage`\<[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md) \| `PlainMessage`\<[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/client_streams.scailo_pb.ts:840

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

#### Defined in

src/client_streams.scailo_pb.ts:828

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

#### Defined in

src/client_streams.scailo_pb.ts:832

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServicePaginationReq`](ClientStreamsServicePaginationReq.md)

#### Defined in

src/client_streams.scailo_pb.ts:836
