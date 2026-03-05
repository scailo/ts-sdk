[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailRecipient

# Class: TransactionalEmailRecipient

Describes the data structure that stores the recipient information of a transactional email

**`Generated`**

from message Scailo.TransactionalEmailRecipient

## Hierarchy

- `Message`\<[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)\>

  ↳ **`TransactionalEmailRecipient`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailRecipient.md#constructor)

### Properties

- [address](TransactionalEmailRecipient.md#address)
- [entityUuid](TransactionalEmailRecipient.md#entityuuid)
- [metadata](TransactionalEmailRecipient.md#metadata)
- [transactionalEmailId](TransactionalEmailRecipient.md#transactionalemailid)
- [fields](TransactionalEmailRecipient.md#fields)
- [runtime](TransactionalEmailRecipient.md#runtime)
- [typeName](TransactionalEmailRecipient.md#typename)

### Methods

- [clone](TransactionalEmailRecipient.md#clone)
- [equals](TransactionalEmailRecipient.md#equals)
- [fromBinary](TransactionalEmailRecipient.md#frombinary)
- [fromJson](TransactionalEmailRecipient.md#fromjson)
- [fromJsonString](TransactionalEmailRecipient.md#fromjsonstring)
- [getType](TransactionalEmailRecipient.md#gettype)
- [toBinary](TransactionalEmailRecipient.md#tobinary)
- [toJSON](TransactionalEmailRecipient.md#tojson)
- [toJson](TransactionalEmailRecipient.md#tojson-1)
- [toJsonString](TransactionalEmailRecipient.md#tojsonstring)
- [equals](TransactionalEmailRecipient.md#equals-1)
- [fromBinary](TransactionalEmailRecipient.md#frombinary-1)
- [fromJson](TransactionalEmailRecipient.md#fromjson-1)
- [fromJsonString](TransactionalEmailRecipient.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailRecipient**(`data?`): [`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)\> |

#### Returns

[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

#### Overrides

Message\&lt;TransactionalEmailRecipient\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:874](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L874)

## Properties

### address

• **address**: `string` = `""`

The email address of the recipient

**`Generated`**

from field: string address = 11;

#### Defined in

[src/transactional_emails.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L872)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:851](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L851)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this client

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/transactional_emails.scailo_pb.ts:858](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L858)

___

### transactionalEmailId

• **transactionalEmailId**: `bigint` = `protoInt64.zero`

The ID of the transactional email

**`Generated`**

from field: uint64 transactional_email_id = 10;

#### Defined in

[src/transactional_emails.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L865)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:881](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L881)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L879)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailRecipient"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L880)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

Create a deep copy.

#### Returns

[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailRecipient`](TransactionalEmailRecipient.md) \| `PlainMessage`\<[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailRecipient`](TransactionalEmailRecipient.md) \| `PlainMessage`\<[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)\> |
| `b` | `undefined` \| [`TransactionalEmailRecipient`](TransactionalEmailRecipient.md) \| `PlainMessage`\<[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L900)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L888)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L892)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailRecipient`](TransactionalEmailRecipient.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:896](https://github.com/scailo/ts-sdk/blob/fbb7c93f58dd349646e9364e777b3b087e3456a8/src/transactional_emails.scailo_pb.ts#L896)
