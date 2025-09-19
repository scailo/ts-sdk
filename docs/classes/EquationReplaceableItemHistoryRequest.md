[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationReplaceableItemHistoryRequest

# Class: EquationReplaceableItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.EquationReplaceableItemHistoryRequest

## Hierarchy

- `Message`\<[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)\>

  ↳ **`EquationReplaceableItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](EquationReplaceableItemHistoryRequest.md#constructor)

### Properties

- [equationId](EquationReplaceableItemHistoryRequest.md#equationid)
- [replaceableFamilyId](EquationReplaceableItemHistoryRequest.md#replaceablefamilyid)
- [fields](EquationReplaceableItemHistoryRequest.md#fields)
- [runtime](EquationReplaceableItemHistoryRequest.md#runtime)
- [typeName](EquationReplaceableItemHistoryRequest.md#typename)

### Methods

- [clone](EquationReplaceableItemHistoryRequest.md#clone)
- [equals](EquationReplaceableItemHistoryRequest.md#equals)
- [fromBinary](EquationReplaceableItemHistoryRequest.md#frombinary)
- [fromJson](EquationReplaceableItemHistoryRequest.md#fromjson)
- [fromJsonString](EquationReplaceableItemHistoryRequest.md#fromjsonstring)
- [getType](EquationReplaceableItemHistoryRequest.md#gettype)
- [toBinary](EquationReplaceableItemHistoryRequest.md#tobinary)
- [toJSON](EquationReplaceableItemHistoryRequest.md#tojson)
- [toJson](EquationReplaceableItemHistoryRequest.md#tojson-1)
- [toJsonString](EquationReplaceableItemHistoryRequest.md#tojsonstring)
- [equals](EquationReplaceableItemHistoryRequest.md#equals-1)
- [fromBinary](EquationReplaceableItemHistoryRequest.md#frombinary-1)
- [fromJson](EquationReplaceableItemHistoryRequest.md#fromjson-1)
- [fromJsonString](EquationReplaceableItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationReplaceableItemHistoryRequest**(`data?`): [`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)\> |

#### Returns

[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

#### Overrides

Message\&lt;EquationReplaceableItemHistoryRequest\&gt;.constructor

#### Defined in

[src/equations_replaceables.scailo_pb.ts:874](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L874)

## Properties

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation replaceable

**`Generated`**

from field: uint64 equation_id = 10;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L865)

___

### replaceableFamilyId

• **replaceableFamilyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: uint64 replaceable_family_id = 11;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L872)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_replaceables.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L881)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_replaceables.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L879)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationReplaceableItemHistoryRequest"``

#### Defined in

[src/equations_replaceables.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L880)

## Methods

### clone

▸ **clone**(): [`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md) \| `PlainMessage`\<[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md) \| `PlainMessage`\<[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md) \| `PlainMessage`\<[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_replaceables.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L898)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

#### Defined in

[src/equations_replaceables.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L886)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

#### Defined in

[src/equations_replaceables.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L890)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationReplaceableItemHistoryRequest`](EquationReplaceableItemHistoryRequest.md)

#### Defined in

[src/equations_replaceables.scailo_pb.ts:894](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_replaceables.scailo_pb.ts#L894)
