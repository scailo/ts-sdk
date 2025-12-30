[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailRecipientsList

# Class: TransactionalEmailRecipientsList

Describes the message consisting of the list of transactional email recipients

**`Generated`**

from message Scailo.TransactionalEmailRecipientsList

## Hierarchy

- `Message`\<[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)\>

  ↳ **`TransactionalEmailRecipientsList`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailRecipientsList.md#constructor)

### Properties

- [list](TransactionalEmailRecipientsList.md#list)
- [fields](TransactionalEmailRecipientsList.md#fields)
- [runtime](TransactionalEmailRecipientsList.md#runtime)
- [typeName](TransactionalEmailRecipientsList.md#typename)

### Methods

- [clone](TransactionalEmailRecipientsList.md#clone)
- [equals](TransactionalEmailRecipientsList.md#equals)
- [fromBinary](TransactionalEmailRecipientsList.md#frombinary)
- [fromJson](TransactionalEmailRecipientsList.md#fromjson)
- [fromJsonString](TransactionalEmailRecipientsList.md#fromjsonstring)
- [getType](TransactionalEmailRecipientsList.md#gettype)
- [toBinary](TransactionalEmailRecipientsList.md#tobinary)
- [toJSON](TransactionalEmailRecipientsList.md#tojson)
- [toJson](TransactionalEmailRecipientsList.md#tojson-1)
- [toJsonString](TransactionalEmailRecipientsList.md#tojsonstring)
- [equals](TransactionalEmailRecipientsList.md#equals-1)
- [fromBinary](TransactionalEmailRecipientsList.md#frombinary-1)
- [fromJson](TransactionalEmailRecipientsList.md#fromjson-1)
- [fromJsonString](TransactionalEmailRecipientsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailRecipientsList**(`data?`): [`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)\> |

#### Returns

[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

#### Overrides

Message\&lt;TransactionalEmailRecipientsList\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:919](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L919)

## Properties

### list

• **list**: [`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.TransactionalEmailRecipient list = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:917](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L917)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:926](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L926)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:924](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L924)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailRecipientsList"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:925](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L925)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

Create a deep copy.

#### Returns

[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md) \| `PlainMessage`\<[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md) \| `PlainMessage`\<[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)\> |
| `b` | `undefined` \| [`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md) \| `PlainMessage`\<[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:942](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L942)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L930)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:934](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L934)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailRecipientsList`](TransactionalEmailRecipientsList.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L938)
