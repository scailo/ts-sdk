[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailAttachment

# Class: TransactionalEmailAttachment

Describes the data structure that stores the attachment information of a transactional email

**`Generated`**

from message Scailo.TransactionalEmailAttachment

## Hierarchy

- `Message`\<[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)\>

  ↳ **`TransactionalEmailAttachment`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailAttachment.md#constructor)

### Properties

- [content](TransactionalEmailAttachment.md#content)
- [entityUuid](TransactionalEmailAttachment.md#entityuuid)
- [metadata](TransactionalEmailAttachment.md#metadata)
- [name](TransactionalEmailAttachment.md#name)
- [transactionalEmailId](TransactionalEmailAttachment.md#transactionalemailid)
- [fields](TransactionalEmailAttachment.md#fields)
- [runtime](TransactionalEmailAttachment.md#runtime)
- [typeName](TransactionalEmailAttachment.md#typename)

### Methods

- [clone](TransactionalEmailAttachment.md#clone)
- [equals](TransactionalEmailAttachment.md#equals)
- [fromBinary](TransactionalEmailAttachment.md#frombinary)
- [fromJson](TransactionalEmailAttachment.md#fromjson)
- [fromJsonString](TransactionalEmailAttachment.md#fromjsonstring)
- [getType](TransactionalEmailAttachment.md#gettype)
- [toBinary](TransactionalEmailAttachment.md#tobinary)
- [toJSON](TransactionalEmailAttachment.md#tojson)
- [toJson](TransactionalEmailAttachment.md#tojson-1)
- [toJsonString](TransactionalEmailAttachment.md#tojsonstring)
- [equals](TransactionalEmailAttachment.md#equals-1)
- [fromBinary](TransactionalEmailAttachment.md#frombinary-1)
- [fromJson](TransactionalEmailAttachment.md#fromjson-1)
- [fromJsonString](TransactionalEmailAttachment.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailAttachment**(`data?`): [`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)\> |

#### Returns

[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

#### Overrides

Message\&lt;TransactionalEmailAttachment\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1247)

## Properties

### content

• **content**: `Uint8Array`

The content of the attachment

**`Generated`**

from field: bytes content = 12;

#### Defined in

[src/transactional_emails.scailo_pb.ts:1245](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1245)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:1217](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1217)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this client

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/transactional_emails.scailo_pb.ts:1224](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1224)

___

### name

• **name**: `string` = `""`

The name of the attachment

**`Generated`**

from field: string name = 11;

#### Defined in

[src/transactional_emails.scailo_pb.ts:1238](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1238)

___

### transactionalEmailId

• **transactionalEmailId**: `bigint` = `protoInt64.zero`

The ID of the transactional email

**`Generated`**

from field: uint64 transactional_email_id = 10;

#### Defined in

[src/transactional_emails.scailo_pb.ts:1231](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1231)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:1254](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1254)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:1252](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1252)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailAttachment"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:1253](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1253)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

Create a deep copy.

#### Returns

[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailAttachment`](TransactionalEmailAttachment.md) \| `PlainMessage`\<[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailAttachment`](TransactionalEmailAttachment.md) \| `PlainMessage`\<[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)\> |
| `b` | `undefined` \| [`TransactionalEmailAttachment`](TransactionalEmailAttachment.md) \| `PlainMessage`\<[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:1274](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1274)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:1262](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1262)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:1266](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1266)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailAttachment`](TransactionalEmailAttachment.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:1270](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/transactional_emails.scailo_pb.ts#L1270)
