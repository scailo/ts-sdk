[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinksServiceUpdateRequest

# Class: MagicLinksServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a magic link

**`Generated`**

from message Scailo.MagicLinksServiceUpdateRequest

## Hierarchy

- `Message`\<[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)\>

  ↳ **`MagicLinksServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](MagicLinksServiceUpdateRequest.md#constructor)

### Properties

- [description](MagicLinksServiceUpdateRequest.md#description)
- [expiresAt](MagicLinksServiceUpdateRequest.md#expiresat)
- [id](MagicLinksServiceUpdateRequest.md#id)
- [userComment](MagicLinksServiceUpdateRequest.md#usercomment)
- [fields](MagicLinksServiceUpdateRequest.md#fields)
- [runtime](MagicLinksServiceUpdateRequest.md#runtime)
- [typeName](MagicLinksServiceUpdateRequest.md#typename)

### Methods

- [clone](MagicLinksServiceUpdateRequest.md#clone)
- [equals](MagicLinksServiceUpdateRequest.md#equals)
- [fromBinary](MagicLinksServiceUpdateRequest.md#frombinary)
- [fromJson](MagicLinksServiceUpdateRequest.md#fromjson)
- [fromJsonString](MagicLinksServiceUpdateRequest.md#fromjsonstring)
- [getType](MagicLinksServiceUpdateRequest.md#gettype)
- [toBinary](MagicLinksServiceUpdateRequest.md#tobinary)
- [toJSON](MagicLinksServiceUpdateRequest.md#tojson)
- [toJson](MagicLinksServiceUpdateRequest.md#tojson-1)
- [toJsonString](MagicLinksServiceUpdateRequest.md#tojsonstring)
- [equals](MagicLinksServiceUpdateRequest.md#equals-1)
- [fromBinary](MagicLinksServiceUpdateRequest.md#frombinary-1)
- [fromJson](MagicLinksServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](MagicLinksServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinksServiceUpdateRequest**(`data?`): [`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)\> |

#### Returns

[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

#### Overrides

Message\&lt;MagicLinksServiceUpdateRequest\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:869

## Properties

### description

• **description**: `string` = `""`

Stores an optional description of the magic link

**`Generated`**

from field: string description = 35;

#### Defined in

src/magic_links.scailo_pb.ts:867

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

Stores the UNIX timestamp of when the link expires. If 0, then the link never expires

**`Generated`**

from field: uint64 expires_at = 30;

#### Defined in

src/magic_links.scailo_pb.ts:860

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the magic link that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/magic_links.scailo_pb.ts:853

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/magic_links.scailo_pb.ts:846

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:876

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:874

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinksServiceUpdateRequest"``

#### Defined in

src/magic_links.scailo_pb.ts:875

## Methods

### clone

▸ **clone**(): [`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md) \| `PlainMessage`\<[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md) \| `PlainMessage`\<[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md) \| `PlainMessage`\<[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:895

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

#### Defined in

src/magic_links.scailo_pb.ts:883

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

#### Defined in

src/magic_links.scailo_pb.ts:887

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceUpdateRequest`](MagicLinksServiceUpdateRequest.md)

#### Defined in

src/magic_links.scailo_pb.ts:891
