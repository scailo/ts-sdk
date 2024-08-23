[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceItemUpdateRequest

# Class: AssetIndentsServiceItemUpdateRequest

Describes the parameters required to update an item in a asset indent

**`Generated`**

from message Scailo.AssetIndentsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)\>

  ↳ **`AssetIndentsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](AssetIndentsServiceItemUpdateRequest.md#id)
- [quantity](AssetIndentsServiceItemUpdateRequest.md#quantity)
- [userComment](AssetIndentsServiceItemUpdateRequest.md#usercomment)
- [fields](AssetIndentsServiceItemUpdateRequest.md#fields)
- [runtime](AssetIndentsServiceItemUpdateRequest.md#runtime)
- [typeName](AssetIndentsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](AssetIndentsServiceItemUpdateRequest.md#clone)
- [equals](AssetIndentsServiceItemUpdateRequest.md#equals)
- [fromBinary](AssetIndentsServiceItemUpdateRequest.md#frombinary)
- [fromJson](AssetIndentsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](AssetIndentsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](AssetIndentsServiceItemUpdateRequest.md#gettype)
- [toBinary](AssetIndentsServiceItemUpdateRequest.md#tobinary)
- [toJSON](AssetIndentsServiceItemUpdateRequest.md#tojson)
- [toJson](AssetIndentsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](AssetIndentsServiceItemUpdateRequest.md#tojsonstring)
- [equals](AssetIndentsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](AssetIndentsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](AssetIndentsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceItemUpdateRequest**(`data?`): [`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)\> |

#### Returns

[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;AssetIndentsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/asset_indents.scailo_pb.ts:648

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/asset_indents.scailo_pb.ts:639

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity being manufactured

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

src/asset_indents.scailo_pb.ts:646

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/asset_indents.scailo_pb.ts:632

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/asset_indents.scailo_pb.ts:655

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/asset_indents.scailo_pb.ts:653

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentsServiceItemUpdateRequest"``

#### Defined in

src/asset_indents.scailo_pb.ts:654

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/asset_indents.scailo_pb.ts:673

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

#### Defined in

src/asset_indents.scailo_pb.ts:661

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

#### Defined in

src/asset_indents.scailo_pb.ts:665

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceItemUpdateRequest`](AssetIndentsServiceItemUpdateRequest.md)

#### Defined in

src/asset_indents.scailo_pb.ts:669
