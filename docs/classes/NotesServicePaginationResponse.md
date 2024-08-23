[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / NotesServicePaginationResponse

# Class: NotesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.NotesServicePaginationResponse

## Hierarchy

- `Message`\<[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)\>

  ↳ **`NotesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](NotesServicePaginationResponse.md#constructor)

### Properties

- [count](NotesServicePaginationResponse.md#count)
- [offset](NotesServicePaginationResponse.md#offset)
- [payload](NotesServicePaginationResponse.md#payload)
- [total](NotesServicePaginationResponse.md#total)
- [fields](NotesServicePaginationResponse.md#fields)
- [runtime](NotesServicePaginationResponse.md#runtime)
- [typeName](NotesServicePaginationResponse.md#typename)

### Methods

- [clone](NotesServicePaginationResponse.md#clone)
- [equals](NotesServicePaginationResponse.md#equals)
- [fromBinary](NotesServicePaginationResponse.md#frombinary)
- [fromJson](NotesServicePaginationResponse.md#fromjson)
- [fromJsonString](NotesServicePaginationResponse.md#fromjsonstring)
- [getType](NotesServicePaginationResponse.md#gettype)
- [toBinary](NotesServicePaginationResponse.md#tobinary)
- [toJSON](NotesServicePaginationResponse.md#tojson)
- [toJson](NotesServicePaginationResponse.md#tojson-1)
- [toJsonString](NotesServicePaginationResponse.md#tojsonstring)
- [equals](NotesServicePaginationResponse.md#equals-1)
- [fromBinary](NotesServicePaginationResponse.md#frombinary-1)
- [fromJson](NotesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](NotesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new NotesServicePaginationResponse**(`data?`): [`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)\> |

#### Returns

[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

#### Overrides

Message\&lt;NotesServicePaginationResponse\&gt;.constructor

#### Defined in

src/notes.scailo_pb.ts:719

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/notes.scailo_pb.ts:696

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/notes.scailo_pb.ts:703

___

### payload

• **payload**: [`Note`](Note.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Note payload = 4;

#### Defined in

src/notes.scailo_pb.ts:717

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/notes.scailo_pb.ts:710

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/notes.scailo_pb.ts:726

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/notes.scailo_pb.ts:724

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.NotesServicePaginationResponse"``

#### Defined in

src/notes.scailo_pb.ts:725

## Methods

### clone

▸ **clone**(): [`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`NotesServicePaginationResponse`](NotesServicePaginationResponse.md) \| `PlainMessage`\<[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`NotesServicePaginationResponse`](NotesServicePaginationResponse.md) \| `PlainMessage`\<[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`NotesServicePaginationResponse`](NotesServicePaginationResponse.md) \| `PlainMessage`\<[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/notes.scailo_pb.ts:745

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

#### Defined in

src/notes.scailo_pb.ts:733

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

#### Defined in

src/notes.scailo_pb.ts:737

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServicePaginationResponse`](NotesServicePaginationResponse.md)

#### Defined in

src/notes.scailo_pb.ts:741
