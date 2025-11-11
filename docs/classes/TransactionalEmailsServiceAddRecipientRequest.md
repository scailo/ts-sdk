[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailsServiceAddRecipientRequest

# Class: TransactionalEmailsServiceAddRecipientRequest

Describes the necessary data structure during addition of a recipient

**`Generated`**

from message Scailo.TransactionalEmailsServiceAddRecipientRequest

## Hierarchy

- `Message`\<[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)\>

  ↳ **`TransactionalEmailsServiceAddRecipientRequest`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailsServiceAddRecipientRequest.md#constructor)

### Properties

- [address](TransactionalEmailsServiceAddRecipientRequest.md#address)
- [fields](TransactionalEmailsServiceAddRecipientRequest.md#fields)
- [runtime](TransactionalEmailsServiceAddRecipientRequest.md#runtime)
- [typeName](TransactionalEmailsServiceAddRecipientRequest.md#typename)

### Methods

- [clone](TransactionalEmailsServiceAddRecipientRequest.md#clone)
- [equals](TransactionalEmailsServiceAddRecipientRequest.md#equals)
- [fromBinary](TransactionalEmailsServiceAddRecipientRequest.md#frombinary)
- [fromJson](TransactionalEmailsServiceAddRecipientRequest.md#fromjson)
- [fromJsonString](TransactionalEmailsServiceAddRecipientRequest.md#fromjsonstring)
- [getType](TransactionalEmailsServiceAddRecipientRequest.md#gettype)
- [toBinary](TransactionalEmailsServiceAddRecipientRequest.md#tobinary)
- [toJSON](TransactionalEmailsServiceAddRecipientRequest.md#tojson)
- [toJson](TransactionalEmailsServiceAddRecipientRequest.md#tojson-1)
- [toJsonString](TransactionalEmailsServiceAddRecipientRequest.md#tojsonstring)
- [equals](TransactionalEmailsServiceAddRecipientRequest.md#equals-1)
- [fromBinary](TransactionalEmailsServiceAddRecipientRequest.md#frombinary-1)
- [fromJson](TransactionalEmailsServiceAddRecipientRequest.md#fromjson-1)
- [fromJsonString](TransactionalEmailsServiceAddRecipientRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailsServiceAddRecipientRequest**(`data?`): [`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)\> |

#### Returns

[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

#### Overrides

Message\&lt;TransactionalEmailsServiceAddRecipientRequest\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:811](https://github.com/scailo/ts-sdk/blob/7e77d27d5ce6ad8ed03a5b3e62dab589e413e36b/src/transactional_emails.scailo_pb.ts#L811)

## Properties

### address

• **address**: `string` = `""`

Stores the email address of the recipient

**`Generated`**

from field: string address = 10;

#### Defined in

[src/transactional_emails.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/7e77d27d5ce6ad8ed03a5b3e62dab589e413e36b/src/transactional_emails.scailo_pb.ts#L809)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:818](https://github.com/scailo/ts-sdk/blob/7e77d27d5ce6ad8ed03a5b3e62dab589e413e36b/src/transactional_emails.scailo_pb.ts#L818)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/7e77d27d5ce6ad8ed03a5b3e62dab589e413e36b/src/transactional_emails.scailo_pb.ts#L816)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailsServiceAddRecipientRequest"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/7e77d27d5ce6ad8ed03a5b3e62dab589e413e36b/src/transactional_emails.scailo_pb.ts#L817)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

Create a deep copy.

#### Returns

[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md) \| `PlainMessage`\<[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md) \| `PlainMessage`\<[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)\> |
| `b` | `undefined` \| [`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md) \| `PlainMessage`\<[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:834](https://github.com/scailo/ts-sdk/blob/7e77d27d5ce6ad8ed03a5b3e62dab589e413e36b/src/transactional_emails.scailo_pb.ts#L834)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:822](https://github.com/scailo/ts-sdk/blob/7e77d27d5ce6ad8ed03a5b3e62dab589e413e36b/src/transactional_emails.scailo_pb.ts#L822)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:826](https://github.com/scailo/ts-sdk/blob/7e77d27d5ce6ad8ed03a5b3e62dab589e413e36b/src/transactional_emails.scailo_pb.ts#L826)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceAddRecipientRequest`](TransactionalEmailsServiceAddRecipientRequest.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:830](https://github.com/scailo/ts-sdk/blob/7e77d27d5ce6ad8ed03a5b3e62dab589e413e36b/src/transactional_emails.scailo_pb.ts#L830)
