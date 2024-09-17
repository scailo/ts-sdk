[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServicePaginationResponse

# Class: MeetingsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.MeetingsServicePaginationResponse

## Hierarchy

- `Message`\<[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)\>

  ↳ **`MeetingsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](MeetingsServicePaginationResponse.md#constructor)

### Properties

- [count](MeetingsServicePaginationResponse.md#count)
- [offset](MeetingsServicePaginationResponse.md#offset)
- [payload](MeetingsServicePaginationResponse.md#payload)
- [total](MeetingsServicePaginationResponse.md#total)
- [fields](MeetingsServicePaginationResponse.md#fields)
- [runtime](MeetingsServicePaginationResponse.md#runtime)
- [typeName](MeetingsServicePaginationResponse.md#typename)

### Methods

- [clone](MeetingsServicePaginationResponse.md#clone)
- [equals](MeetingsServicePaginationResponse.md#equals)
- [fromBinary](MeetingsServicePaginationResponse.md#frombinary)
- [fromJson](MeetingsServicePaginationResponse.md#fromjson)
- [fromJsonString](MeetingsServicePaginationResponse.md#fromjsonstring)
- [getType](MeetingsServicePaginationResponse.md#gettype)
- [toBinary](MeetingsServicePaginationResponse.md#tobinary)
- [toJSON](MeetingsServicePaginationResponse.md#tojson)
- [toJson](MeetingsServicePaginationResponse.md#tojson-1)
- [toJsonString](MeetingsServicePaginationResponse.md#tojsonstring)
- [equals](MeetingsServicePaginationResponse.md#equals-1)
- [fromBinary](MeetingsServicePaginationResponse.md#frombinary-1)
- [fromJson](MeetingsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](MeetingsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServicePaginationResponse**(`data?`): [`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)\> |

#### Returns

[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

#### Overrides

Message\&lt;MeetingsServicePaginationResponse\&gt;.constructor

#### Defined in

src/meetings.scailo_pb.ts:846

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/meetings.scailo_pb.ts:823

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/meetings.scailo_pb.ts:830

___

### payload

• **payload**: [`Meeting`](Meeting.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Meeting payload = 4;

#### Defined in

src/meetings.scailo_pb.ts:844

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/meetings.scailo_pb.ts:837

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/meetings.scailo_pb.ts:853

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/meetings.scailo_pb.ts:851

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServicePaginationResponse"``

#### Defined in

src/meetings.scailo_pb.ts:852

## Methods

### clone

▸ **clone**(): [`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md) \| `PlainMessage`\<[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md) \| `PlainMessage`\<[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md) \| `PlainMessage`\<[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/meetings.scailo_pb.ts:872

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

#### Defined in

src/meetings.scailo_pb.ts:860

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

#### Defined in

src/meetings.scailo_pb.ts:864

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServicePaginationResponse`](MeetingsServicePaginationResponse.md)

#### Defined in

src/meetings.scailo_pb.ts:868
