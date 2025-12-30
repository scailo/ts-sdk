[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmail

# Class: TransactionalEmail

Describes the data structure of each transactional email on the platform

**`Generated`**

from message Scailo.TransactionalEmail

## Hierarchy

- `Message`\<[`TransactionalEmail`](TransactionalEmail.md)\>

  ↳ **`TransactionalEmail`**

## Table of contents

### Constructors

- [constructor](TransactionalEmail.md#constructor)

### Properties

- [content](TransactionalEmail.md#content)
- [entityUuid](TransactionalEmail.md#entityuuid)
- [metadata](TransactionalEmail.md#metadata)
- [replyTo](TransactionalEmail.md#replyto)
- [senderName](TransactionalEmail.md#sendername)
- [subject](TransactionalEmail.md#subject)
- [title](TransactionalEmail.md#title)
- [trackingUrl](TransactionalEmail.md#trackingurl)
- [fields](TransactionalEmail.md#fields)
- [runtime](TransactionalEmail.md#runtime)
- [typeName](TransactionalEmail.md#typename)

### Methods

- [clone](TransactionalEmail.md#clone)
- [equals](TransactionalEmail.md#equals)
- [fromBinary](TransactionalEmail.md#frombinary)
- [fromJson](TransactionalEmail.md#fromjson)
- [fromJsonString](TransactionalEmail.md#fromjsonstring)
- [getType](TransactionalEmail.md#gettype)
- [toBinary](TransactionalEmail.md#tobinary)
- [toJSON](TransactionalEmail.md#tojson)
- [toJson](TransactionalEmail.md#tojson-1)
- [toJsonString](TransactionalEmail.md#tojsonstring)
- [equals](TransactionalEmail.md#equals-1)
- [fromBinary](TransactionalEmail.md#frombinary-1)
- [fromJson](TransactionalEmail.md#fromjson-1)
- [fromJsonString](TransactionalEmail.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmail**(`data?`): [`TransactionalEmail`](TransactionalEmail.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmail`](TransactionalEmail.md)\> |

#### Returns

[`TransactionalEmail`](TransactionalEmail.md)

#### Overrides

Message\&lt;TransactionalEmail\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L214)

## Properties

### content

• **content**: `string` = `""`

Stores the content of the transactional email

**`Generated`**

from field: string content = 14;

#### Defined in

[src/transactional_emails.scailo_pb.ts:205](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L205)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:163](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L163)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this resource

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/transactional_emails.scailo_pb.ts:170](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L170)

___

### replyTo

• **replyTo**: `string` = `""`

Stores the email address to which the reply could be sent

**`Generated`**

from field: string reply_to = 12;

#### Defined in

[src/transactional_emails.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L191)

___

### senderName

• **senderName**: `string` = `""`

Stores the name of the sender

**`Generated`**

from field: string sender_name = 10;

#### Defined in

[src/transactional_emails.scailo_pb.ts:177](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L177)

___

### subject

• **subject**: `string` = `""`

Stores the subject of the transactional email

**`Generated`**

from field: string subject = 13;

#### Defined in

[src/transactional_emails.scailo_pb.ts:198](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L198)

___

### title

• **title**: `string` = `""`

Stores the title of the transactional email

**`Generated`**

from field: string title = 11;

#### Defined in

[src/transactional_emails.scailo_pb.ts:184](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L184)

___

### trackingUrl

• **trackingUrl**: `string` = `""`

Stores the tracking URL of the transactional email

**`Generated`**

from field: string tracking_url = 20;

#### Defined in

[src/transactional_emails.scailo_pb.ts:212](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L212)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:221](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L221)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:219](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L219)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmail"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:220](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L220)

## Methods

### clone

▸ **clone**(): [`TransactionalEmail`](TransactionalEmail.md)

Create a deep copy.

#### Returns

[`TransactionalEmail`](TransactionalEmail.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmail`](TransactionalEmail.md) \| `PlainMessage`\<[`TransactionalEmail`](TransactionalEmail.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmail`](TransactionalEmail.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmail`](TransactionalEmail.md)\>

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
| `a` | `undefined` \| [`TransactionalEmail`](TransactionalEmail.md) \| `PlainMessage`\<[`TransactionalEmail`](TransactionalEmail.md)\> |
| `b` | `undefined` \| [`TransactionalEmail`](TransactionalEmail.md) \| `PlainMessage`\<[`TransactionalEmail`](TransactionalEmail.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L244)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmail`](TransactionalEmail.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmail`](TransactionalEmail.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:232](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L232)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmail`](TransactionalEmail.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmail`](TransactionalEmail.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:236](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L236)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmail`](TransactionalEmail.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmail`](TransactionalEmail.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:240](https://github.com/scailo/ts-sdk/blob/bae544c9de99a0a467ee7402a9ebf421c87b317c/src/transactional_emails.scailo_pb.ts#L240)
