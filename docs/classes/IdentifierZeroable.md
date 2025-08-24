[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / IdentifierZeroable

# Class: IdentifierZeroable

Describes the standard identifier that can also be a zero

**`Generated`**

from message Scailo.IdentifierZeroable

## Hierarchy

- `Message`\<[`IdentifierZeroable`](IdentifierZeroable.md)\>

  ↳ **`IdentifierZeroable`**

## Table of contents

### Constructors

- [constructor](IdentifierZeroable.md#constructor)

### Properties

- [id](IdentifierZeroable.md#id)
- [fields](IdentifierZeroable.md#fields)
- [runtime](IdentifierZeroable.md#runtime)
- [typeName](IdentifierZeroable.md#typename)

### Methods

- [clone](IdentifierZeroable.md#clone)
- [equals](IdentifierZeroable.md#equals)
- [fromBinary](IdentifierZeroable.md#frombinary)
- [fromJson](IdentifierZeroable.md#fromjson)
- [fromJsonString](IdentifierZeroable.md#fromjsonstring)
- [getType](IdentifierZeroable.md#gettype)
- [toBinary](IdentifierZeroable.md#tobinary)
- [toJSON](IdentifierZeroable.md#tojson)
- [toJson](IdentifierZeroable.md#tojson-1)
- [toJsonString](IdentifierZeroable.md#tojsonstring)
- [equals](IdentifierZeroable.md#equals-1)
- [fromBinary](IdentifierZeroable.md#frombinary-1)
- [fromJson](IdentifierZeroable.md#fromjson-1)
- [fromJsonString](IdentifierZeroable.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierZeroable**(`data?`): [`IdentifierZeroable`](IdentifierZeroable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`IdentifierZeroable`](IdentifierZeroable.md)\> |

#### Returns

[`IdentifierZeroable`](IdentifierZeroable.md)

#### Overrides

Message\&lt;IdentifierZeroable\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:2398

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: uint64 id = 1;

#### Defined in

src/base.scailo_pb.ts:2396

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:2405

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:2403

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.IdentifierZeroable"``

#### Defined in

src/base.scailo_pb.ts:2404

## Methods

### clone

▸ **clone**(): [`IdentifierZeroable`](IdentifierZeroable.md)

Create a deep copy.

#### Returns

[`IdentifierZeroable`](IdentifierZeroable.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierZeroable`](IdentifierZeroable.md) \| `PlainMessage`\<[`IdentifierZeroable`](IdentifierZeroable.md)\> |

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

▸ **getType**(): `MessageType`\<[`IdentifierZeroable`](IdentifierZeroable.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`IdentifierZeroable`](IdentifierZeroable.md)\>

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
| `a` | `undefined` \| [`IdentifierZeroable`](IdentifierZeroable.md) \| `PlainMessage`\<[`IdentifierZeroable`](IdentifierZeroable.md)\> |
| `b` | `undefined` \| [`IdentifierZeroable`](IdentifierZeroable.md) \| `PlainMessage`\<[`IdentifierZeroable`](IdentifierZeroable.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:2421

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierZeroable`](IdentifierZeroable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`IdentifierZeroable`](IdentifierZeroable.md)

#### Defined in

src/base.scailo_pb.ts:2409

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierZeroable`](IdentifierZeroable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierZeroable`](IdentifierZeroable.md)

#### Defined in

src/base.scailo_pb.ts:2413

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierZeroable`](IdentifierZeroable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierZeroable`](IdentifierZeroable.md)

#### Defined in

src/base.scailo_pb.ts:2417
