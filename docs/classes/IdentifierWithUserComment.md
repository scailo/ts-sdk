[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / IdentifierWithUserComment

# Class: IdentifierWithUserComment

Describes the standard identifier with a user comment. Useful when an operation needs to be performed, and a user comment needs to be recorded

**`Generated`**

from message Scailo.IdentifierWithUserComment

## Hierarchy

- `Message`\<[`IdentifierWithUserComment`](IdentifierWithUserComment.md)\>

  ↳ **`IdentifierWithUserComment`**

## Table of contents

### Constructors

- [constructor](IdentifierWithUserComment.md#constructor)

### Properties

- [id](IdentifierWithUserComment.md#id)
- [userComment](IdentifierWithUserComment.md#usercomment)
- [fields](IdentifierWithUserComment.md#fields)
- [runtime](IdentifierWithUserComment.md#runtime)
- [typeName](IdentifierWithUserComment.md#typename)

### Methods

- [clone](IdentifierWithUserComment.md#clone)
- [equals](IdentifierWithUserComment.md#equals)
- [fromBinary](IdentifierWithUserComment.md#frombinary)
- [fromJson](IdentifierWithUserComment.md#fromjson)
- [fromJsonString](IdentifierWithUserComment.md#fromjsonstring)
- [getType](IdentifierWithUserComment.md#gettype)
- [toBinary](IdentifierWithUserComment.md#tobinary)
- [toJSON](IdentifierWithUserComment.md#tojson)
- [toJson](IdentifierWithUserComment.md#tojson-1)
- [toJsonString](IdentifierWithUserComment.md#tojsonstring)
- [equals](IdentifierWithUserComment.md#equals-1)
- [fromBinary](IdentifierWithUserComment.md#frombinary-1)
- [fromJson](IdentifierWithUserComment.md#fromjson-1)
- [fromJsonString](IdentifierWithUserComment.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierWithUserComment**(`data?`): [`IdentifierWithUserComment`](IdentifierWithUserComment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`IdentifierWithUserComment`](IdentifierWithUserComment.md)\> |

#### Returns

[`IdentifierWithUserComment`](IdentifierWithUserComment.md)

#### Overrides

Message\&lt;IdentifierWithUserComment\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:2433

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: uint64 id = 1;

#### Defined in

src/base.scailo_pb.ts:2424

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/base.scailo_pb.ts:2431

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:2440

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:2438

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.IdentifierWithUserComment"``

#### Defined in

src/base.scailo_pb.ts:2439

## Methods

### clone

▸ **clone**(): [`IdentifierWithUserComment`](IdentifierWithUserComment.md)

Create a deep copy.

#### Returns

[`IdentifierWithUserComment`](IdentifierWithUserComment.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierWithUserComment`](IdentifierWithUserComment.md) \| `PlainMessage`\<[`IdentifierWithUserComment`](IdentifierWithUserComment.md)\> |

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

▸ **getType**(): `MessageType`\<[`IdentifierWithUserComment`](IdentifierWithUserComment.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`IdentifierWithUserComment`](IdentifierWithUserComment.md)\>

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
| `a` | `undefined` \| [`IdentifierWithUserComment`](IdentifierWithUserComment.md) \| `PlainMessage`\<[`IdentifierWithUserComment`](IdentifierWithUserComment.md)\> |
| `b` | `undefined` \| [`IdentifierWithUserComment`](IdentifierWithUserComment.md) \| `PlainMessage`\<[`IdentifierWithUserComment`](IdentifierWithUserComment.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:2457

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierWithUserComment`](IdentifierWithUserComment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`IdentifierWithUserComment`](IdentifierWithUserComment.md)

#### Defined in

src/base.scailo_pb.ts:2445

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierWithUserComment`](IdentifierWithUserComment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithUserComment`](IdentifierWithUserComment.md)

#### Defined in

src/base.scailo_pb.ts:2449

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierWithUserComment`](IdentifierWithUserComment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithUserComment`](IdentifierWithUserComment.md)

#### Defined in

src/base.scailo_pb.ts:2453
