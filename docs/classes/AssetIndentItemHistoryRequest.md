[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentItemHistoryRequest

# Class: AssetIndentItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.AssetIndentItemHistoryRequest

## Hierarchy

- `Message`\<[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)\>

  ↳ **`AssetIndentItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](AssetIndentItemHistoryRequest.md#constructor)

### Properties

- [assetIndentId](AssetIndentItemHistoryRequest.md#assetindentid)
- [familyId](AssetIndentItemHistoryRequest.md#familyid)
- [fields](AssetIndentItemHistoryRequest.md#fields)
- [runtime](AssetIndentItemHistoryRequest.md#runtime)
- [typeName](AssetIndentItemHistoryRequest.md#typename)

### Methods

- [clone](AssetIndentItemHistoryRequest.md#clone)
- [equals](AssetIndentItemHistoryRequest.md#equals)
- [fromBinary](AssetIndentItemHistoryRequest.md#frombinary)
- [fromJson](AssetIndentItemHistoryRequest.md#fromjson)
- [fromJsonString](AssetIndentItemHistoryRequest.md#fromjsonstring)
- [getType](AssetIndentItemHistoryRequest.md#gettype)
- [toBinary](AssetIndentItemHistoryRequest.md#tobinary)
- [toJSON](AssetIndentItemHistoryRequest.md#tojson)
- [toJson](AssetIndentItemHistoryRequest.md#tojson-1)
- [toJsonString](AssetIndentItemHistoryRequest.md#tojsonstring)
- [equals](AssetIndentItemHistoryRequest.md#equals-1)
- [fromBinary](AssetIndentItemHistoryRequest.md#frombinary-1)
- [fromJson](AssetIndentItemHistoryRequest.md#fromjson-1)
- [fromJsonString](AssetIndentItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentItemHistoryRequest**(`data?`): [`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)\> |

#### Returns

[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

#### Overrides

Message\&lt;AssetIndentItemHistoryRequest\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L881)

## Properties

### assetIndentId

• **assetIndentId**: `bigint` = `protoInt64.zero`

Stores the asset indent ID

**`Generated`**

from field: uint64 asset_indent_id = 10;

#### Defined in

[src/asset_indents.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L872)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/asset_indents.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L879)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L888)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L886)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentItemHistoryRequest"``

#### Defined in

[src/asset_indents.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L887)

## Methods

### clone

▸ **clone**(): [`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md) \| `PlainMessage`\<[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md) \| `PlainMessage`\<[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md) \| `PlainMessage`\<[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:905](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L905)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:893](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L893)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:897](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L897)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItemHistoryRequest`](AssetIndentItemHistoryRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:901](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L901)
