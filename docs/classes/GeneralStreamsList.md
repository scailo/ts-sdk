[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamsList

# Class: GeneralStreamsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.GeneralStreamsList

## Hierarchy

- `Message`\<[`GeneralStreamsList`](GeneralStreamsList.md)\>

  ↳ **`GeneralStreamsList`**

## Table of contents

### Constructors

- [constructor](GeneralStreamsList.md#constructor)

### Properties

- [list](GeneralStreamsList.md#list)
- [fields](GeneralStreamsList.md#fields)
- [runtime](GeneralStreamsList.md#runtime)
- [typeName](GeneralStreamsList.md#typename)

### Methods

- [clone](GeneralStreamsList.md#clone)
- [equals](GeneralStreamsList.md#equals)
- [fromBinary](GeneralStreamsList.md#frombinary)
- [fromJson](GeneralStreamsList.md#fromjson)
- [fromJsonString](GeneralStreamsList.md#fromjsonstring)
- [getType](GeneralStreamsList.md#gettype)
- [toBinary](GeneralStreamsList.md#tobinary)
- [toJSON](GeneralStreamsList.md#tojson)
- [toJson](GeneralStreamsList.md#tojson-1)
- [toJsonString](GeneralStreamsList.md#tojsonstring)
- [equals](GeneralStreamsList.md#equals-1)
- [fromBinary](GeneralStreamsList.md#frombinary-1)
- [fromJson](GeneralStreamsList.md#fromjson-1)
- [fromJsonString](GeneralStreamsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamsList**(`data?`): [`GeneralStreamsList`](GeneralStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamsList`](GeneralStreamsList.md)\> |

#### Returns

[`GeneralStreamsList`](GeneralStreamsList.md)

#### Overrides

Message\&lt;GeneralStreamsList\&gt;.constructor

#### Defined in

src/general_streams.scailo_pb.ts:572

## Properties

### list

• **list**: [`GeneralStream`](GeneralStream.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.GeneralStream list = 1;

#### Defined in

src/general_streams.scailo_pb.ts:570

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/general_streams.scailo_pb.ts:579

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/general_streams.scailo_pb.ts:577

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamsList"``

#### Defined in

src/general_streams.scailo_pb.ts:578

## Methods

### clone

▸ **clone**(): [`GeneralStreamsList`](GeneralStreamsList.md)

Create a deep copy.

#### Returns

[`GeneralStreamsList`](GeneralStreamsList.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamsList`](GeneralStreamsList.md) \| `PlainMessage`\<[`GeneralStreamsList`](GeneralStreamsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamsList`](GeneralStreamsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamsList`](GeneralStreamsList.md)\>

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
| `a` | `undefined` \| [`GeneralStreamsList`](GeneralStreamsList.md) \| `PlainMessage`\<[`GeneralStreamsList`](GeneralStreamsList.md)\> |
| `b` | `undefined` \| [`GeneralStreamsList`](GeneralStreamsList.md) \| `PlainMessage`\<[`GeneralStreamsList`](GeneralStreamsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/general_streams.scailo_pb.ts:595

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamsList`](GeneralStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamsList`](GeneralStreamsList.md)

#### Defined in

src/general_streams.scailo_pb.ts:583

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamsList`](GeneralStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsList`](GeneralStreamsList.md)

#### Defined in

src/general_streams.scailo_pb.ts:587

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamsList`](GeneralStreamsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamsList`](GeneralStreamsList.md)

#### Defined in

src/general_streams.scailo_pb.ts:591
