[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailAttachmentsList

# Class: TransactionalEmailAttachmentsList

Describes the message consisting of the list of transactional email attachments

**`Generated`**

from message Scailo.TransactionalEmailAttachmentsList

## Hierarchy

- `Message`\<[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)\>

  ↳ **`TransactionalEmailAttachmentsList`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailAttachmentsList.md#constructor)

### Properties

- [list](TransactionalEmailAttachmentsList.md#list)
- [fields](TransactionalEmailAttachmentsList.md#fields)
- [runtime](TransactionalEmailAttachmentsList.md#runtime)
- [typeName](TransactionalEmailAttachmentsList.md#typename)

### Methods

- [clone](TransactionalEmailAttachmentsList.md#clone)
- [equals](TransactionalEmailAttachmentsList.md#equals)
- [fromBinary](TransactionalEmailAttachmentsList.md#frombinary)
- [fromJson](TransactionalEmailAttachmentsList.md#fromjson)
- [fromJsonString](TransactionalEmailAttachmentsList.md#fromjsonstring)
- [getType](TransactionalEmailAttachmentsList.md#gettype)
- [toBinary](TransactionalEmailAttachmentsList.md#tobinary)
- [toJSON](TransactionalEmailAttachmentsList.md#tojson)
- [toJson](TransactionalEmailAttachmentsList.md#tojson-1)
- [toJsonString](TransactionalEmailAttachmentsList.md#tojsonstring)
- [equals](TransactionalEmailAttachmentsList.md#equals-1)
- [fromBinary](TransactionalEmailAttachmentsList.md#frombinary-1)
- [fromJson](TransactionalEmailAttachmentsList.md#fromjson-1)
- [fromJsonString](TransactionalEmailAttachmentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailAttachmentsList**(`data?`): [`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)\> |

#### Returns

[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

#### Overrides

Message\&lt;TransactionalEmailAttachmentsList\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:1085](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/transactional_emails.scailo_pb.ts#L1085)

## Properties

### list

• **list**: [`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.TransactionalEmailAttachment list = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/transactional_emails.scailo_pb.ts#L1083)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:1092](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/transactional_emails.scailo_pb.ts#L1092)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:1090](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/transactional_emails.scailo_pb.ts#L1090)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailAttachmentsList"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/transactional_emails.scailo_pb.ts#L1091)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

Create a deep copy.

#### Returns

[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md) \| `PlainMessage`\<[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md) \| `PlainMessage`\<[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)\> |
| `b` | `undefined` \| [`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md) \| `PlainMessage`\<[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/transactional_emails.scailo_pb.ts#L1108)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/transactional_emails.scailo_pb.ts#L1096)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:1100](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/transactional_emails.scailo_pb.ts#L1100)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailAttachmentsList`](TransactionalEmailAttachmentsList.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/99e1107e2a9f65ebd160709e787247b7ca59506f/src/transactional_emails.scailo_pb.ts#L1104)
