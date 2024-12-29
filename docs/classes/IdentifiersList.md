[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / IdentifiersList

# Class: IdentifiersList

Describes the list of standard identifiers, used for identifying associated items

**`Generated`**

from message Scailo.IdentifiersList

## Hierarchy

- `Message`\<[`IdentifiersList`](IdentifiersList.md)\>

  ↳ **`IdentifiersList`**

## Table of contents

### Constructors

- [constructor](IdentifiersList.md#constructor)

### Properties

- [list](IdentifiersList.md#list)
- [fields](IdentifiersList.md#fields)
- [runtime](IdentifiersList.md#runtime)
- [typeName](IdentifiersList.md#typename)

### Methods

- [clone](IdentifiersList.md#clone)
- [equals](IdentifiersList.md#equals)
- [fromBinary](IdentifiersList.md#frombinary)
- [fromJson](IdentifiersList.md#fromjson)
- [fromJsonString](IdentifiersList.md#fromjsonstring)
- [getType](IdentifiersList.md#gettype)
- [toBinary](IdentifiersList.md#tobinary)
- [toJSON](IdentifiersList.md#tojson)
- [toJson](IdentifiersList.md#tojson-1)
- [toJsonString](IdentifiersList.md#tojsonstring)
- [equals](IdentifiersList.md#equals-1)
- [fromBinary](IdentifiersList.md#frombinary-1)
- [fromJson](IdentifiersList.md#fromjson-1)
- [fromJsonString](IdentifiersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifiersList**(`data?`): [`IdentifiersList`](IdentifiersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`IdentifiersList`](IdentifiersList.md)\> |

#### Returns

[`IdentifiersList`](IdentifiersList.md)

#### Overrides

Message\&lt;IdentifiersList\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:2474

## Properties

### list

• **list**: `bigint`[] = `[]`

List of identifiers

**`Generated`**

from field: repeated uint64 list = 1;

#### Defined in

src/base.scailo_pb.ts:2472

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:2481

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:2479

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.IdentifiersList"``

#### Defined in

src/base.scailo_pb.ts:2480

## Methods

### clone

▸ **clone**(): [`IdentifiersList`](IdentifiersList.md)

Create a deep copy.

#### Returns

[`IdentifiersList`](IdentifiersList.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifiersList`](IdentifiersList.md) \| `PlainMessage`\<[`IdentifiersList`](IdentifiersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`IdentifiersList`](IdentifiersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`IdentifiersList`](IdentifiersList.md)\>

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
| `a` | `undefined` \| [`IdentifiersList`](IdentifiersList.md) \| `PlainMessage`\<[`IdentifiersList`](IdentifiersList.md)\> |
| `b` | `undefined` \| [`IdentifiersList`](IdentifiersList.md) \| `PlainMessage`\<[`IdentifiersList`](IdentifiersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:2497

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifiersList`](IdentifiersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`IdentifiersList`](IdentifiersList.md)

#### Defined in

src/base.scailo_pb.ts:2485

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifiersList`](IdentifiersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifiersList`](IdentifiersList.md)

#### Defined in

src/base.scailo_pb.ts:2489

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifiersList`](IdentifiersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifiersList`](IdentifiersList.md)

#### Defined in

src/base.scailo_pb.ts:2493
