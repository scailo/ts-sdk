[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsServicePaginationReq

# Class: GeneralStreamsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.GeneralStreamsServicePaginationReq

## Hierarchy

- `Message`\<[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)\>

  ↳ **`GeneralStreamsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsServicePaginationReq.md#constructor)

### Properties

- [count](GeneralStreamsServicePaginationReq.md#count)
- [isActive](GeneralStreamsServicePaginationReq.md#isactive)
- [offset](GeneralStreamsServicePaginationReq.md#offset)
- [sortKey](GeneralStreamsServicePaginationReq.md#sortkey)
- [sortOrder](GeneralStreamsServicePaginationReq.md#sortorder)
- [status](GeneralStreamsServicePaginationReq.md#status)
- [fields](GeneralStreamsServicePaginationReq.md#fields)
- [runtime](GeneralStreamsServicePaginationReq.md#runtime)
- [typeName](GeneralStreamsServicePaginationReq.md#typename)

### Methods

- [clone](GeneralStreamsServicePaginationReq.md#clone)
- [equals](GeneralStreamsServicePaginationReq.md#equals)
- [fromBinary](GeneralStreamsServicePaginationReq.md#frombinary)
- [fromJson](GeneralStreamsServicePaginationReq.md#fromjson)
- [fromJsonString](GeneralStreamsServicePaginationReq.md#fromjsonstring)
- [getType](GeneralStreamsServicePaginationReq.md#gettype)
- [toBinary](GeneralStreamsServicePaginationReq.md#tobinary)
- [toJSON](GeneralStreamsServicePaginationReq.md#tojson)
- [toJson](GeneralStreamsServicePaginationReq.md#tojson-1)
- [toJsonString](GeneralStreamsServicePaginationReq.md#tojsonstring)
- [equals](GeneralStreamsServicePaginationReq.md#equals-1)
- [fromBinary](GeneralStreamsServicePaginationReq.md#frombinary-1)
- [fromJson](GeneralStreamsServicePaginationReq.md#fromjson-1)
- [fromJsonString](GeneralStreamsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsServicePaginationReq**(`data?`): [`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)\> |

#### Returns

[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

#### Overrides

Message\&lt;GeneralStreamsServicePaginationReq\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:649

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/generalstreams.scailo_pb.ts:619

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:612

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/generalstreams.scailo_pb.ts:626

___

### sortKey

• **sortKey**: [`GENERAL_STREAM_SORT_KEY`](../enums/GENERAL_STREAM_SORT_KEY.md) = `GENERAL_STREAM_SORT_KEY.GENERAL_STREAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.GENERAL_STREAM_SORT_KEY sort_key = 5;

#### Defined in

src/generalstreams.scailo_pb.ts:640

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/generalstreams.scailo_pb.ts:633

___

### status

• **status**: [`GENERAL_STREAM_LIFECYCLE`](../enums/GENERAL_STREAM_LIFECYCLE.md) = `GENERAL_STREAM_LIFECYCLE.GENERAL_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

The status of this general stream

**`Generated`**

from field: Scailo.GENERAL_STREAM_LIFECYCLE status = 6;

#### Defined in

src/generalstreams.scailo_pb.ts:647

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:656

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:654

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsServicePaginationReq"``

#### Defined in

src/generalstreams.scailo_pb.ts:655

## Methods

### clone

▸ **clone**(): [`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md) \| `PlainMessage`\<[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md) \| `PlainMessage`\<[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md) \| `PlainMessage`\<[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:677

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:665

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:669

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsServicePaginationReq`](GeneralStreamsServicePaginationReq.md)

#### Defined in

src/generalstreams.scailo_pb.ts:673
