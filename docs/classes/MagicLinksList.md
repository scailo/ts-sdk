[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinksList

# Class: MagicLinksList

Describes the data structure that stores a list of magic links

**`Generated`**

from message Scailo.MagicLinksList

## Hierarchy

- `Message`\<[`MagicLinksList`](MagicLinksList.md)\>

  ↳ **`MagicLinksList`**

## Table of contents

### Constructors

- [constructor](MagicLinksList.md#constructor)

### Properties

- [list](MagicLinksList.md#list)
- [fields](MagicLinksList.md#fields)
- [runtime](MagicLinksList.md#runtime)
- [typeName](MagicLinksList.md#typename)

### Methods

- [clone](MagicLinksList.md#clone)
- [equals](MagicLinksList.md#equals)
- [fromBinary](MagicLinksList.md#frombinary)
- [fromJson](MagicLinksList.md#fromjson)
- [fromJsonString](MagicLinksList.md#fromjsonstring)
- [getType](MagicLinksList.md#gettype)
- [toBinary](MagicLinksList.md#tobinary)
- [toJSON](MagicLinksList.md#tojson)
- [toJson](MagicLinksList.md#tojson-1)
- [toJsonString](MagicLinksList.md#tojsonstring)
- [equals](MagicLinksList.md#equals-1)
- [fromBinary](MagicLinksList.md#frombinary-1)
- [fromJson](MagicLinksList.md#fromjson-1)
- [fromJsonString](MagicLinksList.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinksList**(`data?`): [`MagicLinksList`](MagicLinksList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinksList`](MagicLinksList.md)\> |

#### Returns

[`MagicLinksList`](MagicLinksList.md)

#### Overrides

Message\&lt;MagicLinksList\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:592

## Properties

### list

• **list**: [`MagicLink`](MagicLink.md)[] = `[]`

List of magic links

**`Generated`**

from field: repeated Scailo.MagicLink list = 1;

#### Defined in

src/magic_links.scailo_pb.ts:590

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:599

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:597

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinksList"``

#### Defined in

src/magic_links.scailo_pb.ts:598

## Methods

### clone

▸ **clone**(): [`MagicLinksList`](MagicLinksList.md)

Create a deep copy.

#### Returns

[`MagicLinksList`](MagicLinksList.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinksList`](MagicLinksList.md) \| `PlainMessage`\<[`MagicLinksList`](MagicLinksList.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinksList`](MagicLinksList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinksList`](MagicLinksList.md)\>

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
| `a` | `undefined` \| [`MagicLinksList`](MagicLinksList.md) \| `PlainMessage`\<[`MagicLinksList`](MagicLinksList.md)\> |
| `b` | `undefined` \| [`MagicLinksList`](MagicLinksList.md) \| `PlainMessage`\<[`MagicLinksList`](MagicLinksList.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:615

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinksList`](MagicLinksList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinksList`](MagicLinksList.md)

#### Defined in

src/magic_links.scailo_pb.ts:603

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinksList`](MagicLinksList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksList`](MagicLinksList.md)

#### Defined in

src/magic_links.scailo_pb.ts:607

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinksList`](MagicLinksList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksList`](MagicLinksList.md)

#### Defined in

src/magic_links.scailo_pb.ts:611
