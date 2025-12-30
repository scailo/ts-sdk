[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailsList

# Class: TransactionalEmailsList

Describes the data structure that stores a list of transactional emails

**`Generated`**

from message Scailo.TransactionalEmailsList

## Hierarchy

- `Message`\<[`TransactionalEmailsList`](TransactionalEmailsList.md)\>

  ↳ **`TransactionalEmailsList`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailsList.md#constructor)

### Properties

- [list](TransactionalEmailsList.md#list)
- [fields](TransactionalEmailsList.md#fields)
- [runtime](TransactionalEmailsList.md#runtime)
- [typeName](TransactionalEmailsList.md#typename)

### Methods

- [clone](TransactionalEmailsList.md#clone)
- [equals](TransactionalEmailsList.md#equals)
- [fromBinary](TransactionalEmailsList.md#frombinary)
- [fromJson](TransactionalEmailsList.md#fromjson)
- [fromJsonString](TransactionalEmailsList.md#fromjsonstring)
- [getType](TransactionalEmailsList.md#gettype)
- [toBinary](TransactionalEmailsList.md#tobinary)
- [toJSON](TransactionalEmailsList.md#tojson)
- [toJson](TransactionalEmailsList.md#tojson-1)
- [toJsonString](TransactionalEmailsList.md#tojsonstring)
- [equals](TransactionalEmailsList.md#equals-1)
- [fromBinary](TransactionalEmailsList.md#frombinary-1)
- [fromJson](TransactionalEmailsList.md#fromjson-1)
- [fromJsonString](TransactionalEmailsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailsList**(`data?`): [`TransactionalEmailsList`](TransactionalEmailsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailsList`](TransactionalEmailsList.md)\> |

#### Returns

[`TransactionalEmailsList`](TransactionalEmailsList.md)

#### Overrides

Message\&lt;TransactionalEmailsList\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:263](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L263)

## Properties

### list

• **list**: [`TransactionalEmail`](TransactionalEmail.md)[] = `[]`

List of transactional emails

**`Generated`**

from field: repeated Scailo.TransactionalEmail list = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:261](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L261)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L270)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L268)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailsList"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:269](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L269)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailsList`](TransactionalEmailsList.md)

Create a deep copy.

#### Returns

[`TransactionalEmailsList`](TransactionalEmailsList.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailsList`](TransactionalEmailsList.md) \| `PlainMessage`\<[`TransactionalEmailsList`](TransactionalEmailsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailsList`](TransactionalEmailsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailsList`](TransactionalEmailsList.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailsList`](TransactionalEmailsList.md) \| `PlainMessage`\<[`TransactionalEmailsList`](TransactionalEmailsList.md)\> |
| `b` | `undefined` \| [`TransactionalEmailsList`](TransactionalEmailsList.md) \| `PlainMessage`\<[`TransactionalEmailsList`](TransactionalEmailsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L286)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailsList`](TransactionalEmailsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailsList`](TransactionalEmailsList.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:274](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L274)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailsList`](TransactionalEmailsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsList`](TransactionalEmailsList.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:278](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L278)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailsList`](TransactionalEmailsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsList`](TransactionalEmailsList.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:282](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L282)
