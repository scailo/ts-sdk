[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceItemCreateRequest

# Class: AssetIndentsServiceItemCreateRequest

Describes the parameters required to add an item to a asset indent

**`Generated`**

from message Scailo.AssetIndentsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)\>

  ↳ **`AssetIndentsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceItemCreateRequest.md#constructor)

### Properties

- [assetIndentId](AssetIndentsServiceItemCreateRequest.md#assetindentid)
- [familyId](AssetIndentsServiceItemCreateRequest.md#familyid)
- [quantity](AssetIndentsServiceItemCreateRequest.md#quantity)
- [userComment](AssetIndentsServiceItemCreateRequest.md#usercomment)
- [fields](AssetIndentsServiceItemCreateRequest.md#fields)
- [runtime](AssetIndentsServiceItemCreateRequest.md#runtime)
- [typeName](AssetIndentsServiceItemCreateRequest.md#typename)

### Methods

- [clone](AssetIndentsServiceItemCreateRequest.md#clone)
- [equals](AssetIndentsServiceItemCreateRequest.md#equals)
- [fromBinary](AssetIndentsServiceItemCreateRequest.md#frombinary)
- [fromJson](AssetIndentsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](AssetIndentsServiceItemCreateRequest.md#fromjsonstring)
- [getType](AssetIndentsServiceItemCreateRequest.md#gettype)
- [toBinary](AssetIndentsServiceItemCreateRequest.md#tobinary)
- [toJSON](AssetIndentsServiceItemCreateRequest.md#tojson)
- [toJson](AssetIndentsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](AssetIndentsServiceItemCreateRequest.md#tojsonstring)
- [equals](AssetIndentsServiceItemCreateRequest.md#equals-1)
- [fromBinary](AssetIndentsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](AssetIndentsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceItemCreateRequest**(`data?`): [`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)\> |

#### Returns

[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;AssetIndentsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L589)

## Properties

### assetIndentId

• **assetIndentId**: `bigint` = `protoInt64.zero`

Stores the asset indent ID

**`Generated`**

from field: uint64 asset_indent_id = 10;

#### Defined in

[src/asset_indents.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L573)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/asset_indents.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L580)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity being manufactured

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/asset_indents.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L587)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/asset_indents.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L566)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L596)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:594](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L594)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServiceItemCreateRequest"``

#### Defined in

[src/asset_indents.scailo_pb.ts:595](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L595)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:615](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L615)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L603)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L607)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceItemCreateRequest`](AssetIndentsServiceItemCreateRequest.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/asset_indents.scailo_pb.ts#L611)
