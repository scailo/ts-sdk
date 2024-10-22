[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UpdateOwnPasswordReq

# Class: UpdateOwnPasswordReq

Describes the payload that is requred to update the user's own password

**`Generated`**

from message Scailo.UpdateOwnPasswordReq

## Hierarchy

- `Message`\<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\>

  ↳ **`UpdateOwnPasswordReq`**

## Table of contents

### Constructors

- [constructor](UpdateOwnPasswordReq.md#constructor)

### Properties

- [oldPlainTextPassword](UpdateOwnPasswordReq.md#oldplaintextpassword)
- [plainTextPassword](UpdateOwnPasswordReq.md#plaintextpassword)
- [userComment](UpdateOwnPasswordReq.md#usercomment)
- [fields](UpdateOwnPasswordReq.md#fields)
- [runtime](UpdateOwnPasswordReq.md#runtime)
- [typeName](UpdateOwnPasswordReq.md#typename)

### Methods

- [clone](UpdateOwnPasswordReq.md#clone)
- [equals](UpdateOwnPasswordReq.md#equals)
- [fromBinary](UpdateOwnPasswordReq.md#frombinary)
- [fromJson](UpdateOwnPasswordReq.md#fromjson)
- [fromJsonString](UpdateOwnPasswordReq.md#fromjsonstring)
- [getType](UpdateOwnPasswordReq.md#gettype)
- [toBinary](UpdateOwnPasswordReq.md#tobinary)
- [toJSON](UpdateOwnPasswordReq.md#tojson)
- [toJson](UpdateOwnPasswordReq.md#tojson-1)
- [toJsonString](UpdateOwnPasswordReq.md#tojsonstring)
- [equals](UpdateOwnPasswordReq.md#equals-1)
- [fromBinary](UpdateOwnPasswordReq.md#frombinary-1)
- [fromJson](UpdateOwnPasswordReq.md#fromjson-1)
- [fromJsonString](UpdateOwnPasswordReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UpdateOwnPasswordReq**(`data?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\> |

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Overrides

Message\&lt;UpdateOwnPasswordReq\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:2066

## Properties

### oldPlainTextPassword

• **oldPlainTextPassword**: `string` = `""`

The old login password

**`Generated`**

from field: string old_plain_text_password = 3;

#### Defined in

src/base.scailo_pb.ts:2057

___

### plainTextPassword

• **plainTextPassword**: `string` = `""`

The new password

**`Generated`**

from field: string plain_text_password = 4;

#### Defined in

src/base.scailo_pb.ts:2064

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/base.scailo_pb.ts:2050

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:2073

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:2071

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UpdateOwnPasswordReq"``

#### Defined in

src/base.scailo_pb.ts:2072

## Methods

### clone

▸ **clone**(): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

Create a deep copy.

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md) \| `PlainMessage`\<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\>

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
| `a` | `undefined` \| [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md) \| `PlainMessage`\<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\> |
| `b` | `undefined` \| [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md) \| `PlainMessage`\<[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:2091

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Defined in

src/base.scailo_pb.ts:2079

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Defined in

src/base.scailo_pb.ts:2083

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UpdateOwnPasswordReq`](UpdateOwnPasswordReq.md)

#### Defined in

src/base.scailo_pb.ts:2087
