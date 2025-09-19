[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSampleWithMetadata

# Class: QCSampleWithMetadata

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.QCSampleWithMetadata

## Hierarchy

- `Message`\<[`QCSampleWithMetadata`](QCSampleWithMetadata.md)\>

  ↳ **`QCSampleWithMetadata`**

## Table of contents

### Constructors

- [constructor](QCSampleWithMetadata.md#constructor)

### Properties

- [family](QCSampleWithMetadata.md#family)
- [inventoryItem](QCSampleWithMetadata.md#inventoryitem)
- [qcGroup](QCSampleWithMetadata.md#qcgroup)
- [qcSample](QCSampleWithMetadata.md#qcsample)
- [fields](QCSampleWithMetadata.md#fields)
- [runtime](QCSampleWithMetadata.md#runtime)
- [typeName](QCSampleWithMetadata.md#typename)

### Methods

- [clone](QCSampleWithMetadata.md#clone)
- [equals](QCSampleWithMetadata.md#equals)
- [fromBinary](QCSampleWithMetadata.md#frombinary)
- [fromJson](QCSampleWithMetadata.md#fromjson)
- [fromJsonString](QCSampleWithMetadata.md#fromjsonstring)
- [getType](QCSampleWithMetadata.md#gettype)
- [toBinary](QCSampleWithMetadata.md#tobinary)
- [toJSON](QCSampleWithMetadata.md#tojson)
- [toJson](QCSampleWithMetadata.md#tojson-1)
- [toJsonString](QCSampleWithMetadata.md#tojsonstring)
- [equals](QCSampleWithMetadata.md#equals-1)
- [fromBinary](QCSampleWithMetadata.md#frombinary-1)
- [fromJson](QCSampleWithMetadata.md#fromjson-1)
- [fromJsonString](QCSampleWithMetadata.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSampleWithMetadata**(`data?`): [`QCSampleWithMetadata`](QCSampleWithMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSampleWithMetadata`](QCSampleWithMetadata.md)\> |

#### Returns

[`QCSampleWithMetadata`](QCSampleWithMetadata.md)

#### Overrides

Message\&lt;QCSampleWithMetadata\&gt;.constructor

#### Defined in

[src/qc_samples.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L795)

## Properties

### family

• `Optional` **family**: [`Family`](Family.md)

Stores the family information

**`Generated`**

from field: Scailo.Family family = 10;

#### Defined in

[src/qc_samples.scailo_pb.ts:779](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L779)

___

### inventoryItem

• `Optional` **inventoryItem**: [`GenericInventory`](GenericInventory.md)

Stores the generic inventory information

**`Generated`**

from field: Scailo.GenericInventory inventory_item = 30;

#### Defined in

[src/qc_samples.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L793)

___

### qcGroup

• `Optional` **qcGroup**: [`QCGroup`](QCGroup.md)

Stores the associated qc group

**`Generated`**

from field: Scailo.QCGroup qc_group = 20;

#### Defined in

[src/qc_samples.scailo_pb.ts:786](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L786)

___

### qcSample

• `Optional` **qcSample**: [`QCSample`](QCSample.md)

Stores the QC Sample

**`Generated`**

from field: Scailo.QCSample qc_sample = 1;

#### Defined in

[src/qc_samples.scailo_pb.ts:772](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L772)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_samples.scailo_pb.ts:802](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L802)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_samples.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L800)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSampleWithMetadata"``

#### Defined in

[src/qc_samples.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L801)

## Methods

### clone

▸ **clone**(): [`QCSampleWithMetadata`](QCSampleWithMetadata.md)

Create a deep copy.

#### Returns

[`QCSampleWithMetadata`](QCSampleWithMetadata.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSampleWithMetadata`](QCSampleWithMetadata.md) \| `PlainMessage`\<[`QCSampleWithMetadata`](QCSampleWithMetadata.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSampleWithMetadata`](QCSampleWithMetadata.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSampleWithMetadata`](QCSampleWithMetadata.md)\>

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
| `a` | `undefined` \| [`QCSampleWithMetadata`](QCSampleWithMetadata.md) \| `PlainMessage`\<[`QCSampleWithMetadata`](QCSampleWithMetadata.md)\> |
| `b` | `undefined` \| [`QCSampleWithMetadata`](QCSampleWithMetadata.md) \| `PlainMessage`\<[`QCSampleWithMetadata`](QCSampleWithMetadata.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_samples.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L821)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSampleWithMetadata`](QCSampleWithMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSampleWithMetadata`](QCSampleWithMetadata.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L809)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSampleWithMetadata`](QCSampleWithMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleWithMetadata`](QCSampleWithMetadata.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:813](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L813)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSampleWithMetadata`](QCSampleWithMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSampleWithMetadata`](QCSampleWithMetadata.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L817)
