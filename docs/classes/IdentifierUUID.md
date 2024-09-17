[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / IdentifierUUID

# Class: IdentifierUUID

Describes the UUID identifier

**`Generated`**

from message Scailo.IdentifierUUID

## Hierarchy

- `Message`\<[`IdentifierUUID`](IdentifierUUID.md)\>

  ↳ **`IdentifierUUID`**

## Table of contents

### Constructors

- [constructor](IdentifierUUID.md#constructor)

### Properties

- [uuid](IdentifierUUID.md#uuid)
- [fields](IdentifierUUID.md#fields)
- [runtime](IdentifierUUID.md#runtime)
- [typeName](IdentifierUUID.md#typename)

### Methods

- [clone](IdentifierUUID.md#clone)
- [equals](IdentifierUUID.md#equals)
- [fromBinary](IdentifierUUID.md#frombinary)
- [fromJson](IdentifierUUID.md#fromjson)
- [fromJsonString](IdentifierUUID.md#fromjsonstring)
- [getType](IdentifierUUID.md#gettype)
- [toBinary](IdentifierUUID.md#tobinary)
- [toJSON](IdentifierUUID.md#tojson)
- [toJson](IdentifierUUID.md#tojson-1)
- [toJsonString](IdentifierUUID.md#tojsonstring)
- [equals](IdentifierUUID.md#equals-1)
- [fromBinary](IdentifierUUID.md#frombinary-1)
- [fromJson](IdentifierUUID.md#fromjson-1)
- [fromJsonString](IdentifierUUID.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierUUID**(`data?`): [`IdentifierUUID`](IdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`IdentifierUUID`](IdentifierUUID.md)\> |

#### Returns

[`IdentifierUUID`](IdentifierUUID.md)

#### Overrides

Message\&lt;IdentifierUUID\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:2684

## Properties

### uuid

• **uuid**: `string` = `""`

UUID of the resource

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/base.scailo_pb.ts:2682

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:2691

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:2689

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.IdentifierUUID"``

#### Defined in

src/base.scailo_pb.ts:2690

## Methods

### clone

▸ **clone**(): [`IdentifierUUID`](IdentifierUUID.md)

Create a deep copy.

#### Returns

[`IdentifierUUID`](IdentifierUUID.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierUUID`](IdentifierUUID.md) \| `PlainMessage`\<[`IdentifierUUID`](IdentifierUUID.md)\> |

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

▸ **getType**(): `MessageType`\<[`IdentifierUUID`](IdentifierUUID.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`IdentifierUUID`](IdentifierUUID.md)\>

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
| `a` | `undefined` \| [`IdentifierUUID`](IdentifierUUID.md) \| `PlainMessage`\<[`IdentifierUUID`](IdentifierUUID.md)\> |
| `b` | `undefined` \| [`IdentifierUUID`](IdentifierUUID.md) \| `PlainMessage`\<[`IdentifierUUID`](IdentifierUUID.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:2707

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierUUID`](IdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`IdentifierUUID`](IdentifierUUID.md)

#### Defined in

src/base.scailo_pb.ts:2695

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierUUID`](IdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierUUID`](IdentifierUUID.md)

#### Defined in

src/base.scailo_pb.ts:2699

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierUUID`](IdentifierUUID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierUUID`](IdentifierUUID.md)

#### Defined in

src/base.scailo_pb.ts:2703
