[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LabelPaginationResp

# Class: LabelPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message Scailo.LabelPaginationResp

## Hierarchy

- `Message`\<[`LabelPaginationResp`](LabelPaginationResp.md)\>

  ↳ **`LabelPaginationResp`**

## Table of contents

### Constructors

- [constructor](LabelPaginationResp.md#constructor)

### Properties

- [count](LabelPaginationResp.md#count)
- [offset](LabelPaginationResp.md#offset)
- [payload](LabelPaginationResp.md#payload)
- [total](LabelPaginationResp.md#total)
- [fields](LabelPaginationResp.md#fields)
- [runtime](LabelPaginationResp.md#runtime)
- [typeName](LabelPaginationResp.md#typename)

### Methods

- [clone](LabelPaginationResp.md#clone)
- [equals](LabelPaginationResp.md#equals)
- [fromBinary](LabelPaginationResp.md#frombinary)
- [fromJson](LabelPaginationResp.md#fromjson)
- [fromJsonString](LabelPaginationResp.md#fromjsonstring)
- [getType](LabelPaginationResp.md#gettype)
- [toBinary](LabelPaginationResp.md#tobinary)
- [toJSON](LabelPaginationResp.md#tojson)
- [toJson](LabelPaginationResp.md#tojson-1)
- [toJsonString](LabelPaginationResp.md#tojsonstring)
- [equals](LabelPaginationResp.md#equals-1)
- [fromBinary](LabelPaginationResp.md#frombinary-1)
- [fromJson](LabelPaginationResp.md#fromjson-1)
- [fromJsonString](LabelPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new LabelPaginationResp**(`data?`): [`LabelPaginationResp`](LabelPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LabelPaginationResp`](LabelPaginationResp.md)\> |

#### Returns

[`LabelPaginationResp`](LabelPaginationResp.md)

#### Overrides

Message\&lt;LabelPaginationResp\&gt;.constructor

#### Defined in

src/labels.scailo_pb.ts:196

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/labels.scailo_pb.ts:173

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/labels.scailo_pb.ts:180

___

### payload

• **payload**: [`Label`](Label.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Label payload = 4;

#### Defined in

src/labels.scailo_pb.ts:194

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/labels.scailo_pb.ts:187

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/labels.scailo_pb.ts:203

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/labels.scailo_pb.ts:201

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LabelPaginationResp"``

#### Defined in

src/labels.scailo_pb.ts:202

## Methods

### clone

▸ **clone**(): [`LabelPaginationResp`](LabelPaginationResp.md)

Create a deep copy.

#### Returns

[`LabelPaginationResp`](LabelPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`LabelPaginationResp`](LabelPaginationResp.md) \| `PlainMessage`\<[`LabelPaginationResp`](LabelPaginationResp.md)\> |

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

▸ **getType**(): `MessageType`\<[`LabelPaginationResp`](LabelPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LabelPaginationResp`](LabelPaginationResp.md)\>

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
| `a` | `undefined` \| [`LabelPaginationResp`](LabelPaginationResp.md) \| `PlainMessage`\<[`LabelPaginationResp`](LabelPaginationResp.md)\> |
| `b` | `undefined` \| [`LabelPaginationResp`](LabelPaginationResp.md) \| `PlainMessage`\<[`LabelPaginationResp`](LabelPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

src/labels.scailo_pb.ts:222

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LabelPaginationResp`](LabelPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LabelPaginationResp`](LabelPaginationResp.md)

#### Defined in

src/labels.scailo_pb.ts:210

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LabelPaginationResp`](LabelPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelPaginationResp`](LabelPaginationResp.md)

#### Defined in

src/labels.scailo_pb.ts:214

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LabelPaginationResp`](LabelPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelPaginationResp`](LabelPaginationResp.md)

#### Defined in

src/labels.scailo_pb.ts:218
